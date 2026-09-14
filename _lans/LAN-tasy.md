---
title: LAN-tasy
start_date: 2026-09-18
end_date: 2026-09-20
description: A 48-hour LAN party in the Great Hall of the Memorial Student Center, with tournaments, a costume contest, prize raffles, party games, and absolutely no sleep.

# --- the herald ------------------------------------------------------------
proclamation: "Hear ye. LAN-tasy, the 18th through the 20th day of September, 2026 · The Great Hall of the Memorial Student Center · XLVIII hours without rest · The theme is Fantasy & Renaissance · Free to attend, free to enter · Network and power are provided, so bring only your rig · Claim your seat at lanreg.org"

# --- who sealed the summons ------------------------------------------------
sealed_by: The PONG Exec Board
sealer_rank: Keepers of the Hall
sealer_stats: |
  Summons issued: 4,812
  Chartered: 1998
  Seat: The Great Hall
sealed_on: The ninth day of September, in the year 2026

# --- the summons -----------------------------------------------------------
subject: "A Summons to LAN-tasy: Gather Your Party, Two Days, One Hall"
blurb: >-
  LAN-tasy is PONG's fall LAN party: two straight days of tournaments, party
  games, prize raffles and free play in the Great Hall of the Memorial Student
  Center. Haul in your rig, claim a table, plug into the network, and see how
  long you hold out before the respawn timer on your sleep schedule runs out.
blurb_two: >-
  No experience required and no party composition enforced. Show up with
  whatever you play on, find a seat, and say hi to whoever is unlucky enough to
  be sitting next to you for the next two days.
sig: "'We came for the tournaments. We stayed because it was 4 AM and nobody would drive us home.'"

# --- vital statistics ------------------------------------------------------
theme: Fantasy & Renaissance
location: The Great Hall, Memorial Student Center · UW-Stout
doors: 4:00 PM Friday until 4:00 PM Sunday
duration: 48 hours, uninterrupted
setup: From noon on Friday. Lend a hand and earn an extra raffle ticket
price: Free. No toll at this gate
registration_url: https://www.lanreg.org/pong/ponglantasy2026

# --- the centrepiece -------------------------------------------------------
schedule_image: /assets/images/lan_schedules/lan-tasy_schedule.png
schedule_alt: >-
  The LAN-tasy weekend schedule, laid out as a grid of event cards colour-coded
  by day, each marked as free to play and/or as a competitive event. The full
  running order is written out beneath this image.
schedule_note: Times shift as the weekend wears on, so the board in the hall is always the source of truth.

# --- the running order, transcribed from the schedule graphic --------------
# `free` marks an event that costs nothing to buy or play; `contest` marks a
# competitive event that pays out raffle tickets. Both mirror the badges on
# the graphic above, so if you redraw the graphic, change these to match.
schedule:
  - day: Friday, September 18
    events:
      - { time: "12:00 PM", name: "Setup begins", note: "Lend a hand, earn an extra raffle ticket" }
      - { time: "4:00 PM", name: "Doors open" }
      - { time: "5:00 PM", name: "Town of Salem", free: true }
      - { time: "7:00 PM", name: "TETR.IO", free: true, contest: true }
      - { time: "9:00 PM", name: "Meccha Chameleon" }
      - { time: "11:00 PM", name: "Totally Accurate Battle Simulator", free: true, contest: true }
  - day: Saturday, September 19
    events:
      - { time: "1:00 AM", name: "Pirates, Vikings & Knights II", free: true }
      - { time: "12:00 PM", name: "Labyrinth", free: true }
      - { time: "12:30 PM", name: "Super Smash Bros. Ultimate", by: "Blue Devil Smash", free: true, contest: true }
      - { time: "2:00 PM", name: "Magic: The Gathering Duel Commander", by: "TCCS", contest: true }
      - { time: "3:30 PM", name: "Granblue Fantasy", by: "Blue Devil Smash", free: true, contest: true }
      - { time: "4:00 PM", name: "Slay the Spire II", contest: true }
      - { time: "5:30 PM", name: "Super Battle Golf" }
      - { time: "7:00 PM", name: "Nidhogg", free: true, contest: true }
      - { time: "9:30 PM", name: "Group Photo", free: true }
      - { time: "10:00 PM", name: "Hellish Quart", free: true, contest: true }
      - { time: "10:00 PM", name: "Costume Contest", free: true }
      - { time: "11:30 PM", name: "PONG Jeopardy", free: true }
  - day: Sunday, September 20
    events:
      - { time: "1:00 AM", name: "Team Fortress 2", free: true }
      - { time: "12:00 PM", name: "Party Games", free: true }
      - { time: "12:00 PM", name: "Castle Crashers", free: true }
      - { time: "4:00 PM", name: "Doors close" }
  - day: All weekend long
    events:
      - { time: "All LAN", name: "Minecraft", note: "bingo.ponglan.net" }

# --- where to put your name ------------------------------------------------
signups:
  - name: TETR.IO · Nidhogg · Hellish Quart
    sigil: swords
    by: PONG
    url: https://challonge.com/events/ponglantasy2026#/
  - name: Super Smash Bros. Ultimate · Granblue Fantasy
    sigil: crest
    by: Blue Devil Smash
    url: https://www.start.gg/tournament/blue-devil-smash-lan-tasy
  - name: "Magic: The Gathering Duel Commander"
    sigil: scroll
    by: TCCS
    url: https://docs.google.com/forms/d/e/1FAIpQLScNNJSa6YCNuc_sRSLh_-m4n3-o4j59W8cIdI3foAvuhqJ4Hw/viewform?usp=dialog
    deadline: Decks must be submitted by September 18 at the latest
  - name: Slay the Spire II
    sigil: dice
    by: PONG
    url: https://forms.cloud.microsoft/r/R7cDk7vG2w
  - name: Totally Accurate Battle Simulator
    sigil: crown
    by: PONG
    url: https://forms.cloud.microsoft/r/Tgu1vmWE7w
  - name: Costume Contest
    sigil: gem
    by: PONG
    url: https://forms.gle/PYrLg7D8bgfjqiic9

# --- notes from the keepers ------------------------------------------------
notes:
  - title: Totally Accurate Battle Simulator
    body: >-
      This is an experimental event, so please hang in there with us for this
      one. The form is rather basic and is really just a way for us to gauge how
      we should organise the event. Based on how many of you sign up, we'll sort
      people into groups and work from there, which might take some time at the
      event itself. If you want to be grouped with people you know, stay close
      to them when we call people to the front of the room. Note that we might
      call people up earlier than usual so we can start on time.
  - title: "Magic: The Gathering Duel Commander"
    body: >-
      Duel Commander is a faster-paced 1v1 Commander variant. You start at 20
      life, and it carries its own rules and its own ban and restricted list.
      Decks must be submitted by September 18 at the latest.
    link: https://www.duelcommander.org/
    link_text: Read the Duel Commander rules

inventory:
  - Your PC or console, with its peripherals and every cable that goes with them
  - A monitor, plus its power brick (the thing everyone forgets)
  - Headphones, because the hall gets loud and your neighbours will thank you
  - A costume, if you mean to enter the contest on Saturday night
  - A water bottle and provisions for the stretches between food runs
  - A pillow and something to sleep in, for when 48 hours catches up with you
  - Deodorant. Genuinely. Forty-eight hours is a long time.

faq:
  - q: Must I be a UW-Stout student?
    a: Nope. PONG is made up of students, alumni, and friends. There's no special requirement to be a member, and you don't need to be a Stout student to come to a LAN.
  - q: Must I stay the full 48 hours?
    a: Not at all. The hall runs Friday afternoon to Sunday afternoon and you're welcome to come and go. Plenty of people show up for a single evening. Plenty never leave.
  - q: Do I need to bring an ethernet cable or a power strip?
    a: No. We lay on the network and the power at every table. Bring your machine, your monitor and your peripherals, and leave the cabling to us.
  - q: Do I need to sign up in advance?
    a: Reserve your seat through the seating link so we know how much table space to lay out. Tournaments each have their own signup, listed on the board above, though you can also put your name down at check-in for most of them.
  - q: How do the raffle tickets work?
    a: >-
      Competitive events pay out raffle tickets: three to the winner, two to
      second place, and one to everyone else who takes part. You also earn an
      extra ticket for helping us set up on Friday. The drawings happen on
      Sunday, and you have to be in the hall to claim.
  - q: Does it cost anything to enter the tournaments?
    a: >-
      No. All PONG events are free to participate in. The "free" mark on the
      schedule means something slightly different: it means the game itself is
      free to buy or play, so you don't need to own anything to join in.
  - q: What toll is asked at the gate?
    a: None. LAN-tasy is free to attend, and free to enter every event inside it.
  - q: May I bring a console instead of a PC?
    a: Yes. Bring it, bring a monitor or TV for it, and bring the cables. Ask in the Discord if you're unsure about space for a larger setup.
  - q: Where does one sleep?
    a: Wherever you end up. Most people bring a pillow and a blanket and claim a patch of floor when they finally give in. Keep the walkways clear when you do, because the hall has to stay passable. That one is fire safety, not house style.
  - q: I have never been to a LAN before. Is that fine?
    a: Completely. Turn up, find a table, say hi. That's the entire onboarding process. Ask in the Discord beforehand if you want a hand planning what to bring.
---

<link rel="stylesheet" href="{{ '/assets/css/lan-tasy.css' | relative_url }}">

{% assign discord_url = "" %}
{% for social in site.data.pong_info.socials %}{% if social.type == "discord" %}{% assign discord_url = social.url %}{% endif %}{% endfor %}

{%- comment -%}
  The sigil sprite. Every mark on this page is drawn here once and referenced
  with <use>, so the page pulls in no icon font and no image files. Strokes
  inherit currentColor, which is what lets the same sigil sit in gold on a
  roundel and in red ink in a heading.
{%- endcomment -%}
<div class="dc_sprite">
<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <symbol id="sig-crown" viewBox="0 0 32 32">
        <path d="M5 25h22M6 25 3.5 9l7 5.5L16 5l5.5 9.5 7-5.5L26 25"/>
        <path d="M16 18.5v.01"/>
    </symbol>
    <symbol id="sig-dice" viewBox="0 0 32 32">
        <path d="M16 2.5 28 9.5v13L16 29.5 4 22.5v-13z"/>
        <path d="M16 8.5 23.5 21h-15z"/>
        <path d="M16 2.5v6M4 9.5l4.5 11.5M28 9.5l-4.5 11.5M8.5 21 16 29.5M23.5 21 16 29.5"/>
    </symbol>
    <symbol id="sig-goblet" viewBox="0 0 32 32">
        <path d="M9.5 4.5h13l-1.4 9.2a5.2 5.2 0 0 1-10.2 0z"/>
        <path d="M16 19v7M10 27.5h12"/>
    </symbol>
    <symbol id="sig-moon" viewBox="0 0 32 32">
        <path d="M21.5 4.6a12.2 12.2 0 1 0 0 22.8 9.7 9.7 0 0 1 0-22.8z"/>
        <path d="m26 6.5 1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1z"/>
    </symbol>
    <symbol id="sig-chest" viewBox="0 0 32 32">
        <path d="M4.5 13.5v13h23v-13"/>
        <path d="M4.5 13.5v-2a11.5 11.5 0 0 1 23 0v2"/>
        <path d="M3.5 13.5h25"/>
        <path d="M13.5 17.5h5v5.5h-5z"/>
    </symbol>
    <symbol id="sig-swords" viewBox="0 0 32 32">
        <path d="M5.5 27.5 23 9M26.5 27.5 9 9"/>
        <path d="m20 5.5 6.5 1-1 6.5M12 5.5 5.5 6.5l1 6.5"/>
        <path d="m3.5 23.5 5 5M28.5 23.5l-5 5"/>
    </symbol>
    <symbol id="sig-scroll" viewBox="0 0 32 32">
        <path d="M8.5 6.5h15v19h-15z"/>
        <path d="M8.5 6.5A2.5 2.5 0 0 0 6 9v14a2.5 2.5 0 0 0 2.5 2.5M23.5 6.5A2.5 2.5 0 0 1 26 9v14a2.5 2.5 0 0 1-2.5 2.5"/>
        <path d="M12 12h8M12 16h8M12 20h5.5"/>
    </symbol>
    <symbol id="sig-satchel" viewBox="0 0 32 32">
        <path d="M5 11.5h22l-2 16H7z"/>
        <path d="M11 11.5v-3a5 5 0 0 1 10 0v3"/>
        <path d="m5 11.5 3.5-3.5h15l3.5 3.5"/>
    </symbol>
    <symbol id="sig-rune" viewBox="0 0 32 32">
        <path d="M7.5 28V10L16 3.5 24.5 10v18z"/>
        <path d="M12.8 13.6a3.3 3.3 0 1 1 4.4 3.1c-.9.3-1.2 1-1.2 1.9v1"/>
        <path d="M16 23v1.6"/>
    </symbol>
    <symbol id="sig-gem" viewBox="0 0 32 32">
        <path d="M16 29 3.5 13l5-8h15l5 8z"/>
        <path d="m8.5 5 7.5 8 7.5-8M3.5 13h25M16 13v16"/>
    </symbol>
    <symbol id="sig-quill" viewBox="0 0 32 32">
        <path d="M28 3.5C17.5 5.5 9.5 12 6.5 22.5l3.5 3.5C20.5 23 27 15 28 3.5z"/>
        <path d="m6.5 26 -3 3M21 10.5 11.5 20"/>
    </symbol>
    <symbol id="sig-crest" viewBox="0 0 32 32">
        <path d="M16 3 28 7v9c0 7.2-5.6 11.8-12 14.2C9.6 27.8 4 23.2 4 16V7z"/>
        <path d="m16 11 2.3 4.7 5.2.7-3.8 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1-3.8-3.6 5.2-.7z"/>
    </symbol>
</svg>
</div>

<div class="dc_proclaim"><span>{{ page.proclamation }}</span></div>

<div class="dc_crumbs">
    The PONG Chronicle &nbsp;&rsaquo;&nbsp; Gatherings of the Hall &nbsp;&rsaquo;&nbsp; <strong>{{ page.title }}</strong>
    &nbsp;&nbsp;[ <a href="{{ '/lans/' | relative_url }}">return to the chronicle</a> ]
</div>

<div class="dc_tome">
    <div class="dc_panel orn_corners">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-crown"/></svg>
                The Summons
            </span>
            <small><span class="dc_ember">&#10022;</span> newly sealed. Read before you pack</small>
        </div>
        <div class="dc_charter">
            <div class="dc_charter_side">
                <div class="dc_sigil">
                    <svg class="dc_sigil_svg" viewBox="0 0 32 32" aria-hidden="true"><use href="#sig-crest"/></svg>
                </div>
                <div>
                    <div class="dc_handle">{{ page.sealed_by }}</div>
                    <div class="dc_rank">{{ page.sealer_rank }}</div>
                    <div class="dc_pips">&#10022;&#10022;&#10022;&#10022;&#10022;</div>
                    <div class="dc_stats">{{ page.sealer_stats | newline_to_br }}</div>
                </div>
            </div>
            <div class="dc_charter_main">
                <div class="dc_charter_meta">Sealed {{ page.sealed_on }}</div>
                <h2 class="dc_subject">{{ page.subject }}</h2>
                <p class="orn_dropcap">{{ page.blurb }}</p>
                <p>{{ page.blurb_two }}</p>
                <div class="orn_rule"></div>
                <dl class="dc_vitals">
                    <dt>The Days</dt>
                    <dd>{{ page.start_date | date: "%A the %-d" }} &ndash; {{ page.end_date | date: "%A the %-d of %B, %Y" }}</dd>
                    <dt>The Theme</dt>
                    <dd>{{ page.theme }}</dd>
                    <dt>The Hall</dt>
                    <dd>{{ page.location }}</dd>
                    <dt>The Gates</dt>
                    <dd>{{ page.doors }}</dd>
                    <dt>The Vigil</dt>
                    <dd>{{ page.duration }}</dd>
                    <dt>The Raising</dt>
                    <dd>{{ page.setup }}</dd>
                    <dt>The Toll</dt>
                    <dd>{{ page.price }}</dd>
                </dl>
                <div class="dc_sig">{{ page.sig }}</div>
            </div>
        </div>
    </div>
</div>

<div class="dc_stage" id="schedule">
    <div class="orn_scroll">
        <div class="orn_scroll_rod"></div>
        <div class="orn_scroll_body">
            <div class="dc_scroll_head">
                <h2 class="dc_scroll_title">The Order of the Weekend</h2>
                <div class="dc_scroll_sub">unrolled in full. Touch the parchment to enlarge it</div>
            </div>
            <a class="dc_frame" href="#zoom">
                <img class="dc_schedule_img"
                     src="{{ page.schedule_image | relative_url }}"
                     alt="{{ page.schedule_alt }}"
                     onerror="this.closest('.dc_frame').classList.add('is-missing')">
                <div class="dc_construction">
                    <svg class="dc_quill dc_sigil_svg" viewBox="0 0 32 32" aria-hidden="true"><use href="#sig-quill"/></svg>
                    <strong>Still Being Inked</strong>
                    <span>The scribes have not finished the order of the weekend. Return shortly, or ask after it in the Discord.</span>
                </div>
            </a>
            <div class="dc_schedule_meta">
                <span>{{ page.schedule_note }}</span>
                <a href="{{ page.schedule_image | relative_url }}" target="_blank" rel="noopener">[ unroll it in a new window ]</a>
            </div>
        </div>
        <div class="orn_scroll_rod"></div>
    </div>
</div>

<div class="dc_glass" id="zoom">
    <a class="dc_glass_backdrop" href="#schedule" aria-label="Close the schedule"></a>
    <div class="dc_glass_pane">
        <div class="dc_glass_bar">
            <span>The Order of the Weekend</span>
            <a class="dc_glass_close" href="#schedule" aria-label="Close the schedule">&#10005;</a>
        </div>
        <div class="dc_glass_body">
            <img src="{{ page.schedule_image | relative_url }}" alt="{{ page.schedule_alt }}" onerror="this.remove()">
        </div>
    </div>
</div>

<div class="dc_tome">
    {%- comment -%}
      The same running order as the graphic above, written out. This is the
      copy that survives a phone screen at 2 AM, a screen reader, and Ctrl-F.
    {%- endcomment -%}
    <div class="dc_panel orn_corners">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-scroll"/></svg>
                The Running Order, Written Out
            </span>
            <small>every hour of it, in plain words</small>
        </div>
        <div class="dc_panel_body">
            {% for block in page.schedule %}
            <div class="dc_day">
                <h3 class="dc_day_name">{{ block.day }}</h3>
                <ul class="dc_itinerary">
                    {% for ev in block.events %}
                    <li>
                        <span class="dc_hour">{{ ev.time }}</span>
                        <span class="dc_event">
                            {{ ev.name }}
                            {% if ev.by %}<span class="dc_event_by">run by {{ ev.by }}</span>{% endif %}
                            {% if ev.note %}<span class="dc_event_by">{{ ev.note }}</span>{% endif %}
                        </span>
                        <span class="dc_marks">
                            {% if ev.free %}<span class="dc_mark dc_mark--free">Free to play</span>{% endif %}
                            {% if ev.contest %}<span class="dc_mark dc_mark--contest">Contest</span>{% endif %}
                        </span>
                    </li>
                    {% endfor %}
                </ul>
            </div>
            {% endfor %}

            <div class="orn_rule orn_rule--small"></div>

            <div class="dc_legend">
                <p>
                    <span class="dc_mark dc_mark--contest">Contest</span>
                    A competitive event. The winner takes three raffle tickets, second place takes
                    two, and everyone else who enters takes one.
                </p>
                <p>
                    <span class="dc_mark dc_mark--free">Free to play</span>
                    The game itself costs nothing to buy or play, so you need own nothing to join
                    in. Every PONG event is free to enter regardless.
                </p>
            </div>
        </div>
    </div>

    <div class="dc_panel orn_corners">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-swords"/></svg>
                Where to Put Your Name
            </span>
            <small>{{ page.signups | size }} boards taking entries</small>
        </div>
        <ul class="dc_quests">
            {% for entry in page.signups %}
            <li class="dc_quest">
                <span class="dc_quest_mark">
                    <svg class="dc_sigil_svg" viewBox="0 0 32 32" aria-hidden="true"><use href="#sig-{{ entry.sigil }}"/></svg>
                </span>
                <div class="dc_quest_name">{{ entry.name }}</div>
                <div class="dc_quest_by">kept by {{ entry.by }}</div>
                <div class="dc_quest_blurb">
                    <a class="dc_quest_link" href="{{ entry.url }}" target="_blank" rel="noopener">Enter your name &rsaquo;</a>
                    {% if entry.deadline %}<span class="dc_deadline">{{ entry.deadline }}</span>{% endif %}
                </div>
            </li>
            {% endfor %}
        </ul>
    </div>

    <div class="dc_panel">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-quill"/></svg>
                Notes from the Keepers
            </span>
            <small>read these before the events they concern</small>
        </div>
        <div class="dc_panel_body">
            {% for note in page.notes %}
            <div class="dc_note">
                <h3 class="dc_note_title">{{ note.title }}</h3>
                <p>{{ note.body }}</p>
                {% if note.link %}
                <p><a href="{{ note.link }}" target="_blank" rel="noopener">{{ note.link_text }} &rsaquo;</a></p>
                {% endif %}
            </div>
            {% endfor %}
        </div>
    </div>

    <div class="dc_panel">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-satchel"/></svg>
                The Adventurer's Pack
            </span>
            <small>check it twice. The network and the power are ours to supply</small>
        </div>
        <div class="dc_panel_body">
            <ul class="dc_inventory">
                {% for item in page.inventory %}
                <li><span class="dc_check"></span>{{ item }}</li>
                {% endfor %}
            </ul>
        </div>
    </div>

    <div class="dc_panel">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-rune"/></svg>
                Questions Put to the Keepers
            </span>
            <small>answered here, so you need not ask twice</small>
        </div>
        <div class="dc_panel_body">
            <div class="dc_faq">
                {% for entry in page.faq %}
                <details>
                    <summary>{{ entry.q }}</summary>
                    <p>{{ entry.a }}</p>
                </details>
                {% endfor %}
            </div>
        </div>
    </div>

    <div class="dc_panel orn_corners">
        <div class="dc_panel_bar">
            <span class="dc_bar_title">
                <svg class="dc_bar_sigil" aria-hidden="true"><use href="#sig-gem"/></svg>
                The Hall of Patrons
            </span>
            <small>this gathering is furnished by</small>
        </div>
        <div class="dc_panel_body">
            <div class="dc_patrons">
                {% for tier in site.data.pong_info.sponsors.tiers %}{% for sponsor in tier[1] %}
                <div class="dc_patron">
                    <div class="orn_shield">
                        <img src="{{ sponsor.logo }}" alt="arms of {{ sponsor.name }}">
                    </div>
                    <div class="dc_patron_name">{{ sponsor.name }}</div>
                    <div class="dc_patron_tier {{ tier[0] }}">{{ tier[0] }} patron</div>
                    <div class="dc_patron_links">
                        {% for social in sponsor.socials %}
                        {% assign href = social.url %}
                        {% if social.type == "email" %}{% assign href = "mailto:" | append: social.url %}{% endif %}
                        <a href="{{ href }}" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};" aria-label="{{ sponsor.name }} on {{ social.type }}"><i class="{{ site.data.socials[social.type].icon }}"></i></a>
                        {% endfor %}
                    </div>
                </div>
                {% endfor %}{% endfor %}
            </div>
        </div>
    </div>
</div>

<div class="orn_knotwork"></div>

<div class="dc_colophon">
    {% if page.registration_url and page.registration_url != "" %}
    <a class="dc_enter" href="{{ page.registration_url }}" target="_blank" rel="noopener">Claim Your Seat</a>
    {% endif %}
    <a class="dc_enter dc_enter--quiet" href="{{ discord_url }}" target="_blank" rel="noopener">Enter the Discord</a>

    <div class="orn_rule"></div>
</div>
