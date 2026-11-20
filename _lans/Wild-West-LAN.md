---
title: Wild West LAN
start_date: 2022-04-01
end_date: 2022-04-03
description: >-
  Wild West LAN: PONG's final LAN of the year, 48 hours in the MSC Great Hall
  and Ballrooms. Games, tournaments, prizes.

ticker: "WILD WEST LAN · THE FINAL LAN OF THE YEAR · APRIL 1-3 · 8PM-4PM · MSC GREAT HALL AND BALLROOMS · FREE ENTRY · SEEK YOUR FORTUNE · 48 HOURS ·"

presents: "PONG Presents"
headline: Wild West LAN

notice_head: "Wanderer..."
notice_1: "The frontier calls; seek your fortune and ride on to the final LAN of the year!"
notice_2: "Relive the days of freedom and adventure at the Wild West LAN, a 48-hour event hosted by PONG at the MSC Great Hall and Ballrooms."

from_day: April 1
from_ord: st
from_time: "8pm"
to_day: April 3
to_ord: rd
to_time: "4pm"

facts:
  - { icon: ico-star,   label: Dates,     value: "April 1-3, 2022" }
  - { icon: ico-hall,   label: Venue,     value: "MSC Great Hall and Ballrooms" }
  - { icon: ico-clock,  label: Doors,     value: "8 PM Friday to 4 PM Sunday" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-horse,  label: Theme,     value: "The frontier" }
  - { icon: ico-plug,   label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/wild-west-lan_schedule.webp
schedule_alt: >-
  The Wild West LAN weekend schedule: three columns of events, colour-keyed by
  day and flagged free to play and/or competitive. The full running order
  follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "9:00 PM",  name: "Minecraft: Freeze Tag" }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Dollarchug", free: true, contest: true }
      - { time: "12:30 AM", name: "Party Games", free: true }
      - { time: "2:00 AM",  name: "Golf With Your Friends" }
      - { time: "12:30 PM", name: "PlayerUnknown's Battlegrounds", free: true, contest: true }
      - { time: "2:00 PM",  name: "Minecraft: Hedge Legends" }
      - { time: "4:00 PM",  name: "Team Fortress 2", free: true }
      - { time: "5:30 PM",  name: "Beat Saber", free: true, contest: true }
      - { time: "7:30 PM",  name: "Elden Ring", contest: true, fmt: "1v1" }
      - { time: "9:00 PM",  name: "Minecraft: Capture the Flag" }
      - { time: "11:30 PM", name: "Mario Kart: Don't Drink & Drive", free: true, contest: true }
  - name: Sunday
    events:
      - { time: "12:30 AM", name: "Crab Game", free: true }
      - { time: "2:00 AM",  name: "Just Act Natural", free: true }
      - { time: "1:30 PM",  name: "Jackbox Games", free: true }
      - { time: "3:00 PM",  name: "Prize Drawing" }

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive three tickets each and second place will receive two tickets each, all other participants earn one ticket."
  - tag: FREE
    kind: free
    body: "Marks a game that is free to buy or play. All PONG events are free to participate in."
legend_note: "In casual events, 1 ticket will be awarded simply for participation."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Mario Kart goes
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "When did it open?"
    a: "8 PM on Friday, later than the usual 4 PM. It still ran until 4 PM on Sunday."
  - q: "Why was Friday so short?"
    a: "With the 8 PM opening, Friday had one event, Minecraft Freeze Tag at 9 PM. Everything else ran Saturday and Sunday."
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 3:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
---

<link rel="stylesheet" href="{{ '/assets/css/wild-west-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/wild-west-lan.js' | relative_url }}" defer></script>

<div class="west-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-horse" viewBox="0 0 32 32"><path d="M6 27c0-7 3-11 8-12l2-6 4-3 2 4-3 3 5 3c2 1 3 3 3 6v5"/><path d="M14 15l-2 12"/><path d="M22 20v7"/></symbol>

</svg>
</div>

<div class="west-wall" aria-hidden="true"></div>

<div class="west-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="west-hero">
  <div class="west-sheet">
    <span class="west-nail west-nail--tl" aria-hidden="true"></span>
    <span class="west-nail west-nail--tr" aria-hidden="true"></span>
    <span class="west-nail west-nail--bl" aria-hidden="true"></span>
    <span class="west-nail west-nail--br" aria-hidden="true"></span>

    <p class="west-presents">{{ page.presents }}</p>

    <svg class="west-rules west-rules--top" viewBox="0 0 760 11" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <rect x="0" y="0" width="760" height="5" fill="#241a0f"/>
      <rect x="0" y="9" width="760" height="2" fill="#241a0f"/>
    </svg>

    <h1 class="west-title">{{ page.headline }}</h1>

    <svg class="west-rules west-rules--bottom" viewBox="0 0 760 11" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <rect x="0" y="0" width="760" height="2" fill="#241a0f"/>
      <rect x="0" y="6" width="760" height="5" fill="#241a0f"/>
    </svg>

    <svg class="west-scene" viewBox="0 0 820 360" role="img"
         aria-label="A lone rider on a ridge at sunset, with mesas receding behind him">
      <defs>
        <linearGradient id="ww-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#8d3d1b"/>
          <stop offset="34%"  stop-color="#c25c22"/>
          <stop offset="62%"  stop-color="#e8912f"/>
          <stop offset="86%"  stop-color="#f6c765"/>
          <stop offset="100%" stop-color="#fbe4a8"/>
        </linearGradient>
        <radialGradient id="ww-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#fff8dd"/>
          <stop offset="62%"  stop-color="#ffd87a"/>
          <stop offset="100%" stop-color="#ffc24e"/>
        </radialGradient>
        <radialGradient id="ww-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="rgba(255, 216, 122, 0.75)"/>
          <stop offset="100%" stop-color="rgba(255, 216, 122, 0)"/>
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="820" height="360" fill="url(#ww-sky)"/>

      <circle cx="372" cy="252" r="190" fill="url(#ww-glow)"/>
      <circle cx="372" cy="252" r="76" fill="url(#ww-sun)"/>

      <path d="M0 250 L72 250 L88 218 L186 218 L202 250 L286 250 L304 206 L420 206 L436 250 L532 250 L548 226 L648 226 L664 250 L820 250 L820 300 L0 300 Z"
            fill="#b9764a" opacity="0.72"/>
      <path d="M0 268 L54 268 L70 240 L156 240 L172 268 L268 268 L286 232 L398 232 L414 268 L512 268 L530 246 L622 246 L638 268 L820 268 L820 320 L0 320 Z"
            fill="#8d5531" opacity="0.92"/>

      <path d="M0 292 q58 -12 118 -4 q66 9 128 -2 q70 -12 136 2 q72 14 142 -3 q66 -16 134 -1 q84 18 162 2 L820 360 L0 360 Z"
            fill="#4a2e18"/>

      <path d="M0 292 q14 -8 28 0 q16 -9 32 0 q14 -7 28 0 q18 -10 36 0 q15 -8 30 0 q17 -9 34 0 q14 -7 28 0 q18 -10 36 0 q15 -8 30 0 q17 -9 34 0 q14 -7 28 0 q18 -10 36 0 q15 -8 30 0 q17 -9 34 0 q14 -7 28 0 q18 -10 36 0 q15 -8 30 0 q17 -9 34 0 q14 -7 28 0 q18 -10 36 0 L820 306 L0 306 Z"
            fill="#3a2312"/>

      <g fill="#30200f">
        <g transform="translate(96 296) scale(1.15)">
          <path d="M-9 0 v-60 a9 9 0 0 1 18 0 V0 z"/>
          <path d="M-9 -34 h-12 a7 7 0 0 0 -7 7 v18 a6 6 0 0 0 12 0 v-14 h7 z"/>
          <path d="M9 -44 h13 a7 7 0 0 1 7 7 v25 a6 6 0 0 1 -12 0 v-21 h-8 z"/>
        </g>
        <g transform="translate(726 300) scale(0.9)">
          <path d="M-9 0 v-54 a9 9 0 0 1 18 0 V0 z"/>
          <path d="M9 -32 h12 a7 7 0 0 1 7 7 v16 a6 6 0 0 1 -12 0 v-12 h-7 z"/>
        </g>
      </g>

      <g fill="#241a0f" transform="translate(470 292)">
        <path d="M-34 -24 L-25 -24 L-31 0 L-40 0 Z"/>
        <path d="M-23 -24 L-15 -24 L-20 0 L-28 0 Z"/>
        <path d="M-40 -50 C-55 -47, -62 -34, -57 -16 L-47 -22 C-50 -34, -45 -42, -34 -44 Z"/>
        <path d="M-40 -34 C-40 -50, -32 -57, -18 -57 L20 -57 C32 -57, 38 -48, 38 -36 L38 -28
                 C38 -22, 32 -20, 24 -20 L-26 -20 C-34 -20, -40 -24, -40 -32 Z"/>
        <path d="M12 -24 L20 -24 L18 0 L10 0 Z"/>
        <path d="M23 -24 L31 -24 L29 0 L21 0 Z"/>
        <path d="M24 -54 L33 -70 L44 -84 L56 -92 L72 -86 L84 -74 L80 -65 L63 -69 L51 -73
                 L44 -65 L37 -52 Z"/>
        <path d="M55 -91 L58 -100 L64 -88 Z"/>

        <path d="M-2 -40 L8 -40 L11 -52 L13 -58 C13 -72, 9 -79, 3 -79
                 C-3 -79, -7 -72, -7 -58 L-5 -50 Z"/>
        <circle cx="3" cy="-86" r="7"/>
        <ellipse cx="3" cy="-92" rx="16" ry="3.6"/>
        <path d="M-5 -92 L-4 -101 C-4 -105, 10 -105, 10 -101 L11 -92 Z"/>
      </g>

      <g fill="none" stroke="#6b3418" stroke-width="2.4" stroke-linecap="round" opacity="0.7">
        <path d="M156 86 q9 -7 17 0 q8 -7 17 0"/>
        <path d="M214 62 q7 -5 13 0 q6 -5 13 0"/>
      </g>
    </svg>

    <h2 class="west-notice-head">{{ page.notice_head }}</h2>
    <p class="west-notice-line">{{ page.notice_1 }}</p>
    <p class="west-notice-line">{{ page.notice_2 }}</p>

    <div class="west-star" aria-hidden="true">
      <svg viewBox="0 0 32 32" focusable="false"><path d="M16 2l4.1 9.3L30 12.6l-7.2 6.6 1.9 9.8L16 24.2 7.3 29l1.9-9.8L2 12.6l9.9-1.3z"/></svg>
    </div>

    <div class="west-when">
      <span class="west-when-stamp">{{ page.from_day }}<sup>{{ page.from_ord }}</sup>, {{ page.from_time }}</span>
      <span class="west-when-to">to</span>
      <span class="west-when-stamp">{{ page.to_day }}<sup>{{ page.to_ord }}</sup>, {{ page.to_time }}</span>
    </div>

    <div class="west-hero-actions">
      <a class="west-btn west-btn--primary" href="#running-order">See What Was On</a>
      <a class="west-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
    </div>
  </div>
</section>

<div class="west-countdown-wrap" id="west-countdown-wrap">
  <p class="west-countdown-head" id="west-countdown-head">Time Remaining Until Doors Open</p>
  <div class="west-countdown" id="west-countdown" aria-label="Countdown to Wild West LAN">
    <div class="west-countdown-unit"><span class="west-countdown-num" data-unit="days">--</span><span class="west-countdown-label">Days</span></div>
    <div class="west-countdown-unit"><span class="west-countdown-num" data-unit="hours">--</span><span class="west-countdown-label">Hours</span></div>
    <div class="west-countdown-unit"><span class="west-countdown-num" data-unit="minutes">--</span><span class="west-countdown-label">Minutes</span></div>
    <div class="west-countdown-unit"><span class="west-countdown-num" data-unit="seconds">--</span><span class="west-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="west-facts">
  <table class="west-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="west-th-inner">
            <svg class="west-icon west-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="west-panel" id="schedule">
  <div class="west-panel-body">
    <h2 class="west-panel-title">
      <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      The Board
    </h2>
    <p class="west-panel-sub">{{ page.schedule_note }}</p>

    <div class="west-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="west-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="west-schedule-img">
        <div class="west-noimg">
          <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="west-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="west-screen is-missing">
        <div class="west-noimg">
          <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="west-zoom" id="schedule-zoom">
  <a class="west-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="west-zoom-frame">
    <a class="west-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="west-panel" id="running-order">
  <div class="west-panel-body">
    <h2 class="west-panel-title">
      <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="west-panel-sub">{{ page.sessions.size }} days &middot; indigo is Friday, purple is Saturday, green is Sunday</p>

    <div class="west-days">
      {% for session in page.sessions %}
      <div class="west-day west-reveal">
        <h3 class="west-day-name">{{ session.name }}</h3>
        <ul class="west-slots">
          {% for ev in session.events %}
          <li class="west-slot">
            <span class="west-slot-time">{{ ev.time }}</span>
            <span class="west-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="west-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="west-slot-tags">
              {% if ev.fmt %}<span class="west-tag west-tag--mark">{{ ev.fmt }}</span>{% endif %}
              {% if ev.mark %}<span class="west-tag west-tag--mark">{{ ev.mark }}</span>{% endif %}
              {% if ev.free %}<span class="west-tag west-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="west-tag west-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="west-legend">
      {% for item in page.legend %}
      <p class="west-legend-row">
        <span class="west-tag west-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="west-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="west-panel" id="kit">
  <div class="west-panel-body">
    <h2 class="west-panel-title">
      <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="west-panel-sub">Power and network are ours to supply</p>
    <ul class="west-kit">
      {% for item in page.kit %}
      <li class="west-kit-item"><span class="west-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="west-panel" id="faq">
  <div class="west-panel-body">
    <h2 class="west-panel-title">
      <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="west-panel-sub">Answered once, so you need not ask twice</p>
    <div class="west-faq">
      {% for entry in page.faq %}
      <details class="west-faq-item">
        <summary class="west-faq-q">{{ entry.q }}</summary>
        <p class="west-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="west-panel" id="sponsors">
  <div class="west-panel-body">
    <h2 class="west-panel-title">
      <svg class="west-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="west-panel-sub">The weekend runs on their help</p>
    <div class="west-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="west-sponsor west-reveal">
        <div class="west-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="west-sponsor-name">{{ sponsor.name }}</div>
        <div class="west-sponsor-tier">{{ tier[0] }}</div>
        <div class="west-sponsor-links">
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

<footer class="west-footer">
  <div class="west-footer-cards">
    <div class="west-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="west-footer-card">
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
  <p class="west-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
