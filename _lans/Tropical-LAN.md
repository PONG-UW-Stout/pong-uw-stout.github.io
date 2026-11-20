---
title: Tropical-LAN
start_date: 2024-02-16
end_date: 2024-02-18
description: >-
  Tropical-LAN: 48 hours on the beach in the MSC Great Hall and Ballrooms.
  Games, tournaments, prizes.

ticker: "TROPICAL LAN · GAMES / TOURNAMENTS / PRIZES · FEB 16-18 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · 48 HOURS ·"

headline_a: Tropical
headline_b: LAN
tagline: "Games / Tournaments / Prizes"
when_label: When
when_value: "Fri, Feb 16th 4PM - Sun, Feb 18th 4PM"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"
free_flash: "FREE!"
dates_display: "FEB 16-18"

facts:
  - { icon: ico-palm,  label: Dates,    value: "Feb 16-18, 2024" }
  - { icon: ico-hall,  label: Venue,    value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock, label: Duration, value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,  label: Theme,    value: "The beach" }
  - { icon: ico-plug,  label: Network,  value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/tropical-lan_schedule.webp
schedule_alt: >-
  The Tropical-LAN weekend schedule: four columns of events, each flagged free
  to play and/or competitive. The full running order follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Discord Activities
      - time: "6:00 PM"
        name: Fight Crab
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "7:00 PM"
        name: Keep Talking and Nobody Explodes
        free: true
      - time: "8:00 PM"
        name: TETR.IO
        free: true
        contest: true
      - time: "9:30 PM"
        name: Guilty Gear Strive
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "10:00 PM"
        name: Crab Champions
  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Jackbox Games
        free: true
      - time: "1:00 AM"
        name: Left 4 Dead 2
      - time: "12:00 PM"
        name: UNO
        note: Hosted by TTG
        free: true
        contest: true
      - time: "1:30 PM"
        name: Lethal Company
      - time: "3:00 PM"
        name: Super Smash Bros. Ultimate
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "4:00 PM"
        name: Bermuda Ball
        note: Hosted by Quillmark
      - time: "6:00 PM"
        name: Sea of Thieves
        contest: true
      - time: "6:00 PM"
        name: ARMS
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "6:30 PM"
        name: BANG!
        note: Hosted by TTG
        free: true
      - time: "8:30 PM"
        name: Group Photo
      - time: "9:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "10:00 PM"
        name: "Overcooked! 2: Surf 'n' Turf"
        note: Hosted by IGDA
        free: true
  - name: Sunday
    events:
      - time: "12:00 AM"
        name: Tropical Bingo
        note: Hosted by WITS
        free: true
      - time: "2:00 AM"
        name: Crab Game
        free: true
      - time: "12:00 PM"
        name: Suika Game
        free: true
        contest: true
      - time: "1:30 PM"
        name: Video Game Trivia
        free: true
      - time: "2:00 PM"
        name: Prize Drawing

all_lan: []

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 TICKETS, second place will receive 2 TICKETS, and all other participants will receive 1 ticket."
  - tag: FREE
    kind: free
    body: "Marks an event that is FREE to buy or play. All PONG events are FREE to participate in."
legend_note: "Example: you can play in a Minecraft event, but Minecraft is not a free game."

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
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 2:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
---

<link rel="stylesheet" href="{{ '/assets/css/tropical-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/tropical-lan.js' | relative_url }}" defer></script>

<div class="tropic-sprite">
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

  <symbol id="ico-palm" viewBox="0 0 32 32"><path d="M16 11v18"/><path d="M16 11C9 5 4 9 3 13c5-3 9-1 13-2z"/><path d="M16 11c7-6 12-2 13 2-5-3-9-1-13-2z"/><path d="M16 11c-2-7 3-9 7-8-4 2-6 5-7 8z"/></symbol>

</svg>
</div>
<div class="tropic-beach" aria-hidden="true">
  <div class="tropic-sun"></div>
  <div class="tropic-clouds"><span></span><span></span><span></span><span></span></div>
  <div class="tropic-sea"></div>
  <div class="tropic-surf"></div>
  <div class="tropic-sand"></div>
</div>

<div class="tropic-marquee" aria-hidden="true"><span>{{ page.ticker }}</span></div>

<section class="tropic-hero">
  <div class="tropic-hero-grid">

    <div class="tropic-hero-copy">
      <p class="tropic-presents">PONG presents:</p>
      <h1 class="tropic-title">
        <span class="tropic-title-a">{{ page.headline_a }}</span>
        <span class="tropic-title-b">{{ page.headline_b }}</span>
      </h1>
      <p class="tropic-tagline">{{ page.tagline }}</p>

      <dl class="tropic-details">
        <dt>{{ page.when_label }}:</dt>
        <dd>{{ page.when_value }}</dd>
        <dt>{{ page.where_label }}:</dt>
        <dd>{{ page.where_value }}</dd>
      </dl>

      <p class="tropic-flash">{{ page.free_flash }}</p>

      <div class="tropic-hero-actions">
        <a class="tropic-btn tropic-btn--primary" href="#running-order">See What Is On</a>
        <a class="tropic-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
      </div>
    </div>

    <div class="tropic-hero-art">
      <svg class="tropic-scene" viewBox="0 0 300 330" aria-hidden="true" focusable="false">
        <clipPath id="tr-trunk-clip">
          <path d="M96 330 q-6-104 22-176 l20 6 q-28 70-22 170 z"/>
        </clipPath>
        <path class="tr-trunk" d="M96 330 q-6-104 22-176 l20 6 q-28 70-22 170 z"/>
        <g class="tr-trunk-ring" clip-path="url(#tr-trunk-clip)">
          <path d="M94.2 310 q11 4 22 0"/>
          <path d="M94 286 q11 4 22 0"/>
          <path d="M94.9 262 q11.1 4 22.2 0"/>
          <path d="M97 238 q11.2 4 22.4 0"/>
          <path d="M100.5 214 q11.4 4 22.8 0"/>
          <path d="M105.6 190 q11.7 4 23.3 0"/>
        </g>

        <circle class="tr-coco" cx="116" cy="162" r="9"/>
        <circle class="tr-coco" cx="134" cy="167" r="8"/>

        <g transform="translate(126 150)">
          <g transform="rotate(-168)"><path class="tr-frond" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
          <g transform="rotate(-138)"><path class="tr-frond--dk" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
          <g transform="rotate(-104)"><path class="tr-frond" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
          <g transform="rotate(-72)"><path class="tr-frond--dk" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
          <g transform="rotate(-40)"><path class="tr-frond" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
          <g transform="rotate(-8)"><path class="tr-frond--dk" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
          <g transform="rotate(22)"><path class="tr-frond" d="M0 -6 Q50 -34 118 24 Q56 -4 0 7 Z"/><path class="tr-rib" d="M2 0 Q52 -20 114 22"/></g>
        </g>

        <g>
          <path class="tr-stick" d="M196 196 v56"/>
          <path class="tr-straw" d="M226 190 l-18 58"/>

          <path class="tr-umbrella" d="M150 224 q46-40 92 0 q-16 10-30 4 q-16 10-32 2 q-16 8-30-6 z"/>
          <path class="tr-umbrella-d" d="M196 204 q28 2 46 20 q-16 10-30 4 q-10 6-16 1 z"/>

          <path class="tr-shell" d="M164 248 q0-10 32-10 t32 10 q2 48-32 48 t-32-48 z"/>
          <path class="tr-shell-d" d="M214 250 q12 2 14 6 q2 44-30 46 q26-8 26-32 q0-12-10-20 z"/>
          <ellipse class="tr-flesh" cx="196" cy="248" rx="32" ry="10"/>
          <ellipse class="tr-coco" cx="196" cy="248" rx="23" ry="6.5"/>

          <path class="tr-lime" d="M158 240 a18 18 0 0 1 20 10 a18 18 0 0 1-22-2 z"/>
          <path class="tr-lime-d" d="M160 243 a13 13 0 0 1 14 7 a13 13 0 0 1-16-1 z"/>
        </g>
      </svg>
    </div>

  </div>
</section>

<div class="tropic-countdown-wrap" id="tropic-countdown-wrap">
  <p class="tropic-countdown-head" id="tropic-countdown-head">Time Remaining Until Doors Open</p>
  <div class="tropic-countdown" id="tropic-countdown" aria-label="Countdown to Tropical-LAN">
    <div class="tropic-countdown-unit"><span class="tropic-countdown-num" data-unit="days">--</span><span class="tropic-countdown-label">Days</span></div>
    <div class="tropic-countdown-unit"><span class="tropic-countdown-num" data-unit="hours">--</span><span class="tropic-countdown-label">Hours</span></div>
    <div class="tropic-countdown-unit"><span class="tropic-countdown-num" data-unit="minutes">--</span><span class="tropic-countdown-label">Minutes</span></div>
    <div class="tropic-countdown-unit"><span class="tropic-countdown-num" data-unit="seconds">--</span><span class="tropic-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="tropic-facts">
  <table class="tropic-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="tropic-th-inner">
            <svg class="tropic-icon tropic-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="tropic-panel" id="schedule">
  <div class="tropic-panel-body">
    <h2 class="tropic-panel-title">
      <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-palm"/></svg>
      The Schedule
    </h2>
    <p class="tropic-panel-sub">{{ page.schedule_note }}</p>

    <div class="tropic-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="tropic-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="tropic-schedule-img">
        <div class="tropic-noimg">
          <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-palm"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="tropic-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="tropic-screen is-missing">
        <div class="tropic-noimg">
          <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-palm"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="tropic-zoom" id="schedule-zoom">
  <a class="tropic-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="tropic-zoom-frame">
    <a class="tropic-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="tropic-panel" id="running-order">
  <div class="tropic-panel-body">
    <h2 class="tropic-panel-title">
      <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="tropic-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="tropic-days">
      {% for session in page.sessions %}
      <div class="tropic-day tropic-reveal">
        <h3 class="tropic-day-name">{{ session.name }}</h3>
        <ul class="tropic-slots">
          {% for ev in session.events %}
          <li class="tropic-slot">
            <span class="tropic-slot-time">{{ ev.time }}</span>
            <span class="tropic-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="tropic-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="tropic-slot-tags">
              {% if ev.free %}<span class="tropic-tag tropic-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="tropic-tag tropic-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="tropic-day tropic-day--all tropic-reveal">
        <h3 class="tropic-day-name">All LAN</h3>
        <ul class="tropic-slots">
          {% for ev in page.all_lan %}
          <li class="tropic-slot">
            <span class="tropic-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="tropic-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="tropic-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="tropic-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="tropic-legend">
      {% for item in page.legend %}
      <p class="tropic-legend-row">
        <span class="tropic-tag tropic-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="tropic-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="tropic-panel" id="kit">
  <div class="tropic-panel-body">
    <h2 class="tropic-panel-title">
      <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="tropic-panel-sub">Power and network are ours to supply</p>
    <ul class="tropic-kit">
      {% for item in page.kit %}
      <li class="tropic-kit-item"><span class="tropic-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="tropic-panel" id="faq">
  <div class="tropic-panel-body">
    <h2 class="tropic-panel-title">
      <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="tropic-panel-sub">Answered once, so you need not ask twice</p>
    <div class="tropic-faq">
      {% for entry in page.faq %}
      <details class="tropic-faq-item">
        <summary class="tropic-faq-q">{{ entry.q }}</summary>
        <p class="tropic-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="tropic-panel" id="sponsors">
  <div class="tropic-panel-body">
    <h2 class="tropic-panel-title">
      <svg class="tropic-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="tropic-panel-sub">The weekend runs on their help</p>
    <div class="tropic-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="tropic-sponsor tropic-reveal">
        <div class="tropic-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="tropic-sponsor-name">{{ sponsor.name }}</div>
        <div class="tropic-sponsor-tier">{{ tier[0] }}</div>
        <div class="tropic-sponsor-links">
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

<footer class="tropic-footer">
  <div class="tropic-footer-cards">
    <div class="tropic-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="tropic-footer-card">
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
  <p class="tropic-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
