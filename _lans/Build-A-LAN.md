---
title: Build-A-LAN
start_date: 2024-04-12
end_date: 2024-04-14
description: >-
  Build-A-LAN: PONG's final LAN of the year, 48 hours in the MSC Great Hall and
  Ballrooms with the running order built by the people turning up to it.

ticker: "BUILD A LAN · GAMES - TOURNAMENTS - PRIZES · APRIL 12-14 · 4PM-4PM · MSC GREAT HALL AND BALLROOMS · FREE ENTRY · UNDER CONSTRUCTION · 48 HOURS ·"

headline: Build A LAN
tagline: "Games - Tournaments - Prizes"
blurb_1: "Get your hard hats on, it's time to Build-A-LAN. Remember, this project is for the people, by the people."
blurb_2: "Join us for our final LAN of the year, where you get to help us build our 48 hour event!"
when_label: When
when_value: "Fri, April 12th 4PM - Sun, April 14th 4PM"
where_label: Where
where_value: "MSC Great Hall and Ballrooms"
dates_display: "APRIL 12-14"

facts:
  - { icon: ico-hammer, label: Dates,    value: "April 12-14, 2024" }
  - { icon: ico-hall,  label: Venue,    value: "MSC Great Hall and Ballrooms" }
  - { icon: ico-clock, label: Duration, value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,  label: Theme,    value: "Under construction" }
  - { icon: ico-plug,  label: Network,  value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/build-a-lan_schedule.webp
schedule_alt: >-
  The Build-A-LAN weekend schedule: four columns of events, each flagged free
  to play and/or competitive. The full running order follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Preview of SGX.24
        note: Hosted by IGDA
        free: true
      - time: "7:00 PM"
        name: TETR.IO
        free: true
        contest: true
      - time: "9:00 PM"
        name: The Finals
        free: true
        contest: true
      - time: "9:30 PM"
        name: Lethal League Blaze
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "11:00 PM"
        name: Jackbox Games
        free: true
  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Draw Battle
        free: true
        contest: true
      - time: "1:00 AM"
        name: Terraria
        contest: true
      - time: "12:00 PM"
        name: UNO
        note: Hosted by TTG
        free: true
        contest: true
      - time: "2:00 PM"
        name: "Frozen Crag 2: Frostbite Frenzy"
        note: Hosted by Quillmark
        contest: true
      - time: "3:00 PM"
        name: Super Smash Bros. Ultimate
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "3:30 PM"
        name: Minecraft Build Battle
        contest: true
      - time: "5:00 PM"
        name: Lethal Company
        contest: true
      - time: "6:00 PM"
        name: ARMS
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "7:00 PM"
        name: "Stick Fight: The Game"
        free: true
      - time: "7:00 PM"
        name: BANG!
        note: Hosted by TTG
        free: true
      - time: "9:00 PM"
        name: Group Photo
      - time: "10:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "11:00 PM"
        name: Helldivers 2
  - name: Sunday
    events:
      - time: "12:00 AM"
        name: Bingo
        note: Hosted by WITS
        free: true
      - time: "2:00 AM"
        name: Crab Game
        free: true
      - time: "12:00 PM"
        name: Suika Game
        note: Multi-Player Mode
        free: true
        contest: true
      - time: "2:30 PM"
        name: Prize Drawing

all_lan:
  - name: Minecraft Bingo
    body: Running the whole weekend rather than at a set time.

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
---

<link rel="stylesheet" href="{{ '/assets/css/build-a-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/build-a-lan.js' | relative_url }}" defer></script>

<div class="build-sprite">
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

  <symbol id="ico-hammer" viewBox="0 0 32 32"><path d="M5 27 17 15"/><path d="M14 8l4-4 10 10-4 4z"/><path d="M15 13l4 4"/></symbol>

</svg>
</div>
<div class="build-paper" aria-hidden="true"></div>

<div class="build-marquee" aria-hidden="true"><span>{{ page.ticker }}</span></div>

<section class="build-hero">
  <div class="build-sheet">
    <span class="build-reg build-reg--tl" aria-hidden="true"></span>
    <span class="build-reg build-reg--tr" aria-hidden="true"></span>
    <span class="build-reg build-reg--bl" aria-hidden="true"></span>
    <span class="build-reg build-reg--br" aria-hidden="true"></span>

    <p class="build-presents">PONG presents</p>
    <h1 class="build-title">{{ page.headline }}</h1>

    <div class="build-dim" aria-hidden="true">
      <span class="build-dim-ext"></span>
      <span class="build-dim-line"></span>
      <span class="build-dim-text">48 HOURS</span>
      <span class="build-dim-ext"></span>
    </div>

    <p class="build-tagline">{{ page.tagline }}</p>

    <div class="build-hero-grid">
      <div class="build-col">
        <div class="build-plate">
          <svg class="build-mark" viewBox="0 0 240 200" aria-hidden="true" focusable="false">
            <path class="bl-cline" d="M120 6v188M14 100h212"/>
            <path class="bl-arc" d="M72 56a62 62 0 0 0 0 88"/>
            <path class="bl-arc" d="M168 56a62 62 0 0 1 0 88"/>
            <path class="bl-box" d="M98 32h44v40l-22 18-22-18z"/>
            <path class="bl-box" d="M98 168h44v-40l-22-18-22 18z"/>
            <path class="bl-rule" d="M120 32v40M98 52h44"/>
            <path class="bl-rule" d="M120 168v-40M98 148h44"/>
            <path class="bl-cline" d="M120 100 186 60"/>
            <text class="bl-note" x="190" y="56">R62</text>
            <circle class="bl-node" cx="120" cy="100" r="3"/>
          </svg>
          <span class="build-tape" aria-hidden="true"><b>Under Construction</b></span>
        </div>
      </div>

      <div class="build-col">
        <div class="build-titleblock">
          <div class="build-tb-row">
            <div class="build-tb-cell build-tb-cell--wide">
              <span class="build-tb-key">Project</span>
              <span class="build-tb-val">{{ page.headline }}</span>
            </div>
            <div class="build-tb-cell">
              <span class="build-tb-key">Sheet</span>
              <span class="build-tb-val">A-001</span>
            </div>
          </div>
          <div class="build-tb-row">
            <div class="build-tb-cell build-tb-cell--wide">
              <span class="build-tb-key">{{ page.when_label }}</span>
              <span class="build-tb-val">{{ page.when_value }}</span>
            </div>
            <div class="build-tb-cell">
              <span class="build-tb-key">Scale</span>
              <span class="build-tb-val">NTS</span>
            </div>
          </div>
          <div class="build-tb-row">
            <div class="build-tb-cell build-tb-cell--wide">
              <span class="build-tb-key">{{ page.where_label }}</span>
              <span class="build-tb-val">{{ page.where_value }}</span>
            </div>
            <div class="build-tb-cell">
              <span class="build-tb-key">Rev</span>
              <span class="build-tb-val">04</span>
            </div>
          </div>
          <div class="build-tb-row">
            <div class="build-tb-cell build-tb-cell--wide">
              <span class="build-tb-key">Drawn by</span>
              <span class="build-tb-val">The People</span>
            </div>
            <div class="build-tb-cell">
              <span class="build-tb-key">Admission</span>
              <span class="build-tb-val">Free</span>
            </div>
          </div>
        </div>

        <p class="build-blurb">{{ page.blurb_1 }}</p>
        <p class="build-blurb">{{ page.blurb_2 }}</p>

        <div class="build-hero-actions">
          <a class="build-btn build-btn--primary" href="#running-order">See What Is On</a>
          <a class="build-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="build-countdown-wrap" id="build-countdown-wrap">
  <p class="build-countdown-head" id="build-countdown-head">Time Remaining Until Doors Open</p>
  <div class="build-countdown" id="build-countdown" aria-label="Countdown to Build-A-LAN">
    <div class="build-countdown-unit"><span class="build-countdown-num" data-unit="days">--</span><span class="build-countdown-label">Days</span></div>
    <div class="build-countdown-unit"><span class="build-countdown-num" data-unit="hours">--</span><span class="build-countdown-label">Hours</span></div>
    <div class="build-countdown-unit"><span class="build-countdown-num" data-unit="minutes">--</span><span class="build-countdown-label">Minutes</span></div>
    <div class="build-countdown-unit"><span class="build-countdown-num" data-unit="seconds">--</span><span class="build-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="build-facts">
  <table class="build-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="build-th-inner">
            <svg class="build-icon build-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="build-panel" id="schedule">
  <div class="build-panel-body">
    <h2 class="build-panel-title">
      <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-hammer"/></svg>
      The Schedule
    </h2>
    <p class="build-panel-sub">{{ page.schedule_note }}</p>

    <div class="build-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="build-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="build-schedule-img">
        <div class="build-noimg">
          <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-hammer"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="build-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="build-screen is-missing">
        <div class="build-noimg">
          <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-hammer"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="build-zoom" id="schedule-zoom">
  <a class="build-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="build-zoom-frame">
    <a class="build-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="build-panel" id="running-order">
  <div class="build-panel-body">
    <h2 class="build-panel-title">
      <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="build-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="build-days">
      {% for session in page.sessions %}
      <div class="build-day build-reveal">
        <h3 class="build-day-name">{{ session.name }}</h3>
        <ul class="build-slots">
          {% for ev in session.events %}
          <li class="build-slot">
            <span class="build-slot-time">{{ ev.time }}</span>
            <span class="build-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="build-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="build-slot-tags">
              {% if ev.free %}<span class="build-tag build-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="build-tag build-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="build-day build-day--all build-reveal">
        <h3 class="build-day-name">All LAN</h3>
        <ul class="build-slots">
          {% for ev in page.all_lan %}
          <li class="build-slot">
            <span class="build-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="build-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="build-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="build-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="build-legend">
      {% for item in page.legend %}
      <p class="build-legend-row">
        <span class="build-tag build-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="build-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="build-panel" id="kit">
  <div class="build-panel-body">
    <h2 class="build-panel-title">
      <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="build-panel-sub">Power and network are ours to supply</p>
    <ul class="build-kit">
      {% for item in page.kit %}
      <li class="build-kit-item"><span class="build-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="build-panel" id="faq">
  <div class="build-panel-body">
    <h2 class="build-panel-title">
      <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="build-panel-sub">Answered once, so you need not ask twice</p>
    <div class="build-faq">
      {% for entry in page.faq %}
      <details class="build-faq-item">
        <summary class="build-faq-q">{{ entry.q }}</summary>
        <p class="build-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="build-panel" id="sponsors">
  <div class="build-panel-body">
    <h2 class="build-panel-title">
      <svg class="build-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="build-panel-sub">The weekend runs on their help</p>
    <div class="build-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="build-sponsor build-reveal">
        <div class="build-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="build-sponsor-name">{{ sponsor.name }}</div>
        <div class="build-sponsor-tier">{{ tier[0] }}</div>
        <div class="build-sponsor-links">
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

<footer class="build-footer">
  <div class="build-footer-cards">
    <div class="build-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="build-footer-card">
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
  <p class="build-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
