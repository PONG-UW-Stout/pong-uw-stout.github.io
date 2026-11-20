---
title: Festi-LAN
start_date: 2026-04-17
end_date: 2026-04-19
description: >-
  Festi-LAN: PONG's musical 48-hour LAN in the MSC Great Hall and Ballrooms,
  featuring some popular rhythm games.

ticker: "FESTI-LAN · A MUSICAL 48-HOUR GAMING EVENT · APRIL 17-19 · MSC GREAT HALL & BALLROOMS · FREE ENTRY · GAMES, TOURNAMENTS, PRIZES · FEATURING SOME POPULAR RHYTHM GAMES ·"

headline: Festi-LAN
tagline: "Games, Tournaments, Prizes"

blurb: "Join us in the MSC for a musical 48-hour gaming event, featuring some popular rhythm games."
free_flash: "FREE"

when_label: When
when_value: "April 17th, 4:00 PM thru April 19th, 4:00 PM"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

dates_display: "APRIL 17-19"

facts:
  - icon: ico-cal
    label: Dates
    value: "April 17-19, 2026"
  - icon: ico-hall
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-note
    label: Theme
    value: "Musical"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/festi-lan_schedule.webp
schedule_alt: >-
  The Festi-LAN weekend schedule: four columns of events colour-coded by day
  and flagged free to play and/or competitive. The full running order follows
  below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "4:00 PM"
        name: SGX.26 Preview
        free: true
      - time: "6:00 PM"
        name: "Deadlock: Street Brawl"
        free: true
        contest: true
      - time: "8:00 PM"
        name: Rhythm Arcade
        free: true
      - time: "10:00 PM"
        name: osu!
        free: true

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Karaoke
        free: true
      - time: "1:30 AM"
        name: Lethal Company
      - time: "12:00 PM"
        name: Beat Saber
        free: true
      - time: "1:00 PM"
        name: Super Smash Bros. Ultimate
        free: true
        contest: true
      - time: "2:00 PM"
        name: "Magic: The Gathering Tiny Leaders"
        contest: true
      - time: "4:00 PM"
        name: Lethal League Blaze
        free: true
        contest: true
      - time: "4:00 PM"
        name: Geometry Dash
        contest: true
      - time: "7:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
        free: true
      - time: "10:00 PM"
        name: "Hook, Line, & Creeper"
        contest: true

  - name: Sunday
    events:
      - time: "12:00 AM"
        name: PONG Jeopardy
        free: true
        contest: true
      - time: "1:30 AM"
        name: Crab Game
        free: true
      - time: "12:00 PM"
        name: Super Battle Golf
      - time: "12:00 PM"
        name: Party Games
        free: true
      - time: "2:30 PM"
        name: Prize Drawing
        free: true

all_lan:
  - name: Cobblemon Bingo
  - name: Dimension Dash
  - name: Vs. The Board
all_lan_note: "See #lan-resources on Discord for more info"

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
  - Headphones, because the hall gets loud and half of this weekend is audio
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
  - q: "Did you need your own rhythm game gear?"
    a: "No. Nothing on the schedule needed special equipment, though people were welcome to bring their own controllers or pads."
---

<link rel="stylesheet" href="{{ '/assets/css/festi-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/festi-lan.js' | relative_url }}" defer></script>

<div class="synth-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-arrow" viewBox="0 0 48 48">
    <path d="M24 4 44 24 34 24 34 44 14 44 14 24 4 24Z" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-note" viewBox="0 0 32 32">
    <path d="M13 24V6l13-3v18"/>
    <ellipse cx="9" cy="24" rx="5" ry="4"/>
    <ellipse cx="22" cy="21" rx="5" ry="4"/>
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

{% capture firework %}
  <path class="synth-launch" pathLength="100" d="M32 84 Q32 58 32.0 33.0"/>
  <circle class="synth-flashpoint" cx="32.0" cy="30.0" r="3.5"/>
  <g class="synth-sparks">
      <path class="synth-spark" pathLength="100" d="M32.0 27.0 Q32.0 3.0 32.0 19.0"/>
      <path class="synth-spark" pathLength="100" d="M33.1 27.2 Q39.8 11.1 39.8 27.1"/>
      <path class="synth-spark" pathLength="100" d="M34.1 27.9 Q51.1 10.9 51.1 26.9"/>
      <path class="synth-spark" pathLength="100" d="M34.8 28.9 Q50.9 22.2 50.9 38.2"/>
      <path class="synth-spark" pathLength="100" d="M35.0 30.0 Q59.0 30.0 59.0 46.0"/>
      <path class="synth-spark" pathLength="100" d="M34.8 31.1 Q50.9 37.8 50.9 53.8"/>
      <path class="synth-spark" pathLength="100" d="M34.1 32.1 Q51.1 49.1 51.1 65.1"/>
      <path class="synth-spark" pathLength="100" d="M33.1 32.8 Q39.8 48.9 39.8 64.9"/>
      <path class="synth-spark" pathLength="100" d="M32.0 33.0 Q32.0 57.0 32.0 73.0"/>
      <path class="synth-spark" pathLength="100" d="M30.9 32.8 Q24.2 48.9 24.2 64.9"/>
      <path class="synth-spark" pathLength="100" d="M29.9 32.1 Q12.9 49.1 12.9 65.1"/>
      <path class="synth-spark" pathLength="100" d="M29.2 31.1 Q13.1 37.8 13.1 53.8"/>
      <path class="synth-spark" pathLength="100" d="M29.0 30.0 Q5.0 30.0 5.0 46.0"/>
      <path class="synth-spark" pathLength="100" d="M29.2 28.9 Q13.1 22.2 13.1 38.2"/>
      <path class="synth-spark" pathLength="100" d="M29.9 27.9 Q12.9 10.9 12.9 26.9"/>
      <path class="synth-spark" pathLength="100" d="M30.9 27.2 Q24.2 11.1 24.2 27.1"/>
  </g>
{% endcapture %}

<div class="synth-scene" aria-hidden="true">
  <div class="synth-mountains"></div>
  <div class="synth-fireworks">
    {% for n in (1..5) %}<svg class="synth-burst" viewBox="0 0 64 84">{{ firework }}</svg>{% endfor %}
  </div>
  <div class="synth-floor"><div class="synth-grid"></div></div>
</div>

<div class="synth-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="synth-hero">
  <p class="synth-presents">PONG presents:</p>

  <div class="synth-titlewrap">
    <div class="synth-sun" aria-hidden="true"></div>
    <h1 class="synth-title">{{ page.headline }}</h1>
    <span class="synth-flash" aria-hidden="true">{{ page.free_flash }}</span>
  </div>

  <p class="synth-tagline">{{ page.tagline }}</p>

  <div class="synth-highway" aria-hidden="true">
    <span class="synth-lane"><svg viewBox="0 0 48 48"><use href="#ico-arrow"/></svg></span>
    <span class="synth-lane"><svg viewBox="0 0 48 48"><use href="#ico-arrow"/></svg></span>
    <span class="synth-lane"><svg viewBox="0 0 48 48"><use href="#ico-arrow"/></svg></span>
    <span class="synth-lane"><svg viewBox="0 0 48 48"><use href="#ico-arrow"/></svg></span>
  </div>

  <div class="synth-boxes">
    <div class="synth-box">
      <p>{{ page.blurb }}</p>
    </div>

    <div class="synth-box">
      <dl class="synth-details">
        <dt>{{ page.where_label | upcase }}:</dt>
        <dd>{{ page.where_value }}</dd>
        <dt>{{ page.when_label | upcase }}:</dt>
        <dd>{{ page.when_value }}</dd>
      </dl>
    </div>
  </div>

  <div class="synth-hero-actions">
    {% if page.registration_url and page.registration_url != "" %}
    <a class="synth-btn synth-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
    {% endif %}
    <a class="synth-btn synth-btn--primary" href="#running-order">See What Is On</a>
    <a class="synth-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="synth-countdown-wrap" id="synth-countdown-wrap">
  <p class="synth-countdown-head" id="synth-countdown-head">Time Remaining Until Doors Open</p>
  <div class="synth-countdown" id="synth-countdown" aria-label="Countdown to Festi-LAN">
    <div class="synth-countdown-unit">
      <span class="synth-countdown-num" data-unit="days">--</span>
      <span class="synth-countdown-label">Days</span>
    </div>
    <div class="synth-countdown-unit">
      <span class="synth-countdown-num" data-unit="hours">--</span>
      <span class="synth-countdown-label">Hours</span>
    </div>
    <div class="synth-countdown-unit">
      <span class="synth-countdown-num" data-unit="minutes">--</span>
      <span class="synth-countdown-label">Minutes</span>
    </div>
    <div class="synth-countdown-unit">
      <span class="synth-countdown-num" data-unit="seconds">--</span>
      <span class="synth-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="synth-facts">
  <table class="synth-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="synth-th-inner">
            <svg class="synth-icon synth-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="synth-panel" id="schedule">
  <div class="synth-panel-body">
    <h2 class="synth-panel-title">
      <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-cal"/></svg>
      The Schedule
    </h2>
    <p class="synth-panel-sub">{{ page.schedule_note }}</p>

    <div class="synth-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="synth-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="synth-schedule-img">
        <div class="synth-noimg">
          <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-note"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="synth-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="synth-screen is-missing">
        <div class="synth-noimg">
          <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-note"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="synth-zoom" id="schedule-zoom">
  <a class="synth-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="synth-zoom-frame">
    <a class="synth-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="synth-panel" id="running-order">
  <div class="synth-panel-body">
    <h2 class="synth-panel-title">
      <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="synth-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="synth-days">
      {% for session in page.sessions %}
      <div class="synth-day synth-reveal">
        <h3 class="synth-day-name">{{ session.name }}</h3>
        <ul class="synth-slots">
          {% for ev in session.events %}
          <li class="synth-slot">
            <span class="synth-slot-time">{{ ev.time }}</span>
            <span class="synth-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="synth-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="synth-slot-tags">
              {% if ev.free %}<span class="synth-tag synth-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="synth-tag synth-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="synth-day synth-day--all synth-reveal">
        <h3 class="synth-day-name">
          All LAN
          {% if page.all_lan_note %}<span class="synth-day-note">{{ page.all_lan_note }}</span>{% endif %}
        </h3>
        <ul class="synth-slots">
          {% for ev in page.all_lan %}
          <li class="synth-slot">
            <span class="synth-slot-time">All weekend</span>
            <span class="synth-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="synth-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="synth-slot-tags"></span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="synth-legend">
      {% for item in page.legend %}
      <p class="synth-legend-row">
        <span class="synth-tag synth-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="synth-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
</section>

<section class="synth-panel" id="kit">
  <div class="synth-panel-body">
    <h2 class="synth-panel-title">
      <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="synth-panel-sub">Power and network are ours to supply</p>
    <ul class="synth-kit">
      {% for item in page.kit %}
      <li class="synth-kit-item">
        <span class="synth-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="synth-panel" id="faq">
  <div class="synth-panel-body">
    <h2 class="synth-panel-title">
      <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="synth-panel-sub">Answered once, so you need not ask twice</p>
    <div class="synth-faq">
      {% for entry in page.faq %}
      <details class="synth-faq-item">
        <summary class="synth-faq-q">{{ entry.q }}</summary>
        <p class="synth-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="synth-panel" id="sponsors">
  <div class="synth-panel-body">
    <h2 class="synth-panel-title">
      <svg class="synth-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="synth-panel-sub">The weekend runs on their help</p>
    <div class="synth-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="synth-sponsor synth-reveal">
        <div class="synth-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="synth-sponsor-name">{{ sponsor.name }}</div>
        <div class="synth-sponsor-tier">{{ tier[0] }}</div>
        <div class="synth-sponsor-links">
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

<footer class="synth-footer">
  <div class="synth-footer-cards">
    <div class="synth-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="synth-footer-card">
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
  <p class="synth-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
