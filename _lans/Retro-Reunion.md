---
title: Retro Reunion
start_date: 2023-02-17
end_date: 2023-02-19
description: >-
  Retro Reunion, the 20th LANniversary Edition: 48 hours in the MSC Great Hall
  and Ballrooms celebrating twenty years of PONG. Games, prizes, and fun.

ticker: "RETRO REUNION · 20TH LANNIVERSARY EDITION · 20 YEARS OF PONG · FEB 17-19 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · GAMES, PRIZES, AND FUN ·"

headline: Retro Reunion
subtitle_a: "20th "
subtitle_b: LAN
subtitle_c: "niversary Edition"

years_count: "20 Years of PONG!"
years_sub: "One spine for every year, and the twentieth in gold"

blurb_1: "For our first LAN of the year we're celebrating all things gaming and PONG!"
blurb_2: "Join us for 48-hours of games, prizes, and fun in the MSC Great Hall & Ballrooms!"

from_label: From
from_value: "Feb. 17th, 4PM"
to_label: To
to_value: "Feb. 19th, 4PM"

facts:
  - { icon: ico-cart,   label: Dates,     value: "February 17-19, 2023" }
  - { icon: ico-hall,   label: Venue,     value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock,  label: Duration,  value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,   label: Occasion,  value: "The 20th LANniversary" }
  - { icon: ico-plug,   label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/retro-reunion_schedule.webp
schedule_alt: >-
  The Retro Reunion weekend schedule: four columns of events, colour-keyed by
  day and flagged free to play and/or competitive. The full running order
  follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "6:00 PM",  name: "Counter-Strike 1.6", fmt: "5v5" }
      - { time: "6:00 PM",  name: "Overwatch 2", free: true, contest: true, fmt: "5v5" }
      - { time: "8:30 PM",  name: "Minecraft: Survival Games" }
      - { time: "10:00 PM", name: "TRON", free: true, fmt: "Movie" }
      - { time: "10:00 PM", name: "Divekick", free: true, contest: true, fmt: "1v1" }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Meme Jeopardy!", free: true, contest: true }
      - { time: "2:00 AM",  name: "Left 4 Dead 2" }
      - { time: "12:00 PM", name: "Rock Band 4: Battle of the Bands", free: true, contest: true }
      - { time: "1:00 PM",  name: "Super Smash Bros.", free: true, contest: true, mark: "BDS" }
      - { time: "2:00 PM",  name: "Beat Saber", free: true, contest: true }
      - { time: "3:00 PM",  name: "UNO", free: true, mark: "TTG" }
      - { time: "5:30 PM",  name: "Halo: The Master Chief Collection" }
      - { time: "6:30 PM",  name: "Mortal Kombat II", free: true, contest: true, mark: "BDS" }
      - { time: "7:00 PM",  name: "Mario Kart: Don't Drink & Drive", free: true, contest: true, mark: "ISP" }
      - { time: "9:00 PM",  name: "Group Photo" }
      - { time: "9:30 PM",  name: "Minecraft: Hook, Line, & Creeper", contest: true, fmt: "3v3" }
  - name: Sunday
    events:
      - { time: "12:00 AM", name: "PlanetSide 2", free: true }
      - { time: "2:00 AM",  name: "Crab Game", free: true }
      - { time: "12:00 PM", name: "Super Nintendo Party Games", free: true }
      - { time: "3:00 PM",  name: "Prize Drawing" }

all_lan:
  - name: "Minecraft: Parkour Time-Trials"
    when: "Fri 6:00 PM - Sun 1:00 PM"
    contest: true
    body: "Open the whole weekend rather than at a set time. More info in #minecraft on the PONG Discord."

servers:
  - { label: "Minecraft Vanilla (1.19.3)", value: "mc.ponglan.net" }
  - { label: "Minecraft Modded: Forge (1.18.2), Vault Hunters 3rd Edition v7H", value: "forge.ponglan.net" }

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive three tickets each and second place will receive two tickets each, all other participants earn one ticket."
  - tag: FREE
    kind: free
    body: "Marks a game that is free to buy or play. All PONG events are free to participate in."
legend_note: "In casual events, 1 ticket will be awarded simply for participation. (For example: you can play in a Minecraft event, but Minecraft is not a free game.)"

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Smash and Mario Kart go
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "What was the LANniversary?"
    a: "Retro Reunion marked twenty years of PONG LANs, counting from 2003, the year the club then believed it started."
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 3:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
  - q: "What do the BDS, TTG and ISP marks mean?"
    a: "Those events were run with other Stout clubs. BDS is Blue Devil Smash, TTG is the Tabletop Gaming Club, and ISP is the club now called Cyber@Stout."
  - q: "TRON was on the schedule. Was that the film?"
    a: "Yes. It was a movie screening on Friday at 10:00 PM, alongside Divekick."
---

<link rel="stylesheet" href="{{ '/assets/css/retro-reunion.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/retro-reunion.js' | relative_url }}" defer></script>

<div class="reunion-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-cart" viewBox="0 0 32 32"><path d="M6 4h20v24H6z"/><path d="M11 4v8h10V4"/><path d="M6 20h20"/><path d="M10 24h5"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

  <symbol id="ico-pad" viewBox="0 0 32 32"><path d="M10 10h12a8 8 0 0 1 8 8 4 4 0 0 1-7.2 2.4L21 18h-10l-1.8 2.4A4 4 0 0 1 2 18a8 8 0 0 1 8-8z"/><path d="M7 14v4"/><path d="M5 16h4"/><circle cx="23" cy="15" r="1.2" fill="currentColor" stroke="none"/><circle cx="26" cy="18" r="1.2" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-server" viewBox="0 0 32 32"><rect x="4" y="5" width="24" height="8"/><rect x="4" y="19" width="24" height="8"/><circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none"/><circle cx="9" cy="23" r="1.3" fill="currentColor" stroke="none"/></symbol>

</svg>
</div>

<div class="reunion-paper" aria-hidden="true"></div>

<div class="reunion-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="reunion-hero">
  <p class="reunion-presents">PONG Presents</p>

  <div class="reunion-rule" aria-hidden="true"></div>
  <h1 class="reunion-title">{{ page.headline }}</h1>
  <p class="reunion-subtitle">{{ page.subtitle_a }}<b>{{ page.subtitle_b }}</b>{{ page.subtitle_c }}</p>
  <div class="reunion-rule" aria-hidden="true"></div>

  <div class="reunion-years">
    <p class="reunion-years-count">{{ page.years_count }}</p>
    <p class="reunion-years-sub">{{ page.years_sub }}</p>
    <ul class="reunion-tally" aria-hidden="true">
      {% for i in (1..19) %}<li class="reunion-tally-year"></li>{% endfor %}
      <li class="reunion-tally-year reunion-tally-year--now"></li>
    </ul>
  </div>

  <div class="reunion-when">
    <div class="reunion-when-block">
      <span class="reunion-when-key">{{ page.from_label }}</span>
      <span class="reunion-when-val">{{ page.from_value }}</span>
    </div>
    <div class="reunion-when-block">
      <span class="reunion-when-key">{{ page.to_label }}</span>
      <span class="reunion-when-val">{{ page.to_value }}</span>
    </div>
  </div>

  <p class="reunion-blurb">{{ page.blurb_1 }}</p>
  <p class="reunion-blurb">{{ page.blurb_2 }}</p>

  <div class="reunion-hero-actions">
    <a class="reunion-btn reunion-btn--primary" href="#running-order">See What Was On</a>
    <a class="reunion-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="reunion-countdown-wrap" id="reunion-countdown-wrap">
  <p class="reunion-countdown-head" id="reunion-countdown-head">Time Remaining Until Doors Open</p>
  <div class="reunion-countdown" id="reunion-countdown" aria-label="Countdown to Retro Reunion">
    <div class="reunion-countdown-unit"><span class="reunion-countdown-num" data-unit="days">--</span><span class="reunion-countdown-label">Days</span></div>
    <div class="reunion-countdown-unit"><span class="reunion-countdown-num" data-unit="hours">--</span><span class="reunion-countdown-label">Hours</span></div>
    <div class="reunion-countdown-unit"><span class="reunion-countdown-num" data-unit="minutes">--</span><span class="reunion-countdown-label">Minutes</span></div>
    <div class="reunion-countdown-unit"><span class="reunion-countdown-num" data-unit="seconds">--</span><span class="reunion-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="reunion-facts">
  <table class="reunion-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="reunion-th-inner">
            <svg class="reunion-icon reunion-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="reunion-panel" id="schedule">
  <div class="reunion-panel-body">
    <h2 class="reunion-panel-title">
      <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cart"/></svg>
      The Board
    </h2>
    <p class="reunion-panel-sub">{{ page.schedule_note }}</p>

    <div class="reunion-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="reunion-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="reunion-schedule-img">
        <div class="reunion-noimg">
          <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cart"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="reunion-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="reunion-screen is-missing">
        <div class="reunion-noimg">
          <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cart"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="reunion-zoom" id="schedule-zoom">
  <a class="reunion-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="reunion-zoom-frame">
    <a class="reunion-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="reunion-panel" id="running-order">
  <div class="reunion-panel-body">
    <h2 class="reunion-panel-title">
      <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="reunion-panel-sub">{{ page.sessions.size }} days &middot; gold is Friday, purple is Saturday, teal is Sunday</p>

    <div class="reunion-days">
      {% for session in page.sessions %}
      <div class="reunion-day reunion-reveal">
        <h3 class="reunion-day-name">{{ session.name }}</h3>
        <ul class="reunion-slots">
          {% for ev in session.events %}
          <li class="reunion-slot">
            <span class="reunion-slot-time">{{ ev.time }}</span>
            <span class="reunion-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="reunion-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="reunion-slot-tags">
              {% if ev.fmt %}<span class="reunion-tag reunion-tag--mark">{{ ev.fmt }}</span>{% endif %}
              {% if ev.mark %}<span class="reunion-tag reunion-tag--mark">{{ ev.mark }}</span>{% endif %}
              {% if ev.free %}<span class="reunion-tag reunion-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="reunion-tag reunion-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="reunion-day reunion-day--all reunion-reveal">
        <h3 class="reunion-day-name">All LAN</h3>
        <ul class="reunion-slots">
          {% for ev in page.all_lan %}
          <li class="reunion-slot">
            <span class="reunion-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="reunion-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="reunion-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="reunion-slot-tags">
              {% if ev.contest %}<span class="reunion-tag reunion-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="reunion-legend">
      {% for item in page.legend %}
      <p class="reunion-legend-row">
        <span class="reunion-tag reunion-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="reunion-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

{% if page.servers.size > 0 %}
<section class="reunion-panel" id="servers">
  <div class="reunion-panel-body">
    <h2 class="reunion-panel-title">
      <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-server"/></svg>
      The Minecraft Servers
    </h2>
    <p class="reunion-panel-sub">Printed in the corner of the board, kept here as it ran</p>
    <ul class="reunion-kit">
      {% for s in page.servers %}
      <li class="reunion-kit-item">
        <span class="reunion-kit-check" aria-hidden="true"></span>
        <span>{{ s.label }}<span class="reunion-slot-note">{{ s.value }}</span></span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
{% endif %}

<section class="reunion-panel" id="kit">
  <div class="reunion-panel-body">
    <h2 class="reunion-panel-title">
      <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="reunion-panel-sub">Power and network are ours to supply</p>
    <ul class="reunion-kit">
      {% for item in page.kit %}
      <li class="reunion-kit-item"><span class="reunion-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="reunion-panel" id="faq">
  <div class="reunion-panel-body">
    <h2 class="reunion-panel-title">
      <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="reunion-panel-sub">Answered once, so you need not ask twice</p>
    <div class="reunion-faq">
      {% for entry in page.faq %}
      <details class="reunion-faq-item">
        <summary class="reunion-faq-q">{{ entry.q }}</summary>
        <p class="reunion-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="reunion-panel" id="sponsors">
  <div class="reunion-panel-body">
    <h2 class="reunion-panel-title">
      <svg class="reunion-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="reunion-panel-sub">The weekend runs on their help</p>
    <div class="reunion-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="reunion-sponsor reunion-reveal">
        <div class="reunion-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="reunion-sponsor-name">{{ sponsor.name }}</div>
        <div class="reunion-sponsor-tier">{{ tier[0] }}</div>
        <div class="reunion-sponsor-links">
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

<footer class="reunion-footer">
  <div class="reunion-footer-cards">
    <div class="reunion-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="reunion-footer-card">
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
  <p class="reunion-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
