---
title: Galacta-LAN
start_date: 2023-11-17
end_date: 2023-11-19
description: >-
  Galacta-LAN: 48 hours out past the orbit of anything in the MSC Great Hall
  and Ballrooms. Games, tournaments, prizes.

ticker: "GALACTA-LAN · GAMES. TOURNAMENTS. PRIZES. · NOV 17-19 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · 48 HOURS ·"

headline: Galacta-LAN
tagline: "Games.Tournaments.Prizes"
when_label: When
when_value: "Fri, Nov 17 4PM - Sun, Nov 19 4PM"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"
free_flash: "FREE!"
dates_display: "NOV 17-19"

facts:
  - { icon: ico-rocket, label: Dates,    value: "Nov 17-19, 2023" }
  - { icon: ico-hall,  label: Venue,    value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock, label: Duration, value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,  label: Theme,    value: "Deep space" }
  - { icon: ico-plug,  label: Network,  value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/galacta-lan_schedule.png
schedule_alt: >-
  The Galacta-LAN weekend schedule: four columns of events, each flagged free
  to play and/or competitive. The full running order follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "6:00 PM"
        name: Rocket League
        free: true
        contest: true
      - time: "7:00 PM"
        name: Among Us
        note: Hosted by WITS
        free: true
      - time: "8:00 PM"
        name: TETR.IO
        free: true
        contest: true
      - time: "10:00 PM"
        name: "Minecraft: Galacticraft"
        contest: true
      - time: "10:30 PM"
        name: ROUNDS
        free: true
        contest: true
  - name: Saturday
    events:
      - time: "1:00 AM"
        name: Golf With Your Friends
      - time: "12:00 PM"
        name: Speed UNO
        note: Hosted by TTG
        free: true
        contest: true
      - time: "12:00 PM"
        name: Super Smash Bros. Ultimate
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "2:00 PM"
        name: "Frozen Crag 2: Freeze Tag"
        note: Beta Test · Hosted by Quillmark
      - time: "3:00 PM"
        name: Beat Saber
        free: true
        contest: true
      - time: "5:00 PM"
        name: Fortnite
        free: true
        contest: true
      - time: "6:00 PM"
        name: BANG!
        note: Hosted by TTG
        free: true
      - time: "8:00 PM"
        name: Don't Drink and Drive!
        note: Mario Kart · Hosted by ISP
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
      - time: "10:00 PM"
        name: Deep Rock Galactic
      - time: "11:00 PM"
        name: Guess That wikiHow
        free: true
  - name: Sunday
    events:
      - time: "12:00 AM"
        name: "Halo: The Master Chief Collection"
      - time: "2:00 AM"
        name: Crab Game
        free: true
      - time: "12:00 PM"
        name: Party Games
        free: true
      - time: "12:00 PM"
        name: "Magic: The Gathering Draft"
        note: Hosted by TCCS
        contest: true
      - time: "2:30 PM"
        name: Prize Drawing

all_lan:
  - name: Minecraft Bingo & Scavenger Hunt
    when: "Fri 4:00 PM - Sun 2:00 PM"
    body: Running the length of the weekend rather than at a set time.

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
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 2:30 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
  - q: "What was the Minecraft Bingo and Scavenger Hunt?"
    a: "A card that ran all weekend, from Friday at 4:00 PM to Sunday at 2:00 PM, with no set time slot."
---

<link rel="stylesheet" href="{{ '/assets/css/galacta-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/galacta-lan.js' | relative_url }}" defer></script>

<div class="galacta-sprite">
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

  <symbol id="ico-rocket" viewBox="0 0 32 32"><path d="M16 3c6 5 8 11 8 17l-4 5h-8l-4-5c0-6 2-12 8-17z"/><circle cx="16" cy="13" r="3"/><path d="M12 25l-3 5 5-2M20 25l3 5-5-2"/></symbol>

</svg>
</div>
<div class="galacta-space" aria-hidden="true">
  <div class="galacta-stars"></div>
  <div class="galacta-planets">
    <span class="galacta-planet p1"><i></i></span>
    <span class="galacta-planet p2"></span>
    <span class="galacta-planet p3"></span>
    <span class="galacta-planet p4"></span>
  </div>
</div>

<div class="galacta-marquee" aria-hidden="true"><span>{{ page.ticker }}</span></div>

<section class="galacta-hero">
  <p class="galacta-presents">PONG presents:</p>

  <h1 class="galacta-title" aria-label="{{ page.headline }}">
    {% assign chars = "G,A,L,A,C,T,A,-,L,A,N" | split: "," %}
    {% for ch in chars %}<span class="galacta-ch" style="--i: {{ forloop.index0 }}; --n: {{ chars.size }};" aria-hidden="true">{{ ch }}</span>{% endfor %}
  </h1>

  <p class="galacta-tagline">{{ page.tagline }}</p>

  <div class="galacta-hero-grid">
    <div class="galacta-block">
      <p class="galacta-block-label">{{ page.when_label }}:</p>
      <p class="galacta-block-value">{{ page.when_value }}</p>
    </div>
    <div class="galacta-block">
      <p class="galacta-block-label">{{ page.where_label }}:</p>
      <p class="galacta-block-value">{{ page.where_value }}</p>
    </div>
  </div>

  <p class="galacta-flash">{{ page.free_flash }}</p>

  <svg class="galacta-rocket" viewBox="0 0 140 220" aria-hidden="true" focusable="false">
    <path class="gl-trail" d="M70 220q-26-54-14-104"/>
    <g class="gl-flame">
      <path class="gl-flame-a" d="M70 126q-22 18-16 42 10-10 16-10t16 10q6-24-16-42z"/>
      <path class="gl-flame-b" d="M70 134q-13 13-9 28 6-7 9-7t9 7q4-15-9-28z"/>
    </g>
    <path class="gl-fin"  d="M44 72q-22 26-20 54 14-10 26-16z"/>
    <path class="gl-fin"  d="M96 72q22 26 20 54-14-10-26-16z"/>
    <path class="gl-body" d="M70 6q26 30 26 72v42q-12 8-26 8t-26-8V78q0-42 26-72z"/>
    <path class="gl-band" d="M46 104q12 7 24 7t24-7v12q-12 7-24 7t-24-7z"/>
    <circle class="gl-port" cx="70" cy="64" r="15"/>
    <circle class="gl-port-in" cx="70" cy="64" r="9"/>
    <path class="gl-nose" d="M70 6q10 11 16 26-8-6-16-6t-16 6q6-15 16-26z"/>
  </svg>

  <div class="galacta-hero-actions">
    <a class="galacta-btn galacta-btn--primary" href="#running-order">See What Is On</a>
    <a class="galacta-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="galacta-countdown-wrap" id="galacta-countdown-wrap">
  <p class="galacta-countdown-head" id="galacta-countdown-head">Time Remaining Until Doors Open</p>
  <div class="galacta-countdown" id="galacta-countdown" aria-label="Countdown to Galacta-LAN">
    <div class="galacta-countdown-unit"><span class="galacta-countdown-num" data-unit="days">--</span><span class="galacta-countdown-label">Days</span></div>
    <div class="galacta-countdown-unit"><span class="galacta-countdown-num" data-unit="hours">--</span><span class="galacta-countdown-label">Hours</span></div>
    <div class="galacta-countdown-unit"><span class="galacta-countdown-num" data-unit="minutes">--</span><span class="galacta-countdown-label">Minutes</span></div>
    <div class="galacta-countdown-unit"><span class="galacta-countdown-num" data-unit="seconds">--</span><span class="galacta-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="galacta-facts">
  <table class="galacta-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="galacta-th-inner">
            <svg class="galacta-icon galacta-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="galacta-panel" id="schedule">
  <div class="galacta-panel-body">
    <h2 class="galacta-panel-title">
      <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-rocket"/></svg>
      The Schedule
    </h2>
    <p class="galacta-panel-sub">{{ page.schedule_note }}</p>

    <div class="galacta-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="galacta-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="galacta-schedule-img">
        <div class="galacta-noimg">
          <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-rocket"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="galacta-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="galacta-screen is-missing">
        <div class="galacta-noimg">
          <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-rocket"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="galacta-zoom" id="schedule-zoom">
  <a class="galacta-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="galacta-zoom-frame">
    <a class="galacta-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="galacta-panel" id="running-order">
  <div class="galacta-panel-body">
    <h2 class="galacta-panel-title">
      <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="galacta-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="galacta-days">
      {% for session in page.sessions %}
      <div class="galacta-day galacta-reveal">
        <h3 class="galacta-day-name">{{ session.name }}</h3>
        <ul class="galacta-slots">
          {% for ev in session.events %}
          <li class="galacta-slot">
            <span class="galacta-slot-time">{{ ev.time }}</span>
            <span class="galacta-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="galacta-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="galacta-slot-tags">
              {% if ev.free %}<span class="galacta-tag galacta-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="galacta-tag galacta-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="galacta-day galacta-day--all galacta-reveal">
        <h3 class="galacta-day-name">All LAN</h3>
        <ul class="galacta-slots">
          {% for ev in page.all_lan %}
          <li class="galacta-slot">
            <span class="galacta-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="galacta-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="galacta-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="galacta-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="galacta-legend">
      {% for item in page.legend %}
      <p class="galacta-legend-row">
        <span class="galacta-tag galacta-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="galacta-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="galacta-panel" id="kit">
  <div class="galacta-panel-body">
    <h2 class="galacta-panel-title">
      <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="galacta-panel-sub">Power and network are ours to supply</p>
    <ul class="galacta-kit">
      {% for item in page.kit %}
      <li class="galacta-kit-item"><span class="galacta-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="galacta-panel" id="faq">
  <div class="galacta-panel-body">
    <h2 class="galacta-panel-title">
      <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="galacta-panel-sub">Answered once, so you need not ask twice</p>
    <div class="galacta-faq">
      {% for entry in page.faq %}
      <details class="galacta-faq-item">
        <summary class="galacta-faq-q">{{ entry.q }}</summary>
        <p class="galacta-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="galacta-panel" id="sponsors">
  <div class="galacta-panel-body">
    <h2 class="galacta-panel-title">
      <svg class="galacta-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="galacta-panel-sub">The weekend runs on their help</p>
    <div class="galacta-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="galacta-sponsor galacta-reveal">
        <div class="galacta-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="galacta-sponsor-name">{{ sponsor.name }}</div>
        <div class="galacta-sponsor-tier">{{ tier[0] }}</div>
        <div class="galacta-sponsor-links">
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

<footer class="galacta-footer">
  <div class="galacta-footer-cards">
    <div class="galacta-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="galacta-footer-card">
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
  <p class="galacta-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
