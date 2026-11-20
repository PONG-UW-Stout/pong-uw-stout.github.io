---
# ===========================================================================
#  EXAMPLE LAN - a reference template, not a real draft.
#
#  Copy this file to _lans/Some-LAN.md, delete the comments and the
#  `published: false` below, and fill it in. The filename becomes the url:
#  _lans/Candy-LAN.md publishes at /lans/Candy-LAN/, so name it the way you
#  want it to read.
#
#  A LAN is not an event. Events (_events/) share one layout and differ only
#  in their content; every LAN is a bespoke page with its own poster, its own
#  stylesheet and usually its own script. So this file documents two things:
#
#    1. THE SHARED KEYS, below, which every LAN carries and which the LANs
#       index and the home page read. Keep these names exactly.
#    2. THE HERO KEYS, near the bottom, which are different on every LAN
#       because every poster is different. Those are yours to invent.
#
#  Only `title`, `start_date`, `end_date` and `description` are required.
#  Everything else is read by the page's own body, so a key nothing refers to
#  is simply unused rather than broken.
# ===========================================================================

# Keeps this file out of the build. DELETE THIS LINE in a real LAN.
published: false

# Also only here, and also to be deleted. Jekyll builds an excerpt from the
# first paragraph of the body, and the body here opens with Liquid, which it
# then warns has "modified" the excerpt on every `jekyll build --drafts`.
# Setting the separator to nothing switches excerpt generation off for this
# one file. A real LAN wants neither line.
excerpt_separator: ""

# ---------------------------------------------------------------------------
#  Required. These four are what /lans/ and the home page read, so they are
#  the only keys another page in the site depends on.
# ---------------------------------------------------------------------------

title: Example LAN

# YYYY-MM-DD. Must parse, or the whole site build fails - not just this page.
# The index sorts on these and the home page picks the next LAN from them, so
# they have to be the real dates even if the body prints them in prose.
start_date: 2026-04-10
end_date: 2026-04-12

# A sentence or two. The card at /lans/ and the Discord link preview. The
# house shape is "Name: what it is, where, how long", then what is on offer.
description: >-
  Example LAN: PONG's 48-hour LAN in the MSC Great Hall and Ballrooms.
  Games, tournaments, prizes, and somewhere to put your tower for a weekend.

# ---------------------------------------------------------------------------
#  Page furniture. Shared names, used by most LAN bodies.
# ---------------------------------------------------------------------------

# The scrolling marquee across the top. Written in caps with a middot between
# clauses and a trailing middot, because it loops - without the last separator
# the end of the sentence runs straight into the start of it.
ticker: "EXAMPLE LAN · 48 HOURS OF GAMING · APRIL 10-12 · MSC GREAT HALL & BALLROOMS · FREE ENTRY · GAMES, TOURNAMENTS, PRIZES ·"

# The big line on the poster and the one under it. Some LANs split these into
# headline_a / headline_b, or tagline_a / tagline_b / tagline_c, when the
# design sets each word differently - that is a layout decision, so it lives
# with the LAN, not here.
headline: Example LAN
tagline: "Games, Tournaments, Prizes!"

# The dates as the poster prints them, which is usually not how `start_date`
# formats. Kept separate so the design can say "APRIL 10-12" while the two
# keys above stay machine-readable.
dates_display: "APRIL 10-12"

# The stats strip. `icon` is the id of a <symbol> in the sprite that the LAN's
# own body draws - so the available names are whatever that page defines, and
# the ones below are the set most LANs settle on.
facts:
  - icon: ico-cal
    label: Dates
    value: "April 10-12, 2026"
  - icon: ico-monitor
    label: Venue
    value: "MSC Great Hall & Ballrooms"
  - icon: ico-clock
    label: Duration
    value: "48 Hours"
  - icon: ico-ticket
    label: Entry Fee
    value: "Free"
  - icon: ico-network
    label: Network
    value: "Provided"

# Turns on the "Reserve Your Seat" button. Left empty - the key present with
# no value - when there is nothing to sign up to, which is the normal case:
# the bodies test `page.registration_url and page.registration_url != ""`.
registration_url:

# ---------------------------------------------------------------------------
#  The schedule board.
#
#  `schedule_image` is the poster of the running order. The bodies check it
#  actually exists before offering the zoom and full-size links:
#
#    {% assign schedule_exists = false %}
#    {% for f in site.static_files %}{% if f.path == page.schedule_image %}...
#
#  so a LAN with no board yet can leave these three out and the page will say
#  so rather than linking a 404. Classy-LAN ships without one on purpose.
#
#  `schedule_alt` is long on purpose. It is the only description of the board
#  a screen reader gets, and the image is the densest thing on the page.
# ---------------------------------------------------------------------------

schedule_image: /assets/images/lan_schedules/example-lan_schedule.png
schedule_alt: >-
  The Example LAN weekend schedule: three columns of events colour-coded by
  day, each flagged free to play and/or competitive. The full running order
  follows below.
schedule_note: Times shift as the weekend wears on, so the board in the hall is always the source of truth.

# ---------------------------------------------------------------------------
#  The running order, transcribed from the schedule graphic.
#
#  `free` is the green FREE badge and `contest` the red C. A cell with no
#  badge on the poster simply omits the key - do not write `free: false`.
#  Both mirror the badges on the graphic, so if the graphic is redrawn these
#  have to be changed to match.
#
#  Times run in order WITHIN a day, which means the small hours sit at the top
#  of the day they technically belong to. Some posters file a midnight event
#  under the previous day instead, where the people still awake for it think
#  it belongs - follow the poster, it is the thing people will be holding.
# ---------------------------------------------------------------------------

sessions:
  - name: Friday
    events:
      - time: "5:00 PM"
        name: Party Games
        free: true
      - time: "7:00 PM"
        name: An Example Tournament
        free: true
        contest: true
      - time: "9:00 PM"
        name: A Game Someone Has To Own

  - name: Saturday
    events:
      - time: "12:00 AM"
        name: Jackbox Games
        free: true
      - time: "2:30 PM"
        name: Prize Drawing
        free: true

# The things running all weekend rather than at a time. A single entry on most
# boards; Candy LAN had two, so write it as a list if yours does.
all_lan:
  name: Minecraft Bingo
  host: "mc.ponglan.net"
  body: Running the whole weekend on the PONG Minecraft server. Drop in whenever, cross off what you can.

# ---------------------------------------------------------------------------
#  The legend, taken STRAIGHT off the poster rather than paraphrased. This is
#  the part people actually need to read, and every board words it slightly
#  differently - Expo-LAN is the only one that says what a casual event pays
#  out, and the example in `legend_note` is each board's own game. Copy what
#  is printed, not what the last LAN said.
# ---------------------------------------------------------------------------

legend:
  - tag: C
    kind: contest
    body: "Marks a competitive event. Winners will receive 3 tickets, second place will receive 2 tickets, and all other participants will receive 1 ticket."
  - tag: FREE
    kind: free
    body: "Marks an event that is free to buy or play. All PONG events are free to participate in."
legend_note: "Example: you can play in a PEAK event for free, but PEAK is not a free game."

# ---------------------------------------------------------------------------
#  What to bring, and the questions that get asked every single time. Mostly
#  the same from LAN to LAN - copy the last one and adjust - but they live per
#  LAN so a weekend with a different venue or a different rule can say so.
# ---------------------------------------------------------------------------

kit:
  - Your PC or console, with all its peripherals and every cable they need
  - A monitor, plus the power brick that everyone forgets
  - Headphones, because the hall gets loud
  - Food and water for the stretches between runs
  - A pillow and something to sleep in, because 48 hours catches up with you
  - A controller, if you want a say in how Smash and Mario Kart go
  - Deodorant puh-lease. Forty-eight hours is a long time in one room.

faq:
  - q: Do I need to be a UW-Stout student?
    a: No. PONG is open to students, alumni, and friends. Bring whoever you would play with anyway.
  - q: Do I have to stay the full 48 hours?
    a: Not at all. Come for one event if that is all you have. Some people never leave. Both are fine.
  - q: Do I need to bring ethernet or a power strip?
    a: No. We supply the network and the power at every table. Just bring your rig.
  - q: How do tickets and the prize drawing work?
    a: Competitive events pay out tickets. Three to the winner, two to second place, and one to everyone else who takes part.
  - q: I have never been to a LAN before. Is that okay?
    a: Completely. Show up, find a table, say hi. Ask in the Discord beforehand if you want advice on what to bring.

# ---------------------------------------------------------------------------
#  THE HERO KEYS.
#
#  Everything above is shared. This part is not: each LAN rebuilds its poster
#  as live markup, and the keys it needs are whatever that design is made of.
#  Invent the names that describe YOUR poster, and the body of the file is the
#  only thing that reads them. Past LANs, as a sense of the range:
#
#    Mil-LAN-ium  is a Windows desktop, so it has dialog_title, when_label /
#                 when_value, where_label / where_value for the modal dialog;
#                 blurb_lead / blurb_body / blurb_free for the window behind
#                 it; and desktop_icons, the shortcuts down the left edge.
#    Spooky-LAN   is a television and a VHS tape, so it has keys for the
#                 screen and keys for the handwriting on the label.
#    LAN-tasy     is a summons, so its keys are the herald, the seal, the
#                 summons itself and the notes from the keepers.
#    LAN-iversary is a 25th birthday, so it has a celebration_banner ribbon, a
#                 milestone rosette, a system-tray balloon tip, and a static
#                 guestbook written by the exec board (a real one would need a
#                 backend; the Discord link under it is where signing happens).
#    Candy-LAN    is simpler - a blue wrapper and a white one with the details
#                 printed down its side - plus the sweets scattered over the
#                 page, each a sprite symbol and the colour to draw it in.
#
#  The two below are the common denominator: most posters have one sentence
#  selling the weekend and a when/where pair somewhere on them.
# ---------------------------------------------------------------------------

blurb: "Join us in the MSC for a 48-hour gaming event!"
when_label: When
when_value: "4 PM Friday, April 10th to 4 PM Sunday, April 12th"
where_label: Where
where_value: "MSC Great Hall & Ballrooms"
---

{%- comment -%}
  The body of a LAN is the page. _layouts/lan.md gives you a title, the dates
  and a #post-container, and nothing else - everything you see on a real LAN
  page is written here, in this file, reading the front matter above.

  The three things every LAN body does, in this order:
{%- endcomment -%}

{%- comment -%}
  1. Its own stylesheet, linked from the body rather than the head, so it
     loads after assets/css/pong.css and wins. One file per LAN in
     assets/css/, compiled from a partial in _sass/pong/lans/.
{%- endcomment -%}
<link rel="stylesheet" href="{{ '/assets/css/example-lan.css' | relative_url }}">

{%- comment -%}
  2. Values pulled out of _data/, so a link that changes changes in one place.
{%- endcomment -%}
{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{%- comment -%}
  Does the schedule image actually exist? site.static_files is every file
  Jekyll copies through untouched, so this is how a Liquid template asks
  whether a path is really on disk. Only offer the zoom and full-size links
  when it is - the alternative is linking people to a 404.
{%- endcomment -%}
{% assign schedule_exists = false %}
{% for f in site.static_files %}{% if f.path == page.schedule_image %}{% assign schedule_exists = true %}{% endif %}{% endfor %}

{%- comment -%}
  3. Its own script, if the page animates. Every LAN's reveal-on-scroll uses
     an IntersectionObserver that adds .is-visible to lift an element from
     opacity 0 - which means with scripting off the page is a hero and then a
     blank column. _includes/head.html carries a <noscript> net that unhides
     every [class*="-reveal"] for exactly this reason, so name your animated
     sections with a `-reveal` suffix and it covers yours too.
{%- endcomment -%}
<script src="{{ '/assets/js/lans/example-lan.js' | relative_url }}" defer></script>

{%- comment -%}
  Then the page itself: a sprite of <symbol>s drawn once and referenced with
  <use> (so the page pulls in no icon font and no image files), the hero, the
  facts strip, the schedule, the running order, the kit list and the FAQ.

  Read a finished one rather than starting from nothing. _lans/Candy-LAN.md is
  the most straightforward, _lans/Mil-LAN-ium.md the most elaborate.
{%- endcomment -%}
