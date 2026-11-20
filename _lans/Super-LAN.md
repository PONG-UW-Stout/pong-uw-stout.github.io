---
title: SuperLAN
start_date: 2022-02-18
end_date: 2022-02-20
description: >-
  SuperLAN: the first PONG event of the year, 48 hours in the MSC Great Hall
  and Ballrooms. Games, tournaments, prizes.

ticker: "SUPERLAN · GAMES * TOURNAMENTS * PRIZES · FEB 18-20 · 4PM-4PM · MSC GREAT HALL AND BALLROOMS · FREE ENTRY · THE FIRST PONG EVENT OF THE YEAR · 48 HOURS ·"

presents: "PONG Presents"
headline: SuperLAN
tagline_a: Games
tagline_b: Tournaments
tagline_c: Prizes

balloon_shout: "Heroes!"
balloon_line: "Rise up and gather for the first PONG event of the year!"

from_label: From
from_value: "Feb 18th - 4PM"
to_label: To
to_value: "Feb 20th - 4PM"

blurb: "Join us for the 48-hour event at the MSC Great Hall and Ballrooms!"

facts:
  - { icon: ico-bolt,   label: Dates,     value: "February 18-20, 2022" }
  - { icon: ico-hall,   label: Venue,     value: "MSC Great Hall and Ballrooms" }
  - { icon: ico-clock,  label: Duration,  value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,   label: Occasion,  value: "The first PONG event of the year" }
  - { icon: ico-plug,   label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/super-lan_schedule.webp
schedule_alt: >-
  The SuperLAN weekend schedule: three columns of events, colour-keyed by day
  and flagged free to play and/or competitive. The full running order follows
  below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "6:00 PM",  name: "Halo Infinite", free: true }
      - { time: "7:30 PM",  name: "Jackbox Games", free: true }
      - { time: "9:00 PM",  name: "Minecraft UHC", contest: true }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Meme Jeopardy!", free: true, contest: true }
      - { time: "12:00 AM", name: "Left 4 Dead 2" }
      - { time: "12:00 PM", name: "Injustice 2", contest: true }
      - { time: "1:30 PM",  name: "Minecraft: Freeze Tag" }
      - { time: "3:30 PM",  name: "Valorant", contest: true }
      - { time: "5:30 PM",  name: "Team Fortress 2", free: true }
      - { time: "6:00 PM",  name: "Sid Meier's Civilization VI" }
      - { time: "9:00 PM",  name: "Minecraft: Capture the Flag" }
      - { time: "11:30 PM", name: "Crusader Kings III" }
  - name: Sunday
    events:
      - { time: "12:00 AM", name: "Worms", free: true }
      - { time: "2:00 AM",  name: "Golf With Your Friends" }
      - { time: "12:00 PM", name: "Worms", free: true }
      - { time: "12:30 PM", name: "Jackbox Games", free: true }
      - { time: "3:00 PM",  name: "Prize Drawing" }

legend:
  - tag: C
    kind: contest
    body: "Competitive event. Winners will get 3 tickets each and second place will receive 1 ticket each."
  - tag: FREE
    kind: free
    body: "Marks a game that is free to buy or play. All PONG events are free to participate in."
legend_note: "In other (casual) events, 1 ticket will be awarded for participation."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Injustice goes
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "How did tickets work at this one?"
    a: "Differently from later LANs. Winners got 3 tickets, second place got 1, and taking part in a casual event earned 1. The 3-2-1 split came in later."
  - q: "Why is Worms on twice?"
    a: "It ran twice, at midnight and again at noon on Sunday, both free to play."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
---

<link rel="stylesheet" href="{{ '/assets/css/super-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/super-lan.js' | relative_url }}" defer></script>

<div class="super-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-bolt" viewBox="0 0 32 32"><path d="M18 3 7 18h7l-2 11 11-15h-7z"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

</svg>
</div>

<div class="super-stock" aria-hidden="true"></div>

<div class="super-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="super-hero">
  <div class="super-splash">
    <span class="super-burst" aria-hidden="true"></span>

    <div class="super-hero-inner">
      <p class="super-presents">{{ page.presents }}</p>
      <h1 class="super-title">{{ page.headline }}</h1>
      <p class="super-tagline">
        {{ page.tagline_a }} <i aria-hidden="true">&#10033;</i>
        {{ page.tagline_b }} <i aria-hidden="true">&#10033;</i>
        {{ page.tagline_c }}
      </p>

      <div class="super-balloon">
        <p class="super-balloon-line super-balloon-line--shout">{{ page.balloon_shout }}</p>
        <p class="super-balloon-line">{{ page.balloon_line }}</p>
      </div>

      <div class="super-when">
        <span class="super-when-key">{{ page.from_label }}</span>
        <span class="super-when-val">{{ page.from_value }}</span>
        <span class="super-when-key">{{ page.to_label }}</span>
        <span class="super-when-val">{{ page.to_value }}</span>
      </div>

      <p class="super-blurb">{{ page.blurb }}</p>

      <div class="super-hero-actions">
        <a class="super-btn super-btn--primary" href="#running-order">See What Was On</a>
        <a class="super-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
      </div>
    </div>
  </div>
</section>

<div class="super-countdown-wrap" id="super-countdown-wrap">
  <p class="super-countdown-head" id="super-countdown-head">Time Remaining Until Doors Open</p>
  <div class="super-countdown" id="super-countdown" aria-label="Countdown to SuperLAN">
    <div class="super-countdown-unit"><span class="super-countdown-num" data-unit="days">--</span><span class="super-countdown-label">Days</span></div>
    <div class="super-countdown-unit"><span class="super-countdown-num" data-unit="hours">--</span><span class="super-countdown-label">Hours</span></div>
    <div class="super-countdown-unit"><span class="super-countdown-num" data-unit="minutes">--</span><span class="super-countdown-label">Minutes</span></div>
    <div class="super-countdown-unit"><span class="super-countdown-num" data-unit="seconds">--</span><span class="super-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="super-facts">
  <table class="super-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="super-th-inner">
            <svg class="super-icon super-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="super-panel" id="schedule">
  <div class="super-panel-body">
    <h2 class="super-panel-title">
      <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bolt"/></svg>
      The Board
    </h2>
    <p class="super-panel-sub">{{ page.schedule_note }}</p>

    <div class="super-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="super-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="super-schedule-img">
        <div class="super-noimg">
          <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bolt"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="super-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="super-screen is-missing">
        <div class="super-noimg">
          <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bolt"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="super-zoom" id="schedule-zoom">
  <a class="super-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="super-zoom-frame">
    <a class="super-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="super-panel" id="running-order">
  <div class="super-panel-body">
    <h2 class="super-panel-title">
      <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="super-panel-sub">{{ page.sessions.size }} days &middot; indigo is Friday, purple is Saturday, green is Sunday</p>

    <div class="super-days">
      {% for session in page.sessions %}
      <div class="super-day super-reveal">
        <h3 class="super-day-name">{{ session.name }}</h3>
        <ul class="super-slots">
          {% for ev in session.events %}
          <li class="super-slot">
            <span class="super-slot-time">{{ ev.time }}</span>
            <span class="super-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="super-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="super-slot-tags">
              {% if ev.fmt %}<span class="super-tag super-tag--mark">{{ ev.fmt }}</span>{% endif %}
              {% if ev.mark %}<span class="super-tag super-tag--mark">{{ ev.mark }}</span>{% endif %}
              {% if ev.free %}<span class="super-tag super-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="super-tag super-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="super-legend">
      {% for item in page.legend %}
      <p class="super-legend-row">
        <span class="super-tag super-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="super-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

<section class="super-panel" id="kit">
  <div class="super-panel-body">
    <h2 class="super-panel-title">
      <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="super-panel-sub">Power and network are ours to supply</p>
    <ul class="super-kit">
      {% for item in page.kit %}
      <li class="super-kit-item"><span class="super-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="super-panel" id="faq">
  <div class="super-panel-body">
    <h2 class="super-panel-title">
      <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="super-panel-sub">Answered once, so you need not ask twice</p>
    <div class="super-faq">
      {% for entry in page.faq %}
      <details class="super-faq-item">
        <summary class="super-faq-q">{{ entry.q }}</summary>
        <p class="super-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="super-panel" id="sponsors">
  <div class="super-panel-body">
    <h2 class="super-panel-title">
      <svg class="super-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="super-panel-sub">The weekend runs on their help</p>
    <div class="super-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="super-sponsor super-reveal">
        <div class="super-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="super-sponsor-name">{{ sponsor.name }}</div>
        <div class="super-sponsor-tier">{{ tier[0] }}</div>
        <div class="super-sponsor-links">
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

<footer class="super-footer">
  <div class="super-footer-cards">
    <div class="super-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="super-footer-card">
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
  <p class="super-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
