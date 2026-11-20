---
title: ApocaLAN
start_date: 2021-10-01
end_date: 2021-10-03
description: >-
  ApocaLAN: a 48-hour event in the MSC Great Hall and Ballrooms. Games,
  tournaments, prizes.

ticker: "APOCALAN · GAMES - TOURNAMENTS - PRIZES · OCTOBER 1-3 · 4PM-4PM · MSC GREAT HALL AND BALLROOMS · FREE ENTRY · 48 HOURS ·"

headline: ApocaLAN
hosted_a: "Hosted by "
hosted_b: PONG
hosted_c: " at Stout"

blurb: "Join us for a 48-hour event at the MSC Great Hall and Ballrooms"

from_label: "From:"
from_value: "October 1st, 4pm"
to_label: "To:"
to_value: "October 3rd, 4pm"

strip_a: Games
strip_b: Tournaments
strip_c: Prizes

facts:
  - { icon: ico-biohazard, label: Dates,     value: "October 1-3, 2021" }
  - { icon: ico-hall,      label: Venue,     value: "MSC Great Hall and Ballrooms" }
  - { icon: ico-clock,     label: Duration,  value: "48 Hours" }
  - { icon: ico-ticket,    label: Entry Fee, value: "Free" }
  - { icon: ico-pad,       label: Featuring, value: "Blue Devil Smash and Table Top Games" }
  - { icon: ico-plug,      label: Network,   value: "Provided" }

registration_url:
schedule_image: /assets/images/lan_schedules/apoca-lan_schedule.png
schedule_alt: >-
  The ApocaLAN weekend schedule: three columns of events, colour-keyed by day,
  with the free-to-play ones flagged. The full running order follows below.
schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - { time: "6:00 PM",  name: "Call of Duty: Modern Warfare", fmt: "2v2" }
      - { time: "7:30 PM",  name: "Jackbox Games", free: true }
      - { time: "9:00 PM",  name: "Minecraft UHC" }
  - name: Saturday
    events:
      - { time: "12:00 AM", name: "Meme Jeopardy!", free: true }
      - { time: "2:30 AM",  name: "Left 4 Dead 2" }
      - { time: "12:00 PM", name: "Among Us", mobile: true }
      - { time: "2:00 PM",  name: "Minecraft: Capture the Flag" }
      - { time: "4:30 PM",  name: "The Ultimate Doom", free: true, fmt: "1v1" }
      - { time: "6:00 PM",  name: "Call of Duty: Black Ops II", free: true, note: "Grief" }
      - { time: "7:00 PM",  name: "Divekick", free: true }
      - { time: "9:00 PM",  name: "Minecraft: Hedge Legends" }
  - name: Sunday
    events:
      - { time: "12:00 AM", name: "Worms", free: true }
      - { time: "12:30 PM", name: "Jackbox Games", free: true }
      - { time: "3:00 PM",  name: "Prize Drawing" }

all_lan:
  - name: "Blue Devil Smash"
    when: "Sun, 11 AM and 1 PM"
    free: true
    body: "Super Smash Bros. Ultimate at 11, Guilty Gear -Strive- at 1."
  - name: "Table Top Games"
    when: "Fri 4:30 PM, Sat 2 PM"
    free: true
    body: "Dead of Winter on the Friday, Werewolf on the Saturday."

servers:
  - { label: "Minecraft", value: "mc.ponglan.net" }

legend:
  - tag: FREE
    kind: free
    body: "Marks a game that is free to buy or play. All PONG events are free to participate in."
legend_note: "Every event at this LAN ran casually, so none of them were competitive."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Divekick goes
  - A phone, if you are joining the Among Us lobby on the Saturday
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "Were there any competitive events?"
    a: "No. Every event at ApocaLAN ran casually, so nothing was bracketed and no tickets were paid out for placing. PirateLAN is the only other LAN on this site like that."
  - q: "What was grief mode on Black Ops II?"
    a: "The zombies mode where two teams share a map and get in each other's way on purpose. It ran Saturday at 6 PM."
  - q: "Who are Blue Devil Smash?"
    a: "Another Stout club. They ran Smash Ultimate at 11 AM and Guilty Gear -Strive- at 1 PM on Sunday, both free to play."
  - q: "What were the Table Top Games?"
    a: "Games run by another club: Dead of Winter on Friday at 4:30 PM and Werewolf on Saturday at 2 PM."
  - q: "Why was Among Us marked free on mobile?"
    a: "The phone version is free. On PC it is a paid game."
---

<link rel="stylesheet" href="{{ '/assets/css/apoca-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/apoca-lan.js' | relative_url }}" defer></script>

<div class="apoca-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-biohazard" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4"/><path d="M16 12a8 8 0 0 1 6.9-7.9"/><path d="M12.5 18a8 8 0 0 1-9.4 2.4"/><path d="M19.5 18a8 8 0 0 0 9.4 2.4"/><path d="M11 25.6A8 8 0 0 0 16 28a8 8 0 0 0 5-2.4"/></symbol>

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

<div class="apoca-field" aria-hidden="true"></div>

<div class="apoca-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="apoca-hero">
  <svg class="apoca-ground" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path d="M0 200 L0 27 L34 39 L65 25 L99 21 L158 8 L196 13 L230 46 L263 30 L300 35 L338 11 L375 21 L427 28 L455 32 L487 25 L515 21 L567 26 L617 36 L660 31 L696 30 L747 8 L805 19 L830 10 L864 7 L900 21 L946 24 L1004 32 L1036 41 L1084 45 L1134 45 L1162 16 L1200 5 L1200 200 Z"/>
  </svg>

  <svg class="apoca-tear" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path d="M0 1.4 L23 2.2 L47 3.8 L59 0.1 L88 1.6 L104 6.0 L125 5.0 L146 3.8 L160 3.8 L190 3.1 L217 4.0 L229 4.5 L253 1.8 L265 5.2 L286 4.3 L316 4.3 L347 2.4 L375 2.7 L406 5.3 L419 0.8 L435 5.8 L455 3.8 L473 3.0 L492 2.1 L515 3.5 L546 4.1 L577 5.1 L609 4.0 L624 5.2 L656 5.4 L679 4.3 L694 5.0 L718 1.7 L730 5.1 L762 0.5 L791 2.5 L805 1.8 L832 5.2 L844 3.7 L856 4.3 L874 5.3 L906 3.0 L939 1.9 L951 3.6 L963 1.2 L983 3.7 L997 0.3 L1000 1.9 L1000 15.8 L991 17.7 L957 16.5 L926 19.8 L907 14.1 L873 18.4 L838 19.4 L809 14.3 L787 15.1 L767 15.4 L740 18.6 L723 14.4 L709 19.4 L683 15.9 L654 16.1 L635 17.8 L619 16.5 L602 20.0 L582 16.8 L557 15.7 L530 14.3 L518 18.9 L498 15.0 L476 17.6 L454 17.1 L422 19.3 L397 19.5 L378 17.3 L345 19.6 L331 16.8 L315 17.0 L287 17.6 L273 19.3 L241 18.4 L214 15.9 L198 18.8 L166 19.0 L132 15.3 L118 15.0 L100 17.2 L82 18.6 L51 19.5 L30 14.4 L14 16.4 L0 15.4 Z"/>
  </svg>

  <h1 class="apoca-title">A<i>&middot;</i>P<i>&middot;</i>O<i>&middot;</i>C<i>&middot;</i>A<i>&middot;</i>L<i>&middot;</i>A<i>&middot;</i>N</h1>

  <svg class="apoca-tear" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path d="M0 2.7 L23 5.5 L44 3.0 L68 1.1 L90 3.8 L118 0.6 L135 0.5 L164 4.2 L175 5.9 L207 3.9 L232 0.9 L243 3.2 L255 1.1 L271 0.2 L292 2.6 L321 3.1 L346 3.0 L371 2.7 L388 6.0 L421 5.0 L447 1.9 L463 1.7 L475 4.6 L495 5.1 L514 5.7 L543 0.0 L559 5.5 L580 5.9 L599 0.4 L624 4.7 L641 0.5 L659 5.8 L686 0.7 L702 0.6 L715 4.8 L729 3.4 L750 1.1 L777 0.8 L801 0.7 L822 1.3 L838 5.8 L867 1.8 L897 1.3 L916 5.1 L941 0.6 L973 1.3 L990 4.6 L1000 1.8 L1000 16.9 L965 16.9 L946 15.3 L923 14.3 L896 16.1 L878 14.2 L849 15.1 L824 14.6 L794 16.3 L772 15.3 L748 16.6 L716 14.2 L692 18.9 L668 16.2 L651 14.7 L623 18.1 L602 16.1 L575 19.9 L540 18.4 L527 16.3 L504 17.6 L482 16.4 L451 15.0 L437 18.2 L422 17.7 L402 14.8 L380 14.7 L346 19.9 L332 17.1 L298 14.4 L286 19.1 L264 16.0 L236 14.4 L205 14.4 L171 15.0 L149 14.9 L121 17.3 L95 18.1 L64 15.6 L43 14.1 L28 18.0 L0 16.8 Z"/>
  </svg>

  <p class="apoca-hosted">{{ page.hosted_a }}<b>{{ page.hosted_b }}</b>{{ page.hosted_c }}</p>

  <div class="apoca-deck">
    <div class="apoca-deck-copy">
      <p class="apoca-blurb">{{ page.blurb }}</p>

      <div class="apoca-when">
        <span class="apoca-when-key">{{ page.from_label }}</span>
        <span class="apoca-when-val">{{ page.from_value }}</span>
        <span class="apoca-when-key">{{ page.to_label }}</span>
        <span class="apoca-when-val">{{ page.to_value }}</span>
      </div>
    </div>

    <svg class="apoca-blast" viewBox="0 0 320 450" role="img"
         aria-label="A mushroom cloud rising from the ground">

      <ellipse cx="160" cy="418" rx="146" ry="26"
               fill="none" stroke="#2b2620" stroke-width="6" opacity="0.4"/>

      <path d="M4 450 C12 420, 44 400, 78 408 C96 390, 132 386, 150 400
               C170 382, 210 386, 228 404 C262 392, 302 408, 316 450 Z"
            fill="#d9c9a8" stroke="#2b2620" stroke-width="7" stroke-linejoin="round"/>

      <ellipse cx="160" cy="258" rx="116" ry="21"
               fill="#ece3d2" stroke="#2b2620" stroke-width="7"/>

      <path d="M126 176 C122 232, 116 292, 108 344 C102 386, 92 408, 78 424
               L242 424 C228 408, 218 386, 212 344 C204 292, 198 232, 194 176 Z"
            fill="#ece3d2" stroke="#2b2620" stroke-width="7" stroke-linejoin="round"/>
      <path d="M150 196 C146 258, 142 330, 136 396 L184 396 C178 330, 174 258, 170 196 Z"
            fill="#f0a018" opacity="0.75"/>

      <path d="M40 176 C16 154, 22 116, 52 108 C44 78, 74 54, 102 66
               C110 36, 150 26, 170 46 C194 26, 232 38, 238 68
               C270 62, 292 88, 280 116 C306 128, 306 164, 282 176 Z"
            fill="#f5efe2" stroke="#2b2620" stroke-width="7" stroke-linejoin="round"/>

      <path d="M96 150 C78 134, 86 108, 108 102 C112 80, 142 70, 158 84
               C176 70, 204 80, 208 102 C230 108, 236 136, 218 150 Z"
            fill="#e8622a"/>
      <path d="M124 150 C112 140, 118 122, 134 118 C138 104, 160 98, 170 108
               C184 100, 200 110, 200 124 C212 130, 210 146, 198 150 Z"
            fill="#e23b2a"/>

      <g fill="#2b2620">
        <circle cx="44" cy="246" r="6"/>
        <circle cx="282" cy="214" r="5"/>
        <circle cx="64" cy="318" r="4"/>
        <circle cx="266" cy="330" r="6"/>
      </g>
    </svg>
  </div>

  <div class="apoca-foot">
    <p class="apoca-strip">
      {{ page.strip_a }} <i aria-hidden="true">&#9679;</i>
      {{ page.strip_b }} <i aria-hidden="true">&#9679;</i>
      {{ page.strip_c }}
    </p>

    <div class="apoca-hero-actions">
      <a class="apoca-btn apoca-btn--primary" href="#running-order">See What Was On</a>
      <a class="apoca-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
    </div>
  </div>
</section>

<div class="apoca-countdown-wrap" id="apoca-countdown-wrap">
  <p class="apoca-countdown-head" id="apoca-countdown-head">Time Remaining Until Doors Open</p>
  <div class="apoca-countdown" id="apoca-countdown" aria-label="Countdown to ApocaLAN">
    <div class="apoca-countdown-unit"><span class="apoca-countdown-num" data-unit="days">--</span><span class="apoca-countdown-label">Days</span></div>
    <div class="apoca-countdown-unit"><span class="apoca-countdown-num" data-unit="hours">--</span><span class="apoca-countdown-label">Hours</span></div>
    <div class="apoca-countdown-unit"><span class="apoca-countdown-num" data-unit="minutes">--</span><span class="apoca-countdown-label">Minutes</span></div>
    <div class="apoca-countdown-unit"><span class="apoca-countdown-num" data-unit="seconds">--</span><span class="apoca-countdown-label">Seconds</span></div>
  </div>
</div>

<div class="apoca-facts">
  <table class="apoca-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="apoca-th-inner">
            <svg class="apoca-icon apoca-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="apoca-panel" id="schedule">
  <div class="apoca-panel-body">
    <h2 class="apoca-panel-title">
      <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-biohazard"/></svg>
      The Board
    </h2>
    <p class="apoca-panel-sub">{{ page.schedule_note }}</p>

    <div class="apoca-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="apoca-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="apoca-schedule-img">
        <div class="apoca-noimg">
          <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-biohazard"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="apoca-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="apoca-screen is-missing">
        <div class="apoca-noimg">
          <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-biohazard"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="apoca-zoom" id="schedule-zoom">
  <a class="apoca-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="apoca-zoom-frame">
    <a class="apoca-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="apoca-panel" id="running-order">
  <div class="apoca-panel-body">
    <h2 class="apoca-panel-title">
      <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="apoca-panel-sub">{{ page.sessions.size }} days &middot; indigo is Friday, purple is Saturday, green is Sunday</p>

    <div class="apoca-days">
      {% for session in page.sessions %}
      <div class="apoca-day apoca-reveal">
        <h3 class="apoca-day-name">{{ session.name }}</h3>
        <ul class="apoca-slots">
          {% for ev in session.events %}
          <li class="apoca-slot">
            <span class="apoca-slot-time">{{ ev.time }}</span>
            <span class="apoca-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="apoca-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="apoca-slot-tags">
              {% if ev.fmt %}<span class="apoca-tag apoca-tag--mark">{{ ev.fmt }}</span>{% endif %}
              {% if ev.free %}<span class="apoca-tag apoca-tag--free">FREE</span>{% endif %}
              {% if ev.mobile %}<span class="apoca-tag apoca-tag--long">FREE ON MOBILE</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}

      {% if page.all_lan.size > 0 %}
      <div class="apoca-day apoca-day--all apoca-reveal">
        <h3 class="apoca-day-name">Also Running</h3>
        <ul class="apoca-slots">
          {% for ev in page.all_lan %}
          <li class="apoca-slot">
            <span class="apoca-slot-time">{% if ev.when %}{{ ev.when }}{% else %}All weekend{% endif %}</span>
            <span class="apoca-slot-name">
              {{ ev.name }}
              {% if ev.body %}<span class="apoca-slot-note">{{ ev.body }}</span>{% endif %}
            </span>
            <span class="apoca-slot-tags">
              {% if ev.free %}<span class="apoca-tag apoca-tag--free">FREE</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>

    <div class="apoca-legend">
      {% for item in page.legend %}
      <p class="apoca-legend-row">
        <span class="apoca-tag apoca-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      {% if page.legend_note %}<p class="apoca-legend-note">{{ page.legend_note }}</p>{% endif %}
    </div>
  </div>
</section>

{% if page.servers.size > 0 %}
<section class="apoca-panel" id="servers">
  <div class="apoca-panel-body">
    <h2 class="apoca-panel-title">
      <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-server"/></svg>
      The Minecraft Server
    </h2>
    <p class="apoca-panel-sub">Printed in the corner of the board, kept here as it ran</p>
    <ul class="apoca-kit">
      {% for s in page.servers %}
      <li class="apoca-kit-item">
        <span class="apoca-kit-check" aria-hidden="true"></span>
        <span>{{ s.label }}<span class="apoca-slot-note">{{ s.value }}</span></span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
{% endif %}

<section class="apoca-panel" id="kit">
  <div class="apoca-panel-body">
    <h2 class="apoca-panel-title">
      <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="apoca-panel-sub">Power and network are ours to supply</p>
    <ul class="apoca-kit">
      {% for item in page.kit %}
      <li class="apoca-kit-item"><span class="apoca-kit-check" aria-hidden="true"></span>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="apoca-panel" id="faq">
  <div class="apoca-panel-body">
    <h2 class="apoca-panel-title">
      <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="apoca-panel-sub">Answered once, so you need not ask twice</p>
    <div class="apoca-faq">
      {% for entry in page.faq %}
      <details class="apoca-faq-item">
        <summary class="apoca-faq-q">{{ entry.q }}</summary>
        <p class="apoca-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="apoca-panel" id="sponsors">
  <div class="apoca-panel-body">
    <h2 class="apoca-panel-title">
      <svg class="apoca-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="apoca-panel-sub">The weekend runs on their help</p>
    <div class="apoca-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="apoca-sponsor apoca-reveal">
        <div class="apoca-sponsor-logo"><img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}"></div>
        <div class="apoca-sponsor-name">{{ sponsor.name }}</div>
        <div class="apoca-sponsor-tier">{{ tier[0] }}</div>
        <div class="apoca-sponsor-links">
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

<footer class="apoca-footer">
  <div class="apoca-footer-cards">
    <div class="apoca-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="apoca-footer-card">
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
  <p class="apoca-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
