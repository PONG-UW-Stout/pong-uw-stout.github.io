---
title: BattleLAN
start_date: 2022-11-18
end_date: 2022-11-20
description: >-
  BattleLAN: 48 hours in the MSC Great Hall and Ballrooms. Games, tournaments,
  prizes, and a game-testing session with the IGDA.

ticker: "BATTLELAN · GAMES - TOURNAMENTS - PRIZES · NOV 18-20 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · 48 HOURS ·"

presents: "PONG Presents"
headline: BattleLAN
tagline: "Games - Tournaments - Prizes"

starts_label: Starts
starts_value: "Nov. 18th, 4PM"
ends_label: Ends
ends_value: "Nov. 20th, 4PM"

blurb: "Forty-eight hours in the Great Hall over the weekend before Thanksgiving break, with a full board of brackets and a game-testing session run with the IGDA on the Friday."

facts:
  - { icon: ico-shield, label: Dates,     value: "November 18-20, 2022" }
  - { icon: ico-hall,   label: Venue,     value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock,  label: Duration,  value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-star,   label: Featuring, value: "A game-testing session with the IGDA" }
  - { icon: ico-plug,   label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/battle-lan_schedule.png
schedule_alt: >-
  The BattleLAN weekend schedule: four columns of events, colour-keyed by day
  and flagged free to play and/or competitive. The full running order follows
  below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "6:00 PM",  name: "Valorant", free: true, contest: true, fmt: "2v2" }
      - { time: "6:00 PM",  name: "IGDA: Game Testing", free: true, mark: "IGDA" }
      - { time: "8:00 PM",  name: "Minecraft: Survival Games" }
      - { time: "9:00 PM",  name: "Overwatch 2", free: true, contest: true, fmt: "5v5" }
      - { time: "10:30 PM", name: "Fall Guys", free: true }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Dollarchug", free: true, contest: true }
      - { time: "2:00 AM",  name: "Golf With Your Friends" }
      - { time: "12:00 PM", name: "Apex Legends", free: true, contest: true, fmt: "3v3" }
      - { time: "12:00 PM", name: "Nintendo Switch Party Games", free: true }
      - { time: "1:00 PM",  name: "Super Smash Bros. Ultimate", free: true, contest: true, mark: "BDS" }
      - { time: "2:30 PM",  name: "Beat Saber", free: true, contest: true }
      - { time: "3:00 PM",  name: "Call of Duty: Modern Warfare Remastered", free: true, note: "Local co-op" }
      - { time: "5:30 PM",  name: "Team Fortress 2", free: true }
      - { time: "7:00 PM",  name: "Minecraft: Hook, Line, & Creeper", contest: true, fmt: "3v3" }
      - { time: "9:30 PM",  name: "Group Photo" }
      - { time: "10:00 PM", name: "Mario Kart: Don't Drink & Drive", free: true, contest: true, note: "Modded Mayhem", mark: "ISP" }
  - name: Sunday
    events:
      - { time: "12:00 AM", name: "Video Game Name That Tune", free: true }
      - { time: "2:00 AM",  name: "Crab Game", free: true }
      - { time: "12:30 PM", name: "League of Legends", free: true, contest: true, fmt: "1v1" }
      - { time: "3:00 PM",  name: "Prize Drawing" }

all_lan:
  - name: "Minecraft: Parkour Time-Trials"
    when: "Fri 6:00 PM - Sun 1:00 PM"
    contest: true
    body: "Open the whole weekend rather than at a set time. More info in #minecraft on the PONG Discord."

servers:
  - { label: "Minecraft Vanilla (1.19.2)", value: "mc.ponglan.net" }
  - { label: "Minecraft Forge (1.18.2), All the Mods 7 v0.4.29", value: "forge.ponglan.net" }

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
  - q: "What was the IGDA session?"
    a: "A game-testing session run with the IGDA on Friday at 6 PM, free to join. You played games people were building and told them what you found."
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 3:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
  - q: "What do the BDS, ISP and IGDA marks mean?"
    a: "Those events were run with other groups. BDS is Blue Devil Smash, ISP is the club now called Cyber@Stout, and the IGDA ran the Friday game-testing session."
---

<link rel="stylesheet" href="{{ '/assets/css/battlelan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/battlelan.js' | relative_url }}" defer></script>

<div class="battle-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-shield" viewBox="0 0 32 32"><path d="M16 3l11 4v9c0 7-5 11-11 13-6-2-11-6-11-13V7z"/><path d="M16 3v26"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

  <symbol id="ico-server" viewBox="0 0 32 32"><rect x="4" y="5" width="24" height="8"/><rect x="4" y="19" width="24" height="8"/><circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none"/><circle cx="9" cy="23" r="1.3" fill="currentColor" stroke="none"/></symbol>

</svg>
</div>

<div class="battle-field" aria-hidden="true">
  <span class="battle-fire battle-fire--1"></span>
  <span class="battle-fire battle-fire--2"></span>
  <span class="battle-fire battle-fire--3"></span>

  <svg class="battle-wreck battle-wreck--far" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
    <path d="M0 200 L0 150 L58 146 L62 170 L120 166 L124 130 L196 126 L200 158 L268 154 L272 138 L350 134 L354 164 L430 160 L434 128 L500 124 L504 156 L580 152 L584 134 L660 130 L664 162 L740 158 L744 126 L820 122 L824 158 L900 154 L904 136 L980 132 L984 164 L1060 160 L1064 130 L1140 126 L1144 158 L1200 154 L1200 200 Z"/>
    <path d="M300 128 L300 72 L326 70 L328 128 Z"/>
    <path d="M860 124 L862 60 L890 58 L892 124 Z"/>
  </svg>

  <div class="battle-smoke battle-smoke--3"></div>
  <div class="battle-smoke battle-smoke--1"></div>

  <svg class="battle-wreck battle-wreck--near" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
    <g fill-rule="evenodd">
      <path d="M30 200 L36 178 L158 140 L166 162 L74 200 Z"/>
      <path d="M138 200 L142 132 L170 52 L190 56 L176 136 L186 200 Z"/>
      <path d="M248 200 L250 170 L268 150 L352 146 L378 164 L382 200 Z"/>
      <path d="M292 147 L296 124 L340 121 L346 147 Z"/>
      <path d="M446 200 L478 168 L512 180 L548 146 L584 174 L622 200 Z"/>
      <path d="M650 200 L652 96 L708 90 L710 118 L772 112 L776 64 L866 60 L874 200 Z
               M672 126 L696 124 L697 158 L673 160 Z
               M796 104 L826 101 L828 140 L798 142 Z"/>
      <path d="M948 100 L996 92 L1004 118 L956 124 Z"/>
      <path d="M1070 200 L1098 176 L1134 186 L1170 166 L1200 180 L1200 200 Z"/>
      <path d="M1140 64 L1194 76 L1180 90 L1196 104 L1138 108 Z"/>
    </g>
    <g class="battle-wreck-line">
      <path d="M344 130 L438 104"/>
      <path d="M500 178 L486 92 M540 152 L556 70 M572 172 L600 100"/>
      <path d="M900 200 L962 96 M1024 200 L968 98 M940 152 L1010 138"/>
      <path d="M1118 184 L1140 58"/>
    </g>
  </svg>

  <div class="battle-smoke battle-smoke--2"></div>

  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
  <span class="battle-ember"></span>
</div>

<div class="battle-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="battle-hero">
  <p class="battle-presents">{{ page.presents }}</p>

  <div class="battle-lockup">
    <svg class="battle-emblem" viewBox="0 0 96 96" role="img" aria-label="The BattleLAN emblem: a broken shield in four pieces">
      <g fill="currentColor">
        <path d="M10 6h14a4 4 0 0 1 4 4v18a2 2 0 0 1-2 2H10a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z"/>
        <path d="M38 4h30a22 22 0 0 1 22 22v14a2 2 0 0 1-2 2H38a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
        <path d="M6 44h30a2 2 0 0 1 2 2v44a2 2 0 0 1-2 2H26A22 22 0 0 1 4 70V46a2 2 0 0 1 2-2z"/>
        <path d="M50 50h38a2 2 0 0 1 2 2v18a22 22 0 0 1-22 22H50a2 2 0 0 1-2-2V52a2 2 0 0 1 2-2z"/>
      </g>
    </svg>
    <h1 class="battle-wordmark">{{ page.headline }}</h1>
  </div>

  <p class="battle-tagline">{{ page.tagline }}</p>

  <div class="battle-when">
    <div class="battle-when-block">
      <span class="battle-when-key">{{ page.starts_label }}</span>
      <span class="battle-when-val">{{ page.starts_value }}</span>
    </div>
    <div class="battle-when-block">
      <span class="battle-when-key">{{ page.ends_label }}</span>
      <span class="battle-when-val">{{ page.ends_value }}</span>
    </div>
  </div>

  <p class="battle-blurb">{{ page.blurb }}</p>

  <div class="battle-hero-actions">
    <a class="battle-btn battle-btn--primary" href="#running-order">See What Was On</a>
    <a class="battle-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="battle-countdown-wrap" id="battle-countdown-wrap">
  <p class="battle-countdown-head" id="battle-countdown-head">Time Remaining Until Doors Open</p>
  <div class="battle-countdown" id="battle-countdown" aria-label="Countdown to BattleLAN">
    <div class="battle-countdown-unit"><span class="battle-countdown-num" data-unit="days">--</span><span class="battle-countdown-label">Days</span></div>
    <div class="battle-countdown-unit"><span class="battle-countdown-num" data-unit="hours">--</span><span class="battle-countdown-label">Hours</span></div>
    <div class="battle-countdown-unit"><span class="battle-countdown-num" data-unit="minutes">--</span><span class="battle-countdown-label">Minutes</span></div>
    <div class="battle-countdown-unit"><span class="battle-countdown-num" data-unit="seconds">--</span><span class="battle-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="battle-facts">
  <table class="battle-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="battle-th-inner">
            <svg class="battle-icon battle-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="battle-panel" id="schedule">
  <div class="battle-panel-body">
    <h2 class="battle-panel-title">
      <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-shield"/></svg>
      The Board
    </h2>
    <p class="battle-panel-sub">{{ page.schedule_note }}</p>

    <div class="battle-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="battle-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="battle-schedule-img">
        <div class="battle-noimg">
          <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-shield"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="battle-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="battle-screen is-missing">
        <div class="battle-noimg">
          <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-shield"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="battle-zoom" id="schedule-zoom">
  <a class="battle-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="battle-zoom-frame">
    <a class="battle-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="battle-panel" id="running-order">
  <div class="battle-panel-body">
    <h2 class="battle-panel-title">
      <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="battle-panel-sub">{{ page.sessions.size }} days &middot; khaki is Friday, red is Saturday, teal is Sunday</p>

    <div class="battle-days">
      {% for session in page.sessions %}
      <div class="battle-day battle-reveal">
        <h3 class="battle-day-name">{{ session.name }}</h3>
        <ul class="battle-slots">
          {% for ev in session.events %}
          <li class="battle-slot">
            <span class="battle-slot-time">{{ ev.time }}</span>
            <span class="battle-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="battle-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="battle-slot-tags">
              {% if ev.fmt %}<span class="battle-tag battle-tag--mark">{{ ev.fmt }}</span>{% endif %}
              {% if ev.mark %}<span class="battle-tag battle-tag--mark">{{ ev.mark }}</span>{% endif %}
              {% if ev.free %}<span class="battle-tag battle-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="battle-tag battle-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="battle-day battle-day--all battle-reveal">
        <h3 class="battle-day-name">All LAN</h3>
        <ul class="battle-slots">
          {% for ev in page.all_lan %}
          <li class="battle-slot">
            <span class="battle-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="battle-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="battle-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="battle-slot-tags">
              {% if ev.contest %}<span class="battle-tag battle-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="battle-legend">
      {% for item in page.legend %}
      <p class="battle-legend-row">
        <span class="battle-tag battle-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="battle-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

{% if page.servers.size > 0 %}
<section class="battle-panel" id="servers">
  <div class="battle-panel-body">
    <h2 class="battle-panel-title">
      <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-server"/></svg>
      The Minecraft Servers
    </h2>
    <p class="battle-panel-sub">Printed in the corner of the board, kept here as it ran</p>
    <ul class="battle-kit">
      {% for s in page.servers %}
      <li class="battle-kit-item">
        <span class="battle-kit-check" aria-hidden="true"></span>
        <span>{{ s.label }}<span class="battle-slot-note">{{ s.value }}</span></span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
{% endif %}

<section class="battle-panel" id="kit">
  <div class="battle-panel-body">
    <h2 class="battle-panel-title">
      <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="battle-panel-sub">Power and network are ours to supply</p>
    <ul class="battle-kit">
      {% for item in page.kit %}
      <li class="battle-kit-item"><span class="battle-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="battle-panel" id="faq">
  <div class="battle-panel-body">
    <h2 class="battle-panel-title">
      <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="battle-panel-sub">Answered once, so you need not ask twice</p>
    <div class="battle-faq">
      {% for entry in page.faq %}
      <details class="battle-faq-item">
        <summary class="battle-faq-q">{{ entry.q }}</summary>
        <p class="battle-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="battle-panel" id="sponsors">
  <div class="battle-panel-body">
    <h2 class="battle-panel-title">
      <svg class="battle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="battle-panel-sub">The weekend runs on their help</p>
    <div class="battle-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="battle-sponsor battle-reveal">
        <div class="battle-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="battle-sponsor-name">{{ sponsor.name }}</div>
        <div class="battle-sponsor-tier">{{ tier[0] }}</div>
        <div class="battle-sponsor-links">
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

<footer class="battle-footer">
  <div class="battle-footer-cards">
    <div class="battle-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="battle-footer-card">
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
  <p class="battle-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
