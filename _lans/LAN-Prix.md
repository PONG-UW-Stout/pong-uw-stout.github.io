---
title: LAN-Prix
start_date: 2026-11-20
end_date: 2026-11-22
description: >-
  PONG's racing-themed 48-hour LAN party, with tournaments, open lobbies, prize
  raffles, and a costume contest in the Great Hall of the Memorial Student Center.

ticker: "LAN-PRIX · NOV 20–22 2026 · THE GREAT HALL · 48 HOURS · RACING & MOTORSPORT · FREE ENTRY · REGISTER AT LANREG.ORG · LAN-PRIX · NOV 20–22 2026 · THE GREAT HALL · 48 HOURS"

headline: LAN-PRIX
subhead: "48 Hours. One Hall. Flat Out."
dates_display: "NOV 20–22, 2026"
tagline: "The green light drops Saturday at 16:00. Are you on the grid?"

facts:
  - icon: ico-flag
    label: Dates
    value: "Nov 20–22, 2026"
  - icon: ico-map
    label: Circuit
    value: "The Great Hall, MSC"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-gear
    label: Theme
    value: "Racing & Motorsport"
  - icon: ico-network
    label: Network
    value: "Provided"

registration_url: 

schedule_image: /assets/images/lan_schedules/lan-prix_schedule.png
schedule_alt: >-
  The LAN-Prix weekend race programme: a grid of events colour-coded by session,
  flagged as free-to-play and/or competitive. The full running order follows below.

sessions: []

events: []

notes: []

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - A racing costume, if you mean to enter Sunday night's contest
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - Deodorant. It is a long race.

faq:
  - q: Do I need to be a UW-Stout student?
    a: No. PONG is open to students, alumni, and friends. No gate on the paddock.
  - q: Do I have to stay the full 48 hours?
    a: Not at all. Come for one session if that is all you have. Some people never leave. Both are fine.
  - q: Do I need to bring ethernet or a power strip?
    a: No. We supply the network and the power at every table. Just bring your rig.
  - q: Do I need to register?
    a: Grab a seat reservation through the link so we know how much table space to set out. Most tournaments also accept entries at check-in.
  - q: How do raffle tickets work?
    a: Competitive events pay out raffle tickets. Three to first, two to second, and one to every other finisher. Help with setup Saturday and earn a bonus ticket. Drawings on Monday; you must be in the hall to claim.
  - q: Does it cost anything to enter a tournament?
    a: Nothing. All PONG events are free to enter. The "free to play" badge means the game itself is free, so you do not need to own anything to compete.
  - q: Can I bring a console instead of a PC?
    a: Yes. Bring it, a monitor or TV, and the cables. Ask in the Discord if you are unsure about space.
  - q: Where do people sleep?
    a: Wherever they end up. Most people bring a pillow and claim a stretch of floor. Keep the walkways clear. That is fire safety, not house style.
  - q: I have never been to a LAN before. Is that okay?
    a: Completely. Show up, find a table, say hi. Ask in the Discord beforehand if you want advice on what to bring.
---

<!-- Critical inline CSS: hides the hero before the external stylesheet lands,
     so nothing flashes ahead of the start-lights sequence. Gated on .gp-js so
     the hero stays visible when JavaScript is off. -->
<script>
  document.documentElement.classList.add('gp-js');
  // Failsafe: if lan-prix.js never runs, don't leave the hero hidden.
  setTimeout(function () {
    var c = document.querySelector('.gp-hero-content');
    if (c) c.classList.remove('is-pending');
  }, 15000);
</script>
<style>
.gp-js .gp-hero-content.is-pending {
  opacity: 0;
  transform: translateY(14px);
}
</style>

<link rel="stylesheet" href="{{ '/assets/css/lan-prix.css' | relative_url }}">

<style>
.gp-finish-sub--small {
  font-size: 13px;
  opacity: 0.85;
  margin-top: -20px;
  margin-bottom: 30px;
  letter-spacing: 0.1em;
}
.gp-section-eyebrow {
  font-family: "Courier New", Courier, monospace;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #e10600;
  margin-bottom: 8px;
}
</style>

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% comment %}Only offer the zoom / full-size links when the schedule image actually exists.{% endcomment %}
{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lan-prix.js' | relative_url }}" defer></script>

<div class="gp-lights-sequence" aria-label="Race start lights sequence" aria-hidden="true">
  <div class="gp-lights-row">
    <span class="gp-light gp-light--green"></span>
    <span class="gp-light gp-light--green"></span>
    <span class="gp-light gp-light--green"></span>
    <span class="gp-light gp-light--green"></span>
    <span class="gp-light gp-light--green"></span>
  </div>
  <div class="gp-lights-row">
    <span class="gp-light gp-light--red"></span>
    <span class="gp-light gp-light--red"></span>
    <span class="gp-light gp-light--red"></span>
    <span class="gp-light gp-light--red"></span>
    <span class="gp-light gp-light--red"></span>
  </div>
</div>

<div class="gp-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-flag" viewBox="0 0 32 32">
    <line x1="5" y1="3" x2="5" y2="29"/>
    <rect x="5" y="3" width="4" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="13" y="3" width="4" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="21" y="3" width="5" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="9" y="6.5" width="4" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="17" y="6.5" width="4" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="5" y="10" width="4" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="13" y="10" width="4" height="3.5" fill="currentColor" stroke="none"/>
    <rect x="21" y="10" width="5" height="3.5" fill="currentColor" stroke="none"/>
    <path d="M5 3 C10 3 15 5 26 3 C24 7 26 10 26 13.5 C15 16 10 13 5 13.5"/>
  </symbol>

  <symbol id="ico-trophy" viewBox="0 0 32 32">
    <path d="M10 5h12l-2 10a4 4 0 0 1-8 0z"/>
    <path d="M10 8 C6 8 5 13 9 13"/>
    <path d="M22 8 C26 8 27 13 23 13"/>
    <line x1="16" y1="19" x2="16" y2="24"/>
    <path d="M10 24h12"/>
    <path d="M8 27h16"/>
  </symbol>

  <symbol id="ico-clock" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12"/>
    <line x1="16" y1="16" x2="24" y2="16"/>
    <line x1="16" y1="16" x2="16" y2="7"/>
    <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none"/>
  </symbol>

  <symbol id="ico-ticket" viewBox="0 0 32 32">
    <path d="M3 10h26v12H3z"/>
    <line x1="23" y1="10" x2="23" y2="22" stroke-dasharray="2 2"/>
    <line x1="6" y1="14" x2="20" y2="14"/>
    <line x1="6" y1="17" x2="16" y2="17"/>
    <line x1="6" y1="20" x2="12" y2="20"/>
  </symbol>

  <symbol id="ico-gear" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="9"/>
    <circle cx="16" cy="16" r="4"/>
    <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8"/>
  </symbol>

  <symbol id="ico-network" viewBox="0 0 32 32">
    <rect x="11" y="4" width="10" height="14" rx="1"/>
    <line x1="13" y1="8" x2="13" y2="13"/>
    <line x1="16" y1="8" x2="16" y2="13"/>
    <line x1="19" y1="8" x2="19" y2="13"/>
    <path d="M13 17v2h6v-2"/>
    <line x1="16" y1="19" x2="16" y2="24"/>
    <circle cx="10" cy="26" r="2"/>
    <circle cx="22" cy="26" r="2"/>
    <line x1="10" y1="26" x2="16" y2="24"/>
    <line x1="22" y1="26" x2="16" y2="24"/>
  </symbol>

  <symbol id="ico-map" viewBox="0 0 32 32">
    <path d="M16 3a8 8 0 0 1 8 8c0 6-8 18-8 18S8 17 8 11a8 8 0 0 1 8-8z"/>
    <circle cx="16" cy="11" r="3"/>
  </symbol>

  <symbol id="ico-helmet" viewBox="0 0 32 32">
    <path d="M8 20C8 10 11 5 18 5c7 0 9 6 9 12 0 5-3 8-7 8H10c-2 0-3-2-2-5z"/>
    <path d="M10 15c0-3 3-5 8-5s8 2 8 5v4c-6 2-13 1-16 0z" opacity="0.35" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
    <path d="M10 15c0-3 3-5 8-5s8 2 8 5v4c-6 2-13 1-16 0z"/>
    <path d="M10 25l-2 3"/>
  </symbol>

  <symbol id="ico-wrench" viewBox="0 0 32 32">
    <path d="M20.5 4.5a5 5 0 0 0-6.8 6.8L5.5 19.5a2.5 2.5 0 0 0 3.5 3.5l8.3-8.3a5 5 0 0 0 6.8-6.8l-3.3 3.3-2-2 3.3-3.3z"/>
  </symbol>

  <symbol id="ico-medal" viewBox="0 0 32 32">
    <path d="M13 4l-3 10"/>
    <path d="M19 4l3 10"/>
    <circle cx="16" cy="21" r="8"/>
    <path d="M16 15.5l1.8 3.6 4 .6-2.9 2.8.7 3.9L16 24.5l-3.6 1.9.7-3.9-2.9-2.8 4-.6z"/>
  </symbol>

  <symbol id="ico-wheel" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13"/>
    <circle cx="16" cy="16" r="4"/>
    <line x1="16" y1="12" x2="16" y2="3"/>
    <line x1="19.5" y1="18" x2="27.3" y2="22.5"/>
    <line x1="12.5" y1="18" x2="4.7" y2="22.5"/>
  </symbol>

  <symbol id="ico-car" viewBox="0 0 32 32">
    <path d="M16 3c3 0 5 2 6 5l1 10c0 3-2 5-4 6l-3 1-3-1c-2-1-4-3-4-6l1-10c1-3 3-5 6-5z"/>
    <path d="M12 8L6 9v2l6-1z"/>
    <path d="M20 8l6 1v2l-6-1z"/>
    <path d="M11 20l-6-1v2l6 1z"/>
    <path d="M21 20l6-1v2l-6 1z"/>
    <ellipse cx="16" cy="14" rx="3" ry="4"/>
    <rect x="5.5" y="8.5" width="3" height="5" rx="1.5"/>
    <rect x="23.5" y="8.5" width="3" height="5" rx="1.5"/>
    <rect x="5" y="18" width="4" height="5" rx="2"/>
    <rect x="23" y="18" width="4" height="5" rx="2"/>
  </symbol>

</svg>
</div>


<section class="gp-hero">
  <div class="gp-hero-lines" aria-hidden="true"></div>
  <div class="gp-hero-content is-pending">
    <h1 class="gp-hero-title">{{ page.headline }}</h1>
    <p class="gp-hero-subhead">{{ page.subhead }}</p>
    <p class="gp-hero-dates">{{ page.dates_display }}</p>
    <p class="gp-hero-tagline">The green light drops Friday, 20 November at 16:00. Free entry. No excuses.</p>
    <div class="gp-hero-actions">
      {% if page.registration_url and page.registration_url != "" %}
      <a class="gp-btn gp-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Take Your Grid Position</a>
      {% endif %}
      <a class="gp-btn gp-btn--ghost" href="#schedule">See the Programme</a>
    </div>
  </div>

</section>

<div class="gp-race-car" id="gp-race-car" aria-hidden="true">
  <svg viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8,24 L15,24 L15,62 L8,62 Z" fill="currentColor"/>
    <path d="M10,24 L55,22 L55,26 L10,28 Z" fill="currentColor"/>
    <path d="M10,28 L57,26 L57,30 L10,32 Z" fill="currentColor"/>
    <path d="M22,51 L54,49 L54,53 L22,55 Z" fill="currentColor" opacity="0.85"/>
    <path d="M31,26 L35,26 L37,51 L33,51 Z" fill="currentColor" opacity="0.6"/>
    <path d="M 243,68 C 228,64 210,59 196,54 C 186,51 175,48 162,43 C 152,39 142,35 128,33 C 118,32 108,33 98,34 C 88,35 78,37 68,40 C 58,43 45,47 32,51 L 22,55 L 22,62 L 185,61 C 210,63 228,66 243,68 Z" fill="currentColor"/>
    <path d="M90,37 C100,34 114,33 126,34 L126,43 C114,44 100,45 90,43 Z" fill="rgba(0,0,0,0.62)"/>
    <path d="M98,34 C97,28 103,23 113,22 L116,22 C106,23 101,28 102,34 Z" fill="currentColor"/>
    <path d="M134,36 C130,30 124,24 117,22 L114,22 C121,24 126,30 129,36 Z" fill="currentColor"/>
    <rect x="113" y="22" width="4" height="8" rx="1" fill="currentColor" opacity="0.65"/>
    <path d="M103,34 L103,38 C114,39 124,39 131,36 L131,34 C124,35 114,35 103,34 Z" fill="rgba(0,0,0,0.7)"/>
    <path d="M152,72 L248,68 L248,65 L152,69 Z" fill="currentColor"/>
    <path d="M156,69 L246,65 L246,62 L156,66 Z" fill="currentColor"/>
    <path d="M160,66 L244,62 L244,59 L160,63 Z" fill="currentColor" opacity="0.9"/>
    <path d="M163,63 L242,59 L242,56 L163,60 Z" fill="currentColor" opacity="0.8"/>
    <path d="M243,54 L249,54 L249,74 L243,74 Z" fill="currentColor"/>
    <path d="M150,65 L156,65 L156,74 L150,74 Z" fill="currentColor"/>
    <path d="M182,59 L193,59 L193,66 L182,66 Z" fill="currentColor" opacity="0.6"/>
    <circle cx="50" cy="64" r="11" fill="rgba(55,55,55,0.92)"/>
    <circle cx="50" cy="64" r="6.5" fill="currentColor" opacity="0.4"/>
    <circle cx="50" cy="64" r="2.5" fill="rgba(20,20,20,0.95)"/>
    <circle cx="190" cy="64" r="9" fill="rgba(55,55,55,0.92)"/>
    <circle cx="190" cy="64" r="5.5" fill="currentColor" opacity="0.4"/>
    <circle cx="190" cy="64" r="2" fill="rgba(20,20,20,0.95)"/>
  </svg>
</div>

<div class="gp-countdown" id="gp-countdown" aria-label="Countdown to LAN-Prix">
  <div class="gp-countdown-unit">
    <span class="gp-countdown-num" data-unit="days">--</span>
    <span class="gp-countdown-label">Days</span>
  </div>
  <span class="gp-countdown-sep" aria-hidden="true">:</span>
  <div class="gp-countdown-unit">
    <span class="gp-countdown-num" data-unit="hours">--</span>
    <span class="gp-countdown-label">Hours</span>
  </div>
  <span class="gp-countdown-sep" aria-hidden="true">:</span>
  <div class="gp-countdown-unit">
    <span class="gp-countdown-num" data-unit="minutes">--</span>
    <span class="gp-countdown-label">Minutes</span>
  </div>
  <span class="gp-countdown-sep" aria-hidden="true">:</span>
  <div class="gp-countdown-unit">
    <span class="gp-countdown-num" data-unit="seconds">--</span>
    <span class="gp-countdown-label">Seconds</span>
  </div>
</div>

<div class="gp-facts">
  {% for fact in page.facts %}
  <div class="gp-fact">
    <svg class="gp-icon gp-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
    <span class="gp-fact-label">{{ fact.label }}</span>
    <span class="gp-fact-value">{{ fact.value }}</span>
  </div>
  {% endfor %}
</div>

<section class="gp-section gp-section--dark" id="schedule">
  <div class="gp-section-inner">
    <div class="gp-section-eyebrow">OFFICIAL</div>
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-flag"/></svg>
        Race Programme
      </h2>
    </div>

    <div class="gp-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="gp-screen" href="#schedule-zoom">
        <img class="gp-schedule-img"
             src="{{ page.schedule_image | relative_url }}"
             alt="{{ page.schedule_alt }}">
        <div class="gp-signal-lost">
          <svg class="gp-icon gp-signal-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-network"/></svg>
          <strong>Programme Not Yet Published</strong>
          <span>Check back soon or ask in the Discord.</span>
        </div>
      </a>
      {% else %}
      <div class="gp-screen is-missing">
        <div class="gp-signal-lost">
          <svg class="gp-icon gp-signal-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-network"/></svg>
          <strong>Programme Not Yet Published</strong>
          <span>Check back soon or ask in the Discord.</span>
        </div>
      </div>
      {% endif %}
      {% if schedule_exists %}
      <div class="gp-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size ↗</a>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="gp-zoom-overlay" id="schedule-zoom">
  <a class="gp-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="gp-zoom-frame">
    <div class="gp-zoom-bar">
      <span>Race Programme</span>
      <a class="gp-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    </div>
    <div class="gp-zoom-body">
      <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
    </div>
  </div>
</div>
{% endif %}

<section class="gp-section gp-section--mid" id="lap-by-lap">
  <div class="gp-section-inner">
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
        Lap by Lap
      </h2>
      <p class="gp-section-sub">{% if page.sessions.size > 0 %}Full running order · times shift, board in the hall is live{% else %}Schedule not yet announced{% endif %}</p>
    </div>

    {% if page.sessions.size > 0 %}
    <div class="gp-sessions">
      {% for session in page.sessions %}
      <div class="gp-session gp-session--{{ session.color }}">
        <h3 class="gp-session-name">{{ session.name }}</h3>
        <ul class="gp-lap-list">
          {% for ev in session.events %}
          <li class="gp-lap">
            <span class="gp-lap-time">{{ ev.time }}</span>
            <span class="gp-lap-name">
              {{ ev.name }}
              {% if ev.note %}<span class="gp-lap-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="gp-lap-badges">
              {% if ev.free %}<span class="gp-badge gp-badge--free">Free to play</span>{% endif %}
              {% if ev.contest %}<span class="gp-badge gp-badge--contest">Contest</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="gp-legend">
      <span class="gp-badge gp-badge--contest">Contest</span> Winner earns 3 raffle tickets &middot; 2nd place earns 2 &middot; all finishers earn 1
      &nbsp;&nbsp;&nbsp;
      <span class="gp-badge gp-badge--free">Free to play</span> Game is free to download, so no purchase is needed to compete
    </div>
    {% else %}
    <p class="gp-tba-msg">The running order hasn't been drawn up yet. We'll post it here and in the Discord when it is.</p>
    {% endif %}
  </div>
</section>

<section class="gp-section gp-section--dark">
  <div class="gp-section-inner">
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-trophy"/></svg>
        Enter the Race
      </h2>
      <p class="gp-section-sub">{% if page.events.size > 0 %}{{ page.events | size }} events taking entries{% else %}Events to be announced{% endif %}</p>
    </div>

    {% if page.events.size > 0 %}
    <div class="gp-event-grid">
      {% for ev in page.events %}
      <a class="gp-event-card" href="{{ ev.url }}" target="_blank" rel="noopener">
        <span class="gp-event-num">{{ ev.number }}</span>
        <span class="gp-event-name">{{ ev.game }}</span>
        <span class="gp-event-format">{{ ev.format }}</span>
        <span class="gp-event-org">{{ ev.org }}</span>
        <span class="gp-event-cta">Enter &rarr;</span>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <p class="gp-tba-msg">Tournament lineup hasn't been confirmed yet. Watch the Discord for the announcement.</p>
    {% endif %}
  </div>
</section>

<section class="gp-section gp-section--mid">
  <div class="gp-section-inner">
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-wrench"/></svg>
        Paddock Notes
      </h2>
      <p class="gp-section-sub">{% if page.notes.size > 0 %}Read before the events they concern{% else %}Notes posted as events are confirmed{% endif %}</p>
    </div>
    {% if page.notes.size > 0 %}
    <div class="gp-notes">
      {% for note in page.notes %}
      <div class="gp-note">
        <h3 class="gp-note-title">{{ note.event }}</h3>
        <p>{{ note.body }}</p>
        {% if note.link %}<p><a href="{{ note.link }}" target="_blank" rel="noopener">{{ note.link_text }} &nearr;</a></p>{% endif %}
      </div>
      {% endfor %}
    </div>
    {% else %}
    <p class="gp-tba-msg">Nothing to read yet. Notes will appear here once events are set.</p>
    {% endif %}
  </div>
</section>

<section class="gp-section gp-section--dark">
  <div class="gp-section-inner">
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-gear"/></svg>
        Load the Transporter
      </h2>
      <p class="gp-section-sub">Power and network are ours to supply</p>
    </div>
    <ul class="gp-kit-list">
      {% for item in page.kit %}
      <li class="gp-kit-item">
        <span class="gp-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="gp-section gp-section--mid">
  <div class="gp-section-inner">
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-helmet"/></svg>
        Press Conference
      </h2>
      <p class="gp-section-sub">Answered once, so you need not ask twice</p>
    </div>
    <div class="gp-faq">
      {% for entry in page.faq %}
      <details class="gp-faq-item">
        <summary class="gp-faq-q">{{ entry.q }}</summary>
        <p class="gp-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="gp-section gp-section--dark">
  <div class="gp-section-inner">
    <div class="gp-section-head">
      <h2 class="gp-section-title">
        <svg class="gp-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-medal"/></svg>
        Team Sponsors
      </h2>
      <p class="gp-section-sub">This race is supported by</p>
    </div>
    <div class="gp-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="gp-sponsor">
        <div class="gp-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="gp-sponsor-name">{{ sponsor.name }}</div>
        <div class="gp-sponsor-tier">{{ tier[0] }}</div>
        <div class="gp-sponsor-links">
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

<section class="gp-finish">
  <div class="gp-finish-lines" aria-hidden="true"></div>
  <div class="gp-finish-content">
    <h2 class="gp-finish-title">Ready to Race?</h2>
    <p class="gp-finish-sub">The Great Hall &middot; Nov 20&ndash;22, 2026 &middot; Free to enter</p>
    <p class="gp-finish-sub gp-finish-sub--small">Help with setup from noon · Raffle drawings Sunday afternoon · You must be present to claim</p>
    <div class="gp-finish-actions">
      {% if page.registration_url and page.registration_url != "" %}
      <a class="gp-btn gp-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Take Your Grid Position</a>
      {% endif %}
      <a class="gp-btn gp-btn--ghost" href="{{ discord_url }}" target="_blank" rel="noopener">Enter the Paddock</a>
    </div>
  </div>
</section>
