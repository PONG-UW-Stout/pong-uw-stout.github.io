---
title: Safari-LAN
start_date: 2025-04-04
end_date: 2025-04-06
description: >-
  Safari-LAN: 48 hours in the MSC Great Hall and Ballrooms. Games, tournaments,
  prizes, and a weekend of exploring.

ticker: "SAFARI-LAN · GAMES - TOURNAMENTS - PRIZES · APRIL 4-6 · 4PM-4PM · MSC GREAT HALL & BALLROOMS · FREE ENTRY · GET READY TO EXPLORE · 48 HOURS ·"

headline: Safari-LAN
tagline: "Games - Tournaments - Prizes"

blurb: "Get ready to explore with PONG For Safari Lan! Join us in the MSC Great Hall & Ballrooms for a 48-hour Gaming Event!"

when_label: When
when_value: "Fri, April 4th 4pm - Sun April 6th 4pm"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"

dates_display: "APRIL 4-6"

facts:
  - icon: ico-leaf
    label: Dates
    value: "April 4-6, 2025"
  - icon: ico-hall
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-pad
    label: Theme
    value: "Exploring"
  - icon: ico-plug
    label: Network
    value: "Provided"

registration_url:

schedule_image: /assets/images/lan_schedules/safari-lan_schedule.webp
schedule_alt: >-
  The Safari-LAN weekend schedule: four columns of events, each flagged free to
  play and/or competitive. The full running order follows below.

schedule_note: The schedule as it was posted for the weekend. Times shifted as it went on.

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Preview SGX.25
        free: true
      - time: "7:30 PM"
        name: R.E.P.O.
      - time: "9:00 PM"
        name: Desolate Desert
        note: Hosted by Quillmark
      - time: "10:30 PM"
        name: Deep Rock Galactic

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Guess That Animal
        free: true
      - time: "1:30 AM"
        name: Team Fortress 2
        free: true
      - time: "12:00 PM"
        name: Board Game Roulette
        note: Hosted by TTG
        free: true
      - time: "1:00 PM"
        name: "Group Lunch to Erbert's & Gerbert's"
      - time: "1:00 PM"
        name: Super Smash Bros. Ultimate
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "3:00 PM"
        name: Golf With Your Friends
      - time: "4:00 PM"
        name: Rivals of Aether II
        note: Hosted by Blue Devil Smash
        free: true
        contest: true
      - time: "5:00 PM"
        name: Monster Hunter Wilds
      - time: "6:30 PM"
        name: Duck Life Speed Run
        free: true
        contest: true
      - time: "7:00 PM"
        name: Donkey Kart Deluxe
        note: Mario Kart 8 Deluxe
        free: true
        contest: true
      - time: "9:30 PM"
        name: Group Photo
      - time: "10:00 PM"
        name: "Let's Build a Zoovie"
      - time: "10:00 PM"
        name: "Magic: The Gathering Two Head Commander"
        note: Hosted by TCCS
        free: true
        contest: true

  - name: Sunday
    events:
      - time: "1:30 AM"
        name: Garry's Mod
      - time: "12:00 PM"
        name: WEBFISHING
      - time: "1:00 PM"
        name: GeoGuessr
        free: true
      - time: "2:00 PM"
        name: Prize Drawing

all_lan: []

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 TICKETS, Second place will receive 2 TICKETS, and all other Participants will receive 1 TICKET."
  - tag: FREE
    kind: free
    body: "Marks an event that is FREE to buy or play. All PONG events Are Free to Participate in."
legend_note: "Example: you can play in a Balatro event, but it is not a free game."

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Smash and the kart racing go
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: "How did tickets work?"
    a: "Competitive events paid out tickets: three to the winner, two to second place, and one to everyone else who took part. The prize drawing was Sunday at 2:00 PM."
  - q: "Did it cost anything to enter?"
    a: "No. PONG events are free to enter. The green FREE badge marked games that are free to download. For everything else you needed to own the game."
  - q: "What does the red C mean?"
    a: "Competitive. Those events ran as brackets or contests and paid out tickets toward the Sunday drawing."
  - q: "What was the group lunch?"
    a: "A walk to Erbert's & Gerbert's on Saturday at 1:00 PM for anyone who wanted to come. Everyone paid for their own."
---

<link rel="stylesheet" href="{{ '/assets/css/safari-lan.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{% assign email_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "email" %}{% assign email_url = social.url %}{% endif %}{% endfor %}

{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

<script src="{{ '/assets/js/lans/safari-lan.js' | relative_url }}" defer></script>

<div class="jungle-sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">

  <symbol id="ico-leaf" viewBox="0 0 32 32">
    <path d="M27 5C13 5 5 13 5 24c0 1 0 2 .3 3C17 27 27 19 27 5z"/>
    <path d="M5 27 23 9"/>
  </symbol>

  <symbol id="ico-pad" viewBox="0 0 32 32">
    <rect x="2" y="9" width="28" height="14" rx="5"/>
    <path d="M8 13v6M5 16h6"/>
    <circle cx="23" cy="14.5" r="1.6"/>
    <circle cx="26" cy="18.5" r="1.6"/>
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

<div class="jungle-marquee" aria-hidden="true"><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span><span>{{ page.ticker }}</span></div>

<section class="jungle-hero">
  <div class="jungle-hero-grid">

    <div class="jungle-hero-copy">
      <h1 class="jungle-title">{{ page.headline }}</h1>
      <p class="jungle-tagline">{{ page.tagline }}</p>

      <dl class="jungle-details">
        <dt>{{ page.when_label }}</dt>
        <dd>{{ page.when_value }}</dd>
        <dt>{{ page.where_label }}</dt>
        <dd>{{ page.where_value }}</dd>
      </dl>

      <p class="jungle-blurb">{{ page.blurb }}</p>

      <div class="jungle-hero-actions">
        {% if page.registration_url and page.registration_url != "" %}
        <a class="jungle-btn jungle-btn--primary" href="{{ page.registration_url }}" target="_blank" rel="noopener">Reserve Your Seat</a>
        {% endif %}
        <a class="jungle-btn jungle-btn--primary" href="#running-order">See What Is On</a>
        <a class="jungle-btn" href="{{ discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
      </div>
    </div>

    <div class="jungle-hero-art">
      <svg class="jungle-canopy" viewBox="0 0 320 450" aria-hidden="true" focusable="false">
      <g class="jg-back">
        <path class="jg-leaf-bk" d="M-14.0 44.0 C29.3 3.4 86.6 37.3 109.6 84.2 C63.4 108.5 -2.9 102.3 -14.0 44.0 Z"/>
        <path class="jg-leaf-bk-vein" d="M16.9 54.0 L52.8 36.1"/>
        <path class="jg-leaf-bk-vein" d="M16.9 54.0 L35.4 89.7"/>
        <path class="jg-leaf-bk-vein" d="M47.8 64.1 L82.5 49.9"/>
        <path class="jg-leaf-bk-vein" d="M47.8 64.1 L67.5 95.9"/>
        <path class="jg-leaf-bk-vein" d="M78.7 74.1 L112.2 63.8"/>
        <path class="jg-leaf-bk-vein" d="M78.7 74.1 L99.7 102.1"/>
        <path class="jg-leaf-bk" d="M-10.0 150.0 C8.3 103.0 65.4 107.4 100.9 134.4 C74.3 170.1 20.5 190.1 -10.0 150.0 Z"/>
        <path class="jg-leaf-bk-vein" d="M17.7 146.1 L38.8 119.0"/>
        <path class="jg-leaf-bk-vein" d="M17.7 146.1 L45.4 166.3"/>
        <path class="jg-leaf-bk-vein" d="M45.5 142.2 L67.0 118.5"/>
        <path class="jg-leaf-bk-vein" d="M45.5 142.2 L72.7 159.0"/>
        <path class="jg-leaf-bk-vein" d="M73.2 138.3 L95.2 118.0"/>
        <path class="jg-leaf-bk-vein" d="M73.2 138.3 L100.0 151.8"/>
        <path class="jg-leaf-bk" d="M-16.0 300.0 C30.4 267.0 80.0 306.8 95.5 354.4 C48.5 371.5 -13.4 356.9 -16.0 300.0 Z"/>
        <path class="jg-leaf-bk-vein" d="M11.9 313.6 L48.3 301.2"/>
        <path class="jg-leaf-bk-vein" d="M11.9 313.6 L24.5 349.9"/>
        <path class="jg-leaf-bk-vein" d="M39.7 327.2 L74.4 318.2"/>
        <path class="jg-leaf-bk-vein" d="M39.7 327.2 L54.1 360.0"/>
        <path class="jg-leaf-bk-vein" d="M67.6 340.8 L100.6 335.3"/>
        <path class="jg-leaf-bk-vein" d="M67.6 340.8 L83.6 370.1"/>
        <path class="jg-leaf-bk" d="M334.0 70.0 C324.6 126.6 259.7 135.3 213.7 113.8 C235.1 67.7 290.4 32.6 334.0 70.0 Z"/>
        <path class="jg-leaf-bk-vein" d="M303.9 80.9 L286.7 116.1"/>
        <path class="jg-leaf-bk-vein" d="M303.9 80.9 L268.2 65.1"/>
        <path class="jg-leaf-bk-vein" d="M273.9 91.9 L255.3 123.4"/>
        <path class="jg-leaf-bk-vein" d="M273.9 91.9 L239.4 79.7"/>
        <path class="jg-leaf-bk-vein" d="M243.8 102.8 L224.0 130.7"/>
        <path class="jg-leaf-bk-vein" d="M243.8 102.8 L210.7 94.3"/>
        <path class="jg-leaf-bk" d="M338.0 210.0 C300.8 247.2 248.6 218.8 226.5 178.0 C266.8 155.1 326.1 158.7 338.0 210.0 Z"/>
        <path class="jg-leaf-bk-vein" d="M310.1 202.0 L278.7 219.0"/>
        <path class="jg-leaf-bk-vein" d="M310.1 202.0 L292.5 171.0"/>
        <path class="jg-leaf-bk-vein" d="M282.2 194.0 L251.8 207.5"/>
        <path class="jg-leaf-bk-vein" d="M282.2 194.0 L263.6 166.4"/>
        <path class="jg-leaf-bk-vein" d="M254.4 186.0 L224.9 196.1"/>
        <path class="jg-leaf-bk-vein" d="M254.4 186.0 L234.8 161.9"/>
        <path class="jg-leaf-bk" d="M330.0 350.0 C330.9 409.6 266.4 429.9 215.7 416.0 C229.0 365.1 278.9 319.5 330.0 350.0 Z"/>
        <path class="jg-leaf-bk-vein" d="M301.4 366.5 L290.4 405.5"/>
        <path class="jg-leaf-bk-vein" d="M301.4 366.5 L262.2 356.6"/>
        <path class="jg-leaf-bk-vein" d="M272.8 383.0 L259.8 418.5"/>
        <path class="jg-leaf-bk-vein" d="M272.8 383.0 L235.6 376.6"/>
        <path class="jg-leaf-bk-vein" d="M244.3 399.5 L229.2 431.5"/>
        <path class="jg-leaf-bk-vein" d="M244.3 399.5 L209.0 396.6"/>
      </g>
      <g class="jg-vines">
        <path class="jg-vine" d="M48.0 0.0 Q64.0 32.0 48.0 64.0 T48.0 128.0"/>
        <path class="jg-leaf-sm" d="M57.1 25.6 C62.3 21.1 68.8 25.2 71.2 30.7 C65.8 33.4 58.2 32.4 57.1 25.6 Z"/>
        <path class="jg-leaf-sm" d="M53.6 51.2 C52.6 58.0 45.0 59.0 39.5 56.3 C42.0 50.8 48.5 46.7 53.6 51.2 Z"/>
        <path class="jg-leaf-sm" d="M42.4 76.8 C47.5 72.3 54.0 76.4 56.5 81.9 C51.0 84.6 43.4 83.6 42.4 76.8 Z"/>
        <path class="jg-leaf-sm" d="M38.9 102.4 C37.8 109.2 30.2 110.2 24.8 107.5 C27.2 102.0 33.7 97.9 38.9 102.4 Z"/>
        <path class="jg-vine" d="M176.0 0.0 Q192.0 24.0 176.0 48.0 T176.0 96.0"/>
        <path class="jg-leaf-sm" d="M185.1 19.2 C190.3 14.7 196.8 18.8 199.2 24.3 C193.8 27.0 186.2 26.0 185.1 19.2 Z"/>
        <path class="jg-leaf-sm" d="M181.6 38.4 C180.6 45.2 173.0 46.2 167.5 43.5 C170.0 38.0 176.5 33.9 181.6 38.4 Z"/>
        <path class="jg-leaf-sm" d="M170.4 57.6 C175.5 53.1 182.0 57.2 184.5 62.7 C179.0 65.4 171.4 64.4 170.4 57.6 Z"/>
        <path class="jg-leaf-sm" d="M166.9 76.8 C165.8 83.6 158.2 84.6 152.8 81.9 C155.2 76.4 161.7 72.3 166.9 76.8 Z"/>
        <path class="jg-vine" d="M268.0 0.0 Q284.0 37.5 268.0 75.0 T268.0 150.0"/>
        <path class="jg-leaf-sm" d="M277.1 30.0 C282.3 25.5 288.8 29.6 291.2 35.1 C285.8 37.8 278.2 36.8 277.1 30.0 Z"/>
        <path class="jg-leaf-sm" d="M273.6 60.0 C272.6 66.8 265.0 67.8 259.5 65.1 C262.0 59.6 268.5 55.5 273.6 60.0 Z"/>
        <path class="jg-leaf-sm" d="M262.4 90.0 C267.5 85.5 274.0 89.6 276.5 95.1 C271.0 97.8 263.4 96.8 262.4 90.0 Z"/>
        <path class="jg-leaf-sm" d="M258.9 120.0 C257.8 126.8 250.2 127.8 244.8 125.1 C247.2 119.6 253.7 115.5 258.9 120.0 Z"/>
        <path class="jg-vine" d="M116.0 0.0 Q132.0 17.5 116.0 35.0 T116.0 70.0"/>
        <path class="jg-leaf-sm" d="M125.1 14.0 C130.3 9.5 136.8 13.6 139.2 19.1 C133.8 21.8 126.2 20.8 125.1 14.0 Z"/>
        <path class="jg-leaf-sm" d="M121.6 28.0 C120.6 34.8 113.0 35.8 107.5 33.1 C110.0 27.6 116.5 23.5 121.6 28.0 Z"/>
        <path class="jg-leaf-sm" d="M110.4 42.0 C115.5 37.5 122.0 41.6 124.5 47.1 C119.0 49.8 111.4 48.8 110.4 42.0 Z"/>
        <path class="jg-leaf-sm" d="M106.9 56.0 C105.8 62.8 98.2 63.8 92.8 61.1 C95.2 55.6 101.7 51.5 106.9 56.0 Z"/>
      </g>
      <g class="jg-tier">
        <path class="jg-leaf" d="M6.0 112.0 C14.8 74.1 58.8 71.4 88.7 88.3 C72.3 118.5 33.6 139.5 6.0 112.0 Z"/>
        <path class="jg-leaf-vein" d="M22.5 107.3 L35.5 83.8"/>
        <path class="jg-leaf-vein" d="M22.5 107.3 L46.0 120.3"/>
        <path class="jg-leaf-vein" d="M39.1 102.5 L52.6 81.1"/>
        <path class="jg-leaf-vein" d="M39.1 102.5 L61.9 113.5"/>
        <path class="jg-leaf-vein" d="M55.6 97.8 L69.7 78.4"/>
        <path class="jg-leaf-vein" d="M55.6 97.8 L77.9 106.7"/>
        <path class="jg-leaf-vein" d="M72.1 93.0 L86.8 75.7"/>
        <path class="jg-leaf-vein" d="M72.1 93.0 L93.8 100.0"/>
        <path class="jg-leaf" d="M250.0 104.0 C220.6 133.0 179.2 110.7 161.6 78.6 C193.5 60.8 240.5 63.8 250.0 104.0 Z"/>
        <path class="jg-leaf-vein" d="M232.3 98.9 L207.3 112.7"/>
        <path class="jg-leaf-vein" d="M232.3 98.9 L218.4 74.0"/>
        <path class="jg-leaf-vein" d="M214.6 93.9 L190.2 105.4"/>
        <path class="jg-leaf-vein" d="M214.6 93.9 L200.1 71.1"/>
        <path class="jg-leaf-vein" d="M196.9 88.8 L173.2 98.2"/>
        <path class="jg-leaf-vein" d="M196.9 88.8 L181.8 68.2"/>
        <path class="jg-leaf-vein" d="M179.3 83.7 L156.1 91.0"/>
        <path class="jg-leaf-vein" d="M179.3 83.7 L163.5 65.3"/>
        <rect class="jg-branch" x="0" y="120" width="250" height="13" rx="4"/>

        <path class="jg-blue-d" d="M240 96q34 6 44 30l-42-2z"/>
        <ellipse class="jg-blue" cx="214" cy="82" rx="33" ry="38"/>
        <path class="jg-white" d="M190 74q-10 24-2 44h34q-14-22-16-46z"/>
        <ellipse class="jg-blue-d" cx="228" cy="88" rx="17" ry="23"/>
        <circle class="jg-blue" cx="194" cy="62" r="26"/>

        <path class="jg-orange"   d="M172 46q-34-4-62 12-8 5-6 14l68-6z"/>
        <path class="jg-orange-d" d="M174 66l-70 6q6 12 26 14 24 2 44-8z"/>
        <path class="jg-ink"      d="M110 56q-6 4-6 10l14-1q0-6 4-10z"/>

        <circle class="jg-white" cx="188" cy="55" r="9"/>
        <circle class="jg-ink"   cx="189" cy="55" r="4.4"/>

        <path class="jg-orange-stroke" d="M198 118v10M198 128h-7M198 128h7"/>
        <path class="jg-orange-stroke" d="M220 118v10M220 128h-7M220 128h7"/>
      </g>
      <g class="jg-tier">
        <path class="jg-leaf" d="M18.0 232.0 C27.3 196.7 68.3 195.7 95.6 212.6 C79.5 240.4 42.8 258.8 18.0 232.0 Z"/>
        <path class="jg-leaf-vein" d="M33.5 228.1 L46.3 206.5"/>
        <path class="jg-leaf-vein" d="M33.5 228.1 L54.9 241.2"/>
        <path class="jg-leaf-vein" d="M49.0 224.3 L62.3 204.6"/>
        <path class="jg-leaf-vein" d="M49.0 224.3 L70.0 235.4"/>
        <path class="jg-leaf-vein" d="M64.6 220.4 L78.3 202.7"/>
        <path class="jg-leaf-vein" d="M64.6 220.4 L85.0 229.6"/>
        <path class="jg-leaf-vein" d="M80.1 216.5 L94.3 200.7"/>
        <path class="jg-leaf-vein" d="M80.1 216.5 L100.1 223.8"/>
        <path class="jg-leaf" d="M300.0 240.0 C276.6 267.7 240.3 250.9 223.7 223.8 C249.9 205.8 289.9 205.1 300.0 240.0 Z"/>
        <path class="jg-leaf-vein" d="M284.7 236.8 L264.2 250.7"/>
        <path class="jg-leaf-vein" d="M284.7 236.8 L271.7 215.7"/>
        <path class="jg-leaf-vein" d="M269.5 233.5 L249.4 245.5"/>
        <path class="jg-leaf-vein" d="M269.5 233.5 L256.0 214.4"/>
        <path class="jg-leaf-vein" d="M254.2 230.3 L234.6 240.3"/>
        <path class="jg-leaf-vein" d="M254.2 230.3 L240.3 213.1"/>
        <path class="jg-leaf-vein" d="M239.0 227.0 L219.7 235.1"/>
        <path class="jg-leaf-vein" d="M239.0 227.0 L224.7 211.8"/>
        <rect class="jg-branch" x="56" y="246" width="264" height="13" rx="4"/>

        <path class="jg-blue-stroke" d="M116 244q-32 2-34 22t22 24q14-1 15-13"/>
        <path class="jg-blue" d="M112 246q-14-26 6-40 22-15 42 2 16 14 6 38z"/>
        <circle class="jg-blue"   cx="140" cy="196" r="27"/>
        <circle class="jg-blue"   cx="116" cy="190" r="10"/>
        <circle class="jg-blue"   cx="164" cy="190" r="10"/>
        <circle class="jg-orange" cx="116" cy="190" r="5.5"/>
        <circle class="jg-orange" cx="164" cy="190" r="5.5"/>
        <path class="jg-orange" d="M140 176a23 23 0 0 1 20 26 22 22 0 0 1-40 0 23 23 0 0 1 20-26z"/>
        <ellipse class="jg-orange-d" cx="140" cy="208" rx="13" ry="9"/>
        <circle class="jg-white" cx="132" cy="193" r="6"/>
        <circle class="jg-white" cx="148" cy="193" r="6"/>
        <circle class="jg-ink"   cx="133" cy="193" r="3"/>
        <circle class="jg-ink"   cx="147" cy="193" r="3"/>
        <circle class="jg-ink"   cx="136" cy="205" r="1.8"/>
        <circle class="jg-ink"   cx="144" cy="205" r="1.8"/>
        <path class="jg-ink-stroke" d="M133 212q7 6 14 0"/>

        <path class="jg-leaf-d" d="M228 246q4-30 25-30t25 30z"/>
        <circle class="jg-leaf-d" cx="238" cy="219" r="9"/>
        <circle class="jg-leaf-d" cx="268" cy="219" r="9"/>
        <circle class="jg-white"  cx="238" cy="218" r="5.5"/>
        <circle class="jg-white"  cx="268" cy="218" r="5.5"/>
        <circle class="jg-ink"    cx="239" cy="218" r="2.6"/>
        <circle class="jg-ink"    cx="267" cy="218" r="2.6"/>
        <path class="jg-ink-stroke" d="M243 234q10 7 20 0"/>
        <path class="jg-leaf-d" d="M224 246q-10 2-12 8h16z"/>
        <path class="jg-leaf-d" d="M282 246q10 2 12 8h-16z"/>

      </g>
      <g class="jg-tier">
        <path class="jg-leaf" d="M282.0 352.0 C253.9 378.6 216.9 356.6 202.1 326.0 C232.0 310.0 274.9 314.0 282.0 352.0 Z"/>
        <path class="jg-leaf-vein" d="M266.0 346.8 L242.6 359.1"/>
        <path class="jg-leaf-vein" d="M266.0 346.8 L254.3 323.1"/>
        <path class="jg-leaf-vein" d="M250.0 341.6 L227.3 351.9"/>
        <path class="jg-leaf-vein" d="M250.0 341.6 L237.7 319.9"/>
        <path class="jg-leaf-vein" d="M234.1 336.4 L211.9 344.7"/>
        <path class="jg-leaf-vein" d="M234.1 336.4 L221.1 316.7"/>
        <path class="jg-leaf-vein" d="M218.1 331.2 L196.6 337.6"/>
        <path class="jg-leaf-vein" d="M218.1 331.2 L204.4 313.5"/>
        <path class="jg-leaf" d="M6.0 344.0 C16.1 311.2 55.0 311.5 80.3 328.2 C64.0 353.8 28.6 369.9 6.0 344.0 Z"/>
        <path class="jg-leaf-vein" d="M20.9 340.8 L33.7 321.0"/>
        <path class="jg-leaf-vein" d="M20.9 340.8 L40.7 353.7"/>
        <path class="jg-leaf-vein" d="M35.7 337.7 L49.0 319.6"/>
        <path class="jg-leaf-vein" d="M35.7 337.7 L55.2 348.8"/>
        <path class="jg-leaf-vein" d="M50.6 334.5 L64.3 318.3"/>
        <path class="jg-leaf-vein" d="M50.6 334.5 L69.7 343.8"/>
        <path class="jg-leaf-vein" d="M65.5 331.4 L79.5 317.0"/>
        <path class="jg-leaf-vein" d="M65.5 331.4 L84.1 338.8"/>
        <rect class="jg-branch" x="0" y="360" width="300" height="13" rx="4"/>

        <path class="jg-snake" d="M58 360q-22-4-22-18t22-14 24 14-24 18q-26 4-26 20t26 16 28-16"/>
        <circle class="jg-snake-h" cx="92" cy="382" r="12"/>
        <circle class="jg-white" cx="96" cy="378" r="4"/>
        <circle class="jg-ink"   cx="97" cy="378" r="2"/>
        <path class="jg-orange-stroke" d="M104 384q8 2 12 8"/>

        <path class="jg-cable" d="M206 373q4 22-6 34"/>
        <rect class="jg-pad" x="168" y="404" width="62" height="34" rx="15"/>
        <circle class="jg-white" cx="214" cy="421" r="7"/>
        <rect class="jg-white" x="178" y="419" width="16" height="4.5" rx="2.2"/>
        <rect class="jg-white" x="183.8" y="413.2" width="4.5" height="16" rx="2.2"/>

      </g>
      <g class="jg-flutter">
        <path class="jg-orange"   d="M64 178C46 160 34 176 44 188c8 6 18 0 20-6z"/>
        <path class="jg-orange"   d="M64 178c18-18 30-2 20 10-8 6-18 0-20-6z"/>
        <path class="jg-orange-d" d="M64 184c-12 6-16 18-6 22 5 1 6-10 6-18z"/>
        <path class="jg-orange-d" d="M64 184c12 6 16 18 6 22-5 1-6-10-6-18z"/>
        <rect class="jg-ink" x="62.6" y="170" width="2.8" height="30" rx="1.4"/>
        <path class="jg-ink-stroke" d="M64 172q-6-8-11-9M64 172q6-8 11-9"/>
      </g>
      </svg>
    </div>

  </div>
</section>

<div class="jungle-countdown-wrap" id="jungle-countdown-wrap">
  <p class="jungle-countdown-head" id="jungle-countdown-head">Time Remaining Until Doors Open</p>
  <div class="jungle-countdown" id="jungle-countdown" aria-label="Countdown to Safari-LAN">
    <div class="jungle-countdown-unit">
      <span class="jungle-countdown-num" data-unit="days">--</span>
      <span class="jungle-countdown-label">Days</span>
    </div>
    <div class="jungle-countdown-unit">
      <span class="jungle-countdown-num" data-unit="hours">--</span>
      <span class="jungle-countdown-label">Hours</span>
    </div>
    <div class="jungle-countdown-unit">
      <span class="jungle-countdown-num" data-unit="minutes">--</span>
      <span class="jungle-countdown-label">Minutes</span>
    </div>
    <div class="jungle-countdown-unit">
      <span class="jungle-countdown-num" data-unit="seconds">--</span>
      <span class="jungle-countdown-label">Seconds</span>
    </div>
  </div>
</div>

<div class="jungle-facts">
  <table class="jungle-table">
    <caption>Vital Statistics</caption>
    <tbody>
      {% for fact in page.facts %}
      <tr>
        <th scope="row">
          <span class="jungle-th-inner">
            <svg class="jungle-icon jungle-fact-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#{{ fact.icon }}"/></svg>
            {{ fact.label }}
          </span>
        </th>
        <td>{{ fact.value }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<section class="jungle-panel" id="schedule">
  <div class="jungle-panel-body">
    <h2 class="jungle-panel-title">
      <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-leaf"/></svg>
      The Schedule
    </h2>
    <p class="jungle-panel-sub">{{ page.schedule_note }}</p>

    <div class="jungle-screen-wrap" id="schedule-view">
      {% if schedule_exists %}
      <a class="jungle-screen" href="#schedule-zoom">
        <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" class="jungle-schedule-img">
        <div class="jungle-noimg">
          <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-leaf"/></svg>
          <strong>Board Not Found</strong>
          <span>The full running order is written out below.</span>
        </div>
      </a>
      <div class="jungle-screen-meta">
        <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">Open full size &#8599;</a>
      </div>
      {% else %}
      <div class="jungle-screen is-missing">
        <div class="jungle-noimg">
          <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-leaf"/></svg>
          <strong>Board Not Found</strong>
          <span>Drop it at <code>{{ page.schedule_image }}</code>. The full running order is written out below either way.</span>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

{% if schedule_exists %}
<div class="jungle-zoom" id="schedule-zoom">
  <a class="jungle-zoom-bg" href="#schedule-view" aria-label="Close"></a>
  <div class="jungle-zoom-frame">
    <a class="jungle-zoom-close" href="#schedule-view" aria-label="Close">&#10005;</a>
    <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}">
  </div>
</div>
{% endif %}

<section class="jungle-panel" id="running-order">
  <div class="jungle-panel-body">
    <h2 class="jungle-panel-title">
      <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-clock"/></svg>
      Running Order
    </h2>
    <p class="jungle-panel-sub">{{ page.sessions.size }} days &middot; as posted for the weekend</p>

    <div class="jungle-days">
      {% for session in page.sessions %}
      <div class="jungle-day jungle-reveal">
        <h3 class="jungle-day-name">{{ session.name }}</h3>
        <ul class="jungle-slots">
          {% for ev in session.events %}
          <li class="jungle-slot">
            <span class="jungle-slot-time">{{ ev.time }}</span>
            <span class="jungle-slot-name">
              {{ ev.name }}
              {% if ev.note %}<span class="jungle-slot-note">{{ ev.note }}</span>{% endif %}
            </span>
            <span class="jungle-slot-tags">
              {% if ev.free %}<span class="jungle-tag jungle-tag--free">FREE</span>{% endif %}
              {% if ev.contest %}<span class="jungle-tag jungle-tag--contest">C</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="jungle-legend">
      {% for item in page.legend %}
      <p class="jungle-legend-row">
        <span class="jungle-tag jungle-tag--{{ item.kind }}">{{ item.tag }}</span>
        <span>{{ item.body }}</span>
      </p>
      {% endfor %}
      <p class="jungle-legend-note">{{ page.legend_note }}</p>
    </div>
  </div>
</section>

<section class="jungle-panel" id="kit">
  <div class="jungle-panel-body">
    <h2 class="jungle-panel-title">
      <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-bag"/></svg>
      Pack Your Bag
    </h2>
    <p class="jungle-panel-sub">Power and network are ours to supply</p>
    <ul class="jungle-kit">
      {% for item in page.kit %}
      <li class="jungle-kit-item">
        <span class="jungle-kit-check" aria-hidden="true"></span>
        {{ item }}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="jungle-panel" id="faq">
  <div class="jungle-panel-body">
    <h2 class="jungle-panel-title">
      <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-help"/></svg>
      Frequently Asked Questions
    </h2>
    <p class="jungle-panel-sub">Answered once, so you need not ask twice</p>
    <div class="jungle-faq">
      {% for entry in page.faq %}
      <details class="jungle-faq-item">
        <summary class="jungle-faq-q">{{ entry.q }}</summary>
        <p class="jungle-faq-a">{{ entry.a }}</p>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<section class="jungle-panel" id="sponsors">
  <div class="jungle-panel-body">
    <h2 class="jungle-panel-title">
      <svg class="jungle-icon" viewBox="0 0 32 32" aria-hidden="true"><use href="#ico-star"/></svg>
      This Page Is Sponsored By
    </h2>
    <p class="jungle-panel-sub">The weekend runs on their help</p>
    <div class="jungle-sponsors">
      {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
      <div class="jungle-sponsor jungle-reveal">
        <div class="jungle-sponsor-logo">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}">
        </div>
        <div class="jungle-sponsor-name">{{ sponsor.name }}</div>
        <div class="jungle-sponsor-tier">{{ tier[0] }}</div>
        <div class="jungle-sponsor-links">
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

<div class="jungle-savanna" aria-hidden="true">
  <svg viewBox="0 0 1200 200" focusable="false">
      <rect class="sv-sky" x="0" y="0" width="1200" height="200"/>
      <circle class="sv-sun" cx="876" cy="112" r="74"/>
      <rect class="sv-ground" x="0" y="182" width="1200" height="18"/>
      <path class="sv-ink" d="M161.0 182 l3 -46 l-22 -18 l7 3 l16 13 h6 l18 -15 l7 4 l-20 20 l3 39 z"/>
      <path class="sv-ink" d="M94.0 120 c0 -26 0.1 -38 74 -38 c40 0 74 12 74 38 c-34 -8 -40 -10 -74 -3.5 c-40 0 -40 1 -74 10 z"/>
      <path class="sv-ink" d="M1046.82 182 l2.22 -46 l-16.28 -18 l5.18 3 l11.84 13 h4.44 l13.32 -15 l5.18 4 l-14.8 20 l2.22 39 z"/>
      <path class="sv-ink" d="M997.24 120 c0 -26 0.074 -38 54.76 -38 c29.6 0 54.76 12 54.76 38 c-25.16 -8 -29.6 -10 -54.76 -3.5 c-29.6 0 -29.6 1 -54.76 10 z"/>
      <path class="sv-ink" d="M552.92 182 l1.32 -46 l-9.68 -18 l3.08 3 l7.04 13 h2.64 l7.92 -15 l3.08 4 l-8.8 20 l1.32 39 z"/>
      <path class="sv-ink" d="M523.44 120 c0 -26 0.044 -38 32.56 -38 c17.6 0 32.56 12 32.56 38 c-14.96 -8 -17.6 -10 -32.56 -3.5 c-17.6 0 -17.6 1 -32.56 10 z"/>
      <path class="sv-ink" d="M683.9 182 l0.9 -46 l-6.6 -18 l2.1 3 l4.8 13 h1.8 l5.4 -15 l2.1 4 l-6 20 l0.9 39 z"/>
      <path class="sv-ink" d="M663.8 120 c0 -26 0.03 -38 22.2 -38 c12 0 22.2 12 22.2 38 c-10.2 -8 -12 -10 -22.2 -3.5 c-12 0 -12 1 -22.2 10 z"/>
      <g class="sv-ink">
        <rect x="372" y="150" width="15" height="32" rx="2"/>
        <rect x="396" y="152" width="15" height="30" rx="2"/>
        <rect x="420" y="150" width="15" height="32" rx="2"/>
        <rect x="440" y="152" width="13" height="30" rx="2"/>
        <ellipse cx="404" cy="134" rx="48" ry="33"/>
        <circle cx="352" cy="132" r="27"/>
        <ellipse cx="362" cy="128" rx="21" ry="25"/>
        <path d="M338 142q-22 6-24 26t12 18 10-14-4-18z"/>
        <path d="M340 158q-10 4-9 14" stroke-width="5"/>
        <path class="sv-line" d="M452 126q11 5 12 19"/>
      </g>
      <g class="sv-ink">
        <rect x="750" y="146" width="10" height="36" rx="2"/>
        <rect x="768" y="148" width="10" height="34" rx="2"/>
        <rect x="786" y="146" width="10" height="36" rx="2"/>
        <rect x="800" y="148" width="10" height="34" rx="2"/>
        <ellipse cx="780" cy="138" rx="36" ry="24"/>
        <path d="M798 128 l22 -62 14 4 -18 66z"/>
        <path d="M818 62q18-8 27 3-12 11-28 6z"/>
        <path class="sv-line" d="M820 60l-3-11M828 60l3-11"/>
        <path class="sv-line" d="M746 126q-12 6-10 20"/>
      </g>
      <g class="sv-line">
        <path d="M604 56q10-9 18 0M622 56q10-9 18 0"/>
        <path d="M672 34q7-7 13 0M685 34q7-7 13 0"/>
      </g>
  </svg>
</div>

<footer class="jungle-footer">
  <div class="jungle-footer-cards">
    <div class="jungle-footer-card">
      {% for social in site.data.pong_info.socials %}
      {% if social.type == "discord" or social.type == "facebook" or social.type == "instagram" %}
      <a href="{{ social.url }}" target="_blank" rel="noopener">
        <i class="{{ site.data.socials[social.type].icon }}" aria-hidden="true"></i>
        <span>{{ social.url | remove: "https://" | remove: "www." | split: "/" | join: "/" }}</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <div class="jungle-footer-card">
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
  <p class="jungle-footer-sig">&copy; PONG &middot; The People's Organization of Network Gaming</p>
</footer>
