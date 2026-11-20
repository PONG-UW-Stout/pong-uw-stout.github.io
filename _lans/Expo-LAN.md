---
title: Expo-LAN
start_date: 2023-09-22
end_date: 2023-09-24
description: >-
  Expo-LAN: 48 hours of midway under the lights in the MSC Great Hall and
  Ballrooms. Games, tournaments, prizes.

ticker: "EXPO-LAN · GAMES - TOURNAMENTS - PRIZES · SEPT 22-24 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · STEP RIGHT UP · 48 HOURS ·"

headline_a: EXP
headline_b: "-LAN"
tagline: "Games - Tournaments - Prizes"
from_label: From
from_value: "Friday Sept. 22nd, 4PM"
to_label: To
to_value: "Sunday Sept. 24th, 4PM"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"
dates_display: "SEPT 22-24"

facts:
  - { icon: ico-wheel, label: Dates,    value: "Sept 22-24, 2023" }
  - { icon: ico-hall,  label: Venue,    value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock, label: Duration, value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,  label: Theme,    value: "The midway" }
  - { icon: ico-plug,  label: Network,  value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/expo-lan_schedule.webp
schedule_alt: >-
  The Expo-LAN weekend schedule: four columns of events, each flagged free to
  play and/or competitive. The full running order follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "6:00 PM"
        name: VALORANT
        free: true
        contest: true
      - time: "7:00 PM"
        name: Jackbox Games
        free: true
      - time: "9:00 PM"
        name: TETR.IO
        contest: true
      - time: "11:00 PM"
        name: Dollar Chug
        free: true
  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Meme Jeopardy!
        free: true
      - time: "1:30 AM"
        name: Fall Guys
        free: true
      - time: "2:00 AM"
        name: Phasmophobia
      - time: "12:00 PM"
        name: Clone Hero
        free: true
        contest: true
      - time: "12:00 PM"
        name: Speed UNO
        free: true
      - time: "1:30 PM"
        name: ROUNDS
        free: true
        contest: true
      - time: "2:00 PM"
        name: Super Smash Bros.
        free: true
        contest: true
      - time: "3:00 PM"
        name: Beat Saber
        contest: true
      - time: "4:00 PM"
        name: Among Us
        free: true
      - time: "6:00 PM"
        name: Hook, Line, and Creeper
        note: Minecraft
        contest: true
      - time: "8:00 PM"
        name: Don't Drink and Drive!
        note: Mario Kart
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
      - time: "10:00 PM"
        name: Name That Picture
        free: true
      - time: "10:00 PM"
        name: "Halo: The Master Chief Collection"
  - name: Sunday
    events:
      - time: "12:00 AM"
        name: Left 4 Dead 2
      - time: "2:00 AM"
        name: Crab Game
        free: true
      - time: "12:00 PM"
        name: Party Games
        free: true

all_lan: []

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 tickets each and second place will receive 2 tickets. All participants will earn 1 ticket for playing. In casual events, 1 ticket will be awarded for participation."
  - tag: FREE
    kind: free
    body: "Marks a free to download/play game. All PONG events are free to participate in."

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
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. There was no separate prize drawing at this one."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
---

<link rel="stylesheet" href="{{ '/assets/css/expo-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/expo-lan.js' | relative_url }}" defer></script>

<div class="expo-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-cal" viewBox="0 0 32 32"><path d="M3 7h26v22H3z"/><path d="M3 14h26"/><path d="M9 3v6"/><path d="M23 3v6"/><rect x="8" y="18" width="5" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

  <symbol id="ico-mail" viewBox="0 0 32 32"><path d="M3 7h26v18H3z"/><path d="M3 7l13 10L29 7"/></symbol>

  <symbol id="ico-globe" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><ellipse cx="16" cy="16" rx="5" ry="12"/><path d="M4 16h24"/><path d="M6.5 9.5c5 2.5 14 2.5 19 0"/><path d="M6.5 22.5c5-2.5 14-2.5 19 0"/></symbol>

  <symbol id="ico-wheel" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><circle cx="16" cy="16" r="2"/><path d="M16 4v24M4 16h24M7.5 7.5l17 17M24.5 7.5l-17 17"/></symbol>

</svg>
</div>
<div class="expo-night" aria-hidden="true">
  <div class="expo-bokeh">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
</div>

{% capture bulbs %}
  <svg class="expo-bulbs" viewBox="0 0 240 22" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path class="expo-bulb-wire" d="M0 3 Q30 20 60 3 T120 3 T180 3 T240 3"/>
    <g class="expo-bulb-row">
      <circle class="expo-bulb b1" cx="30"  cy="13" r="4"/>
      <circle class="expo-bulb b2" cx="60"  cy="4"  r="4"/>
      <circle class="expo-bulb b3" cx="90"  cy="13" r="4"/>
      <circle class="expo-bulb b4" cx="120" cy="4"  r="4"/>
      <circle class="expo-bulb b1" cx="150" cy="13" r="4"/>
      <circle class="expo-bulb b2" cx="180" cy="4"  r="4"/>
      <circle class="expo-bulb b3" cx="210" cy="13" r="4"/>
    </g>
  </svg>
{% endcapture %}

<div class="expo-marquee" aria-hidden="true"><span>{{ page.ticker }}</span></div>
{{ bulbs }}

<section class="expo-hero">
  <p class="expo-presents">PONG presents:</p>

  <h1 class="expo-title">
    <span>{{ page.headline_a }}</span>
    <svg class="expo-title-wheel" viewBox="-50 -50 100 100" aria-hidden="true" focusable="false">
        <g class="expo-wheel-spin">
          <circle class="expo-rim" cx="0" cy="0" r="38"/>
          <circle class="expo-rim expo-rim--in" cx="0" cy="0" r="19.76"/>
          <path class="expo-spoke" d="M0 0 L0.0 -38.0"/>
          <path class="expo-spoke" d="M0 0 L19.0 -32.9"/>
          <path class="expo-spoke" d="M0 0 L32.9 -19.0"/>
          <path class="expo-spoke" d="M0 0 L38.0 0.0"/>
          <path class="expo-spoke" d="M0 0 L32.9 19.0"/>
          <path class="expo-spoke" d="M0 0 L19.0 32.9"/>
          <path class="expo-spoke" d="M0 0 L0.0 38.0"/>
          <path class="expo-spoke" d="M0 0 L-19.0 32.9"/>
          <path class="expo-spoke" d="M0 0 L-32.9 19.0"/>
          <path class="expo-spoke" d="M0 0 L-38.0 0.0"/>
          <path class="expo-spoke" d="M0 0 L-32.9 -19.0"/>
          <path class="expo-spoke" d="M0 0 L-19.0 -32.9"/>
          <g class="expo-car-anchor" transform="translate(0.0 -38.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--a" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(19.0 -32.9)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--b" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(32.9 -19.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--a" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(38.0 0.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--b" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(32.9 19.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--a" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(19.0 32.9)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--b" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(0.0 38.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--a" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-19.0 32.9)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--b" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-32.9 19.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--a" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-38.0 0.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--b" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-32.9 -19.0)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--a" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-19.0 -32.9)">
            <g class="expo-car-level">
              <circle class="expo-car expo-car--b" cx="0" cy="0" r="4.6"/>
            </g>
          </g>
          <circle class="expo-hub" cx="0" cy="0" r="4"/>
        </g>
    </svg>
    <span>{{ page.headline_b }}</span>
  </h1>

  <p class="expo-tagline">{{ page.tagline }}</p>

  <div class="expo-wheel-stage">
    <svg class="expo-wheel" viewBox="-130 -140 260 310" aria-hidden="true" focusable="false">
        <g class="expo-legs">
          <path d="M-8 0 L-62 150 L-92 150 L-26 0z"/>
          <path d="M8 0 L62 150 L92 150 L26 0z"/>
          <rect x="-104" y="146" width="208" height="12" rx="5"/>
          <path class="expo-leg-brace" d="M-46 92 L46 92"/>
        </g>
        <g class="expo-wheel-spin">
          <circle class="expo-rim" cx="0" cy="0" r="116"/>
          <circle class="expo-rim expo-rim--in" cx="0" cy="0" r="60.32"/>
          <path class="expo-spoke" d="M0 0 L0.0 -116.0"/>
          <path class="expo-spoke" d="M0 0 L44.4 -107.2"/>
          <path class="expo-spoke" d="M0 0 L82.0 -82.0"/>
          <path class="expo-spoke" d="M0 0 L107.2 -44.4"/>
          <path class="expo-spoke" d="M0 0 L116.0 0.0"/>
          <path class="expo-spoke" d="M0 0 L107.2 44.4"/>
          <path class="expo-spoke" d="M0 0 L82.0 82.0"/>
          <path class="expo-spoke" d="M0 0 L44.4 107.2"/>
          <path class="expo-spoke" d="M0 0 L0.0 116.0"/>
          <path class="expo-spoke" d="M0 0 L-44.4 107.2"/>
          <path class="expo-spoke" d="M0 0 L-82.0 82.0"/>
          <path class="expo-spoke" d="M0 0 L-107.2 44.4"/>
          <path class="expo-spoke" d="M0 0 L-116.0 0.0"/>
          <path class="expo-spoke" d="M0 0 L-107.2 -44.4"/>
          <path class="expo-spoke" d="M0 0 L-82.0 -82.0"/>
          <path class="expo-spoke" d="M0 0 L-44.4 -107.2"/>
          <g class="expo-car-anchor" transform="translate(0.0 -116.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(44.4 -107.2)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(82.0 -82.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(107.2 -44.4)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(116.0 0.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(107.2 44.4)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(82.0 82.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(44.4 107.2)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(0.0 116.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-44.4 107.2)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-82.0 82.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-107.2 44.4)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-116.0 0.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-107.2 -44.4)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-82.0 -82.0)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--a" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--a" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <g class="expo-car-anchor" transform="translate(-44.4 -107.2)">
            <g class="expo-car-level">
              <path class="expo-car-bar expo-car--b" d="M0 -6.5 V0"/>
              <rect class="expo-car expo-car--b" x="-10.14" y="0" width="20.28" height="16.25" rx="3"/>
            </g>
          </g>
          <circle class="expo-hub" cx="0" cy="0" r="11"/>
        </g>
    </svg>
  </div>

  <div class="expo-boards">
    <div class="expo-board">
      <p class="expo-board-label">{{ page.from_label }}:</p>
      <p class="expo-board-value">{{ page.from_value }}</p>
    </div>
    <div class="expo-board">
      <p class="expo-board-label">{{ page.to_label }}:</p>
      <p class="expo-board-value">{{ page.to_value }}</p>
    </div>
    <div class="expo-board">
      <p class="expo-board-label">{{ page.where_label }}:</p>
      <p class="expo-board-value">{{ page.where_value }}</p>
    </div>
  </div>

  <div class="expo-hero-actions">
    <a class="expo-btn expo-btn--primary" href="#running-order">See What Is On</a>
    <a class="expo-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="expo-countdown-wrap" id="expo-countdown-wrap">
  <p class="expo-countdown-head" id="expo-countdown-head">Time Remaining Until Doors Open</p>
  <div class="expo-countdown" id="expo-countdown" aria-label="Countdown to Expo-LAN">
    <div class="expo-countdown-unit"><span class="expo-countdown-num" data-unit="days">--</span><span class="expo-countdown-label">Days</span></div>
    <div class="expo-countdown-unit"><span class="expo-countdown-num" data-unit="hours">--</span><span class="expo-countdown-label">Hours</span></div>
    <div class="expo-countdown-unit"><span class="expo-countdown-num" data-unit="minutes">--</span><span class="expo-countdown-label">Minutes</span></div>
    <div class="expo-countdown-unit"><span class="expo-countdown-num" data-unit="seconds">--</span><span class="expo-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="expo-facts">
  <table class="expo-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="expo-th-inner">
            <svg class="expo-icon expo-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="expo-panel" id="schedule">
  <div class="expo-panel-body">
    <h2 class="expo-panel-title">
      <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wheel"/></svg>
      The Schedule
    </h2>
    <p class="expo-panel-sub">{{ page.schedule_note }}</p>

    <div class="expo-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="expo-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="expo-schedule-img">
        <div class="expo-noimg">
          <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wheel"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="expo-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="expo-screen is-missing">
        <div class="expo-noimg">
          <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wheel"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="expo-zoom" id="schedule-zoom">
  <a class="expo-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="expo-zoom-frame">
    <a class="expo-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="expo-panel" id="running-order">
  <div class="expo-panel-body">
    <h2 class="expo-panel-title">
      <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="expo-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="expo-days">
      {% for session in page.sessions %}
      <div class="expo-day expo-reveal">
        <h3 class="expo-day-name">{{ session.name }}</h3>
        <ul class="expo-slots">
          {% for ev in session.events %}
          <li class="expo-slot">
            <span class="expo-slot-time">{{ ev.time }}</span>
            <span class="expo-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="expo-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="expo-slot-tags">
              {% if ev.free %}<span class="expo-tag expo-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="expo-tag expo-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="expo-day expo-day--all expo-reveal">
        <h3 class="expo-day-name">All LAN</h3>
        <ul class="expo-slots">
          {% for ev in page.all_lan %}
          <li class="expo-slot">
            <span class="expo-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="expo-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="expo-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="expo-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="expo-legend">
      {% for item in page.legend %}
      <p class="expo-legend-row">
        <span class="expo-tag expo-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="expo-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="expo-panel" id="kit">
  <div class="expo-panel-body">
    <h2 class="expo-panel-title">
      <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="expo-panel-sub">Power and network are ours to supply</p>
    <ul class="expo-kit">
      {% for item in page.kit %}
      <li class="expo-kit-item"><span class="expo-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="expo-panel" id="faq">
  <div class="expo-panel-body">
    <h2 class="expo-panel-title">
      <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="expo-panel-sub">Answered once, so you need not ask twice</p>
    <div class="expo-faq">
      {% for entry in page.faq %}
      <details class="expo-faq-item">
        <summary class="expo-faq-q">{{ entry.q }}</summary>
        <p class="expo-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="expo-panel" id="sponsors">
  <div class="expo-panel-body">
    <h2 class="expo-panel-title">
      <svg class="expo-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="expo-panel-sub">The weekend runs on their help</p>
    <div class="expo-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="expo-sponsor expo-reveal">
        <div class="expo-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="expo-sponsor-name">{{ sponsor.name }}</div>
        <div class="expo-sponsor-tier">{{ tier[0] }}</div>
        <div class="expo-sponsor-links">
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
</section>

<footer class="expo-footer">
  <div class="expo-footer-cards">
    <div class="expo-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="expo-footer-card">
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
  <p class="expo-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
