---
title: Retro-LAN
start_date: 2024-09-20
end_date: 2024-09-22
description: >-
  Retro-LAN: PONG's first LAN of the year, 48 hours in the MSC Great Hall and
  Ballrooms playing the games you grew up on and a few from before that.

ticker: "RETRO-LAN · PONG'S FIRST LAN OF THE YEAR · SEPT 20-22 · MSC GREAT HALL & BALLROOMS · FREE ENTRY · 48 HOURS OF GAMES, TOURNAMENTS, AND PRIZES · BACK IN TIME ·"

headline: Retro-LAN
presents: PONG presents
tagline: "Join us for 48-hours of Games, Tournaments, and Prizes!"

blurb: "For our First LAN of the year, we'll be taking you back in time and playing games you played in your childhood (and maybe even before your lifetime)."

when_label: When
when_value: "Friday, Sept 20th 4pm - Sunday, Sept 22nd 4pm"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

dates_display: "SEPT 20-22"

facts:
  - icon: ico-cal
    label: Dates
    value: "Sept 20-22, 2024"
  - icon: ico-hall
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-pad
    label: Theme
    value: "Back in time"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/retro-lan_schedule.webp
schedule_alt: >-
  The Retro-LAN weekend schedule: four columns of events, each flagged free to
  play and/or competitive. The full running order follows below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Wii Sports
        free: true
      - time: "5:30 PM"
        name: Super Smash Bros. Ultimate Doubles
        free: true
        contest: true
      - time: "7:30 PM"
        name: Mario Kart 8 Deluxe Chaos
        free: true
        contest: true
      - time: "9:30 PM"
        name: Minecraft Survival Games

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: 8-Bit Name That Tune
        free: true
      - time: "1:00 AM"
        name: Left 4 Dead 2
      - time: "12:00 PM"
        name: "Magic: The Gathering Draft"
        free: true
      - time: "2:00 PM"
        name: PONG
        free: true
        contest: true
      - time: "3:00 PM"
        name: Super Smash Bros. Ultimate Singles
        free: true
        contest: true
      - time: "3:30 PM"
        name: Pokémon Showdown
        free: true
        contest: true
      - time: "4:30 PM"
        name: .io Games / Discord Activities
        free: true
      - time: "6:00 PM"
        name: "Rock, Paper, Scissors"
        free: true
        contest: true
      - time: "6:30 PM"
        name: Street Fighter
        free: true
        contest: true
      - time: "7:00 PM"
        name: TETR.IO
        free: true
        contest: true
      - time: "9:00 PM"
        name: Group Photo
      - time: "9:30 PM"
        name: Battleship
        free: true
        contest: true
      - time: "10:00 PM"
        name: "Halo: The Master Chief Collection"

  - name: Sunday
    events:
      - time: "12:00 AM"
        name: Retro Bingo
        free: true
      - time: "1:00 AM"
        name: Team Fortress 2
        free: true
      - time: "12:00 PM"
        name: Just Dance
        free: true
      - time: "12:00 PM"
        name: Speed UNO
        free: true
        contest: true
      - time: "2:00 PM"
        name: Prize Drawing

all_lan: []

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 tickets, second place will receive 2 tickets, and all other participants will receive 1 ticket."
  - tag: FREE
    kind: free
    body: "Marks an event that is free to buy or play. All PONG events are free to participate in."
legend_note: "Example: you can play in a Minecraft event, but it is not a free game."

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
    a: "Competitive. Those events ran as brackets or contests and paid out tickets toward the Sunday drawing."
  - q: "Did you need to have played these games before?"
    a: "No. Plenty of the games were older than the people playing them."
---

<link rel="stylesheet" href="{{ '/assets/css/retro-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/retro-lan.js' | relative_url }}" defer></script>

<div class="retro-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-pad" viewBox="0 0 32 32">
    <rect x="2" y="9" width="28" height="14" rx="2.5"/>
    <path d="M7 13v6M4 16h6"/>
    <circle cx="23" cy="14.5" r="1.8"/>
    <circle cx="26.5" cy="18.5" r="1.8"/>
    <rect x="13" y="15" width="5" height="2" rx="1"/>
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

<div class="retro-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="retro-hero">
  <div class="retro-hero-grid">

    <div class="retro-hero-copy">
      <dl class="retro-details">
        <dt>{{ page.when_label }}:</dt>
        <dd>{{ page.when_value }}</dd>
        <dt>{{ page.where_label }}:</dt>
        <dd>{{ page.where_value }}</dd>
      </dl>

      <p class="retro-blurb">{{ page.blurb }}</p>

      <p class="retro-tagline">{{ page.tagline }}</p>

      <div class="retro-hero-actions">
        {% if page.registration_url and page.registration_url != "" %}
        <a class="retro-btn retro-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
        {% endif %}
        <a class="retro-btn retro-btn--primary" href="#running-order">See What Is On</a>
        <a class="retro-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
      </div>
    </div>

    <div class="retro-hero-plate">
      <p class="retro-presents">{{ page.presents }}</p>

      <div class="retro-frame">
        <svg class="retro-pad" viewBox="0 0 250 104" aria-hidden="true" focusable="false">
          <rect class="rc-body" x="2" y="2" width="246" height="100" rx="7"/>
          <rect class="rc-face" x="10" y="10" width="230" height="84" rx="3"/>

          <rect class="rc-well" x="18" y="18" width="68" height="68" rx="4"/>
          <path class="rc-dpad" d="M42 26h20v16h16v20H62v16H42V62H26V42h16z"/>
          <circle class="rc-dpad-hub" cx="52" cy="52" r="5.5"/>

          <rect class="rc-well" x="96" y="40" width="62" height="28" rx="4"/>
          <rect class="rc-pill" x="103" y="50" width="22" height="8" rx="4"/>
          <rect class="rc-pill" x="130" y="50" width="22" height="8" rx="4"/>
          <rect class="rc-tick" x="105" y="44" width="18" height="2.6" rx="1.3"/>
          <rect class="rc-tick" x="132" y="44" width="18" height="2.6" rx="1.3"/>

          <rect class="rc-well" x="166" y="30" width="68" height="44" rx="6"
                transform="rotate(-6 200 52)"/>
          <circle class="rc-btn-ring" cx="184" cy="54" r="13"/>
          <circle class="rc-btn-ring" cx="216" cy="51" r="13"/>
          <circle class="rc-btn" cx="184" cy="54" r="10"/>
          <circle class="rc-btn" cx="216" cy="51" r="10"/>

          <rect class="rc-boot" x="117" y="0" width="16" height="9" rx="3"/>
        </svg>
      </div>

      <h1 class="retro-title" data-text="{{ page.headline }}">{{ page.headline }}</h1>
    </div>

  </div>
</section>

<div class="retro-countdown-wrap" id="retro-countdown-wrap">
  <p class="retro-countdown-head" id="retro-countdown-head">Time Remaining Until Doors Open</p>
  <div class="retro-countdown" id="retro-countdown" aria-label="Countdown to Retro-LAN">
    <div class="retro-countdown-unit">
      <span class="retro-countdown-num" data-unit="days">--</span>
      <span class="retro-countdown-label">Days</span>
    </div>
    <div class="retro-countdown-unit">
      <span class="retro-countdown-num" data-unit="hours">--</span>
      <span class="retro-countdown-label">Hours</span>
    </div>
    <div class="retro-countdown-unit">
      <span class="retro-countdown-num" data-unit="minutes">--</span>
      <span class="retro-countdown-label">Minutes</span>
    </div>
    <div class="retro-countdown-unit">
      <span class="retro-countdown-num" data-unit="seconds">--</span>
      <span class="retro-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="retro-facts">
  <table class="retro-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="retro-th-inner">
            <svg class="retro-icon retro-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="retro-panel" id="schedule">
  <div class="retro-panel-body">
    <h2 class="retro-panel-title">
      <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
      The Schedule
    </h2>
    <p class="retro-panel-sub">{{ page.schedule_note }}</p>

    <div class="retro-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="retro-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="retro-schedule-img">
        <div class="retro-noimg">
          <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-pad"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="retro-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="retro-screen is-missing">
        <div class="retro-noimg">
          <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-pad"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="retro-zoom" id="schedule-zoom">
  <a class="retro-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="retro-zoom-frame">
    <a class="retro-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="retro-panel" id="running-order">
  <div class="retro-panel-body">
    <h2 class="retro-panel-title">
      <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="retro-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="retro-days">
      {% for session in page.sessions %}
      <div class="retro-day retro-reveal">
        <h3 class="retro-day-name">{{ session.name }}</h3>
        <ul class="retro-slots">
          {% for ev in session.events %}
          <li class="retro-slot">
            <span class="retro-slot-time">{{ ev.time }}</span>
            <span class="retro-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="retro-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="retro-slot-tags">
              {% if ev.free %}<span class="retro-tag retro-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="retro-tag retro-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="retro-legend">
      {% for item in page.legend %}
      <p class="retro-legend-row">
        <span class="retro-tag retro-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="retro-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
</section>

<section class="retro-panel" id="kit">
  <div class="retro-panel-body">
    <h2 class="retro-panel-title">
      <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="retro-panel-sub">Power and network are ours to supply</p>
    <ul class="retro-kit">
      {% for item in page.kit %}
      <li class="retro-kit-item">
        <span class="retro-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="retro-panel" id="faq">
  <div class="retro-panel-body">
    <h2 class="retro-panel-title">
      <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="retro-panel-sub">Answered once, so you need not ask twice</p>
    <div class="retro-faq">
      {% for entry in page.faq %}
      <details class="retro-faq-item">
        <summary class="retro-faq-q">{{ entry.q }}</summary>
        <p class="retro-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="retro-panel" id="sponsors">
  <div class="retro-panel-body">
    <h2 class="retro-panel-title">
      <svg class="retro-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="retro-panel-sub">The weekend runs on their help</p>
    <div class="retro-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="retro-sponsor retro-reveal">
        <div class="retro-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="retro-sponsor-name">{{ sponsor.name }}</div>
        <div class="retro-sponsor-tier">{{ tier[0] }}</div>
        <div class="retro-sponsor-links">
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

<footer class="retro-footer">
  <div class="retro-footer-cards">
    <div class="retro-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="retro-footer-card">
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
  <p class="retro-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
