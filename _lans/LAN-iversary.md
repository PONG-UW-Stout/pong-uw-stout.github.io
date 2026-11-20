---
title: LAN-iversary
start_date: 2027-02-19
end_date: 2027-02-21
description: >-
  PONG's 25th-anniversary LAN: a 48-hour party in the Great Hall of the
  Memorial Student Center, marking twenty-five years of PONG LANs.

ticker: "LAN-IVERSARY · TWENTY-FIVE YEARS OF PONG LANS · FEB 19-21 2027 · THE GREAT HALL · 48 HOURS · FREE ENTRY · NETWORK AND POWER PROVIDED · STILL NO SLEEP ·"

headline: LAN-iversary
subhead: "Twenty-Five Years of LANs. One Hall. One Weekend."
dates_display: "FEB 19-21, 2027"
tagline: "We still have not learned a thing."
aside: "*~* best viewed in Netscape Navigator 4.0 at 800x600 *~*"

celebration_banner: "Happy 25th, PONG"

tip_title: "Congratulations!"
tip_body: "PONGNET has been online for 25 years. Click the cake on the taskbar if you would like some confetti about it."

milestone_number: "25"
milestone_label: "YEARS"

facts:
  - icon: ico-floppy
    label: Dates
    value: "Feb 19-21, 2027"
  - icon: ico-globe
    label: Venue
    value: "The Great Hall, MSC"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-ball
    label: Milestone
    value: "25 Years of LAN"
  - icon: ico-modem
    label: Network
    value: "Provided"

registration_url:

webring: self

schedule_image: /assets/images/lan_schedules/lan-iversary_schedule.png
schedule_alt: >-
  The LAN-iversary weekend schedule: a grid of events colour-coded by day and
  flagged as free-to-play and/or competitive. The full running order follows
  below.

schedule_note: Times shift as the weekend wears on, so the board in the hall is always the source of truth.

sessions: []

events: []

notes: []

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - Deodorant puh-lease. It is a long weekend.

guestbook: []

faq:
  - q: Do I need to be a UW-Stout student?
    a: No. PONG is open to students, alumni, and friends. Plenty of the people in the hall graduated years ago.
  - q: Do I have to stay the full 48 hours?
    a: Not at all. Come for one session if that is all you have. Some people never leave. Both are fine.
  - q: Do I need to bring ethernet or a power strip?
    a: No. We supply the network and the power at every table. Just bring your rig.
  - q: Do I need to register?
    a: If there is a seat reservation to grab, the link goes at the top of this page and in the Discord. Nothing is required to turn up and sit down.
  - q: Does it cost anything to take part?
    a: Nothing. PONG events are free to enter. Where an event's game is free to download, the running order marks it "free to play", so you do not need to own anything to join in.
  - q: What is actually happening over the weekend?
    a: The running order is still being drawn up. It goes on this page and in the Discord as soon as it is settled, so check back rather than guessing from last year.
  - q: Can I bring a console instead of a PC?
    a: Yes. Bring it, a monitor or TV, and the cables. Ask in the Discord if you are unsure about space.
  - q: "Where do people sleep?"
    a: "Wherever they end up. Most people bring a pillow and claim a stretch of floor. Keep the walkways clear."
  - q: I have never been to a LAN before. Is that okay?
    a: Completely. Show up, find a table, say hi. Ask in the Discord beforehand if you want advice on what to bring.
---

<!-- Critical inline CSS and intro gate, so the hero does not flash before the dial-up intro. The hero is hidden only when the intro will play. -->
<script>
  (function () {
    // Set before first paint so the script-driven taskbar only shows when
    // script runs.
    document.documentElement.classList.add('y2k-has-js');
    var seen = /(?:^|;\s*)lan-iversary-anim=1(?:;|$)/.test(document.cookie);
    if (seen) {
      document.documentElement.classList.add('y2k-anim-seen');
      return;
    }
    document.documentElement.classList.add('y2k-js');
    // Failsafe: if lan-iversary.js never runs, do not leave the page behind
    // the dialog.
    setTimeout(function () {
      var c = document.querySelector('.y2k-hero-content');
      if (c) c.classList.remove('is-pending');
      var d = document.getElementById('y2k-dialup');
      if (d) d.parentNode.removeChild(d);
    }, 15000);
  })();
</script>
<style>
.y2k-js .y2k-hero-content.is-pending {
  opacity: 0;
  transform: translateY(14px);
}
// Hidden by default. The stylesheet shows it at .y2k-js .y2k-dialup, so it
// only appears when script can dismiss it.
.y2k-dialup {
  display: none;
}
</style>

<link rel="stylesheet" href="{{ '/assets/css/lan-iversary.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/lan-iversary.js' | relative_url }}" defer></script>

<div class="y2k-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-floppy" viewBox="0 0 32 32">
    <path d="M4 4h18l6 6v18H4z"/>
    <path d="M10 4h12v8H10z"/>
    <rect x="17" y="5.5" width="3" height="5" fill="currentColor" stroke="none"/>
    <path d="M9 19h14v9H9z"/>
    <line x1="12" y1="22" x2="20" y2="22"/>
    <line x1="12" y1="25" x2="20" y2="25"/>
  </symbol>

  <symbol id="ico-globe" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <ellipse cx="16" cy="16" rx="5" ry="12"/>
    <line x1="4" y1="16" x2="28" y2="16"/>
    <path d="M6.5 9.5c5 2.5 14 2.5 19 0"/>
    <path d="M6.5 22.5c5-2.5 14-2.5 19 0"/>
  </symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <line x1="16" y1="16" x2="23" y2="16"/>
    <line x1="16" y1="16" x2="16" y2="8"/>
    <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32">
    <path d="M3 10h26v12H3z"/>
    <line x1="23" y1="10" x2="23" y2="22" stroke-dasharray="2 2"/>
    <line x1="6" y1="14" x2="20" y2="14"/>
    <line x1="6" y1="17" x2="16" y2="17"/>
    <line x1="6" y1="20" x2="12" y2="20"/>
  </symbol>

  <symbol id="ico-ball" viewBox="0 0 32 32">
    <line x1="16" y1="2" x2="16" y2="6"/>
    <circle cx="16" cy="17" r="11"/>
    <line x1="5" y1="17" x2="27" y2="17"/>
    <line x1="7" y1="11" x2="25" y2="11"/>
    <line x1="7" y1="23" x2="25" y2="23"/>
    <ellipse cx="16" cy="17" rx="4" ry="11"/>
    <ellipse cx="16" cy="17" rx="8.5" ry="11"/>
  </symbol>

  <symbol id="ico-modem" viewBox="0 0 32 32">
    <path d="M3 18h26v8H3z"/>
    <circle cx="8" cy="22" r="1.4" fill="currentColor" stroke="none"/>
    <circle cx="13" cy="22" r="1.4" fill="currentColor" stroke="none"/>
    <line x1="18" y1="22" x2="26" y2="22"/>
    <path d="M10 14c0-5 3-8 6-8s6 3 6 8"/>
    <path d="M14 14c0-2.5 1-4 2-4s2 1.5 2 4"/>
  </symbol>

  <symbol id="ico-crt" viewBox="0 0 32 32">
    <path d="M3 5h26v18H3z"/>
    <path d="M6 8h20v12H6z"/>
    <line x1="13" y1="23" x2="13" y2="27"/>
    <line x1="19" y1="23" x2="19" y2="27"/>
    <line x1="9" y1="27" x2="23" y2="27"/>
  </symbol>

  <symbol id="ico-cd" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <circle cx="16" cy="16" r="3.5"/>
    <path d="M16 4a12 12 0 0 1 10.4 6"/>
    <path d="M7.6 23a12 12 0 0 0 10.4 5"/>
  </symbol>

  <symbol id="ico-mail" viewBox="0 0 32 32">
    <path d="M3 7h26v18H3z"/>
    <path d="M3 7l13 10L29 7"/>
  </symbol>

  <symbol id="ico-book" viewBox="0 0 32 32">
    <path d="M4 5h9a3 3 0 0 1 3 3v19a3 3 0 0 0-3-3H4z"/>
    <path d="M28 5h-9a3 3 0 0 0-3 3v19a3 3 0 0 1 3-3h9z"/>
    <line x1="7" y1="11" x2="12" y2="11"/>
    <line x1="7" y1="15" x2="12" y2="15"/>
    <line x1="20" y1="11" x2="25" y2="11"/>
    <line x1="20" y1="15" x2="25" y2="15"/>
  </symbol>

  <symbol id="ico-trophy" viewBox="0 0 32 32">
    <path d="M10 5h12l-2 10a4 4 0 0 1-8 0z"/>
    <path d="M10 8C6 8 5 13 9 13"/>
    <path d="M22 8c4 0 5 5 1 5"/>
    <line x1="16" y1="19" x2="16" y2="24"/>
    <path d="M10 24h12"/>
    <path d="M8 27h16"/>
  </symbol>

  <symbol id="ico-wrench" viewBox="0 0 32 32">
    <path d="M20.5 4.5a5 5 0 0 0-6.8 6.8L5.5 19.5a2.5 2.5 0 0 0 3.5 3.5l8.3-8.3a5 5 0 0 0 6.8-6.8l-3.3 3.3-2-2 3.3-3.3z"/>
  </symbol>

  <symbol id="ico-briefcase" viewBox="0 0 32 32">
    <path d="M3 10h26v17H3z"/>
    <path d="M12 10V6h8v4"/>
    <line x1="3" y1="17" x2="29" y2="17"/>
    <rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-star" viewBox="0 0 32 32">
    <path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/>
  </symbol>

  <symbol id="ico-cake" viewBox="0 0 32 32">
    <path d="M5 27V16q2.75 3 5.5 0t5.5 0 5.5 0 5.5 0V27Z"/>
    <line x1="2" y1="27" x2="30" y2="27"/>
    <line x1="11" y1="15.5" x2="11" y2="6.5"/>
    <line x1="16" y1="15.5" x2="16" y2="5.5"/>
    <line x1="21" y1="15.5" x2="21" y2="6.5"/>
    <path d="M11 6.1c-1.2-1 0-2.2.5-3 .5.8 1.7 2 .5 3z" fill="currentColor" stroke="none"/>
    <path d="M16 5.1c-1.2-1 0-2.2.5-3 .5.8 1.7 2 .5 3z" fill="currentColor" stroke="none"/>
    <path d="M21 6.1c-1.2-1 0-2.2.5-3 .5.8 1.7 2 .5 3z" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-balloon" viewBox="0 0 32 32">
    <ellipse cx="16" cy="12.5" rx="8" ry="9.5"/>
    <path d="M14.4 21.6L16 24.4l1.6-2.8"/>
    <path d="M16 24.4c0 3.2-3.2 2.8-3.2 5.6"/>
    <path d="M12.6 8.4c.8-1.6 2-2.5 3.4-2.8"/>
  </symbol>

  <symbol id="ico-popper" viewBox="0 0 32 32">
    <path d="M3 29l9.5-17.5L21 20z"/>
    <path d="M17 9l3.5-3.5"/>
    <path d="M22 13.5l5-1.5"/>
    <path d="M19.5 4.5 20 1"/>
    <circle cx="26" cy="6" r="1.3" fill="currentColor" stroke="none"/>
    <circle cx="29" cy="17" r="1.1" fill="currentColor" stroke="none"/>
    <circle cx="14" cy="4" r="1" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-speaker" viewBox="0 0 32 32">
    <path d="M5 12h5l7-6v20l-7-6H5z"/>
    <path d="M21 11.5c2.6 2.6 2.6 6.4 0 9"/>
    <path d="M25 7c4.6 4.6 4.6 13.4 0 18"/>
  </symbol>

  <symbol id="ico-clip" viewBox="0 0 32 32">
    <path d="M21.5 25V10.5a5 5 0 0 0-10 0v15.5a8 8 0 0 0 16 0V13"/>
  </symbol>

  <symbol id="ico-network" viewBox="0 0 32 32">
    <path d="M2 7h14v9H2z"/>
    <path d="M16 16h14v9H16z"/>
    <line x1="5" y1="19" x2="11" y2="19"/>
    <line x1="19" y1="28" x2="25" y2="28"/>
    <path d="M9 16v5h11"/>
  </symbol>

</svg>
</div>

{%- comment -%} Dial-up gate markup. Script fills the log and removes the gate once it is dismissed. {%- endcomment -%}
<div class="y2k-dialup" id="y2k-dialup" role="dialog" aria-label="Connecting to PONGNET" aria-live="polite">
  <div class="y2k-dialog">
    <div class="y2k-dialog-bar">
      <span class="y2k-dialog-title">Connect To &mdash; PONGNET</span>
      <div class="y2k-win-buttons" aria-hidden="true">
        <span class="y2k-win-button">_</span>
        <span class="y2k-win-button">&#9633;</span>
        <span class="y2k-win-button">&#10005;</span>
      </div>
    </div>
    <div class="y2k-dialog-body">
      <div class="y2k-dialog-row">
        <svg class="y2k-icon y2k-modem-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-modem"/></svg>
        <div class="y2k-dialog-status">
          <strong id="y2k-dial-head">Dialing 1-800-PONG-LAN&hellip;</strong>
          <span id="y2k-dial-sub">Please do not pick up the phone.</span>
        </div>
      </div>
      <pre class="y2k-modem-log" id="y2k-dial-log" aria-hidden="true"></pre>
      <div class="y2k-progress" aria-hidden="true">
        <div class="y2k-progress-fill" id="y2k-dial-bar"></div>
      </div>
      <div class="y2k-dialog-actions">
        <button type="button" class="y2k-pushbtn" id="y2k-dial-skip">Skip</button>
        <button type="button" class="y2k-pushbtn" id="y2k-dial-ok" disabled>OK</button>
      </div>
    </div>
  </div>
</div>

<div class="y2k-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<div class="y2k-garland" aria-hidden="true">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<section class="y2k-hero">
  <div class="y2k-hero-rays" aria-hidden="true"></div>
  <div class="y2k-hero-balloons" aria-hidden="true">
    <span class="y2k-balloon"></span>
    <span class="y2k-balloon"></span>
    <span class="y2k-balloon"></span>
    <span class="y2k-balloon"></span>
    <span class="y2k-balloon"></span>
    <span class="y2k-balloon"></span>
    <span class="y2k-balloon"></span>
  </div>
  <div class="y2k-hero-content is-pending">
    <p class="y2k-hero-banner"><span>{{ page.celebration_banner }}</span></p>
    <div class="y2k-hero-seal" id="y2k-seal" aria-hidden="true">
      <span class="y2k-hero-seal-num">{{ page.milestone_number }}</span>
      <span class="y2k-hero-seal-label">{{ page.milestone_label }}</span>
    </div>
    <h1 class="y2k-hero-title">{{ page.headline }}</h1>
    <hr class="y2k-hero-rule">
    <p class="y2k-hero-subhead">{{ page.subhead }}</p>
    <p><span class="y2k-hero-dates">{{ page.dates_display }}</span> <span class="y2k-blink">New!</span></p>
    <p class="y2k-hero-tagline">{{ page.tagline }}</p>
    <p class="y2k-hero-aside">{{ page.aside }}</p>
    <div class="y2k-hero-actions">
      {% if page.registration_url and page.registration_url != "" %}
      <a class="y2k-btn y2k-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
      {% endif %}
      <a class="y2k-btn y2k-btn--ghost" href="#schedule">View the Schedule</a>
      <button type="button" class="y2k-btn y2k-btn--party y2k-jsonly" data-y2k-confetti>
        <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-popper"/></svg>
        Throw Confetti
      </button>
    </div>
  </div>
</section>

<div class="y2k-construction" aria-hidden="true">
  <span>Under Construction</span>
  <span>Under Construction</span>
  <span>Under Construction</span>
</div>

<div class="y2k-shelf">
  <span class="y2k-badge y2k-badge--netscape">Best viewed in<strong>NETSCAPE</strong></span>
  <span class="y2k-badge y2k-badge--ie">Also works in<strong>EXPLORER 5</strong></span>
  <span class="y2k-badge y2k-badge--notepad">Made with<strong>NOTEPAD</strong></span>
  <span class="y2k-badge y2k-badge--res">Optimized for<strong>800 x 600</strong></span>
  <span class="y2k-badge y2k-badge--disco">25 Years<strong>OF LAN</strong></span>
  <a class="y2k-badge y2k-badge--pong" href="{{ discord_url }}" target="_blank" rel="noopener">Join us on<strong>DISCORD</strong></a>
</div>

<div class="y2k-counter">
  <span class="y2k-counter-label">You are visitor number</span>
  <div class="y2k-counter-digits" id="y2k-counter" aria-label="Visitor counter">
    <span class="y2k-counter-digit">0</span>
    <span class="y2k-counter-digit">0</span>
    <span class="y2k-counter-digit">0</span>
    <span class="y2k-counter-digit">0</span>
    <span class="y2k-counter-digit">2</span>
    <span class="y2k-counter-digit">5</span>
  </div>
</div>

<div class="y2k-countdown-wrap">
  <p class="y2k-countdown-head">Time Remaining Until LAN-iversary</p>
  <div class="y2k-countdown" id="y2k-countdown" aria-label="Countdown to LAN-iversary">
    <div class="y2k-countdown-unit">
      <span class="y2k-countdown-num" data-unit="days">--</span>
      <span class="y2k-countdown-label">Days</span>
    </div>
    <span class="y2k-countdown-sep" aria-hidden="true">:</span>
    <div class="y2k-countdown-unit">
      <span class="y2k-countdown-num" data-unit="hours">--</span>
      <span class="y2k-countdown-label">Hours</span>
    </div>
    <span class="y2k-countdown-sep" aria-hidden="true">:</span>
    <div class="y2k-countdown-unit">
      <span class="y2k-countdown-num" data-unit="minutes">--</span>
      <span class="y2k-countdown-label">Minutes</span>
    </div>
    <span class="y2k-countdown-sep" aria-hidden="true">:</span>
    <div class="y2k-countdown-unit">
      <span class="y2k-countdown-num" data-unit="seconds">--</span>
      <span class="y2k-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="y2k-facts">
  <div class="y2k-facts-inner">
    <table class="y2k-table">
      <caption>Vital Statistics</caption>
      <tbody>
        {% for fact in page.facts %}
        <tr>
          <th scope="row">
            <span class="y2k-th-inner">
              <svg class="y2k-icon y2k-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
              {{ fact.label }}
            </span>
          </th>
          <td>{{ fact.value }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>

<section class="y2k-win" id="schedule">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-crt"/></svg>
    <span class="y2k-win-name">schedule.gif &mdash; Paint Shop Pro</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>V</u>iew</span>
    <span><u>I</u>mage</span>
    <span><u>C</u>olors</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-floppy"/></svg>
      The Schedule
    </h2>
    <p class="y2k-win-sub">{{ page.schedule_note }}</p>

    <div class="y2k-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="y2k-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="y2k-schedule-img">
        <div class="y2k-noimg">
          <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-crt"/></svg>
          <strong>Schedule Not Yet Published</strong>
          <span>Check back soon, or ask in the Discord.</span>
        </div>
      </a>
      <div class="y2k-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="y2k-screen is-missing">
        <div class="y2k-noimg">
          <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-crt"/></svg>
          <strong>Schedule Not Yet Published</strong>
          <span>Check back soon, or ask in the Discord.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">Done</span>
    <span class="y2k-win-status-cell">Internet zone</span>
  </div>
</section>

{% if schedule_exists %}
<div class="y2k-zoom" id="schedule-zoom">
  <a class="y2k-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="y2k-zoom-frame">
    <div class="y2k-win-bar">
      <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-crt"/></svg>
      <span class="y2k-win-name">schedule.gif (1 of 1)</span>
      <div class="y2k-win-buttons">
        <a class="y2k-win-button y2k-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
      </div>
    </div>
    <div class="y2k-zoom-body">
      <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
    </div>
  </div>
</div>
{% endif %}

<section class="y2k-win" id="running-order">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
    <span class="y2k-win-name">running-order.txt &mdash; Notepad</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>S</u>earch</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="y2k-win-sub">{% if page.sessions.size > 0 %}Full running order &middot; times shift, the board in the hall is live{% else %}Schedule not yet announced{% endif %}</p>

    {% if page.sessions.size > 0 %}
    <div class="y2k-days">
      {% for session in page.sessions %}
      <div class="y2k-day y2k-reveal">
        <h3 class="y2k-day-name">{{ session.name }}</h3>
        <ul class="y2k-slots">
          {% for ev in session.events %}
          <li class="y2k-slot">
            <span class="y2k-slot-time">{{ ev.time }}</span>
            <span class="y2k-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="y2k-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="y2k-slot-tags">
              {% if ev.free %}<span class="y2k-tag y2k-tag--free">Free to play</span>{% endif %}
              {% if ev.contest %}<span class="y2k-tag y2k-tag--contest">Contest</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="y2k-legend">
      <span class="y2k-tag y2k-tag--contest">Contest</span> A competitive event &middot; format and bracket go up with the running order<br>
      <span class="y2k-tag y2k-tag--free">Free to play</span> Game is free to download, so no purchase is needed to compete
    </div>
    {% else %}
    <p class="y2k-tba">The running order has not been drawn up yet. We will post it here and in the Discord when it is.</p>
    {% endif %}
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">{% if page.sessions.size > 0 %}{{ page.sessions.size }} day(s) listed{% else %}0 bytes{% endif %}</span>
    <span class="y2k-win-status-cell">Ln 1, Col 1</span>
  </div>
</section>

<section class="y2k-win" id="tournaments">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-trophy"/></svg>
    <span class="y2k-win-name">Sign-Ups</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>V</u>iew</span>
    <span>F<u>a</u>vorites</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-trophy"/></svg>
      Put Your Name Down
    </h2>
    <p class="y2k-win-sub">{% if page.events.size > 0 %}{{ page.events | size }} events taking entries{% else %}Events to be announced{% endif %}</p>

    {% if page.events.size > 0 %}
    <div class="y2k-signups">
      {% for ev in page.events %}
      <a class="y2k-signup y2k-reveal" href="{{ ev.url }}" target="_blank" rel="noopener">
        <span class="y2k-signup-num">{{ ev.number }}</span>
        <span class="y2k-signup-name">{{ ev.game }}</span>
        <span class="y2k-signup-format">{{ ev.format }}</span>
        <span class="y2k-signup-org">{{ ev.org }}</span>
        <span class="y2k-signup-cta">Sign up &rarr;</span>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <p class="y2k-tba">The lineup has not been confirmed yet. Watch this page and the Discord for the announcement.</p>
    {% endif %}
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">{{ page.events.size }} object(s)</span>
    <span class="y2k-win-status-cell">Free entry</span>
  </div>
</section>

<section class="y2k-win" id="notes">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wrench"/></svg>
    <span class="y2k-win-name">readme.txt &mdash; Notepad</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>S</u>earch</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wrench"/></svg>
      Notes From the Webmaster
    </h2>
    <p class="y2k-win-sub">{% if page.notes.size > 0 %}Read before the events they concern{% else %}Notes posted as events are confirmed{% endif %}</p>
    {% if page.notes.size > 0 %}
    <div class="y2k-notes">
      {% for note in page.notes %}
      <div class="y2k-note y2k-reveal">
        <h3 class="y2k-note-title">{{ note.event }}</h3>
        <p>{{ note.body }}</p>
        {% if note.link %}<p><a href="{{ note.link }}" target="_blank" rel="noopener">{{ note.link_text }} &nearr;</a></p>{% endif %}
      </div>
      {% endfor %}
    </div>
    {% else %}
    <p class="y2k-tba">Nothing to read yet. Notes will appear here once events are set.</p>
    {% endif %}
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">{% if page.notes.size > 0 %}{{ page.notes.size }} note(s){% else %}0 bytes{% endif %}</span>
    <span class="y2k-win-status-cell">Read only</span>
  </div>
</section>

<section class="y2k-win" id="kit">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-briefcase"/></svg>
    <span class="y2k-win-name">My Briefcase</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>V</u>iew</span>
    <span><u>B</u>riefcase</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cd"/></svg>
      Pack Your Bag
    </h2>
    <p class="y2k-win-sub">Power and network are ours to supply</p>
    <ul class="y2k-kit">
      {% for item in page.kit %}
      <li class="y2k-kit-item">
        <span class="y2k-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">{{ page.kit.size }} item(s)</span>
    <span class="y2k-win-status-cell">3.5" HD</span>
  </div>
</section>

<section class="y2k-win" id="faq">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-book"/></svg>
    <span class="y2k-win-name">faq.html &mdash; Microsoft Internet Explorer</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>V</u>iew</span>
    <span>F<u>a</u>vorites</span>
    <span><u>T</u>ools</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-book"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="y2k-win-sub">Answered once, so you need not ask twice</p>
    <div class="y2k-faq">
      {% for entry in page.faq %}
      <details class="y2k-faq-item">
        <summary class="y2k-faq-q">{{ entry.q }}</summary>
        <p class="y2k-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">{{ page.faq.size }} question(s)</span>
    <span class="y2k-win-status-cell">Internet zone</span>
  </div>
</section>

<section class="y2k-win" id="sponsors">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
    <span class="y2k-win-name">sponsors &mdash; 6 object(s)</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>V</u>iew</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="y2k-win-sub">The people who keep the lights on</p>
    <div class="y2k-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="y2k-sponsor y2k-reveal">
        <div class="y2k-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="y2k-sponsor-name">{{ sponsor.name }}</div>
        <div class="y2k-sponsor-tier">{{ tier[0] }}</div>
        <div class="y2k-sponsor-links">
          {% for social in sponsor.socials %}
          {% assign href = social.url %}
          {% if social.type == "email" %}{% assign href = "mailto:" | append: social.url %}{% endif %}
          <a href="{{ href }}" target="_blank" rel="noopener"
             style="background-color: {{ site.data.socials[social.type].color }};"
             aria-label="{{ sponsor.name }} on {{ social.type }}"><i class="{{ site.data.socials[social.type].icon }}"></i></a>
          {% endfor %}
        </div>
      </div>
      {% endfor %}{% endfor %}
    </div>
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">Thank you</span>
    <span class="y2k-win-status-cell">My Computer</span>
  </div>
</section>

<section class="y2k-win" id="guestbook">
  <div class="y2k-win-bar">
    <svg class="y2k-icon y2k-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-mail"/></svg>
    <span class="y2k-win-name">guestbook.cgi</span>
    <div class="y2k-win-buttons" aria-hidden="true">
      <span class="y2k-win-button">_</span>
      <span class="y2k-win-button">&#9633;</span>
      <span class="y2k-win-button">&#10005;</span>
    </div>
  </div>
  <div class="y2k-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span>
    <span><u>E</u>dit</span>
    <span><u>V</u>iew</span>
    <span><u>G</u>o</span>
    <span><u>H</u>elp</span>
  </div>
  <div class="y2k-win-body">
    <h2 class="y2k-win-title">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-mail"/></svg>
      Sign Our Guestbook
    </h2>
    <p class="y2k-win-sub">Leave a note for the club</p>
    {% if page.guestbook.size > 0 %}
    <div class="y2k-guestbook">
      {% for entry in page.guestbook %}
      <div class="y2k-entry y2k-reveal">
        <div class="y2k-entry-head">
          <span class="y2k-entry-name">{{ entry.name }}</span>
          <span class="y2k-entry-date">{{ entry.date }}</span>
        </div>
        <p class="y2k-entry-body">{{ entry.body }}</p>
      </div>
      {% endfor %}
    </div>
    {% else %}
    <p class="y2k-tba">No entries yet.</p>
    {% endif %}
    <p class="y2k-guestbook-cta">
      <a class="y2k-btn y2k-btn--ghost" href="{{ discord_url }}" target="_blank" rel="noopener">Sign It In the Discord</a>
    </p>
  </div>
  <div class="y2k-win-status" aria-hidden="true">
    <span class="y2k-win-status-cell y2k-win-status-cell--grow">{{ page.guestbook.size }} entries</span>
    <span class="y2k-win-status-cell">cgi-bin</span>
  </div>
</section>

{% include lan-webring.html variant="y2k" %}

<section class="y2k-finish">
  <div class="y2k-finish-glitter" aria-hidden="true"></div>
  <div class="y2k-finish-streamers" aria-hidden="true">
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="y2k-finish-content">
    <p class="y2k-finish-eyebrow">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-balloon"/></svg>
      Twenty-Five Years
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cake"/></svg>
    </p>
    <h2 class="y2k-finish-title">See You There</h2>
    <p class="y2k-finish-sub">The Great Hall &middot; Feb 19&ndash;21, 2027 &middot; Free to enter</p>
    <p class="y2k-finish-sub y2k-finish-sub--small">Network and power provided &middot; The running order goes up here and in the Discord as soon as it is settled</p>
    <div class="y2k-finish-actions">
      {% if page.registration_url and page.registration_url != "" %}
      <a class="y2k-btn y2k-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
      {% endif %}
      <a class="y2k-btn y2k-btn--ghost" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
      <button type="button" class="y2k-btn y2k-btn--party y2k-jsonly" data-y2k-confetti>
        <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-popper"/></svg>
        Throw Confetti
      </button>
    </div>
  </div>
</section>

<footer class="y2k-footer">
  <hr class="y2k-footer-rule">
  <p>
    This page was last updated on {{ site.time | date: "%m/%d/%y" }}.<br>
    {% if email_url != "" %}Questions? <a href="mailto:{{ email_url }}">Mail the webmaster</a>.{% endif %}
  </p>
  <p class="y2k-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming &middot; Twenty-five years and counting</p>
</footer>

{%- comment -%} Taskbar. Hidden unless the document has .y2k-has-js. {%- endcomment -%}
<div class="y2k-taskbar" id="y2k-taskbar">
  <button type="button" class="y2k-start" id="y2k-start" aria-expanded="false" aria-controls="y2k-startmenu">
    <span class="y2k-start-flag" aria-hidden="true"></span>
    <span class="y2k-start-word">Start</span>
  </button>

  <span class="y2k-task-rule" aria-hidden="true"></span>

  <div class="y2k-quicklaunch">
    <button type="button" class="y2k-quick" data-y2k-confetti title="Throw confetti" aria-label="Throw confetti">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cake"/></svg>
    </button>
    {% if discord_url != "" %}
    <a class="y2k-quick" href="{{ discord_url }}" target="_blank" rel="noopener" title="PONG on Discord" aria-label="PONG on Discord">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-globe"/></svg>
    </a>
    {% endif %}
    {% if email_url != "" %}
    <a class="y2k-quick" href="mailto:{{ email_url }}" title="Mail the webmaster" aria-label="Mail the webmaster">
      <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-mail"/></svg>
    </a>
    {% endif %}
  </div>

  <span class="y2k-task-rule" aria-hidden="true"></span>

  {%- comment -%} Filled by script, one button per window. {%- endcomment -%}
  <nav class="y2k-tasks" id="y2k-tasks" aria-label="Sections on this page"></nav>

  <div class="y2k-tray">
    <svg class="y2k-icon y2k-tray-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-network"/></svg>
    <svg class="y2k-icon y2k-tray-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-speaker"/></svg>
    <span class="y2k-tray-clock" id="y2k-clock" aria-hidden="true">--:--</span>
  </div>
</div>

<nav class="y2k-startmenu" id="y2k-startmenu" aria-label="Start menu" hidden>
  <div class="y2k-startmenu-spine" aria-hidden="true"><span>PONGNET <strong>95</strong></span></div>
  <ul class="y2k-startmenu-list">
    <li><a href="#schedule"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-floppy"/></svg><span>The Schedule</span></a></li>
    <li><a href="#running-order"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg><span>Running Order</span></a></li>
    <li><a href="#tournaments"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-trophy"/></svg><span>Sign-Ups</span></a></li>
    <li><a href="#notes"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wrench"/></svg><span>Notes</span></a></li>
    <li><a href="#kit"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-briefcase"/></svg><span>Pack Your Bag</span></a></li>
    <li><a href="#faq"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-book"/></svg><span>Questions</span></a></li>
    <li><a href="#sponsors"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg><span>Sponsors</span></a></li>
    <li><a href="#guestbook"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-mail"/></svg><span>Guestbook</span></a></li>
    <li class="y2k-startmenu-sep" role="presentation"></li>
    <li><a href="{{ '/games/minesweeper/' | relative_url }}"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-ball"/></svg><span>Minesweeper</span></a></li>
    <li><a href="{{ '/games' | relative_url }}"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cd"/></svg><span>Programs&hellip;</span></a></li>
    <li class="y2k-startmenu-sep" role="presentation"></li>
    {% if discord_url != "" %}
    <li><a href="{{ discord_url }}" target="_blank" rel="noopener"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-globe"/></svg><span>Find Us&hellip;</span></a></li>
    {% endif %}
    <li><button type="button" id="y2k-clippy-summon"><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clip"/></svg><span>Help</span></button></li>
    <li class="y2k-startmenu-sep" role="presentation"></li>
    <li><button type="button" data-y2k-confetti><svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-popper"/></svg><span>Celebrate&hellip;</span></button></li>
  </ul>
</nav>

<div class="y2k-tip" id="y2k-tip" role="status" hidden>
  <div class="y2k-tip-head">
    <svg class="y2k-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cake"/></svg>
    <strong>{{ page.tip_title }}</strong>
    <button type="button" class="y2k-tip-close" id="y2k-tip-close" aria-label="Dismiss this message">&#10005;</button>
  </div>
  <p class="y2k-tip-body">{{ page.tip_body }}</p>
</div>

<div class="y2k-clippy" id="y2k-clippy" hidden>
  <div class="y2k-clippy-balloon" role="dialog" aria-labelledby="y2k-clippy-line">
    <button type="button" class="y2k-clippy-close" id="y2k-clippy-close" aria-label="Dismiss the assistant">&#10005;</button>
    <p class="y2k-clippy-line" id="y2k-clippy-line"></p>
    <ul class="y2k-clippy-options" id="y2k-clippy-options"></ul>
  </div>
  <button type="button" class="y2k-clippy-char" id="y2k-clippy-char" aria-label="LANny the assistant. Click for another tip.">
    <svg class="y2k-clippy-art" viewBox="26 4 68 136" aria-hidden="true" focusable="false">
      <path class="y2k-clip-edge" d="M76 104V46a20 20 0 0 0-40 0v64a16 16 0 0 0 32 0V74a10 10 0 0 0-20 0v30"/>
      <path class="y2k-clip-wire" d="M76 104V46a20 20 0 0 0-40 0v64a16 16 0 0 0 32 0V74a10 10 0 0 0-20 0v30"/>
      <ellipse class="y2k-clip-eye" cx="46" cy="36" rx="9" ry="10"/>
      <ellipse class="y2k-clip-eye" cx="67" cy="36" rx="9" ry="10"/>
      <circle class="y2k-clip-pupil" cx="48" cy="38" r="4.2"/>
      <circle class="y2k-clip-pupil" cx="69" cy="38" r="4.2"/>
      <path class="y2k-clip-brow" d="M35 20Q44 9 54 14"/>
      <path class="y2k-clip-brow" d="M59 14Q69 9 78 20"/>
    </svg>
  </button>
</div>

<div class="y2k-confetti" id="y2k-confetti" aria-hidden="true"></div>
