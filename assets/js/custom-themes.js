const today = new Date();
const month = today.getMonth();
const date = today.getDate();
const navBar = document.getElementById("nav_bar_die_in_hell");

const THEME_DIR = "/assets/css/custom-themes/pride-themes";
const THEME_COOKIE = "pride_theme";
const PERSONAL_THEME_ID = "personal-theme";
const PROMPT_COOKIE = "pride_prompt_seen";

// Themes a visitor can pick for themselves during June. Colors are listed in
// flag order, top stripe first, and build the swatch circles in the dropdown.
// TDOR is deliberately absent: it is a memorial theme for Nov 20, not a flag
// to wear for the month.
const PRIDE_THEMES = [
    { slug: "pride", name: "Pride", colors: ["#e40303", "#ff8c00", "#ffed00", "#008026", "#24408e", "#732982"] },
    { slug: "transgender", name: "Transgender", colors: ["#5bcefa", "#f5a9b8", "#ffffff", "#f5a9b8", "#5bcefa"] },
    { slug: "lesbian", name: "Lesbian", colors: ["#d52d00", "#ef7627", "#ffffff", "#d162a4", "#a30262"] },
    { slug: "bisexual", name: "Bisexual", colors: ["#d60270", "#9b4f96", "#0038a8"] },
    { slug: "pansexual", name: "Pansexual", colors: ["#ff218c", "#ffd800", "#21b1ff"] },
    { slug: "asexual", name: "Asexual", colors: ["#000000", "#a3a3a3", "#ffffff", "#800080"] },
    { slug: "aromantic", name: "Aromantic", colors: ["#3da542", "#a7d379", "#ffffff", "#a9a9a9", "#000000"] },
    { slug: "nonbinary", name: "Non-binary", colors: ["#fcf434", "#ffffff", "#9c59d1", "#2c2c2c"] },
    { slug: "agender", name: "Agender", colors: ["#000000", "#b9b9b9", "#ffffff", "#b8f483", "#ffffff", "#b9b9b9", "#000000"] },
    {
        slug: "intersex",
        name: "Intersex",
        // The intersex theme is a ring rather than stripes, so its swatch is too.
        swatch: "radial-gradient(circle at center, #ffd800 0 32%, #7902aa 32% 68%, #ffd800 68%)"
    }
];

function addTheme(cssPath, id) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    if (id) {
        link.id = id;
    }
    document.head.appendChild(link);
}

function createMarquee(text) {
    const banner = document.createElement("div");
    banner.className = "pride-banner";

    const inner = document.createElement("span");
    inner.className = "pride-banner__text";
    inner.innerHTML = text;

    banner.appendChild(inner);
    return banner;
}

// A theme tied to today's date. These win over whatever the visitor picked for
// themselves, so the picker stays out of the way on these days.
let dayThemeApplied = false;

function applyDayTheme(slug, message) {
    addTheme(`${THEME_DIR}/${slug}.css`);
    navBar.after(createMarquee(message));
    dayThemeApplied = true;
}

// Trans Day of Visibility, March 31
if (month === 2 && date === 31) {
    applyDayTheme("transgender", "This site is themed this way for Trans Day of Visibility, click <a href='https://glaad.org/tdov' target='_blank' rel='noopener'>here</a> for more information");
}

// International Asexuality Day, April 6
if (month === 3 && date === 6) {
    applyDayTheme("asexual", "This site is themed this way for International Asexuality Day, click <a href='https://internationalasexualityday.org/en/' target='_blank' rel='noopener'>here</a> for more information");
}

// Lesbian Visibility Day, April 26
if (month === 3 && date === 26) {
    applyDayTheme("lesbian", "This site is themed this way for Lesbian Visibility Day, click <a href='https://en.wikipedia.org/wiki/Lesbian_Visibility_Day' target='_blank' rel='noopener'>here</a> for more information");
}

// Agender Pride Day, May 19
if (month === 4 && date === 19) {
    applyDayTheme("agender", "This site is themed this way for Agender Pride Day, click <a href='https://en.wikipedia.org/wiki/Agender' target='_blank' rel='noopener'>here</a> for more information");
}

// Pansexual & Panromantic Awareness Day, May 24
if (month === 4 && date === 24) {
    applyDayTheme("pansexual", "This site is themed this way for Pansexual & Panromantic Awareness Day, click <a href='https://en.wikipedia.org/wiki/Pansexuality' target='_blank' rel='noopener'>here</a> for more information");
}

// Aromantic Visibility Day, June 5
if (month === 5 && date === 5) {
    applyDayTheme("aromantic", "This site is themed this way for Aromantic Visibility Day, click <a href='https://www.aromanticism.org/' target='_blank' rel='noopener'>here</a> for more information");
}

// International LGBTQ Pride Day, June 28
if (month === 5 && date === 28) {
    applyDayTheme("pride", "This site is themed this way for International LGBTQ Pride Day, click <a href='https://en.wikipedia.org/wiki/Stonewall_riots' target='_blank' rel='noopener'>here</a> for more information");
}

// Non-Binary People's Day, July 14
if (month === 6 && date === 14) {
    applyDayTheme("nonbinary", "This site is themed this way for Non-Binary People's Day, click <a href='https://en.wikipedia.org/wiki/International_Non-Binary_People%27s_Day' target='_blank' rel='noopener'>here</a> for more information");
}

// Celebrate Bisexuality Day, Sept 23
if (month === 8 && date === 23) {
    applyDayTheme("bisexual", "This site is themed this way for Celebrate Bisexuality Day, click <a href='https://en.wikipedia.org/wiki/Celebrate_Bisexuality_Day' target='_blank' rel='noopener'>here</a> for more information");
}

// Lesbian Day, Oct 8
if (month === 9 && date === 8) {
    applyDayTheme("lesbian", "This site is themed this way for Lesbian Day, click <a href='https://www.checkiday.com/7bc3ed3e2f471e91bc22313d3a6e569d/international-lesbian-day' target='_blank' rel='noopener'>here</a> for more information");
}

// Intersex Awareness Day, Oct 26
if (month === 9 && date === 26) {
    applyDayTheme("intersex", "This site is themed this way for Intersex Awareness Day, click <a href='https://en.wikipedia.org/wiki/Intersex_Awareness_Day' target='_blank' rel='noopener'>here</a> for more information");
}

// Intersex Day of Remembrance, Nov 8
if (month === 10 && date === 8) {
    applyDayTheme("intersex", "This site is themed this way for Intersex Day of Remembrance, click <a href='https://en.wikipedia.org/wiki/Intersex_Day_of_Remembrance' target='_blank' rel='noopener'>here</a> for more information");
}

// Trans Day of Remembrance, Nov 20
if (month === 10 && date === 20) {
    applyDayTheme("tdor", "This site is themed this way for Trans Day of Remembrance, click <a href='https://tdor.translivesmatter.info/' target='_blank' rel='noopener'>here</a> for more information");
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    return document.cookie.split("; ").reduce((found, pair) => {
        const separator = pair.indexOf("=");
        if (pair.slice(0, separator) !== name) {
            return found;
        }
        return decodeURIComponent(pair.slice(separator + 1));
    }, "");
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}

// Stripes in a circle. Hard stops keep the flag readable at swatch size, where
// the smooth gradients the themes themselves use would turn to mush.
function swatchBackground(theme) {
    if (theme.swatch) {
        return theme.swatch;
    }

    const step = 100 / theme.colors.length;
    const stops = theme.colors.map((color, i) => {
        return `${color} ${(i * step).toFixed(2)}% ${((i + 1) * step).toFixed(2)}%`;
    });

    return `linear-gradient(to bottom, ${stops.join(", ")})`;
}

function applyPersonalTheme(slug) {
    const current = document.getElementById(PERSONAL_THEME_ID);
    if (current) {
        current.remove();
    }

    if (slug) {
        addTheme(`${THEME_DIR}/${slug}.css`, PERSONAL_THEME_ID);
    }
}

function createThemeOption(theme) {
    const item = document.createElement("li");
    item.setAttribute("role", "none");

    const option = document.createElement("button");
    option.type = "button";
    option.className = "theme-picker__option";
    option.setAttribute("role", "menuitemradio");
    option.dataset.theme = theme.slug;

    const swatch = document.createElement("span");
    swatch.className = "theme-picker__swatch";
    if (theme.slug) {
        swatch.style.background = swatchBackground(theme);
    } else {
        swatch.classList.add("theme-picker__swatch--none");
    }

    const label = document.createElement("span");
    label.textContent = theme.name;

    const check = document.createElement("i");
    check.className = "fa-solid fa-check";
    check.setAttribute("aria-hidden", "true");

    option.append(swatch, label, check);
    item.appendChild(option);
    return item;
}

function buildThemePicker(selected) {
    const picker = document.getElementById("theme-picker");
    const toggle = document.getElementById("theme-picker-toggle");
    const menu = document.getElementById("theme-picker-menu");
    const prompt = document.getElementById("theme-prompt");
    const thisYear = String(today.getFullYear());

    if (!picker || !toggle || !menu) {
        return;
    }

    const choices = [{ slug: "", name: "Site default" }].concat(PRIDE_THEMES);
    choices.forEach((theme) => menu.appendChild(createThemeOption(theme)));

    const options = Array.from(menu.querySelectorAll(".theme-picker__option"));

    function markSelected(slug) {
        options.forEach((option) => {
            option.setAttribute("aria-checked", option.dataset.theme === slug);
        });
    }

    function setOpen(isOpen) {
        menu.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen);
    }

    function closeMenu(refocus) {
        setOpen(false);
        if (refocus) {
            toggle.focus();
        }
    }

    function openMenu() {
        setOpen(true);
        const checked = options.find((option) => option.getAttribute("aria-checked") === "true");
        (checked || options[0]).focus();
    }

    // The first-visit nudge has done its job the moment they engage with the
    // picker at all, so anything that opens or sets a theme retires it.
    function dismissPrompt() {
        if (!prompt || prompt.hidden) {
            return;
        }
        prompt.hidden = true;
        setCookie(PROMPT_COOKIE, thisYear, 365);
    }

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        dismissPrompt();
        if (menu.classList.contains("is-open")) {
            setOpen(false);
        } else {
            openMenu();
        }
    });

    if (prompt) {
        document.getElementById("theme-prompt-open").addEventListener("click", () => {
            dismissPrompt();
            openMenu();
        });

        document.getElementById("theme-prompt-dismiss").addEventListener("click", () => {
            dismissPrompt();
            toggle.focus();
        });

        prompt.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                dismissPrompt();
                toggle.focus();
            }
        });
    }

    menu.addEventListener("click", (event) => {
        const option = event.target.closest(".theme-picker__option");
        if (!option) {
            return;
        }

        const slug = option.dataset.theme;
        if (slug) {
            setCookie(THEME_COOKIE, slug, 365);
        } else {
            deleteCookie(THEME_COOKIE);
        }

        applyPersonalTheme(slug);
        markSelected(slug);
        dismissPrompt();
        closeMenu(true);
    });

    // role="menu" promises arrow-key navigation, so honour it.
    menu.addEventListener("keydown", (event) => {
        const index = options.indexOf(document.activeElement);

        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const step = event.key === "ArrowDown" ? 1 : -1;
            options[(index + step + options.length) % options.length].focus();
        } else if (event.key === "Home") {
            event.preventDefault();
            options[0].focus();
        } else if (event.key === "End") {
            event.preventDefault();
            options[options.length - 1].focus();
        } else if (event.key === "Escape" || event.key === "Tab") {
            closeMenu(event.key === "Escape");
        }
    });

    document.addEventListener("click", (event) => {
        if (!picker.contains(event.target)) {
            closeMenu(false);
        }
    });

    markSelected(selected);
    picker.hidden = false;

    // Once per Pride Month, and never to someone who already picked a theme.
    if (prompt && !selected && getCookie(PROMPT_COOKIE) !== thisYear) {
        prompt.hidden = false;
    }
}

// The picker is a June thing, and so is the theme it sets: showing it only in
// June means nobody is left with a theme and no button to turn it off.
if (month === 5 && !dayThemeApplied) {
    const saved = getCookie(THEME_COOKIE);
    const selected = PRIDE_THEMES.some((theme) => theme.slug === saved) ? saved : "";

    applyPersonalTheme(selected);
    buildThemePicker(selected);
}
