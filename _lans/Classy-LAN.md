---
title: Classy-LAN
start_date: 2025-02-14
end_date: 2025-02-16
description: >-
  Classy-LAN: PONG's red carpet LAN, 48 hours in the MSC Great Hall and
  Ballrooms. Games, tournaments, prizes.

ticker: "CLASSY-LAN · GAMES - TOURNAMENTS - PRIZES · FEB 14-16 · 4PM - 4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · STRUT DOWN THE RED CARPET · 48 HOURS ·"

headline: Classy-LAN
tagline: "Games - Tournaments - Prizes"

blurb_1: "It's time to get ready and strut down the Red Carpet with PONG for Classy-Lan!"
blurb_2: "Join us in the MSC Great Hall and Ballrooms for a 48-hour Gaming Event!"

when_label: When
when_value: "Feb 14th - Feb 16th | 4pm - 4pm"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

dates_display: "FEB 14-16"

facts:
  - icon: ico-carpet
    label: Dates
    value: "Feb 14-16, 2025"
  - icon: ico-hall
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-star
    label: Theme
    value: "Red carpet"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image:
sessions: []
all_lan: []

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - Something you would not mind being photographed in, if you fancy it
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "Did you have to dress up?"
    a: "No. The red carpet theme was optional."
  - q: "Did it cost anything to take part?"
    a: "No. PONG events are free to enter."
  - q: "Where is the running order?"
    a: "There isn't one for Classy-LAN. Ask in the Discord if you want to know what ran that weekend."
---

<link rel="stylesheet" href="{{ '/assets/css/classy-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/classy-lan.js' | relative_url }}" defer></script>

<div class="deco-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-carpet" viewBox="0 0 32 32">
    <path d="M4 28 11 6h10l7 22z"/>
    <path d="M9 13h14"/>
    <path d="M7 20h18"/>
  </symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <path d="M16 16h7"/>
    <path d="M16 16V8"/>
  </symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32">
    <path d="M3 10h26v12H3z"/>
    <path d="M23 10v12" stroke-dasharray="2 2"/>
    <path d="M6 14h14"/>
    <path d="M6 17h10"/>
    <path d="M6 20h6"/>
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
    <path d="M3 17h26"/>
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
    <path d="M4 16h24"/>
    <path d="M6.5 9.5c5 2.5 14 2.5 19 0"/>
    <path d="M6.5 22.5c5-2.5 14-2.5 19 0"/>
  </symbol>

</svg>
</div>

<div class="deco-room" aria-hidden="true">
  <div class="deco-beam deco-beam--a"></div>
  <div class="deco-beam deco-beam--b"></div>
  <div class="deco-bokeh">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="deco-carpet"></div>
</div>

<div class="deco-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="deco-hero">
  <div class="deco-hero-grid">

    <div class="deco-hero-copy">
      <h1 class="deco-title">{{ page.headline }}</h1>
      <div class="deco-rule" aria-hidden="true"></div>

      <p class="deco-tagline">{{ page.tagline }}</p>

      <dl class="deco-details">
        <dt>{{ page.when_label }}</dt>
        <dd>{{ page.when_value }}</dd>
        <dt>{{ page.where_label }}</dt>
        <dd>{{ page.where_value }}</dd>
      </dl>

      <p class="deco-blurb">{{ page.blurb_1 }}</p>
      <p class="deco-blurb">{{ page.blurb_2 }}</p>

      <div class="deco-hero-actions">
        {% if page.registration_url and page.registration_url != "" %}
        <a class="deco-btn deco-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
        {% endif %}
        <a class="deco-btn deco-btn--primary" href="#kit">What To Bring</a>
        <a class="deco-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
      </div>
    </div>

    <div class="deco-hero-art">
      <svg class="deco-guests" viewBox="0 0 200 260" aria-hidden="true" focusable="false">

        <g class="deco-guest">
          <path class="deco-gown"  d="M70 108h22l16 140H44z"/>
          <path class="deco-gown-d" d="M81 108h11l16 140H78z"/>
          <rect class="deco-neck" x="74" y="96" width="12" height="14"/>
          <rect class="deco-crt"  x="54" y="54" width="52" height="44"/>
          <rect class="deco-screen" x="60" y="60" width="40" height="32"/>
          <path class="deco-faceline deco-faceline--warm" d="M68 72q5-5 10 0"/>
          <ellipse class="deco-faceline deco-faceline--warm deco-open" cx="90" cy="72" rx="5" ry="6"/>
          <path class="deco-faceline deco-faceline--warm" d="M72 82q8 7 16 0"/>
          <path class="deco-limb" d="M70 112q-18 4-22 20"/>
          <circle class="deco-hand" cx="46" cy="136" r="6"/>
          <path class="deco-limb" d="M92 114q18 10 10 30"/>
          <circle class="deco-hand" cx="100" cy="150" r="6"/>
        </g>

        <g class="deco-guest">
          <rect class="deco-trouser" x="140" y="150" width="34" height="88"/>
          <rect class="deco-gap"     x="155" y="150" width="4"  height="88"/>
          <path class="deco-shoe" d="M132 238h26v12h-26z"/>
          <path class="deco-shoe" d="M158 238h26v12h-26z"/>
          <path class="deco-jacket" d="M136 100h42v54h-42z"/>
          <path class="deco-shirt"  d="M150 100h14v34h-14z"/>
          <path class="deco-bow"    d="M149 100l8 6-8 6zM165 100l-8 6 8 6z"/>
          <rect class="deco-neck" x="152" y="86" width="10" height="14"/>
          <rect class="deco-crt"  x="132" y="40" width="50" height="44"/>
          <rect class="deco-screen" x="138" y="46" width="38" height="32"/>
          <circle class="deco-faceline deco-faceline--cool deco-open" cx="157" cy="62" r="13"/>
          <circle class="deco-dot deco-dot--cool" cx="152" cy="58" r="2.2"/>
          <circle class="deco-dot deco-dot--cool" cx="162" cy="58" r="2.2"/>
          <path class="deco-faceline deco-faceline--cool deco-fill" d="M150 65q7 9 14 0z"/>
          <path class="deco-limb deco-limb--cool" d="M138 106q-14 10-6 26"/>
          <circle class="deco-hand" cx="136" cy="136" r="6"/>
          <path class="deco-limb deco-limb--cool" d="M176 104q16 2 14 18"/>
          <circle class="deco-hand" cx="190" cy="124" r="6"/>
        </g>

      </svg>
    </div>

  </div>
</section>

<div class="deco-countdown-wrap" id="deco-countdown-wrap">
  <p class="deco-countdown-head" id="deco-countdown-head">Time Remaining Until Doors Open</p>
  <div class="deco-countdown" id="deco-countdown" aria-label="Countdown to Classy-LAN">
    <div class="deco-countdown-unit">
      <span class="deco-countdown-num" data-unit="days">--</span>
      <span class="deco-countdown-label">Days</span>
    </div>
    <div class="deco-countdown-unit">
      <span class="deco-countdown-num" data-unit="hours">--</span>
      <span class="deco-countdown-label">Hours</span>
    </div>
    <div class="deco-countdown-unit">
      <span class="deco-countdown-num" data-unit="minutes">--</span>
      <span class="deco-countdown-label">Minutes</span>
    </div>
    <div class="deco-countdown-unit">
      <span class="deco-countdown-num" data-unit="seconds">--</span>
      <span class="deco-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="deco-facts">
  <table class="deco-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="deco-th-inner">
            <svg class="deco-icon deco-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="deco-panel" id="kit">
  <div class="deco-panel-body">
    <h2 class="deco-panel-title">
      <svg class="deco-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="deco-panel-sub">Power and network are ours to supply</p>
    <ul class="deco-kit">
      {% for item in page.kit %}
      <li class="deco-kit-item">
        <span class="deco-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="deco-panel" id="faq">
  <div class="deco-panel-body">
    <h2 class="deco-panel-title">
      <svg class="deco-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="deco-panel-sub">Answered once, so you need not ask twice</p>
    <div class="deco-faq">
      {% for entry in page.faq %}
      <details class="deco-faq-item">
        <summary class="deco-faq-q">{{ entry.q }}</summary>
        <p class="deco-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="deco-panel" id="sponsors">
  <div class="deco-panel-body">
    <h2 class="deco-panel-title">
      <svg class="deco-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="deco-panel-sub">The weekend runs on their help</p>
    <div class="deco-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="deco-sponsor deco-reveal">
        <div class="deco-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="deco-sponsor-name">{{ sponsor.name }}</div>
        <div class="deco-sponsor-tier">{{ tier[0] }}</div>
        <div class="deco-sponsor-links">
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

<footer class="deco-footer">
  <div class="deco-footer-cards">
    <div class="deco-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="deco-footer-card">
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
  <p class="deco-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
