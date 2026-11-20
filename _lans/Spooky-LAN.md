---
title: Spooky-LAN
start_date: 2025-11-21
end_date: 2025-11-23
description: >-
  Spooky-LAN: PONG's bone-chilling 48-hour LAN in the MSC Great Hall and
  Ballrooms, featuring spooky (and not-so-spooky) games all weekend.

ticker: "SPOOKY-LAN · A BONE-CHILLING 48-HOUR GAMING EVENT · NOV 21-23 · MSC GREAT HALL + BALLROOMS · FREE ENTRY · GAMES, TOURNAMENTS, PRIZES · SPOOKY AND NOT-SO-SPOOKY GAMES ALL WEEKEND · BE READY ·"

headline: Spooky-LAN
tagline: "Games, Tournaments, Prizes!"

blurb_lead: "Enter the MSC for a bone-chilling 48-hour gaming event!"
blurb_body: "Featuring spooky (and not-so-spooky) games all weekend. Be ready!"
free_flash: "FREE!"

when_label: When
when_value: "4 PM Friday, Nov. 21st thru 4 PM Sunday, Nov. 23rd"
where_label: Where
where_value: "MSC Great Hall + Ballrooms"

dates_display: "NOV 21-23"

facts:
  - icon: ico-tape
    label: Dates
    value: "Nov 21-23, 2025"
  - icon: ico-tv
    label: Venue
    value: "MSC Great Hall + Ballrooms"
  - icon: ico-moon
    label: Duration
    value: "48 Hours"
  - icon: ico-candy
    label: Entry Fee
    value: "Free"
  - icon: ico-ghost
    label: Theme
    value: "Spooky (and not-so-spooky)"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/spooky-lan_schedule.webp
schedule_alt: >-
  The Spooky-LAN weekend schedule: four columns of events colour-coded by day
  and flagged free to play and/or competitive. The full running order follows
  below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Stellaris Survival
        contest: true
      - time: "7:00 PM"
        name: Peak
        contest: true
      - time: "9:00 PM"
        name: Nocturne Crypts
        note: Survival Games · Hosted by Quillmark
        contest: true
      - time: "10:30 PM"
        name: "SCP: Secret Laboratory"
        free: true

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Bingo
        note: Hosted by WITS
        free: true
      - time: "1:30 AM"
        name: Garry's Mod Murder
      - time: "12:00 PM"
        name: UNO
        note: Hosted by TTG
        free: true
      - time: "1:00 PM"
        name: Super Smash Bros. Ultimate
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "1:30 PM"
        name: Town of Salem 2
        free: true
      - time: "3:00 PM"
        name: "Magic: The Gathering Commander"
        note: Hosted by TCCS
        free: true
        contest: true
      - time: "4:00 PM"
        name: Skullgirls
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "5:00 PM"
        name: "Call of Duty: Black Ops III Zombies"
      - time: "7:00 PM"
        name: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
        free: true
      - time: "10:30 PM"
        name: Left 4 Dead 2

  - name: Sunday
    events:
      - time: "12:00 AM"
        name: Buckshot Roulette
        free: true
        contest: true
      - time: "1:30 AM"
        name: Lethal Company
      - time: "12:00 PM"
        name: "The Binding of Isaac: Afterbirth"
        free: true
      - time: "12:00 PM"
        name: Party Games
        free: true
      - time: "2:30 PM"
        name: Prize Drawing
        free: true

all_lan:
  name: Minecraft Bingo
  host: "bingo.ponglan.net"
  body: Running the whole weekend on the PONG Minecraft server. Drop in whenever, cross off what you can.

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
  - Headphones, because the hall gets loud and some of this is meant to be heard
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
  - q: "Was all of it horror?"
    a: "No. About half the schedule was horror. Uno and Mario Kart ran alongside it."
---

<link rel="stylesheet" href="{{ '/assets/css/spooky-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/spooky-lan.js' | relative_url }}" defer></script>

<div class="vhs-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-tape" viewBox="0 0 32 32">
    <rect x="2" y="7" width="28" height="18" rx="2"/>
    <circle cx="11" cy="16" r="4"/>
    <circle cx="21" cy="16" r="4"/>
    <line x1="11" y1="20" x2="21" y2="20"/>
    <line x1="6" y1="25" x2="6" y2="22"/>
    <line x1="26" y1="25" x2="26" y2="22"/>
  </symbol>

  <symbol id="ico-tv" viewBox="0 0 32 32">
    <rect x="3" y="8" width="26" height="17" rx="2"/>
    <rect x="6" y="11" width="15" height="11"/>
    <circle cx="25.5" cy="14" r="1.4"/>
    <circle cx="25.5" cy="19" r="1.4"/>
    <path d="M11 8 7 3"/>
    <path d="M18 8l5-5"/>
  </symbol>

  <symbol id="ico-moon" viewBox="0 0 32 32">
    <path d="M24.5 20.5A11 11 0 0 1 11.5 7.5a11 11 0 1 0 13 13z"/>
  </symbol>

  <symbol id="ico-candy" viewBox="0 0 32 32">
    <ellipse cx="16" cy="16" rx="7" ry="6"/>
    <path d="M9 16 3 11v10z"/>
    <path d="M23 16l6-5v10z"/>
    <path d="M13.5 13.5 18.5 18.5"/>
  </symbol>

  <symbol id="ico-ghost" viewBox="0 0 32 32">
    <path d="M6 28V14a10 10 0 0 1 20 0v14l-4-3-3 3-3-3-3 3-3-3z"/>
    <circle cx="12.5" cy="14" r="1.6" fill="currentColor" stroke="none"/>
    <circle cx="19.5" cy="14" r="1.6" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32">
    <path d="M11 4v7"/>
    <path d="M21 4v7"/>
    <path d="M7 11h18v4a9 9 0 0 1-18 0z"/>
    <path d="M16 24v5"/>
  </symbol>

  <symbol id="ico-skull" viewBox="0 0 32 32">
    <path d="M6 15a10 10 0 0 1 20 0v5l-3 2v4H9v-4l-3-2z"/>
    <circle cx="12" cy="15" r="2.6" fill="currentColor" stroke="none"/>
    <circle cx="20" cy="15" r="2.6" fill="currentColor" stroke="none"/>
    <path d="M16 19v3"/>
  </symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <line x1="16" y1="16" x2="23" y2="16"/>
    <line x1="16" y1="16" x2="16" y2="8"/>
    <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none"/>
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

  <symbol id="ico-pick" viewBox="0 0 32 32">
    <path d="M4 28 18 14"/>
    <path d="M9 11c5-5 13-5 18 0-6-1-9 0-12 3s-4 6-3 12c-5-5-8-10-3-15z"/>
  </symbol>

</svg>
</div>

<div class="vhs-room" aria-hidden="true">
  <div class="vhs-panelling"></div>
  <div class="vhs-lamp"></div>
</div>

<div class="vhs-grain" aria-hidden="true"></div>
<div class="vhs-scanlines" aria-hidden="true"></div>

<div class="vhs-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="vhs-hero">
  <p class="vhs-presents">PONG presents:</p>
  <h1 class="vhs-title" data-text="{{ page.headline }}">{{ page.headline }}</h1>
  <div class="vhs-drip" aria-hidden="true"></div>

  <div class="vhs-hero-stage">
    <div class="vhs-tv">
      <div class="vhs-tv-screen">
        <div class="vhs-tv-static" aria-hidden="true"></div>
        <div class="vhs-tv-glare" aria-hidden="true"></div>
        <div class="vhs-osd" aria-hidden="true">
          <span class="vhs-osd-mode"><span class="vhs-osd-play"></span>PLAY</span>
          <span class="vhs-osd-sp">SP</span>
          <span class="vhs-osd-counter" id="vhs-counter">0:00:00</span>
        </div>
        <div class="vhs-tv-content">
          <p>{{ page.blurb_lead }}</p>
          <p>{{ page.blurb_body }}</p>
          <p class="vhs-tv-tagline">{{ page.tagline }}</p>
        </div>
      </div>
      <div class="vhs-tv-controls" aria-hidden="true">
        <span class="vhs-tv-dial"></span>
        <span class="vhs-tv-dial"></span>
        <span class="vhs-tv-vent"></span>
      </div>
      <span class="vhs-flash" aria-hidden="true">{{ page.free_flash }}</span>
    </div>

    <div class="vhs-cassette">
      <div class="vhs-cassette-label">
        <p><strong>{{ page.when_label | upcase }}:</strong> {{ page.when_value }}</p>
        <p><strong>{{ page.where_label | upcase }}:</strong> {{ page.where_value }}</p>
      </div>
      <div class="vhs-cassette-reels" aria-hidden="true">
        <span class="vhs-reel"></span>
        <span class="vhs-reel"></span>
      </div>
    </div>
  </div>

  <div class="vhs-hero-actions">
    {% if page.registration_url and page.registration_url != "" %}
    <a class="vhs-btn vhs-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
    {% endif %}
    <a class="vhs-btn vhs-btn--primary" href="#running-order">See What Is On</a>
    <a class="vhs-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="vhs-countdown-wrap" id="vhs-countdown-wrap">
  <p class="vhs-countdown-head" id="vhs-countdown-head">Time Remaining Until Doors Open</p>
  <div class="vhs-countdown" id="vhs-countdown" aria-label="Countdown to Spooky-LAN">
    <div class="vhs-countdown-unit">
      <span class="vhs-countdown-num" data-unit="days">--</span>
      <span class="vhs-countdown-label">Days</span>
    </div>
    <div class="vhs-countdown-unit">
      <span class="vhs-countdown-num" data-unit="hours">--</span>
      <span class="vhs-countdown-label">Hours</span>
    </div>
    <div class="vhs-countdown-unit">
      <span class="vhs-countdown-num" data-unit="minutes">--</span>
      <span class="vhs-countdown-label">Minutes</span>
    </div>
    <div class="vhs-countdown-unit">
      <span class="vhs-countdown-num" data-unit="seconds">--</span>
      <span class="vhs-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="vhs-facts">
  <table class="vhs-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="vhs-th-inner">
            <svg class="vhs-icon vhs-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="vhs-case" id="schedule">
  <div class="vhs-case-spine" aria-hidden="true"><span>Spooky-LAN</span></div>
  <div class="vhs-case-body">
    <h2 class="vhs-case-title">
      <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-tape"/></svg>
      The Schedule
    </h2>
    <p class="vhs-case-sub">{{ page.schedule_note }}</p>

    <div class="vhs-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="vhs-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="vhs-schedule-img">
        <div class="vhs-noimg">
          <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-tv"/></svg>
          <strong>Tracking&hellip;</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="vhs-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="vhs-screen is-missing">
        <div class="vhs-noimg">
          <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-tv"/></svg>
          <strong>Tracking&hellip;</strong>
          <span>Drop the board at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="vhs-zoom" id="schedule-zoom">
  <a class="vhs-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="vhs-zoom-frame">
    <a class="vhs-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="vhs-case" id="running-order">
  <div class="vhs-case-spine" aria-hidden="true"><span>Running Order</span></div>
  <div class="vhs-case-body">
    <h2 class="vhs-case-title">
      <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="vhs-case-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="vhs-days">
      {% for session in page.sessions %}
      <div class="vhs-day vhs-reveal">
        <h3 class="vhs-day-name">{{ session.name }}</h3>
        <ul class="vhs-slots">
          {% for ev in session.events %}
          <li class="vhs-slot">
            <span class="vhs-slot-time">{{ ev.time }}</span>
            <span class="vhs-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="vhs-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="vhs-slot-tags">
              {% if ev.free %}<span class="vhs-tag vhs-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="vhs-tag vhs-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan %}
      <div class="vhs-day vhs-day--all vhs-reveal">
        <h3 class="vhs-day-name">All LAN</h3>
        <ul class="vhs-slots">
          <li class="vhs-slot">
            <span class="vhs-slot-time">{{ page.all_lan.host }}</span>
            <span class="vhs-slot-name">
              {{ page.all_lan.name }}
              <span class="vhs-slot-note">{{ page.all_lan.body }}</span>
            </span>
            <span class="vhs-slot-tags"></span>
          </li>
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="vhs-legend">
      {% for item in page.legend %}
      <p class="vhs-legend-row">
        <span class="vhs-tag vhs-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="vhs-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
</section>

<section class="vhs-case" id="kit">
  <div class="vhs-case-spine" aria-hidden="true"><span>Pack Your Bag</span></div>
  <div class="vhs-case-body">
    <h2 class="vhs-case-title">
      <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="vhs-case-sub">Power and network are ours to supply</p>
    <ul class="vhs-kit">
      {% for item in page.kit %}
      <li class="vhs-kit-item">
        <span class="vhs-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="vhs-case" id="faq">
  <div class="vhs-case-spine" aria-hidden="true"><span>Questions</span></div>
  <div class="vhs-case-body">
    <h2 class="vhs-case-title">
      <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="vhs-case-sub">Answered once, so you need not ask twice</p>
    <div class="vhs-faq">
      {% for entry in page.faq %}
      <details class="vhs-faq-item">
        <summary class="vhs-faq-q">{{ entry.q }}</summary>
        <p class="vhs-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="vhs-case" id="sponsors">
  <div class="vhs-case-spine" aria-hidden="true"><span>Sponsors</span></div>
  <div class="vhs-case-body">
    <h2 class="vhs-case-title">
      <svg class="vhs-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="vhs-case-sub">The weekend runs on their help</p>
    <div class="vhs-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="vhs-sponsor vhs-reveal">
        <div class="vhs-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="vhs-sponsor-name">{{ sponsor.name }}</div>
        <div class="vhs-sponsor-tier">{{ tier[0] }}</div>
        <div class="vhs-sponsor-links">
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

<footer class="vhs-footer">
  <div class="vhs-footer-cards">
    <div class="vhs-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="vhs-footer-card">
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
  <p class="vhs-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
  <p class="vhs-footer-rewind">Be kind. Rewind.</p>
</footer>
