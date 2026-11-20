---
title: FantasyLAN
start_date: 2022-09-23
end_date: 2022-09-25
description: >-
  FantasyLAN: 48 hours in the MSC Great Hall and Ballrooms, featuring events
  from the Tabletop Gaming Club. Games, tournaments, prizes.

ticker: "FANTASYLAN · GAMES . TOURNAMENTS . PRIZES · SEPT 23-25 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · FEATURING EVENTS FROM THE TABLETOP GAMING CLUB · 48 HOURS ·"

presents: "PONG Presents"
pong_mark: PONG
headline_a: Fantasy
headline_b: LAN
tagline: "Games . Tournaments . Prizes"

credit_lead: "Featuring events from the"
credit_name: "Tabletop Gaming Club"

begins_label: Begins
begins_value: "Sept 23rd, 4pm"
concludes_label: Concludes
concludes_value: "Sept 25th, 4pm"

blurb: "Forty-eight hours in the Great Hall with a tabletop track running alongside the brackets: Dungeons & Dragons on the Friday, chess and UNO on the Saturday, and the usual suspects in between."

facts:
  - { icon: ico-sword,  label: Dates,     value: "September 23-25, 2022" }
  - { icon: ico-hall,   label: Venue,     value: "MSC Great Hall & Ballrooms" }
  - { icon: ico-clock,  label: Duration,  value: "48 Hours" }
  - { icon: ico-ticket, label: Entry Fee, value: "Free" }
  - { icon: ico-die,    label: Featuring, value: "Events from the Tabletop Gaming Club" }
  - { icon: ico-plug,   label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/fantasy-lan_schedule.webp
schedule_alt: >-
  The FantasyLAN weekend schedule: four columns of events, colour-keyed by day
  and flagged free to play and/or competitive. The full running order follows
  below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "5:00 PM", name: "Dungeons & Dragons: Live Play Event", note: "Free to watch", mark: "TTG" }
      - { time: "6:00 PM", name: "Jackbox Games", free: true }
      - { time: "8:00 PM", name: "Minecraft: Terracotta Chasm" }
      - { time: "9:00 PM", name: "Valorant", free: true, contest: true, fmt: "2v2" }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Meme Jeopardy!", free: true, contest: true }
      - { time: "2:00 AM",  name: "Golf With Your Friends" }
      - { time: "12:00 PM", name: "Chess Tournament", free: true, contest: true, mark: "TTG" }
      - { time: "12:00 PM", name: "Crusader Kings III" }
      - { time: "2:00 PM",  name: "Minecraft: Freeze Tag" }
      - { time: "2:30 PM",  name: "UNO Tournament", free: true, contest: true, mark: "TTG" }
      - { time: "5:30 PM",  name: "Beat Saber", free: true, contest: true }
      - { time: "5:30 PM",  name: "Mtn Dew Mystery Brew", free: true }
      - { time: "7:00 PM",  name: "Super Smash Bros. Ultimate", free: true }
      - { time: "8:00 PM",  name: "Minecraft: Hook, Line, & Creeper", contest: true }
      - { time: "10:00 PM", name: "Group Photo" }
      - { time: "11:00 PM", name: "Mario Kart: Don't Drink & Drive", free: true, contest: true }
  - name: Sunday
    events:
      - { time: "12:30 AM", name: "Video Game Name That Tune", free: true }
      - { time: "2:00 AM",  name: "Crab Game", free: true }
      - { time: "12:30 PM", name: "League of Legends", free: true, contest: true, fmt: "1v1" }
      - { time: "3:00 PM",  name: "Prize Drawing" }

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
  - Dice, if you have a set you like rolling
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "What did the Tabletop Gaming Club run?"
    a: "Three events, marked TTG: the Friday D&D live play, the chess tournament, and the UNO tournament."
  - q: "Did you need to know D&D to watch the live play?"
    a: "No. It was free to watch, Friday at 5 PM."
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 3:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets."
---

<link rel="stylesheet" href="{{ '/assets/css/fantasy-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/fantasy-lan.js' | relative_url }}" defer></script>

<div class="fantasy-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-sword" viewBox="0 0 32 32"><path d="M26 3h3v3L15 20l-3-3z"/><path d="M8 19l5 5"/><path d="M5 22l-2 5 5-2z"/><path d="M11 16l-3 3"/></symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 16h7"/><path d="M16 16V8"/></symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32"><path d="M3 10h26v12H3z"/><path d="M23 10v12" stroke-dasharray="2 2"/><path d="M6 14h14"/><path d="M6 17h10"/><path d="M6 20h6"/></symbol>

  <symbol id="ico-hall" viewBox="0 0 32 32"><path d="M3 13 16 4l13 9"/><path d="M6 13v15h20V13"/><path d="M13 28v-8h6v8"/></symbol>

  <symbol id="ico-plug" viewBox="0 0 32 32"><path d="M11 4v7"/><path d="M21 4v7"/><path d="M7 11h18v4a9 9 0 0 1-18 0z"/><path d="M16 24v5"/></symbol>

  <symbol id="ico-bag" viewBox="0 0 32 32"><path d="M3 10h26v17H3z"/><path d="M12 10V6h8v4"/><path d="M3 17h26"/><rect x="13" y="15" width="6" height="4" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-help" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.4 12.6a3.7 3.7 0 1 1 4.6 3.6v2.4"/><circle cx="17" cy="22.6" r="1.3" fill="currentColor" stroke="none"/></symbol>

  <symbol id="ico-star" viewBox="0 0 32 32"><path d="M16 3l3.9 8.3 9.1 1.2-6.6 6.3 1.6 9-8-4.5-8 4.5 1.6-9L3 12.5l9.1-1.2z"/></symbol>

  <symbol id="ico-die" viewBox="0 0 32 32"><path d="M16 3l11 6.5v13L16 29 5 22.5v-13z"/><path d="M16 3v26"/><path d="M5 9.5 16 16l11-6.5"/></symbol>

  <symbol id="ico-server" viewBox="0 0 32 32"><rect x="4" y="5" width="24" height="8"/><rect x="4" y="19" width="24" height="8"/><circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none"/><circle cx="9" cy="23" r="1.3" fill="currentColor" stroke="none"/></symbol>

</svg>
</div>

<div class="fantasy-wood" aria-hidden="true">
  <div class="fantasy-fog fantasy-fog--3"></div>
  <svg class="fantasy-trees fantasy-trees--far" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
    <path d="M0 200 L11 167 L7 167 L20.8 140 L34 167 L31 167 L42 200 L52 160 L48 160 L61.6 127 L75 160 L71 160 L82 200 L93 162 L89 162 L104.4 132 L119 162 L115 162 L127 200 L140 172 L135 172 L151.2 150 L167 172 L163 172 L175 200 L187 173 L183 173 L198.7 151 L214 173 L210 173 L222 200 L233 172 L229 172 L242.3 149 L256 172 L252 172 L263 200 L277 165 L272 165 L289.6 136 L307 165 L303 165 L317 200 L328 171 L324 171 L338.0 147 L352 171 L348 171 L359 200 L374 160 L369 160 L387.6 128 L406 160 L401 160 L416 200 L428 162 L424 162 L438.8 130 L454 162 L450 162 L462 200 L472 153 L469 153 L481.6 115 L495 153 L491 153 L501 200 L513 156 L509 156 L523.5 119 L538 156 L534 156 L546 200 L556 171 L553 171 L566.0 147 L580 171 L576 171 L587 200 L601 167 L596 167 L613.4 140 L631 167 L626 167 L640 200 L653 170 L649 170 L665.1 145 L681 170 L677 170 L690 200 L702 160 L698 160 L712.7 128 L728 160 L724 160 L735 200 L746 162 L742 162 L755.5 131 L769 162 L765 162 L775 200 L786 172 L783 172 L796.7 150 L811 172 L807 172 L818 200 L830 159 L826 159 L841.3 126 L857 159 L853 159 L865 200 L878 167 L873 167 L889.4 140 L906 167 L901 167 L914 200 L926 164 L922 164 L936.4 135 L951 164 L947 164 L959 200 L972 157 L967 157 L984.4 122 L1001 157 L997 157 L1010 200 L1023 168 L1019 168 L1034.9 143 L1051 168 L1047 168 L1060 200 L1074 163 L1069 163 L1087.1 132 L1105 163 L1100 163 L1115 200 L1126 158 L1122 158 L1136.6 124 L1151 158 L1147 158 L1159 200 L1169 153 L1166 153 L1179.1 115 L1193 153 L1189 153 L1200 200 Z"/>
  </svg>
  <div class="fantasy-fog fantasy-fog--1"></div>
  <svg class="fantasy-trees fantasy-trees--mid" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
    <path d="M0 200 L20 149 L13 149 L39.3 108 L65 149 L58 149 L79 200 L100 137 L93 137 L120.3 85 L148 137 L140 137 L162 200 L179 152 L173 152 L194.8 112 L217 152 L211 152 L228 200 L245 153 L239 153 L260.5 114 L282 153 L276 153 L293 200 L310 135 L304 135 L324.9 82 L346 135 L340 135 L356 200 L373 141 L367 141 L389.0 93 L411 141 L405 141 L422 200 L440 148 L434 148 L457.4 106 L481 148 L475 148 L493 200 L513 132 L506 132 L531.4 77 L557 132 L550 132 L570 200 L587 157 L581 157 L603.2 121 L625 157 L619 157 L637 200 L659 153 L651 153 L678.7 114 L706 153 L699 153 L721 200 L742 133 L735 133 L761.6 78 L789 133 L781 133 L803 200 L824 133 L816 133 L842.8 77 L869 133 L862 133 L883 200 L904 129 L897 129 L923.8 71 L951 129 L943 129 L965 200 L986 149 L979 149 L1006.3 108 L1034 149 L1026 149 L1048 200 L1069 143 L1062 143 L1088.3 96 L1115 143 L1108 143 L1129 200 L1147 140 L1141 140 L1164.3 92 L1188 140 L1181 140 L1200 200 Z"/>
  </svg>
  <div class="fantasy-fog fantasy-fog--2"></div>
  <svg class="fantasy-trees fantasy-trees--near" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
    <path d="M0 200 L28 114 L18 114 L53.4 44 L89 114 L79 114 L107 200 L134 103 L124 103 L158.8 24 L193 103 L184 103 L211 200 L239 115 L229 115 L264.3 46 L299 115 L290 115 L318 200 L352 119 L340 119 L384.7 53 L429 119 L417 119 L452 200 L481 130 L471 130 L507.2 73 L544 130 L534 130 L563 200 L591 126 L581 126 L616.2 65 L651 126 L642 126 L670 200 L697 98 L688 98 L722.7 14 L758 98 L748 98 L776 200 L804 112 L794 112 L830.6 40 L867 112 L857 112 L886 200 L915 107 L905 107 L941.2 32 L978 107 L968 107 L997 200 L1026 128 L1016 128 L1052.0 69 L1089 128 L1079 128 L1107 200 L1140 119 L1129 119 L1170.4 53 L1212 119 L1201 119 L1234 200 L1200 200 Z"/>
  </svg>
</div>

<div class="fantasy-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="fantasy-hero">
  <svg class="fantasy-sword" viewBox="0 0 520 120" role="img" aria-label="An ice sword laid flat, point to the left">
    <defs>
      <linearGradient id="fy-blade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#e8fbff"/>
        <stop offset="48%"  stop-color="#bfeaf9"/>
        <stop offset="52%"  stop-color="#8ec8e2"/>
        <stop offset="100%" stop-color="#5a9cc0"/>
      </linearGradient>
      <linearGradient id="fy-grip" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#3a4150"/>
        <stop offset="50%"  stop-color="#151923"/>
        <stop offset="100%" stop-color="#0d1018"/>
      </linearGradient>
    </defs>

    <path d="M18 60 L268 42 L268 78 Z" fill="url(#fy-blade)"/>
    <path d="M18 60 L268 42 L268 60 Z" fill="#f2fdff" opacity="0.55"/>
    <path d="M18 60 L268 42 L268 78 Z" fill="none" stroke="#eaf9ff" stroke-width="1.4" stroke-linejoin="round"/>

    <path d="M250 42 L258 16 L268 42 Z" fill="#cbf3ff" opacity="0.85"/>
    <path d="M250 78 L258 104 L268 78 Z" fill="#cbf3ff" opacity="0.85"/>

    <g transform="translate(286 60)">
      <path d="M0 -38 L13 0 L0 38 L-13 0 Z" fill="#dff6ff" stroke="#8ec8e2" stroke-width="1.3"/>
      <path d="M-36 0 L0 -13 L36 0 L0 13 Z" fill="#cbf3ff" stroke="#8ec8e2" stroke-width="1.3"/>
      <path d="M0 -13 L13 0 L0 13 L-13 0 Z" fill="#f4fdff"/>
    </g>

    <rect x="322" y="50" width="118" height="20" rx="4" fill="url(#fy-grip)"/>
    <g stroke="#59636f" stroke-width="2" stroke-linecap="round">
      <path d="M338 50 L332 70"/>
      <path d="M356 50 L350 70"/>
      <path d="M374 50 L368 70"/>
      <path d="M392 50 L386 70"/>
      <path d="M410 50 L404 70"/>
      <path d="M428 50 L422 70"/>
    </g>

    <path d="M440 46 L470 38 L500 60 L470 82 L440 74 Z" fill="#bfeaf9" stroke="#8ec8e2" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M440 60 L470 38 L470 82 Z" fill="#eafaff" opacity="0.7"/>
  </svg>

  <p class="fantasy-presents">{{ page.presents }}</p>
  <p class="fantasy-pong">{{ page.pong_mark }}</p>
  <h1 class="fantasy-title">{{ page.headline_a }}<em>{{ page.headline_b }}</em></h1>
  <p class="fantasy-tagline">{{ page.tagline }}</p>

  <p class="fantasy-credit">
    <svg class="fantasy-credit-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
         fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">
      <path d="M16 3l11 6.5v13L16 29 5 22.5v-13z"/>
      <path d="M16 10l6 3.5v7L16 24l-6-3.5v-7z"/>
    </svg>
    <span>{{ page.credit_lead }}<b>{{ page.credit_name }}</b></span>
  </p>

  <div class="fantasy-when">
    <div class="fantasy-when-block">
      <span class="fantasy-when-key">{{ page.begins_label }}</span>
      <span class="fantasy-when-val">{{ page.begins_value }}</span>
    </div>
    <div class="fantasy-when-block">
      <span class="fantasy-when-key">{{ page.concludes_label }}</span>
      <span class="fantasy-when-val">{{ page.concludes_value }}</span>
    </div>
  </div>

  <p class="fantasy-blurb">{{ page.blurb }}</p>

  <div class="fantasy-hero-actions">
    <a class="fantasy-btn fantasy-btn--primary" href="#running-order">See What Was On</a>
    <a class="fantasy-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
  </div>
</section>

<div class="fantasy-countdown-wrap" id="fantasy-countdown-wrap">
  <p class="fantasy-countdown-head" id="fantasy-countdown-head">Time Remaining Until Doors Open</p>
  <div class="fantasy-countdown" id="fantasy-countdown" aria-label="Countdown to FantasyLAN">
    <div class="fantasy-countdown-unit"><span class="fantasy-countdown-num" data-unit="days">--</span><span class="fantasy-countdown-label">Days</span></div>
    <div class="fantasy-countdown-unit"><span class="fantasy-countdown-num" data-unit="hours">--</span><span class="fantasy-countdown-label">Hours</span></div>
    <div class="fantasy-countdown-unit"><span class="fantasy-countdown-num" data-unit="minutes">--</span><span class="fantasy-countdown-label">Minutes</span></div>
    <div class="fantasy-countdown-unit"><span class="fantasy-countdown-num" data-unit="seconds">--</span><span class="fantasy-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="fantasy-facts">
  <table class="fantasy-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="fantasy-th-inner">
            <svg class="fantasy-icon fantasy-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="fantasy-panel" id="schedule">
  <div class="fantasy-panel-body">
    <h2 class="fantasy-panel-title">
      <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-sword"/></svg>
      The Board
    </h2>
    <p class="fantasy-panel-sub">{{ page.schedule_note }}</p>

    <div class="fantasy-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="fantasy-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="fantasy-schedule-img">
        <div class="fantasy-noimg">
          <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-sword"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="fantasy-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="fantasy-screen is-missing">
        <div class="fantasy-noimg">
          <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-sword"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="fantasy-zoom" id="schedule-zoom">
  <a class="fantasy-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="fantasy-zoom-frame">
    <a class="fantasy-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="fantasy-panel" id="running-order">
  <div class="fantasy-panel-body">
    <h2 class="fantasy-panel-title">
      <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="fantasy-panel-sub">{{ page.sessions.size }} days &middot; silver is Friday, gold is Saturday, ice is Sunday</p>

    <div class="fantasy-days">
      {% for session in page.sessions %}
      <div class="fantasy-day fantasy-reveal">
        <h3 class="fantasy-day-name">{{ session.name }}</h3>
        <ul class="fantasy-slots">
          {% for ev in session.events %}
          <li class="fantasy-slot">
            <span class="fantasy-slot-time">{{ ev.time }}</span>
            <span class="fantasy-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="fantasy-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="fantasy-slot-tags">
              {% if ev.fmt %}<span class="fantasy-tag fantasy-tag--mark">{{ ev.fmt }}</span>{% endif %}
              {% if ev.mark %}<span class="fantasy-tag fantasy-tag--mark">{{ ev.mark }}</span>{% endif %}
              {% if ev.free %}<span class="fantasy-tag fantasy-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="fantasy-tag fantasy-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="fantasy-legend">
      {% for item in page.legend %}
      <p class="fantasy-legend-row">
        <span class="fantasy-tag fantasy-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="fantasy-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

{% if page.servers.size > 0 %}
<section class="fantasy-panel" id="servers">
  <div class="fantasy-panel-body">
    <h2 class="fantasy-panel-title">
      <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-server"/></svg>
      The Minecraft Servers
    </h2>
    <p class="fantasy-panel-sub">Printed in the corner of the board, kept here as it ran</p>
    <ul class="fantasy-kit">
      {% for s in page.servers %}
      <li class="fantasy-kit-item">
        <span class="fantasy-kit-check" aria-hidden="true"></span>
        <span>{{ s.label }}<span class="fantasy-slot-note">{{ s.value }}</span></span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
{% endif %}

<section class="fantasy-panel" id="kit">
  <div class="fantasy-panel-body">
    <h2 class="fantasy-panel-title">
      <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="fantasy-panel-sub">Power and network are ours to supply</p>
    <ul class="fantasy-kit">
      {% for item in page.kit %}
      <li class="fantasy-kit-item"><span class="fantasy-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="fantasy-panel" id="faq">
  <div class="fantasy-panel-body">
    <h2 class="fantasy-panel-title">
      <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="fantasy-panel-sub">Answered once, so you need not ask twice</p>
    <div class="fantasy-faq">
      {% for entry in page.faq %}
      <details class="fantasy-faq-item">
        <summary class="fantasy-faq-q">{{ entry.q }}</summary>
        <p class="fantasy-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="fantasy-panel" id="sponsors">
  <div class="fantasy-panel-body">
    <h2 class="fantasy-panel-title">
      <svg class="fantasy-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="fantasy-panel-sub">The weekend runs on their help</p>
    <div class="fantasy-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="fantasy-sponsor fantasy-reveal">
        <div class="fantasy-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="fantasy-sponsor-name">{{ sponsor.name }}</div>
        <div class="fantasy-sponsor-tier">{{ tier[0] }}</div>
        <div class="fantasy-sponsor-links">
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

<footer class="fantasy-footer">
  <div class="fantasy-footer-cards">
    <div class="fantasy-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="fantasy-footer-card">
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
  <p class="fantasy-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
