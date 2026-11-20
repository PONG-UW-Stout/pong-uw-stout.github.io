---
title: Cozy-LAN
start_date: 2024-11-22
end_date: 2024-11-24
description: >-
  Cozy-LAN: 48 hours in the MSC Great Hall and Ballrooms with the string lights
  up. Games, tournaments, prizes.

ticker: "COZY-LAN · GAMES. TOURNAMENTS. PRIZES. · NOV 22-24 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · STRING LIGHTS UP · 48 HOURS ·"

headline: Cozy-LAN
tagline: "Games. Tournaments. Prizes."

when_label: When
when_value: "Fri, Nov 22nd - Sun, Nov 24th, 4pm-4pm"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

dates_display: "NOV 22-24"

facts:
  - icon: ico-cal
    label: Dates
    value: "Nov 22-24, 2024"
  - icon: ico-hall
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-lamp
    label: Theme
    value: "Cozy"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/cozy-lan_schedule.webp
schedule_alt: >-
  The Cozy-LAN weekend schedule: four columns of events, each flagged free to
  play and/or competitive. The full running order follows below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "6:00 PM"
        name: "Magic: The Gathering Tourney"
        free: true
        contest: true
      - time: "8:00 PM"
        name: VR Draw Battle
        free: true
      - time: "9:30 PM"
        name: Frostbite Frenzy
      - time: "11:00 PM"
        name: Fall Guys
        free: true

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Wheel of Fortune
        free: true
        contest: true
      - time: "1:30 AM"
        name: Team Fortress 2
        free: true
      - time: "12:00 PM"
        name: Speed UNO
        free: true
        contest: true
      - time: "1:00 PM"
        name: Golf With Your Friends
      - time: "1:00 PM"
        name: Super Smash Bros. Ultimate
        free: true
        contest: true
      - time: "2:00 PM"
        name: Chess.com
        free: true
        contest: true
      - time: "4:00 PM"
        name: "Call of Duty: Black Ops 6"
        note: "Game-Mode is TBA!"
      - time: "4:30 PM"
        name: Rivals of Aether II
        contest: true
      - time: "5:00 PM"
        name: Pico Park
      - time: "7:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "9:00 PM"
        name: Group Photo
      - time: "9:30 PM"
        name: Board Game Roulette
        free: true
      - time: "10:00 PM"
        name: webfishing

  - name: Sunday
    events:
      - time: "12:00 AM"
        name: Jackbox Games
        free: true
      - time: "1:00 AM"
        name: Lethal Company
      - time: "12:00 PM"
        name: Party Games
        free: true
      - time: "2:00 PM"
        name: Prize Drawing

all_lan:
  - name: Stardew Valley Bingo
    body: Running the whole weekend rather than at a set time.

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 TICKETS, Second place will receive 2 TICKETS, and all other Participants will receive 1 TICKET."
  - tag: FREE
    kind: free
    body: "Marks an event that is FREE to buy or play. All PONG events are Free to Participate in."
legend_note: "Example: you can play in a Minecraft event, but it is not a free game."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A blanket. It is in the name.
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 2:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets toward the Sunday drawing."
  - q: "What was Stardew Valley Bingo?"
    a: "A bingo card that ran all weekend instead of at a set time. People crossed off squares whenever they got the chance."
---

<link rel="stylesheet" href="{{ '/assets/css/cozy-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/cozy-lan.js' | relative_url }}" defer></script>

<div class="cozy-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-lamp" viewBox="0 0 32 32">
    <path d="M8 6h16l4 10H4z"/>
    <path d="M16 16v8"/>
    <path d="M10 28h12"/>
    <path d="M13 24h6v4h-6z"/>
  </symbol>

  <symbol id="ico-cal" viewBox="0 0 32 32">
    <path d="M3 7h26v22H3z"/>
    <path d="M3 14h26"/>
    <path d="M9 3v6"/>
    <path d="M23 3v6"/>
    <rect x="8" y="18" width="5" height="4" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <path d="M16 16h7"/>
    <path d="M16 16V8"/>
  </symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32">
    <path d="M3 10h26v12H3z"/>
    <path d="M23 10v12" stroke-dasharray="2 2"/>
    <path d="M6 14h14"/>
    <path d="M6 17h10"/>
    <path d="M6 20h6"/>
  </symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32">
    <path d="M3 13 16 4l13 9"/>
    <path d="M6 13v15h20V13"/>
    <path d="M13 28v-8h6v8"/>
  </symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32">
    <path d="M11 4v7"/>
    <path d="M21 4v7"/>
    <path d="M7 11h18v4a9 9 0 0 1-18 0z"/>
    <path d="M16 24v5"/>
  </symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32">
    <path d="M3 10h26v17H3z"/>
    <path d="M12 10V6h8v4"/>
    <path d="M3 17h26"/>
    <rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-help" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/>
    <rect x="16" y="21.5" width="2" height="2" fill="currentColor" stroke="none"/>
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
    <path d="M4 16h24"/>
    <path d="M6.5 9.5c5 2.5 14 2.5 19 0"/>
    <path d="M6.5 22.5c5-2.5 14-2.5 19 0"/>
  </symbol>

</svg>
</div>

{% capture lights %}
  <svg class="cozy-lights" viewBox="0 0 160 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <polyline class="cozy-wire" points="0,3 10,10 20,3 30,10 40,3 50,10 60,3 70,10 80,3 90,10 100,3 110,10 120,3 130,10 140,3 150,10 160,3"/>
    <rect class="cozy-bulb b1" x="8.5"   y="10" width="3" height="5"/>
    <rect class="cozy-bulb b2" x="28.5"  y="10" width="3" height="5"/>
    <rect class="cozy-bulb b3" x="48.5"  y="10" width="3" height="5"/>
    <rect class="cozy-bulb b4" x="68.5"  y="10" width="3" height="5"/>
    <rect class="cozy-bulb b1" x="88.5"  y="10" width="3" height="5"/>
    <rect class="cozy-bulb b2" x="108.5" y="10" width="3" height="5"/>
    <rect class="cozy-bulb b3" x="128.5" y="10" width="3" height="5"/>
    <rect class="cozy-bulb b4" x="148.5" y="10" width="3" height="5"/>
  </svg>
{% endcapture %}

<div class="cozy-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="cozy-hero">
  <div class="cozy-hero-head">
    <h1 class="cozy-title">{{ page.headline }}</h1>
    {{ lights }}
    <p class="cozy-tagline">{{ page.tagline }}</p>
  </div>

  <div class="cozy-room">
    <svg class="cozy-room-art" viewBox="0 0 160 92" aria-hidden="true" focusable="false">
    <g class="px-wall">
      <rect x="0" y="0" width="160" height="64" class="px-wall-f"/>
      <rect x="0" y="57" width="160" height="7" class="px-wall-d"/>
      <rect x="0" y="62" width="160" height="3" class="px-skirt"/>
    </g>
    <g class="px-floor">
      <rect x="0" y="64" width="160" height="28" class="px-floor-f"/>
      <rect x="0" y="64" width="160" height="1" class="px-floor-l"/>
      <rect x="10" y="64" width="1" height="6" class="px-floor-l"/>
      <rect x="46" y="64" width="1" height="6" class="px-floor-l"/>
      <rect x="82" y="64" width="1" height="6" class="px-floor-l"/>
      <rect x="118" y="64" width="1" height="6" class="px-floor-l"/>
      <rect x="154" y="64" width="1" height="6" class="px-floor-l"/>
      <rect x="0" y="70" width="160" height="1" class="px-floor-l"/>
      <rect x="28" y="70" width="1" height="7" class="px-floor-l"/>
      <rect x="64" y="70" width="1" height="7" class="px-floor-l"/>
      <rect x="100" y="70" width="1" height="7" class="px-floor-l"/>
      <rect x="136" y="70" width="1" height="7" class="px-floor-l"/>
      <rect x="0" y="77" width="160" height="1" class="px-floor-l"/>
      <rect x="10" y="77" width="1" height="8" class="px-floor-l"/>
      <rect x="46" y="77" width="1" height="8" class="px-floor-l"/>
      <rect x="82" y="77" width="1" height="8" class="px-floor-l"/>
      <rect x="118" y="77" width="1" height="8" class="px-floor-l"/>
      <rect x="154" y="77" width="1" height="8" class="px-floor-l"/>
      <rect x="0" y="85" width="160" height="1" class="px-floor-l"/>
      <rect x="28" y="85" width="1" height="7" class="px-floor-l"/>
      <rect x="64" y="85" width="1" height="7" class="px-floor-l"/>
      <rect x="100" y="85" width="1" height="7" class="px-floor-l"/>
      <rect x="136" y="85" width="1" height="7" class="px-floor-l"/>
    </g>
    <g class="px-lights">
      <polyline class="px-wire" points="0,4 10,11 20,4 30,11 40,4 50,11 60,4 70,11 80,4 90,11 100,4 110,11 120,4 130,11 140,4 150,11 160,4"/>
      <rect x="9" y="11" width="2" height="3" class="px-bulb b1"/>
      <rect x="29" y="11" width="2" height="3" class="px-bulb b3"/>
      <rect x="49" y="11" width="2" height="3" class="px-bulb b1"/>
      <rect x="69" y="11" width="2" height="3" class="px-bulb b3"/>
      <rect x="89" y="11" width="2" height="3" class="px-bulb b1"/>
      <rect x="109" y="11" width="2" height="3" class="px-bulb b3"/>
      <rect x="129" y="11" width="2" height="3" class="px-bulb b1"/>
      <rect x="149" y="11" width="2" height="3" class="px-bulb b3"/>
    </g>
    <g class="px-window">
      <rect x="8" y="12" width="32" height="27" class="px-frame"/>
      <rect x="10" y="14" width="28" height="23" class="px-sky"/>
      <rect x="23" y="14" width="2" height="23" class="px-frame"/>
      <rect x="6" y="37" width="36" height="2" class="px-sill"/>
      <rect x="28" y="17" width="6" height="7" class="px-moon"/>
      <rect x="30" y="18" width="5" height="5" class="px-sky"/>
      <rect x="13" y="17" width="1" height="1" class="px-star"/>
      <rect x="18" y="22" width="1" height="1" class="px-star"/>
      <rect x="14" y="28" width="1" height="1" class="px-star"/>
      <rect x="20" y="31" width="1" height="1" class="px-star"/>
      <rect x="33" y="29" width="1" height="1" class="px-star"/>
      <rect x="36" y="21" width="1" height="1" class="px-star"/>
      <rect x="12" y="33" width="1" height="1" class="px-star"/>
      <rect x="12" y="32" width="5" height="5" class="px-pot"/>
      <rect x="13" y="28" width="1" height="4" class="px-leaf"/>
      <rect x="11" y="29" width="2" height="2" class="px-leaf"/>
      <rect x="15" y="29" width="2" height="2" class="px-leaf"/>
    </g>
    <g class="px-shelf">
      <rect x="45" y="26" width="16" height="2" class="px-wood"/>
      <rect x="45" y="35" width="16" height="2" class="px-wood"/>
      <rect x="49" y="21" width="6" height="5" class="px-pumpkin"/>
      <rect x="51" y="20" width="2" height="1" class="px-leaf"/>
      <rect x="47" y="31" width="2" height="4" class="px-book1"/>
      <rect x="50" y="31" width="2" height="4" class="px-book2"/>
      <rect x="53" y="31" width="2" height="4" class="px-book3"/>
      <rect x="57" y="32" width="3" height="3" class="px-leaf"/>
    </g>
    <g class="px-door">
      <rect x="66" y="12" width="30" height="52" class="px-doorframe"/>
      <rect x="68" y="14" width="26" height="50" class="px-doorface"/>
      <rect x="72" y="18" width="8" height="15" class="px-doorpanel"/>
      <rect x="82" y="18" width="8" height="15" class="px-doorpanel"/>
      <rect x="72" y="37" width="8" height="15" class="px-doorpanel"/>
      <rect x="82" y="37" width="8" height="15" class="px-doorpanel"/>
      <rect x="90" y="39" width="2" height="4" class="px-handle"/>
    </g>
    <g class="px-posters">
      <rect x="101" y="17" width="15" height="19" class="px-poster1"/>
      <rect x="103" y="19" width="11" height="15" class="px-poster1in"/>
      <rect x="120" y="19" width="17" height="13" class="px-poster2"/>
      <rect x="122" y="21" width="13" height="9" class="px-poster2in"/>
    </g>
    <g class="px-bed">
      <rect x="98" y="53" width="13" height="11" class="px-wood"/>
      <rect x="102" y="48" width="4" height="5" class="px-glass"/>
      <rect x="150" y="33" width="8" height="31" class="px-wood"/>
      <rect x="112" y="50" width="46" height="14" class="px-wood"/>
      <rect x="112" y="52" width="34" height="10" class="px-blanket"/>
      <rect x="146" y="51" width="10" height="6" class="px-pillow"/>
    </g>
    <g class="px-desk">
      <rect x="5" y="54" width="38" height="2" class="px-wood"/>
      <rect x="6" y="56" width="2" height="8" class="px-wood"/>
      <rect x="40" y="56" width="2" height="8" class="px-wood"/>
      <rect x="35" y="57" width="5" height="7" class="px-tower"/>
      <rect x="20" y="41" width="17" height="13" class="px-monitor"/>
      <rect x="22" y="43" width="13" height="9" class="px-screen"/>
      <rect x="25" y="45" width="1" height="2" class="px-screenink"/>
      <rect x="31" y="45" width="1" height="2" class="px-screenink"/>
      <rect x="25" y="49" width="7" height="1" class="px-screenink"/>
      <rect x="24" y="48" width="1" height="1" class="px-screenink"/>
      <rect x="32" y="48" width="1" height="1" class="px-screenink"/>
      <rect x="6" y="45" width="5" height="15" class="px-chair"/>
      <rect x="6" y="60" width="12" height="4" class="px-chair"/>
      <rect x="9" y="48" width="9" height="12" class="px-person"/>
      <rect x="10" y="41" width="8" height="7" class="px-hair"/>
      <rect x="9" y="42" width="1" height="5" class="px-phones"/>
      <rect x="18" y="42" width="1" height="5" class="px-phones"/>
    </g>
    </svg>
  </div>

  <div class="cozy-hero-copy">
    <dl class="cozy-details">
      <dt>{{ page.when_label }}:</dt>
      <dd>{{ page.when_value }}</dd>
      <dt>{{ page.where_label }}:</dt>
      <dd>{{ page.where_value }}</dd>
    </dl>

    <div class="cozy-hero-actions">
      {% if page.registration_url and page.registration_url != "" %}
      <a class="cozy-btn cozy-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
      {% endif %}
      <a class="cozy-btn cozy-btn--primary" href="#running-order">See What Is On</a>
      <a class="cozy-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
    </div>
  </div>
</section>

<div class="cozy-countdown-wrap" id="cozy-countdown-wrap">
  <p class="cozy-countdown-head" id="cozy-countdown-head">Time Remaining Until Doors Open</p>
  <div class="cozy-countdown" id="cozy-countdown" aria-label="Countdown to Cozy-LAN">
    <div class="cozy-countdown-unit">
      <span class="cozy-countdown-num" data-unit="days">--</span>
      <span class="cozy-countdown-label">Days</span>
    </div>
    <div class="cozy-countdown-unit">
      <span class="cozy-countdown-num" data-unit="hours">--</span>
      <span class="cozy-countdown-label">Hours</span>
    </div>
    <div class="cozy-countdown-unit">
      <span class="cozy-countdown-num" data-unit="minutes">--</span>
      <span class="cozy-countdown-label">Minutes</span>
    </div>
    <div class="cozy-countdown-unit">
      <span class="cozy-countdown-num" data-unit="seconds">--</span>
      <span class="cozy-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="cozy-facts">
  <table class="cozy-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="cozy-th-inner">
            <svg class="cozy-icon cozy-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="cozy-panel" id="schedule">
  <div class="cozy-panel-body">
    <h2 class="cozy-panel-title">
      <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
      The Schedule
    </h2>
    <p class="cozy-panel-sub">{{ page.schedule_note }}</p>

    <div class="cozy-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="cozy-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="cozy-schedule-img">
        <div class="cozy-noimg">
          <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-lamp"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="cozy-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="cozy-screen is-missing">
        <div class="cozy-noimg">
          <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-lamp"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="cozy-zoom" id="schedule-zoom">
  <a class="cozy-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="cozy-zoom-frame">
    <a class="cozy-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="cozy-panel" id="running-order">
  <div class="cozy-panel-body">
    <h2 class="cozy-panel-title">
      <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="cozy-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="cozy-days">
      {% for session in page.sessions %}
      <div class="cozy-day cozy-reveal">
        <h3 class="cozy-day-name">{{ session.name }}</h3>
        <ul class="cozy-slots">
          {% for ev in session.events %}
          <li class="cozy-slot">
            <span class="cozy-slot-time">{{ ev.time }}</span>
            <span class="cozy-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="cozy-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="cozy-slot-tags">
              {% if ev.free %}<span class="cozy-tag cozy-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="cozy-tag cozy-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="cozy-day cozy-day--all cozy-reveal">
        <h3 class="cozy-day-name">All LAN</h3>
        <ul class="cozy-slots">
          {% for ev in page.all_lan %}
          <li class="cozy-slot">
            <span class="cozy-slot-time">All weekend</span>
            <span class="cozy-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="cozy-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="cozy-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="cozy-legend">
      {% for item in page.legend %}
      <p class="cozy-legend-row">
        <span class="cozy-tag cozy-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="cozy-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
</section>

<section class="cozy-panel" id="kit">
  <div class="cozy-panel-body">
    <h2 class="cozy-panel-title">
      <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="cozy-panel-sub">Power and network are ours to supply</p>
    <ul class="cozy-kit">
      {% for item in page.kit %}
      <li class="cozy-kit-item">
        <span class="cozy-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="cozy-panel" id="faq">
  <div class="cozy-panel-body">
    <h2 class="cozy-panel-title">
      <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="cozy-panel-sub">Answered once, so you need not ask twice</p>
    <div class="cozy-faq">
      {% for entry in page.faq %}
      <details class="cozy-faq-item">
        <summary class="cozy-faq-q">{{ entry.q }}</summary>
        <p class="cozy-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="cozy-panel" id="sponsors">
  <div class="cozy-panel-body">
    <h2 class="cozy-panel-title">
      <svg class="cozy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="cozy-panel-sub">The weekend runs on their help</p>
    <div class="cozy-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="cozy-sponsor cozy-reveal">
        <div class="cozy-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="cozy-sponsor-name">{{ sponsor.name }}</div>
        <div class="cozy-sponsor-tier">{{ tier[0] }}</div>
        <div class="cozy-sponsor-links">
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

<footer class="cozy-footer">
  {{ lights }}
  <div class="cozy-footer-cards">
    <div class="cozy-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="cozy-footer-card">
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
  <p class="cozy-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
