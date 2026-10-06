const today = new Date();
const month = today.getMonth();
const date = today.getDate();
const weekday = today.getDay();
const year = today.getFullYear();
const navBar = document.getElementById("nav_bar_die_in_hell");

const THEME_DIR = "/assets/css/custom-themes";
const THEME_COOKIE = "pride_theme";
const PERSONAL_THEME_ID = "personal-theme";
const PROMPT_COOKIE = "pride_prompt_seen";
const TAKEOVER_SEEN = "takeover_seen";
const TAKEOVER_START = "takeover_start";

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

function themeUrl(path) {
    return `${THEME_DIR}/${path}.css`;
}

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
    banner.className = "day-banner";

    const inner = document.createElement("span");
    inner.className = "day-banner__text";
    inner.innerHTML = text;

    banner.appendChild(inner);
    return banner;
}

// Anonymous Gregorian computus (Meeus/Jones/Butcher). Western Easter is the
// first Sunday after the first ecclesiastical full moon falling on or after
// March 21, which puts it somewhere between March 22 and April 25.
function easter(y) {
    const a = y % 19;
    const b = Math.floor(y / 100);
    const c = y % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const n = Math.floor((a + 11 * h + 22 * l) / 451);
    const taken = h + l - 7 * n + 114;

    // `taken` counts days from the start of March; 31 of them make March.
    return { month: Math.floor(taken / 31) - 1, day: (taken % 31) + 1 };
}

// Themes tied to a date. The first match wins, so the commemorative days are
// listed first: if a seasonal holiday ever lands on one of them, the
// commemoration keeps the site. `on` receives the month (0-11), the day of the
// month, the weekday (0-6) and the year; `banner` and `decor` are optional.
const DAY_THEMES = [
    // Trans Day of Visibility, March 31
    {
        css: "pride-themes/transgender",
        on: (m, d) => m === 2 && d === 31,
        banner: "This site is themed this way for Trans Day of Visibility, click <a href='https://glaad.org/tdov' target='_blank' rel='noopener'>here</a> for more information"
    },
    // International Asexuality Day, April 6
    {
        css: "pride-themes/asexual",
        on: (m, d) => m === 3 && d === 6,
        banner: "This site is themed this way for International Asexuality Day, click <a href='https://internationalasexualityday.org/en/' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Lesbian Visibility Day, April 26
    {
        css: "pride-themes/lesbian",
        on: (m, d) => m === 3 && d === 26,
        banner: "This site is themed this way for Lesbian Visibility Day, click <a href='https://en.wikipedia.org/wiki/Lesbian_Visibility_Day' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Agender Pride Day, May 19
    {
        css: "pride-themes/agender",
        on: (m, d) => m === 4 && d === 19,
        banner: "This site is themed this way for Agender Pride Day, click <a href='https://en.wikipedia.org/wiki/Agender' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Pansexual & Panromantic Awareness Day, May 24
    {
        css: "pride-themes/pansexual",
        on: (m, d) => m === 4 && d === 24,
        banner: "This site is themed this way for Pansexual & Panromantic Awareness Day, click <a href='https://en.wikipedia.org/wiki/Pansexuality' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Aromantic Visibility Day, June 5
    {
        css: "pride-themes/aromantic",
        on: (m, d) => m === 5 && d === 5,
        banner: "This site is themed this way for Aromantic Visibility Day, click <a href='https://www.aromanticism.org/' target='_blank' rel='noopener'>here</a> for more information"
    },
    // International LGBTQ Pride Day, June 28
    {
        css: "pride-themes/pride",
        on: (m, d) => m === 5 && d === 28,
        banner: "This site is themed this way for International LGBTQ Pride Day, click <a href='https://en.wikipedia.org/wiki/Stonewall_riots' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Non-Binary People's Day, July 14
    {
        css: "pride-themes/nonbinary",
        on: (m, d) => m === 6 && d === 14,
        banner: "This site is themed this way for Non-Binary People's Day, click <a href='https://en.wikipedia.org/wiki/International_Non-Binary_People%27s_Day' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Celebrate Bisexuality Day, Sept 23
    {
        css: "pride-themes/bisexual",
        on: (m, d) => m === 8 && d === 23,
        banner: "This site is themed this way for Celebrate Bisexuality Day, click <a href='https://en.wikipedia.org/wiki/Celebrate_Bisexuality_Day' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Lesbian Day, Oct 8
    {
        css: "pride-themes/lesbian",
        on: (m, d) => m === 9 && d === 8,
        banner: "This site is themed this way for Lesbian Day, click <a href='https://www.checkiday.com/7bc3ed3e2f471e91bc22313d3a6e569d/international-lesbian-day' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Intersex Awareness Day, Oct 26
    {
        css: "pride-themes/intersex",
        on: (m, d) => m === 9 && d === 26,
        banner: "This site is themed this way for Intersex Awareness Day, click <a href='https://en.wikipedia.org/wiki/Intersex_Awareness_Day' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Intersex Day of Remembrance, Nov 8
    {
        css: "pride-themes/idor",
        on: (m, d) => m === 10 && d === 8,
        banner: "This site is themed this way for Intersex Day of Remembrance, click <a href='https://en.wikipedia.org/wiki/Intersex_Day_of_Remembrance' target='_blank' rel='noopener'>here</a> for more information"
    },
    // Trans Day of Remembrance, Nov 20
    {
        css: "pride-themes/tdor",
        on: (m, d) => m === 10 && d === 20,
        banner: "This site is themed this way for Trans Day of Remembrance, click <a href='https://tdor.translivesmatter.info/' target='_blank' rel='noopener'>here</a> for more information"
    },

    // Seasonal holidays, each on the day itself.
    // New Year's Day, January 1
    {
        css: "seasonal-themes/new-year",
        on: (m, d) => m === 0 && d === 1,
        banner: "Happy New Year from PONG",
        decor: 56
    },
    // Leap Day, February 29. Date only ever hands us that date in a leap year,
    // so the rule needs no leap-year test of its own.
    {
        css: "seasonal-themes/leap-day",
        on: (m, d) => m === 1 && d === 29,
        banner: "Happy Leap Day from PONG. A whole extra day, so spend it well."
    },
    // Valentine's Day, February 14
    {
        css: "seasonal-themes/valentines",
        on: (m, d) => m === 1 && d === 14,
        banner: "Happy Valentine's Day from PONG"
    },
    // St. Patrick's Day, March 17
    {
        css: "seasonal-themes/st-patricks",
        on: (m, d) => m === 2 && d === 17,
        banner: "Happy St. Patrick's Day from PONG"
    },
    // April Fools' Day, April 1. Listed ahead of Easter deliberately: Easter can
    // land on April 1, next in 2029, and on those years the prank takes the day.
    {
        css: "seasonal-themes/april-fools",
        on: (m, d) => m === 3 && d === 1,
        takeover: {
            ms: 5 * 60 * 1000,
            title: "April Fools",
            body: "The site was never broken. Thanks for waiting us out.",
            button: "Take me to the site",
            assistive: "This page is playing an April Fools joke and is deliberately blank. The real site returns shortly, or reload to skip it."
        }
    },
    // Easter Sunday, somewhere between March 22 and April 25
    {
        css: "seasonal-themes/easter",
        on: (m, d, w, y) => {
            const sunday = easter(y);
            return m === sunday.month && d === sunday.day;
        },
        banner: "Happy Easter from PONG"
    },
    // Halloween, October 31
    {
        css: "seasonal-themes/halloween",
        on: (m, d) => m === 9 && d === 31,
        banner: "Happy Halloween from PONG"
    },
    // Thanksgiving, the fourth Thursday in November
    {
        css: "seasonal-themes/thanksgiving",
        on: (m, d, w) => m === 10 && w === 4 && d >= 22 && d <= 28,
        banner: "Happy Thanksgiving from PONG"
    },
    // Christmas Day, December 25
    {
        css: "seasonal-themes/christmas",
        on: (m, d) => m === 11 && d === 25,
        banner: "Merry Christmas from PONG"
    },
    // New Year's Eve, December 31, using the same scene as the morning after.
    {
        css: "seasonal-themes/new-year",
        on: (m, d) => m === 11 && d === 31,
        banner: "Happy New Year's Eve from PONG",
        decor: 56
    }
];

// Some scenes need real elements rather than a painted layer: an SVG used as a
// background-image renders in secure static mode, so animation inside it never
// runs, and a background layer can only be transformed as one sheet. A theme
// that asks for `decor` gets this many throwaway sprites, each carrying three
// random numbers for its stylesheet to shape it with.
function createDecor(count) {
    const layer = document.createElement("div");
    layer.className = "theme-decor";
    layer.setAttribute("aria-hidden", "true");

    for (let i = 0; i < count; i += 1) {
        const sprite = document.createElement("i");
        sprite.style.setProperty("--r1", Math.random().toFixed(3));
        sprite.style.setProperty("--r2", Math.random().toFixed(3));
        sprite.style.setProperty("--r3", Math.random().toFixed(3));
        layer.appendChild(sprite);
    }

    document.body.appendChild(layer);
}

// Covers the whole site for a stretch, then owns up to it and hands the page
// back. The wait is wall-clock from the visitor's first arrival, not from each
// page load, so reloading does not restart it and navigating does not either;
// once the notice is dismissed the site stays normal for the rest of the day.
function runTakeover(spec) {
    if (getCookie(TAKEOVER_SEEN) === String(year)) {
        return;
    }

    const started = Number(getCookie(TAKEOVER_START)) || Date.now();
    setCookie(TAKEOVER_START, String(started), 1);

    const cover = document.createElement("div");
    cover.className = "theme-takeover";

    // The stylesheet is still in flight at this point, so the blank is painted
    // from here to stop the real site flashing up first.
    const root = document.documentElement.getAttribute("data-theme");
    const dark = root === "dark" || (!root && window.matchMedia("(prefers-color-scheme: dark)").matches);
    cover.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:" +
        (dark ? "#181a1b" : "#f9fcff");

    const note = document.createElement("p");
    note.className = "theme-takeover__sr";
    note.textContent = spec.assistive;
    cover.appendChild(note);

    const reveal = document.createElement("div");
    reveal.className = "theme-reveal";
    reveal.setAttribute("role", "dialog");
    reveal.setAttribute("aria-modal", "true");
    reveal.hidden = true;

    const title = document.createElement("p");
    title.className = "theme-reveal__title";
    title.textContent = spec.title;

    const body = document.createElement("p");
    body.className = "theme-reveal__body";
    body.textContent = spec.body;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-reveal__button";
    button.textContent = spec.button;

    reveal.append(title, body, button);
    cover.appendChild(reveal);
    document.body.appendChild(cover);

    function dismiss() {
        setCookie(TAKEOVER_SEEN, String(year), 1);
        deleteCookie(TAKEOVER_START);
        cover.remove();
    }

    button.addEventListener("click", dismiss);
    cover.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            dismiss();
        }
    });

    window.setTimeout(() => {
        reveal.hidden = false;
        button.focus();
    }, Math.max(0, spec.ms - (Date.now() - started)));
}

const dayTheme = DAY_THEMES.find((theme) => theme.on(month, date, weekday, year));

if (dayTheme) {
    addTheme(themeUrl(dayTheme.css));
    if (dayTheme.banner) {
        navBar.after(createMarquee(dayTheme.banner));
    }
    if (dayTheme.decor) {
        createDecor(dayTheme.decor);
    }
    if (dayTheme.takeover) {
        runTakeover(dayTheme.takeover);
    }
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
        addTheme(themeUrl(`pride-themes/${slug}`), PERSONAL_THEME_ID);
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
if (month === 5 && !dayTheme) {
    const saved = getCookie(THEME_COOKIE);
    const selected = PRIDE_THEMES.some((theme) => theme.slug === saved) ? saved : "";

    applyPersonalTheme(selected);
    buildThemePicker(selected);
}
