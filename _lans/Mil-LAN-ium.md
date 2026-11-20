---
title: Mil-LAN-ium
start_date: 2025-09-19
end_date: 2025-09-21
description: >-
  Mil-LAN-ium: PONG's 48-hour 2000's-core LAN in the MSC Great Hall and
  Ballrooms. Games, tournaments, prizes, and every game you have had installed
  for twenty years.

ticker: "MIL-LAN-IUM · 48 HOURS OF 2000'S-CORE GAMING · SEPT 19-21 · MSC GREAT HALL & BALLROOMS · FREE ENTRY · GAMES, TOURNAMENTS, PRIZES · BREAK OUT THE SLEEPER BUILD ·"

headline: Mil-LAN-ium
subhead: "Games, tournaments, prizes!"

dialog_title: Mil-LAN-ium
when_label: When
when_value: "Friday, Sept 19th through Sunday, Sept 21st"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

blurb_lead: "Join us in the MSC for a 48-hour 2000's-core gaming event!"
blurb_body: "Get ready to break out the sleeper build and play some games you've had installed for 20 years."
blurb_free: "FREE"

dates_display: "SEPT 19-21"

facts:
  - icon: ico-cal
    label: Dates
    value: "Sept 19-21, 2025"
  - icon: ico-monitor
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-disc
    label: Vibe
    value: "2000's-core"
  - icon: ico-network
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/mil-lan-ium_schedule.webp
schedule_alt: >-
  The Mil-LAN-ium weekend schedule, laid out as a Windows window: four columns
  of events colour-coded by day, each flagged free to play and/or competitive.
  The full running order follows below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

desktop_icons:
  - icon: ico-bin
    label: Recycle Bin
  - icon: ico-pc
    label: My Computer
  - icon: ico-ie
    label: Internet
  - icon: ico-cards
    label: Solitaire
  - icon: ico-mine
    label: Minesweeper
  - icon: ico-media
    label: Media Player

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Party Games
        free: true
      - time: "7:00 PM"
        name: TETR.IO
        free: true
        contest: true
      - time: "9:00 PM"
        name: Desolate Desert Survival Games
      - time: "10:00 PM"
        name: "Magic: The Gathering Commander"

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Jackbox Games
        free: true
      - time: "1:30 AM"
        name: Team Fortress 2
        free: true
      - time: "12:00 PM"
        name: Twister
        free: true
        contest: true
      - time: "1:00 PM"
        name: Super Smash Bros. Ultimate
        free: true
        contest: true
      - time: "2:00 PM"
        name: Live Action Clue
        free: true
      - time: "3:00 PM"
        name: PEAK
      - time: "4:00 PM"
        name: Marvel vs. Capcom 2
        free: true
        contest: true
      - time: "5:00 PM"
        name: Helldivers II
      - time: "7:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
        free: true
      - time: "10:00 PM"
        name: "Halo: The Master Chief Collection"
      - time: "11:00 PM"
        name: Name That Tune
        free: true

  - name: Sunday
    events:
      - time: "1:30 AM"
        name: garry's mod
      - time: "12:00 PM"
        name: Wii Sports
        free: true
      - time: "12:30 PM"
        name: Peggle
        free: true
        contest: true
      - time: "2:30 PM"
        name: Prize Drawing
        free: true

all_lan:
  name: Minecraft Bingo
  host: "mc.ponglan.net"
  body: Running the whole weekend on the PONG Minecraft server. Drop in whenever, cross off what you can.

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 tickets, second place will receive 2 tickets, and all other participants will receive 1 ticket."
  - tag: FREE
    kind: free
    body: "Marks an event that is free to buy or play. All PONG events are free to participate in."
legend_note: "Example: you can play in a PEAK event for free, but PEAK is not a free game."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Smash and Mario Kart go
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 2:30 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets toward the Sunday drawing."
---

<link rel="stylesheet" href="{{ '/assets/css/mil-lan-ium.css' | relative_url }}">

<script>
  // Set before first paint so the script-driven taskbar and shortcuts only
  // show when script runs.
  document.documentElement.classList.add('aero-has-js');
</script>

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/mil-lan-ium.js' | relative_url }}" defer></script>

<div class="aero-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-cal" viewBox="0 0 32 32">
    <path d="M3 7h26v22H3z"/>
    <line x1="3" y1="14" x2="29" y2="14"/>
    <line x1="9" y1="3" x2="9" y2="9"/>
    <line x1="23" y1="3" x2="23" y2="9"/>
    <rect x="8" y="18" width="5" height="4" fill="currentColor" stroke="none"/>
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

  <symbol id="ico-monitor" viewBox="0 0 32 32">
    <rect x="2" y="5" width="28" height="18" rx="2"/>
    <path d="M13 23v4"/>
    <path d="M19 23v4"/>
    <line x1="9" y1="27" x2="23" y2="27"/>
  </symbol>

  <symbol id="ico-disc" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <circle cx="16" cy="16" r="3.5"/>
    <path d="M16 4a12 12 0 0 1 10.4 6"/>
    <path d="M7.6 23a12 12 0 0 0 10.4 5"/>
  </symbol>

  <symbol id="ico-network" viewBox="0 0 32 32">
    <path d="M2 7h14v9H2z"/>
    <path d="M16 16h14v9H16z"/>
    <line x1="5" y1="19" x2="11" y2="19"/>
    <line x1="19" y1="28" x2="25" y2="28"/>
    <path d="M9 16v5h11"/>
  </symbol>

  <symbol id="ico-trophy" viewBox="0 0 32 32">
    <path d="M10 5h12l-2 10a4 4 0 0 1-8 0z"/>
    <path d="M10 8C6 8 5 13 9 13"/>
    <path d="M22 8c4 0 5 5 1 5"/>
    <line x1="16" y1="19" x2="16" y2="24"/>
    <path d="M10 24h12"/>
    <path d="M8 27h16"/>
  </symbol>

  <symbol id="ico-folder" viewBox="0 0 32 32">
    <path d="M3 8h9l3 4h14v15H3z"/>
  </symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32">
    <path d="M3 10h26v17H3z"/>
    <path d="M12 10V6h8v4"/>
    <line x1="3" y1="17" x2="29" y2="17"/>
    <rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-help" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/>
    <circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-star" viewBox="0 0 32 32">
    <path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/>
  </symbol>

  <symbol id="ico-mail" viewBox="0 0 32 32">
    <path d="M3 7h26v18H3z"/>
    <path d="M3 7l13 10L29 7"/>
  </symbol>

  <symbol id="ico-globe" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <ellipse cx="16" cy="16" rx="5" ry="12"/>
    <line x1="4" y1="16" x2="28" y2="16"/>
    <path d="M6.5 9.5c5 2.5 14 2.5 19 0"/>
    <path d="M6.5 22.5c5-2.5 14-2.5 19 0"/>
  </symbol>

  <symbol id="ico-speaker" viewBox="0 0 32 32">
    <path d="M5 12h5l7-6v20l-7-6H5z"/>
    <path d="M21 11.5c2.6 2.6 2.6 6.4 0 9"/>
    <path d="M25 7c4.6 4.6 4.6 13.4 0 18"/>
  </symbol>

  <symbol id="ico-warn" viewBox="0 0 32 32">
    <path d="M16 3.5 30 28H2z"/>
    <line x1="16" y1="12" x2="16" y2="20"/>
    <circle cx="16" cy="24" r="1.4" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-pick" viewBox="0 0 32 32">
    <path d="M4 28 18 14"/>
    <path d="M9 11c5-5 13-5 18 0-6-1-9 0-12 3s-4 6-3 12c-5-5-8-10-3-15z"/>
  </symbol>

  <symbol id="ico-bin" viewBox="0 0 32 32">
    <path d="M7 10h18l-2 18H9z"/>
    <path d="M4 10h24"/>
    <path d="M12 10V6h8v4"/>
    <line x1="13" y1="15" x2="14" y2="24"/>
    <line x1="19" y1="15" x2="18" y2="24"/>
  </symbol>

  <symbol id="ico-pc" viewBox="0 0 32 32">
    <rect x="3" y="5" width="22" height="15" rx="1.5"/>
    <path d="M9 24h14l2 4H7z"/>
    <line x1="6" y1="8" x2="22" y2="8"/>
  </symbol>

  <symbol id="ico-ie" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="10"/>
    <ellipse cx="16" cy="16" rx="14.5" ry="5.5" transform="rotate(-24 16 16)"/>
  </symbol>

  <symbol id="ico-cards" viewBox="0 0 32 32">
    <rect x="4" y="6" width="15" height="21" rx="2" transform="rotate(-10 11.5 16.5)"/>
    <rect x="13" y="6" width="15" height="21" rx="2" transform="rotate(8 20.5 16.5)"/>
    <path d="M20 14.5c1.5-2 4 0 0 3-4-3-1.5-5 0-3z" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-mine" viewBox="0 0 32 32">
    <circle cx="16" cy="18" r="9"/>
    <line x1="16" y1="9" x2="16" y2="3"/>
    <line x1="4" y1="18" x2="1.5" y2="18"/>
    <line x1="30.5" y1="18" x2="28" y2="18"/>
    <line x1="8" y1="10" x2="6" y2="8"/>
  </symbol>

  <symbol id="ico-clip" viewBox="0 0 32 32">
    <path d="M21.5 25V10.5a5 5 0 0 0-10 0v15.5a8 8 0 0 0 16 0V13"/>
  </symbol>

  <symbol id="ico-media" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <path d="M13 10.5 22 16l-9 5.5z" fill="currentColor" stroke="none"/>
  </symbol>

</svg>
</div>

<div class="aero-wallpaper" aria-hidden="true">
  <div class="aero-swirl"></div>
  <svg class="aero-fish" viewBox="0 0 220 120" aria-hidden="true" focusable="false">
    <path class="aero-fish-tail" d="M28 60c-16-22-22-34-20-40 14 4 28 16 40 28z"/>
    <path class="aero-fish-tail" d="M28 60c-16 22-22 34-20 40 14-4 28-16 40-28z"/>
    <path class="aero-fish-fin" d="M96 92c6 14 14 22 24 24-2-12-6-20-12-28z"/>
    <path class="aero-fish-fin" d="M96 28c6-14 14-22 24-24-2 12-6 20-12 28z"/>
    <path class="aero-fish-body" d="M26 60c24-34 62-52 108-52 44 0 72 22 80 52-8 30-36 52-80 52-46 0-84-18-108-52z"/>
    <circle class="aero-fish-eye" cx="176" cy="48" r="9"/>
    <circle class="aero-fish-pupil" cx="178" cy="48" r="4.5"/>
  </svg>
</div>

<div class="aero-desktop-icons" aria-hidden="true">
  {% for shortcut in page.desktop_icons %}
  <div class="aero-shortcut">
    <span class="aero-shortcut-art">
      <svg class="aero-icon" viewBox="0 0 32 32"><use href="#{{ shortcut.icon }}"/></svg>
      <span class="aero-shortcut-arrow"></span>
    </span>
    <span class="aero-shortcut-label">{{ shortcut.label }}</span>
  </div>
  {% endfor %}
</div>

<div class="aero-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="aero-hero">
  <div class="aero-hero-stack">

    <div class="aero-dialog">
      <div class="aero-win-bar">
        <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32"><use href="#ico-disc"/></svg>
        <h1 class="aero-dialog-title">{{ page.dialog_title }}</h1>
        <div class="aero-win-buttons" aria-hidden="true">
          <span class="aero-win-button aero-win-button--close">&#10005;</span>
        </div>
      </div>
      <div class="aero-dialog-body">
        <svg class="aero-icon aero-dialog-warn" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-warn"/></svg>
        <dl class="aero-dialog-facts">
          <dt>{{ page.when_label }}:</dt>
          <dd>{{ page.when_value }}</dd>
          <dt>{{ page.where_label }}:</dt>
          <dd>{{ page.where_value }}</dd>
        </dl>
      </div>
      <div class="aero-dialog-actions">
        {% if page.registration_url and page.registration_url != "" %}
        <a class="aero-btn aero-btn--default" href="{{ page.registration_url }}" target="_blank" rel="noopener">OK</a>
        {% else %}
        <a class="aero-btn aero-btn--default" href="#running-order">OK</a>
        {% endif %}
        <a class="aero-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Cancel</a>
      </div>
    </div>

    <div class="aero-win aero-win--behind" aria-hidden="true">
      <div class="aero-win-bar aero-win-bar--inactive">
        <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32"><use href="#ico-globe"/></svg>
        <span class="aero-win-name">PONG presents&hellip;</span>
        <div class="aero-win-buttons">
          <span class="aero-win-button">&#8211;</span>
          <span class="aero-win-button">&#9633;</span>
          <span class="aero-win-button aero-win-button--close">&#10005;</span>
        </div>
      </div>
      <div class="aero-win-body aero-hero-blurb">
        <p>{{ page.blurb_lead }} <span class="aero-free-inline">[{{ page.blurb_free }}]</span></p>
        <p>{{ page.blurb_body }}</p>
      </div>
    </div>

  </div>

  <p class="aero-hero-tagline">{{ page.subhead }}</p>
</section>

<div class="aero-countdown-wrap" id="aero-countdown-wrap">
  <p class="aero-countdown-head" id="aero-countdown-head">Time Remaining Until Doors Open</p>
  <div class="aero-countdown" id="aero-countdown" aria-label="Countdown to Mil-LAN-ium">
    <div class="aero-countdown-unit">
      <span class="aero-countdown-num" data-unit="days">--</span>
      <span class="aero-countdown-label">Days</span>
    </div>
    <div class="aero-countdown-unit">
      <span class="aero-countdown-num" data-unit="hours">--</span>
      <span class="aero-countdown-label">Hours</span>
    </div>
    <div class="aero-countdown-unit">
      <span class="aero-countdown-num" data-unit="minutes">--</span>
      <span class="aero-countdown-label">Minutes</span>
    </div>
    <div class="aero-countdown-unit">
      <span class="aero-countdown-num" data-unit="seconds">--</span>
      <span class="aero-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="aero-facts">
  <table class="aero-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="aero-th-inner">
            <svg class="aero-icon aero-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="aero-win" id="schedule">
  <div class="aero-win-bar">
    <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
    <span class="aero-win-name">Mil-LAN-ium &mdash; Schedule</span>
    <div class="aero-win-buttons" aria-hidden="true">
      <span class="aero-win-button">&#8211;</span>
      <span class="aero-win-button">&#9633;</span>
      <span class="aero-win-button aero-win-button--close">&#10005;</span>
    </div>
  </div>
  <div class="aero-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span>F<u>a</u>vorites</span><span><u>H</u>elp</span>
  </div>
  <div class="aero-win-body">
    <h2 class="aero-win-title">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
      The Schedule
    </h2>
    <p class="aero-win-sub">{{ page.schedule_note }}</p>

    <div class="aero-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="aero-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="aero-schedule-img">
        <div class="aero-noimg">
          <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-monitor"/></svg>
          <strong>Schedule Image Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="aero-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="aero-screen is-missing">
        <div class="aero-noimg">
          <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-monitor"/></svg>
          <strong>Schedule Image Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
  <div class="aero-win-status" aria-hidden="true">
    <span class="aero-win-status-cell aero-win-status-cell--grow">Done</span>
    <span class="aero-win-status-cell">Internet</span>
  </div>
</section>

{% if schedule_exists %}
<div class="aero-zoom" id="schedule-zoom">
  <a class="aero-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="aero-zoom-frame">
    <div class="aero-win-bar">
      <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
      <span class="aero-win-name">Mil-LAN-ium &mdash; Schedule (1 of 1)</span>
      <div class="aero-win-buttons">
        <a class="aero-win-button aero-win-button--close aero-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
      </div>
    </div>
    <div class="aero-zoom-body">
      <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
    </div>
  </div>
</div>
{% endif %}

<section class="aero-win" id="running-order">
  <div class="aero-win-bar">
    <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
    <span class="aero-win-name">running-order.txt &mdash; Notepad</span>
    <div class="aero-win-buttons" aria-hidden="true">
      <span class="aero-win-button">&#8211;</span>
      <span class="aero-win-button">&#9633;</span>
      <span class="aero-win-button aero-win-button--close">&#10005;</span>
    </div>
  </div>
  <div class="aero-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>S</u>earch</span><span><u>H</u>elp</span>
  </div>
  <div class="aero-win-body">
    <h2 class="aero-win-title">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="aero-win-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="aero-days">
      {% for session in page.sessions %}
      <div class="aero-day aero-reveal">
        <h3 class="aero-day-name">{{ session.name }}</h3>
        <ul class="aero-slots">
          {% for ev in session.events %}
          <li class="aero-slot">
            <span class="aero-slot-time">{{ ev.time }}</span>
            <span class="aero-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="aero-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="aero-slot-tags">
              {% if ev.free %}<span class="aero-tag aero-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="aero-tag aero-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan %}
      <div class="aero-day aero-day--all aero-reveal">
        <h3 class="aero-day-name">All LAN</h3>
        <ul class="aero-slots">
          <li class="aero-slot">
            <span class="aero-slot-time">{{ page.all_lan.host }}</span>
            <span class="aero-slot-name">
              {{ page.all_lan.name }}
              <span class="aero-slot-note">{{ page.all_lan.body }}</span>
            </span>
            <span class="aero-slot-tags"></span>
          </li>
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="aero-legend">
      {% for item in page.legend %}
      <p class="aero-legend-row">
        <span class="aero-tag aero-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="aero-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
  <div class="aero-win-status" aria-hidden="true">
    <span class="aero-win-status-cell aero-win-status-cell--grow">{{ page.sessions.size }} day(s) listed</span>
    <span class="aero-win-status-cell">Ln 1, Col 1</span>
  </div>
</section>

<section class="aero-win" id="kit">
  <div class="aero-win-bar">
    <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
    <span class="aero-win-name">My Briefcase</span>
    <div class="aero-win-buttons" aria-hidden="true">
      <span class="aero-win-button">&#8211;</span>
      <span class="aero-win-button">&#9633;</span>
      <span class="aero-win-button aero-win-button--close">&#10005;</span>
    </div>
  </div>
  <div class="aero-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>T</u>ools</span><span><u>H</u>elp</span>
  </div>
  <div class="aero-win-body">
    <h2 class="aero-win-title">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="aero-win-sub">Power and network are ours to supply</p>
    <ul class="aero-kit">
      {% for item in page.kit %}
      <li class="aero-kit-item">
        <span class="aero-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
  <div class="aero-win-status" aria-hidden="true">
    <span class="aero-win-status-cell aero-win-status-cell--grow">{{ page.kit.size }} item(s)</span>
    <span class="aero-win-status-cell">My Computer</span>
  </div>
</section>

<section class="aero-win" id="faq">
  <div class="aero-win-bar">
    <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
    <span class="aero-win-name">Help and Support Center</span>
    <div class="aero-win-buttons" aria-hidden="true">
      <span class="aero-win-button">&#8211;</span>
      <span class="aero-win-button">&#9633;</span>
      <span class="aero-win-button aero-win-button--close">&#10005;</span>
    </div>
  </div>
  <div class="aero-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>T</u>ools</span><span><u>H</u>elp</span>
  </div>
  <div class="aero-win-body">
    <h2 class="aero-win-title">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="aero-win-sub">Answered once, so you need not ask twice</p>
    <div class="aero-faq">
      {% for entry in page.faq %}
      <details class="aero-faq-item">
        <summary class="aero-faq-q">{{ entry.q }}</summary>
        <p class="aero-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
  <div class="aero-win-status" aria-hidden="true">
    <span class="aero-win-status-cell aero-win-status-cell--grow">{{ page.faq.size }} question(s)</span>
    <span class="aero-win-status-cell">Internet</span>
  </div>
</section>

<section class="aero-win" id="sponsors">
  <div class="aero-win-bar">
    <svg class="aero-icon aero-win-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
    <span class="aero-win-name">Sponsors</span>
    <div class="aero-win-buttons" aria-hidden="true">
      <span class="aero-win-button">&#8211;</span>
      <span class="aero-win-button">&#9633;</span>
      <span class="aero-win-button aero-win-button--close">&#10005;</span>
    </div>
  </div>
  <div class="aero-win-menu" aria-hidden="true">
    <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>H</u>elp</span>
  </div>
  <div class="aero-win-body">
    <h2 class="aero-win-title">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="aero-win-sub">The weekend runs on their help</p>
    <div class="aero-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="aero-sponsor aero-reveal">
        <div class="aero-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="aero-sponsor-name">{{ sponsor.name }}</div>
        <div class="aero-sponsor-tier">{{ tier[0] }}</div>
        <div class="aero-sponsor-links">
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
  <div class="aero-win-status" aria-hidden="true">
    <span class="aero-win-status-cell aero-win-status-cell--grow">Thank you</span>
    <span class="aero-win-status-cell">My Computer</span>
  </div>
</section>

<footer class="aero-footer">
  <div class="aero-footer-cards">
    <div class="aero-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="aero-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "email" or social.type == "link" or social.type == "twitch" %}
      <a href="{% if social.type == 'email' %}mailto:{{ social.url }}{% else %}{{ social.url }}{% endif %}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
  </div>
  <p class="aero-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>

{%- comment -%} Taskbar. Hidden unless the document has .aero-has-js, set by the inline script above. {%- endcomment -%}
<div class="aero-taskbar" id="aero-taskbar">
  <button type="button" class="aero-start" id="aero-start" aria-expanded="false" aria-controls="aero-startmenu">
    <span class="aero-start-orb" aria-hidden="true"></span>
    <span class="aero-start-word">start</span>
  </button>

  <div class="aero-quicklaunch">
    {% if discord_url != "" %}
    <a class="aero-quick" href="{{ discord_url }}" target="_blank" rel="noopener" title="PONG on Discord" aria-label="PONG on Discord">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-globe"/></svg>
    </a>
    {% endif %}
    {% if email_url != "" %}
    <a class="aero-quick" href="mailto:{{ email_url }}" title="Mail PONG" aria-label="Mail PONG">
      <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-mail"/></svg>
    </a>
    {% endif %}
  </div>

  {%- comment -%} Filled by script, one button per window. {%- endcomment -%}
  <nav class="aero-tasks" id="aero-tasks" aria-label="Sections on this page"></nav>

  <div class="aero-tray">
    <svg class="aero-icon aero-tray-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-network"/></svg>
    <svg class="aero-icon aero-tray-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-speaker"/></svg>
    <span class="aero-tray-clock" id="aero-clock">--:--</span>
  </div>
</div>

<nav class="aero-startmenu" id="aero-startmenu" aria-label="Start menu" hidden>
  <div class="aero-startmenu-head" aria-hidden="true">
    <span class="aero-startmenu-avatar"></span>
    <span class="aero-startmenu-user">PONG</span>
  </div>
  <ul class="aero-startmenu-list">
    <li><a href="#schedule"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg><span>The Schedule</span></a></li>
    <li><a href="#running-order"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg><span>Running Order</span></a></li>
    <li><a href="#kit"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg><span>Pack Your Bag</span></a></li>
    <li><a href="#faq"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg><span>Help and Support</span></a></li>
    <li><a href="#sponsors"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg><span>Sponsors</span></a></li>
    <li class="aero-startmenu-sep" role="presentation"></li>
    {% if discord_url != "" %}
    <li><a href="{{ discord_url }}" target="_blank" rel="noopener"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-globe"/></svg><span>Join the Discord</span></a></li>
    {% endif %}
    {% if email_url != "" %}
    <li><a href="mailto:{{ email_url }}"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-mail"/></svg><span>Mail PONG</span></a></li>
    {% endif %}
    <li><a href="{{ '/lans/' | relative_url }}"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-folder"/></svg><span>All PONG LANs</span></a></li>
    <li class="aero-startmenu-sep" role="presentation"></li>
    <li><button type="button" id="aero-clippy-summon"><svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clip"/></svg><span>Assistant</span></button></li>
  </ul>
</nav>

<div class="aero-clippy" id="aero-clippy" hidden>
  <div class="aero-clippy-balloon" role="dialog" aria-labelledby="aero-clippy-line">
    <button type="button" class="aero-clippy-close" id="aero-clippy-close" aria-label="Dismiss the assistant">&#10005;</button>
    <p class="aero-clippy-line" id="aero-clippy-line"></p>
    <ul class="aero-clippy-options" id="aero-clippy-options"></ul>
  </div>
  <button type="button" class="aero-clippy-char" id="aero-clippy-char" aria-label="LANny the assistant. Click for another tip.">
    <svg class="aero-clippy-art" viewBox="26 4 68 136" aria-hidden="true" focusable="false">
      <path class="aero-clip-edge" d="M76 104V46a20 20 0 0 0-40 0v64a16 16 0 0 0 32 0V74a10 10 0 0 0-20 0v30"/>
      <path class="aero-clip-wire" d="M76 104V46a20 20 0 0 0-40 0v64a16 16 0 0 0 32 0V74a10 10 0 0 0-20 0v30"/>
      <ellipse class="aero-clip-eye" cx="46" cy="36" rx="9" ry="10"/>
      <ellipse class="aero-clip-eye" cx="67" cy="36" rx="9" ry="10"/>
      <circle class="aero-clip-pupil" cx="48" cy="38" r="4.2"/>
      <circle class="aero-clip-pupil" cx="69" cy="38" r="4.2"/>
      <path class="aero-clip-brow" d="M35 20Q44 9 54 14"/>
      <path class="aero-clip-brow" d="M59 14Q69 9 78 20"/>
    </svg>
  </button>
</div>

<div class="aero-tip" id="aero-tip" role="status" hidden>
  <div class="aero-tip-head">
    <svg class="aero-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-network"/></svg>
    <strong>PONGNET is now connected</strong>
    <button type="button" class="aero-tip-close" id="aero-tip-close" aria-label="Dismiss this message">&#10005;</button>
  </div>
  <p class="aero-tip-body">Local Area Connection &middot; Speed: 100.0 Mbps &middot; Forty-eight hours of it, in the Great Hall.</p>
</div>
