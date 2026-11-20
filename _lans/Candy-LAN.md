---
title: Candy LAN
start_date: 2026-02-20
end_date: 2026-02-22
description: >-
  Candy LAN: PONG's sweet 48-hour LAN in the MSC Great Hall and Ballrooms.
  Games, tournaments, prizes, and a board with two bingos running on it.

ticker: "CANDY LAN · A SWEET 48-HOUR GAMING EVENT · FEB 20-22 · MSC GREAT HALL & BALLROOMS · FREE ENTRY · GAMES, TOURNAMENTS, PRIZES · TWO BINGOS RUNNING ALL WEEKEND ·"

headline: Candy LAN
tagline: "Games, Tournaments, Prizes!"

blurb: "Join us in the MSC for a sweet 48-hour gaming event!"

when_label: When
when_value: "4 PM Friday, Feb 20th to 4 PM Sunday, Feb 22nd"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

dates_display: "FEB 20-22"

facts:
  - icon: ico-cal
    label: Dates
    value: "Feb 20-22, 2026"
  - icon: ico-hall
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-bar
    label: Theme
    value: "Sweet"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/candy-lan_schedule.webp
schedule_alt: >-
  The Candy LAN weekend schedule: four columns of events colour-coded by day
  and flagged free to play and/or competitive. The full running order follows
  below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

scatter:
  - { icon: ico-worm,   colour: "#e8403f" }
  - { icon: ico-cane,   colour: "#e8403f" }
  - { icon: ico-fish,   colour: "#e23b2e" }
  - { icon: ico-toffee, colour: "#e7b53a" }
  - { icon: ico-drop,   colour: "#4cc26a" }
  - { icon: ico-worm,   colour: "#f2a03c" }
  - { icon: ico-bean,   colour: "#e86fae" }
  - { icon: ico-lolly,  colour: "#7a5ce0" }
  - { icon: ico-drop,   colour: "#f06292" }
  - { icon: ico-toffee, colour: "#cfa233" }
  - { icon: ico-worm,   colour: "#4bb3e8" }
  - { icon: ico-bean,   colour: "#4cc26a" }

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Candy Land
        free: true
      - time: "6:30 PM"
        name: TETR.IO
        free: true
        contest: true
      - time: "8:30 PM"
        name: Frostbite Frenzy
      - time: "10:30 PM"
        name: Golf With Your Friends
      - time: "12:00 AM"
        name: Jackbox Games
        free: true

  - name: Saturday
    events:
      - time: "1:30 AM"
        name: Secret Laboratory
        free: true
      - time: "12:00 PM"
        name: Beat Saber
        free: true
      - time: "1:00 PM"
        name: Super Smash Bros. Ultimate
        free: true
        contest: true
      - time: "2:00 PM"
        name: "Magic: The Gathering Commander"
        contest: true
      - time: "5:00 PM"
        name: GeoGuessr
        free: true
      - time: "7:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
        free: true
      - time: "10:00 PM"
        name: PEAK
      - time: "10:30 PM"
        name: Gartic Phone
        free: true

  - name: Sunday
    events:
      - time: "12:00 AM"
        name: PONG Jeopardy
        free: true
        contest: true
      - time: "1:30 AM"
        name: Team Fortress 2
        free: true
      - time: "12:00 PM"
        name: Suika Game
        free: true
        contest: true
      - time: "12:00 PM"
        name: Party Games
        free: true
      - time: "2:30 PM"
        name: Prize Drawing
        free: true

all_lan:
  - name: Minecraft Bingo
    host: "bingo.ponglan.net"
    body: Running the whole weekend on the PONG Minecraft server. Drop in whenever, cross off what you can.
  - name: ARC Raiders Bingo
    body: Also running all weekend. Same idea, different wasteland.

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
  - q: "What were the two bingos?"
    a: "Minecraft Bingo on the PONG server and ARC Raiders Bingo. Both ran all weekend, so people dropped in whenever they liked."
---

<link rel="stylesheet" href="{{ '/assets/css/candy-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/candy-lan.js' | relative_url }}" defer></script>

<div class="candy-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-worm" viewBox="0 0 40 40">
    <path d="M8 33c0-10 8-9 8-17s8-8 8 1 8 8 8 16" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
  </symbol>

  <symbol id="ico-cane" viewBox="0 0 40 40">
    <path d="M13 36V16a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
    <path d="M13 36V16a8 8 0 0 1 16 0" fill="none" stroke="#fff" stroke-width="9" stroke-dasharray="4 9"/>
  </symbol>

  <symbol id="ico-fish" viewBox="0 0 40 40">
    <path d="M36 20c-5 7-13 11-21 11-4 0-7-1-9-3l5-8-5-8c2-2 5-3 9-3 8 0 16 4 21 11z" fill="currentColor"/>
  </symbol>

  <symbol id="ico-toffee" viewBox="0 0 40 40">
    <ellipse cx="20" cy="20" rx="9.5" ry="8.5" fill="currentColor"/>
    <path d="M11 20 2 13v14z" fill="currentColor"/>
    <path d="M29 20l9-7v14z" fill="currentColor"/>
  </symbol>

  <symbol id="ico-drop" viewBox="0 0 40 40">
    <path d="M20 5c-7 0-11 12-13 18-1.6 4.6 1.4 9 6 9h14c4.6 0 7.6-4.4 6-9-2-6-6-18-13-18z" fill="currentColor"/>
  </symbol>

  <symbol id="ico-bean" viewBox="0 0 40 40">
    <ellipse cx="20" cy="20" rx="13" ry="8.5" transform="rotate(-22 20 20)" fill="currentColor"/>
  </symbol>

  <symbol id="ico-lolly" viewBox="0 0 40 40">
    <circle cx="20" cy="15" r="11.5" fill="currentColor"/>
    <path d="M20 12.5a3 3 0 1 1 3 3 5.5 5.5 0 1 1-5.5-5.5" fill="none" stroke="#fff" stroke-width="2.4"/>
    <path d="M20 27v11" stroke="#f2ead6" stroke-width="4" stroke-linecap="round"/>
  </symbol>

  <symbol id="ico-bar" viewBox="0 0 32 32">
    <rect x="3" y="7" width="26" height="18" rx="2"/>
    <line x1="16" y1="7" x2="16" y2="25"/>
    <line x1="3" y1="16" x2="29" y2="16"/>
  </symbol>

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

</svg>
</div>

<div class="candy-sky" aria-hidden="true"></div>
<div class="candy-scatter" aria-hidden="true">
  {% for sweet in page.scatter %}
  <svg class="candy-sweet" viewBox="0 0 40 40" style="color: {{ sweet.colour }};"><use href="#{{ sweet.icon }}"/></svg>
  {% endfor %}
</div>

<div class="candy-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="candy-hero">
  <p class="candy-presents">PONG presents:</p>

  <div class="candy-bar">
    <h1 class="candy-bar-title">{{ page.headline }}</h1>
  </div>

  <div class="candy-wrappers">
    <div class="candy-wrapper candy-wrapper--blue">
      <p>{{ page.blurb }}</p>
    </div>

    <div class="candy-wrapper candy-wrapper--white">
      <dl class="candy-details">
        <dt>{{ page.when_label | upcase }}:</dt>
        <dd>{{ page.when_value }}</dd>
        <dt>{{ page.where_label | upcase }}:</dt>
        <dd>{{ page.where_value }}</dd>
      </dl>
    </div>
  </div>

  <p class="candy-tagline">{{ page.tagline }}</p>

  <div class="candy-hero-actions">
    {% if page.registration_url and page.registration_url != "" %}
    <a class="candy-btn candy-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
    {% endif %}
    <a class="candy-btn candy-btn--primary" href="#running-order">See What Is On</a>
    <a class="candy-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="candy-countdown-wrap" id="candy-countdown-wrap">
  <p class="candy-countdown-head" id="candy-countdown-head">Time Remaining Until Doors Open</p>
  <div class="candy-countdown" id="candy-countdown" aria-label="Countdown to Candy LAN">
    <div class="candy-countdown-unit">
      <span class="candy-countdown-num" data-unit="days">--</span>
      <span class="candy-countdown-label">Days</span>
    </div>
    <div class="candy-countdown-unit">
      <span class="candy-countdown-num" data-unit="hours">--</span>
      <span class="candy-countdown-label">Hours</span>
    </div>
    <div class="candy-countdown-unit">
      <span class="candy-countdown-num" data-unit="minutes">--</span>
      <span class="candy-countdown-label">Minutes</span>
    </div>
    <div class="candy-countdown-unit">
      <span class="candy-countdown-num" data-unit="seconds">--</span>
      <span class="candy-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="candy-facts">
  <table class="candy-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="candy-th-inner">
            <svg class="candy-icon candy-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="candy-panel" id="schedule">
  <div class="candy-panel-body">
    <h2 class="candy-panel-title">
      <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
      The Schedule
    </h2>
    <p class="candy-panel-sub">{{ page.schedule_note }}</p>

    <div class="candy-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="candy-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="candy-schedule-img">
        <div class="candy-noimg">
          <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bar"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="candy-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="candy-screen is-missing">
        <div class="candy-noimg">
          <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bar"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="candy-zoom" id="schedule-zoom">
  <a class="candy-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="candy-zoom-frame">
    <a class="candy-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="candy-panel" id="running-order">
  <div class="candy-panel-body">
    <h2 class="candy-panel-title">
      <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="candy-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="candy-days">
      {% for session in page.sessions %}
      <div class="candy-day candy-reveal">
        <h3 class="candy-day-name">{{ session.name }}</h3>
        <ul class="candy-slots">
          {% for ev in session.events %}
          <li class="candy-slot">
            <span class="candy-slot-time">{{ ev.time }}</span>
            <span class="candy-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="candy-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="candy-slot-tags">
              {% if ev.free %}<span class="candy-tag candy-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="candy-tag candy-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="candy-day candy-day--all candy-reveal">
        <h3 class="candy-day-name">All LAN</h3>
        <ul class="candy-slots">
          {% for ev in page.all_lan %}
          <li class="candy-slot">
            <span class="candy-slot-time">{% if ev.host %}{{ ev.host }}{% else %}All weekend{% endif %}</span>
            <span class="candy-slot-name">
              {{ ev.name }}
              <span class="candy-slot-note">{{ ev.body }}</span>
            </span>
            <span class="candy-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="candy-legend">
      {% for item in page.legend %}
      <p class="candy-legend-row">
        <span class="candy-tag candy-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="candy-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
</section>

<section class="candy-panel" id="kit">
  <div class="candy-panel-body">
    <h2 class="candy-panel-title">
      <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="candy-panel-sub">Power and network are ours to supply</p>
    <ul class="candy-kit">
      {% for item in page.kit %}
      <li class="candy-kit-item">
        <span class="candy-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="candy-panel" id="faq">
  <div class="candy-panel-body">
    <h2 class="candy-panel-title">
      <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="candy-panel-sub">Answered once, so you need not ask twice</p>
    <div class="candy-faq">
      {% for entry in page.faq %}
      <details class="candy-faq-item">
        <summary class="candy-faq-q">{{ entry.q }}</summary>
        <p class="candy-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="candy-panel" id="sponsors">
  <div class="candy-panel-body">
    <h2 class="candy-panel-title">
      <svg class="candy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="candy-panel-sub">The weekend runs on their help</p>
    <div class="candy-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="candy-sponsor candy-reveal">
        <div class="candy-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="candy-sponsor-name">{{ sponsor.name }}</div>
        <div class="candy-sponsor-tier">{{ tier[0] }}</div>
        <div class="candy-sponsor-links">
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

<footer class="candy-footer">
  <div class="candy-footer-cards">
    <div class="candy-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="candy-footer-card">
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
  <p class="candy-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
