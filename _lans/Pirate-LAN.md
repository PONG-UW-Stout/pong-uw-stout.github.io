---
title: PirateLAN
start_date: 2021-11-19
end_date: 2021-11-21
description: >-
  PirateLAN: a 48-hour gaming event in the MSC Great Hall and Ballrooms.
  Games, tournaments, plunder.

ticker: "PIRATELAN · GAMES - TOURNAMENTS - PLUNDER · NOV 19-21 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · RAISE THE ANCHOR AND HOIST THE SAILS · 48 HOURS ·"

headline: PirateLAN
tagline_a: Games
tagline_b: Tournaments
tagline_c: Plunder

ahoy: "Ahoy, Gamers!"
line_1: "Raise the anchor and hoist the sails, take a voyage to the PirateLAN!"
line_2: "A 48-hour Gaming Event hosted by PONG at the MSC Great Hall & Ballrooms."

sail: "Set Sail"
from_day: "Nov. 19"
from_ord: th
from_time: "4pm"
to_day: "Nov. 21"
to_ord: st
to_time: "4pm"

facts:
  - { icon: ico-anchor, label: Dates,     value: "November 19-21, 2021" }
  - { icon: ico-hall,   label: Venue,     value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock,  label: Duration,  value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-chest,  label: Featuring, value: "Blue Devil Smash and Table Top Games" }
  - { icon: ico-plug,   label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/pirate-lan_schedule.png
schedule_alt: >-
  The PirateLAN weekend schedule: three columns of events joined by a dashed
  route, colour-keyed by day, with the free-to-play ones flagged. The full
  running order follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "6:00 PM",  name: "Overwatch" }
      - { time: "7:00 PM",  name: "Jackbox Games", free: true }
      - { time: "9:00 PM",  name: "Minecraft UHC" }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Wiki That How?", free: true }
      - { time: "2:30 AM",  name: "Left 4 Dead 2" }
      - { time: "12:00 PM", name: "Among Us", mobile: true }
      - { time: "2:00 PM",  name: "Tom Clancy's Rainbow Six Siege" }
      - { time: "5:00 PM",  name: "Blackwake" }
      - { time: "6:30 PM",  name: "Team Fortress 2", free: true }
      - { time: "9:00 PM",  name: "Minecraft: Hedge Legends" }
      - { time: "10:00 PM", name: "Rocket League" }
  - name: Sunday
    events:
      - { time: "12:00 AM", name: "Worms", free: true }
      - { time: "2:30 AM",  name: "Golf With Your Friends" }
      - { time: "12:30 PM", name: "Jackbox Games", free: true }
      - { time: "1:30 PM",  name: "Beat Saber", free: true }
      - { time: "3:00 PM",  name: "Prize Drawing" }

all_lan:
  - name: "Blue Devil Smash"
    when: "Sat, 1 PM"
    free: true
    body: "Super Smash Bros. Ultimate and Guilty Gear -Strive-, run by Blue Devil Smash."
  - name: "Table Top Games"
    when: "All weekend"
    free: true
    body: "Events throughout the PirateLAN."

legend:
  - tag: FREE
    kind: free
    body: "Marks a game that is free to buy or play. All PONG events are free to participate in."
legend_note: "Every event at this LAN ran casually, so none of them were competitive."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Rocket League goes
  - A phone, if you are joining the Among Us lobby on the Saturday
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "Were there any competitive events?"
    a: "No. Every event at PirateLAN ran casually, so nothing was bracketed and no tickets were paid out for placing. ApocaLAN is the only other LAN on this site like that."
  - q: "Who are Blue Devil Smash?"
    a: "Another Stout club. They ran Smash Ultimate and Guilty Gear -Strive- on Saturday at 1 PM, both free to play."
  - q: "What were the Table Top Games?"
    a: "Tabletop games that ran all weekend instead of at a set time, free to join."
  - q: "Why was Among Us marked free on mobile?"
    a: "The phone version is free. On PC it is a paid game."
---

<link rel="stylesheet" href="{{ '/assets/css/pirate-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/pirate-lan.js' | relative_url }}" defer></script>

<div class="pirate-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-anchor" viewBox="0 0 32 32"><circle cx="16" cy="6" r="3"/><path d="M16 9v20"/><path d="M9 14h14"/><path d="M5 20a11 11 0 0 0 22 0"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

  <symbol id="ico-chest" viewBox="0 0 32 32"><path d="M4 14a12 8 0 0 1 24 0"/><path d="M4 14h24v12H4z"/><path d="M4 19h24"/><rect x="14" y="16" width="4" height="6" fill="currentColor" stroke="none"/></symbol>

</svg>
</div>

<div class="pirate-sea" aria-hidden="true"></div>
<div class="pirate-route" aria-hidden="true">
  <svg viewBox="0 0 400 2400" preserveAspectRatio="none" focusable="false">
    <path d="M44 0 C 76 120, 18 230, 50 360 S 92 520, 60 650 S 250 820, 318 980 S 180 1160, 140 1320 S 60 1500, 120 1660 S 330 1850, 300 2040 S 150 2230, 210 2400"/>
  </svg>
</div>

<div class="pirate-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="pirate-hero">
  <svg class="pirate-plank" viewBox="0 0 760 170" role="img" aria-label="PirateLAN, carved on a wooden plank">
    <defs>
      <linearGradient id="pl-wood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#9a5b36"/>
        <stop offset="42%"  stop-color="#8f502f"/>
        <stop offset="44%"  stop-color="#7c4529"/>
        <stop offset="100%" stop-color="#6e3f29"/>
      </linearGradient>
    </defs>

    <path d="M14 30 L36 20 L58 32 L700 18 L724 30 L746 22 L742 146 L716 152 L696 142 L60 156 L36 146 L16 154 Z"
          fill="url(#pl-wood)"/>
    <path d="M70 58 Q 300 50, 690 56" stroke="#5e3522" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M60 126 Q 340 134, 700 124" stroke="#5e3522" stroke-width="2" fill="none" opacity="0.4"/>

    <g transform="translate(108 87)">
      <g fill="#1f7b9e">
        <path d="M-9 -34 h18 v20 h-18 z"/>
        <path d="M-9 14 h18 v20 h-18 z"/>
      </g>
      <g fill="#d4581f">
        <path d="M-34 -9 h20 v18 h-20 z"/>
        <path d="M14 -9 h20 v18 h-20 z"/>
      </g>
      <g fill="#f0ebdd" transform="rotate(45)">
        <path d="M-6 -40 h12 v80 h-12 z"/>
        <circle cx="-7" cy="-42" r="8"/><circle cx="7" cy="-42" r="8"/>
        <circle cx="-7" cy="42" r="8"/><circle cx="7" cy="42" r="8"/>
      </g>
      <g fill="#f0ebdd" transform="rotate(-45)">
        <path d="M-6 -40 h12 v80 h-12 z"/>
        <circle cx="-7" cy="-42" r="8"/><circle cx="7" cy="-42" r="8"/>
        <circle cx="-7" cy="42" r="8"/><circle cx="7" cy="42" r="8"/>
      </g>
    </g>

    <text x="468" y="116" text-anchor="middle" fill="#f0ebdd"
          style="font-family: Luminari, Trattatello, Herculanum, 'Palatino Linotype', Georgia, serif; font-size: 84px;">PirateLAN</text>
  </svg>

  <h1 class="pirate-tagline">
    {{ page.tagline_a }} <i aria-hidden="true">&#9679;</i>
    {{ page.tagline_b }} <i aria-hidden="true">&#9679;</i>
    {{ page.tagline_c }}
  </h1>

  <div class="pirate-deck">
    <div>
      <h2 class="pirate-ahoy">{{ page.ahoy }}</h2>
      <p class="pirate-line">{{ page.line_1 }}</p>
      <p class="pirate-line">{{ page.line_2 }}</p>
    </div>

    <svg class="pirate-chest" viewBox="0 0 320 260" role="img" aria-label="An open treasure chest full of gold, sitting in sand">
      <path d="M22 236 q34 -26 74 -16 q28 -30 62 -16 q40 -22 76 0 q36 -8 64 20 q-12 18 -46 18 H60 q-30 0 -38 -6 z" fill="#f6e2bd"/>
      <path d="M62 112 a98 70 0 0 1 196 0 v12 H62 z" fill="#6e3f29"/>
      <path d="M78 112 a82 56 0 0 1 164 0 z" fill="#8f502f"/>
      <rect x="62" y="112" width="196" height="14" rx="4" fill="#5e3522"/>
      <rect x="74" y="126" width="172" height="22" fill="#f2c744"/>
      <g fill="#e0ad22">
        <circle cx="96" cy="130" r="9"/><circle cx="124" cy="127" r="9"/>
        <circle cx="152" cy="131" r="9"/><circle cx="180" cy="127" r="9"/>
        <circle cx="208" cy="130" r="9"/><circle cx="232" cy="128" r="8"/>
      </g>
      <rect x="66" y="146" width="188" height="86" rx="6" fill="#8f502f"/>
      <rect x="66" y="146" width="188" height="12" fill="#6e3f29"/>
      <rect x="66" y="196" width="188" height="12" fill="#6e3f29"/>
      <rect x="150" y="150" width="20" height="30" rx="3" fill="#5e3522"/>
      <circle cx="160" cy="170" r="5" fill="#f2c744"/>
      <rect x="66" y="146" width="12" height="86" fill="#6e3f29"/>
      <rect x="242" y="146" width="12" height="86" fill="#6e3f29"/>
    </svg>
  </div>

  <p class="pirate-sail"><i aria-hidden="true">&#126;</i>{{ page.sail }}<i aria-hidden="true">&#126;</i></p>
  <p class="pirate-dates">{{ page.from_day }}<sup>{{ page.from_ord }}</sup>, {{ page.from_time }} - {{ page.to_day }}<sup>{{ page.to_ord }}</sup>, {{ page.to_time }}</p>

  <div class="pirate-hero-actions">
    <a class="pirate-btn pirate-btn--primary" href="#running-order">See What Was On</a>
    <a class="pirate-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="pirate-countdown-wrap" id="pirate-countdown-wrap">
  <p class="pirate-countdown-head" id="pirate-countdown-head">Time Remaining Until Doors Open</p>
  <div class="pirate-countdown" id="pirate-countdown" aria-label="Countdown to PirateLAN">
    <div class="pirate-countdown-unit"><span class="pirate-countdown-num" data-unit="days">--</span><span class="pirate-countdown-label">Days</span></div>
    <div class="pirate-countdown-unit"><span class="pirate-countdown-num" data-unit="hours">--</span><span class="pirate-countdown-label">Hours</span></div>
    <div class="pirate-countdown-unit"><span class="pirate-countdown-num" data-unit="minutes">--</span><span class="pirate-countdown-label">Minutes</span></div>
    <div class="pirate-countdown-unit"><span class="pirate-countdown-num" data-unit="seconds">--</span><span class="pirate-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="pirate-facts">
  <table class="pirate-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="pirate-th-inner">
            <svg class="pirate-icon pirate-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="pirate-panel" id="schedule">
  <div class="pirate-panel-body">
    <h2 class="pirate-panel-title">
      <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-anchor"/></svg>
      The Board
    </h2>
    <p class="pirate-panel-sub">{{ page.schedule_note }}</p>

    <div class="pirate-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="pirate-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="pirate-schedule-img">
        <div class="pirate-noimg">
          <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-anchor"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="pirate-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="pirate-screen is-missing">
        <div class="pirate-noimg">
          <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-anchor"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="pirate-zoom" id="schedule-zoom">
  <a class="pirate-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="pirate-zoom-frame">
    <a class="pirate-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="pirate-panel" id="running-order">
  <div class="pirate-panel-body">
    <h2 class="pirate-panel-title">
      <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="pirate-panel-sub">{{ page.sessions.size }} days &middot; indigo is Friday, purple is Saturday, green is Sunday</p>

    <div class="pirate-days">
      {% for session in page.sessions %}
      <div class="pirate-day pirate-reveal">
        <h3 class="pirate-day-name">{{ session.name }}</h3>
        <ul class="pirate-slots">
          {% for ev in session.events %}
          <li class="pirate-slot">
            <span class="pirate-slot-time">{{ ev.time }}</span>
            <span class="pirate-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="pirate-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="pirate-slot-tags">
              {% if ev.free %}<span class="pirate-tag pirate-tag--free">FREE</span>{% endif %}
              {% if ev.mobile %}<span class="pirate-tag pirate-tag--long">FREE ON MOBILE</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="pirate-day pirate-day--all pirate-reveal">
        <h3 class="pirate-day-name">Also Running</h3>
        <ul class="pirate-slots">
          {% for ev in page.all_lan %}
          <li class="pirate-slot">
            <span class="pirate-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="pirate-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="pirate-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="pirate-slot-tags">
              {% if ev.free %}<span class="pirate-tag pirate-tag--free">FREE</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="pirate-legend">
      {% for item in page.legend %}
      <p class="pirate-legend-row">
        <span class="pirate-tag pirate-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="pirate-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="pirate-panel" id="kit">
  <div class="pirate-panel-body">
    <h2 class="pirate-panel-title">
      <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="pirate-panel-sub">Power and network are ours to supply</p>
    <ul class="pirate-kit">
      {% for item in page.kit %}
      <li class="pirate-kit-item"><span class="pirate-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="pirate-panel" id="faq">
  <div class="pirate-panel-body">
    <h2 class="pirate-panel-title">
      <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="pirate-panel-sub">Answered once, so you need not ask twice</p>
    <div class="pirate-faq">
      {% for entry in page.faq %}
      <details class="pirate-faq-item">
        <summary class="pirate-faq-q">{{ entry.q }}</summary>
        <p class="pirate-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="pirate-panel" id="sponsors">
  <div class="pirate-panel-body">
    <h2 class="pirate-panel-title">
      <svg class="pirate-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="pirate-panel-sub">The weekend runs on their help</p>
    <div class="pirate-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="pirate-sponsor pirate-reveal">
        <div class="pirate-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="pirate-sponsor-name">{{ sponsor.name }}</div>
        <div class="pirate-sponsor-tier">{{ tier[0] }}</div>
        <div class="pirate-sponsor-links">
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

<footer class="pirate-footer">
  <div class="pirate-footer-cards">
    <div class="pirate-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="pirate-footer-card">
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
  <p class="pirate-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
