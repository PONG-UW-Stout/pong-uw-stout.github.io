// ===========================================================================
//  Copy link.
//  The one control in the share row (_includes/social-share.html) that needs
//  script. Every other target there is an ordinary link to a platform's share
//  composer and works with JavaScript off; this one cannot, because there is
//  no markup that copies text.
//
//  It exists because Discord, where this club actually posts, publishes no
//  share-intent url. You share a PONG link on Discord by pasting it, so the
//  job here is to get the right url onto the clipboard and then SAY SO, since
//  a clipboard write leaves nothing on screen to prove it happened.
//
//  Three ways to copy, tried in order, because the modern one is unavailable
//  more often than people expect:
//    1. navigator.clipboard, which browsers only expose on a secure origin.
//       A site served over plain http (someone previewing a build on the LAN
//       at an event, say) does not get it.
//    2. document.execCommand('copy') over a temporary textarea. Deprecated,
//       still implemented everywhere, and the only option on http.
//    3. Select the url and tell the visitor to press the keys themselves.
//  Whatever happens, the button reports it. Silence would be the one genuinely
//  bad outcome: the visitor walks away believing they have a link.
// ===========================================================================

(function () {
    'use strict';

    // How long the confirmation stays up before the button goes back to being
    // a button. Long enough to read, short enough that it is gone before
    // anyone wants to copy again.
    var RESET_MS = 2200;

    var buttons = document.querySelectorAll('[data-share-copy]');
    if (!buttons.length) {
        return;
    }

    /* ------------------------------------------------------------------ */
    /*  Copying                                                           */
    /* ------------------------------------------------------------------ */

    // The old way. Kept whole rather than inlined because it is also the
    // fallback for a clipboard write that is permitted but then rejected.
    //
    // The textarea has to be in the document and visible enough to focus for
    // the selection to take, so it is parked off-screen rather than hidden:
    // display:none or visibility:hidden would make the copy fail. readOnly
    // keeps the mobile keyboard from flying up on the way past.
    function copyByExecCommand(text) {
        var area = document.createElement('textarea');
        var ok = false;

        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.top = '-1000px';
        area.style.opacity = '0';

        document.body.appendChild(area);

        try {
            area.select();
            area.setSelectionRange(0, text.length);
            ok = document.execCommand('copy');
        } catch (err) {
            ok = false;
        }

        document.body.removeChild(area);
        return ok;
    }

    // Resolves to true if the text is on the clipboard. Never rejects: a
    // failure here is a UI state, not an error anyone can act on.
    function copy(text) {
        // isSecureContext is the honest test. navigator.clipboard is simply
        // absent on an insecure origin in most browsers, but a couple expose
        // it and then reject every write, so check the context too and skip
        // straight to the fallback rather than waiting for a rejection.
        if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text).then(function () {
                return true;
            }, function () {
                // Permission denied, or a browser that only allows this
                // directly inside a user gesture it no longer thinks it is in.
                return copyByExecCommand(text);
            });
        }

        return Promise.resolve(copyByExecCommand(text));
    }

    /* ------------------------------------------------------------------ */
    /*  Saying what happened                                              */
    /* ------------------------------------------------------------------ */

    // The status node is a live region, so writing to it is what a screen
    // reader announces; the label and icon are what everyone else sees. Both
    // are updated for every outcome so the two never disagree.
    function report(button, state) {
        var label = button.querySelector('[data-share-label]');
        var icon = button.querySelector('[data-share-icon]');
        var status = document.querySelector('[data-share-status]');

        var copied = state === 'copied';
        var text = copied ? 'Copied!' : 'Press Ctrl+C';
        var announcement = copied
            ? 'Link copied to the clipboard'
            : 'Copying failed. The link is selected: press Control C, or Command C, to copy it.';

        button.classList.toggle('is-copied', copied);
        button.classList.toggle('is-copy-failed', !copied);

        if (label) {
            label.textContent = text;
        }

        if (icon) {
            // Font Awesome 7 is already loaded site-wide, so the tick costs
            // nothing extra. The class list is rewritten wholesale because the
            // resting icon comes from _data/socials.yml and this file has no
            // business knowing which classes that put there.
            icon.className = copied ? 'fa-solid fa-check' : 'fa-solid fa-triangle-exclamation';
        }

        if (status) {
            status.textContent = announcement;
        }
    }

    function restore(button, originalLabel, originalIcon) {
        var label = button.querySelector('[data-share-label]');
        var icon = button.querySelector('[data-share-icon]');
        var status = document.querySelector('[data-share-status]');

        button.classList.remove('is-copied', 'is-copy-failed');

        if (label) {
            label.textContent = originalLabel;
        }

        if (icon) {
            icon.className = originalIcon;
        }

        // Cleared so a second copy of the same page announces itself again
        // instead of looking unchanged to a live region.
        if (status) {
            status.textContent = '';
        }
    }

    /* ------------------------------------------------------------------ */
    /*  Wiring                                                            */
    /* ------------------------------------------------------------------ */

    Array.prototype.forEach.call(buttons, function (button) {
        var labelNode = button.querySelector('[data-share-label]');
        var iconNode = button.querySelector('[data-share-icon]');

        // Captured now, before any click has rewritten them, so the reset
        // always puts back what the include rendered.
        var originalLabel = labelNode ? labelNode.textContent : 'Copy link';
        var originalIcon = iconNode ? iconNode.className : 'fa-solid fa-link';
        var timer = null;

        button.addEventListener('click', function () {
            // The include writes the absolute url into the button. location
            // is only the fallback, and a poor one: on a local build it is
            // localhost, and on a link someone arrived at with a query string
            // attached it carries that along to whoever gets the paste.
            var url = button.getAttribute('data-share-url') || window.location.href;

            copy(url).then(function (ok) {
                report(button, ok ? 'copied' : 'failed');

                if (!ok) {
                    // Last resort: put the url on screen, selected, so the
                    // visitor can copy it by hand. prompt() is intrusive but
                    // it is the only thing left that always works.
                    try {
                        window.prompt('Copy this link:', url);
                    } catch (err) {
                        // Some embedded browsers refuse prompts outright.
                        // Nothing further to try; the button already says so.
                    }
                }

                // Restarted rather than stacked, so a second click during the
                // confirmation doesn't reset the label early.
                if (timer) {
                    window.clearTimeout(timer);
                }

                timer = window.setTimeout(function () {
                    restore(button, originalLabel, originalIcon);
                    timer = null;
                }, RESET_MS);
            });
        });
    });
})();
