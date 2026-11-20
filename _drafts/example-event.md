---
# ===========================================================================
#  EXAMPLE EVENT - a reference template, not a real draft.
#
#  Copy this file to _events/YYYY-MM-DD-some-slug.md, delete the comments and
#  the `published: false` below, and fill it in.
#
#  An event is a single meeting, game night or social - the things that go on
#  the calendar between LANs. A LAN is NOT an event: it gets its own themed
#  page in _lans/ (see _drafts/example-lan.md).
#
#  Only `title` and `date` are required. Every other key is optional and
#  individually guarded, so an event with a title, a date and a sentence
#  renders a title, a date and a sentence - not a grid of empty labels.
#
#  Pages are built by _layouts/event.md, which wears .post-page as well as
#  .event-page: the prose below gets the same measure, heading scale and
#  styling a post does, from _sass/pong/posts.scss.
# ===========================================================================

# Keeps this file out of the build. DELETE THIS LINE in a real event.
published: false

# ---------------------------------------------------------------------------
#  Required.
# ---------------------------------------------------------------------------

title: Example Event

# The DAY. YYYY-MM-DD, and it has to be a real date in that order: Jekyll
# refuses to build a collection document whose date it cannot parse, so
# `09-16-2026` fails the entire site build, not just this page. Printed under
# the title as "Wednesday, September 16, 2026".
date: 2026-09-16

# ---------------------------------------------------------------------------
#  Recommended.
# ---------------------------------------------------------------------------

# A sentence or two. Shown on the card at /events/ and in the link preview a
# pasted url unfurls into. See the note on `description` in
# _drafts/example-post.md for why writing one matters.
description: >-
  One or two sentences about the event, shown on the events page and in
  Discord link previews.

# ---------------------------------------------------------------------------
#  When.
#
#  Clock times are STRINGS, deliberately. A bare `6:00 PM` in front matter is
#  parsed by Jekyll into a Ruby Time pinned to today's date, which then has to
#  be formatted back out and lies about the day. And half of what this club
#  actually advertises - "doors at 4", "until we get kicked out" - is not a
#  clock time at all. A quoted string prints exactly what you typed.
# ---------------------------------------------------------------------------

start_time: "6:00 PM"
end_time: "8:00 PM"

# Printed INSTEAD of the start/end range above, for an event whose timing is
# not a range. Leave it out and the range is used.
# time_note: "6 PM until we get kicked out"

# ---------------------------------------------------------------------------
#  Where.
#
#  `location` and `room` print as one line, and become one link when map_url
#  is set. `address` stays outside that link: it is there for someone typing
#  it into their own maps app, and a linked street address reads as a second,
#  different destination.
#
#  The whole Where row is skipped if `location` is absent, so an online event
#  can simply not have one.
# ---------------------------------------------------------------------------

location: Memorial Student Center
room: Great Hall
address: 302 10th Ave E, Menomonie, WI 54751
map_url: https://maps.google.com/?q=Memorial+Student+Center+Menomonie+WI

# ---------------------------------------------------------------------------
#  Etc.
# ---------------------------------------------------------------------------

cost: Free
host: PONG Exec Board

# Rendered as chips. Omit the key, or leave it empty, and the Tags row is
# skipped - either works. (Worth knowing if you ever edit the template rather
# than an event: it has to test `tags.size`, not `tags`, because Jekyll gives
# every collection document a `tags` key defaulting to an empty array, and in
# Liquid an empty array is still true.)
tags:
  - meeting
  - social

# Turns on the orange call-to-action button under the details. Both lines, or
# neither; signup_label defaults to "Sign up".
signup_url: https://example.com/sign-up
signup_label: RSVP on Discord

# ---------------------------------------------------------------------------
#  Photos.
#
#  `photos` names a FOLDER, not a list of files. Every image in it goes into
#  the gallery at the foot of the page, sorted by filename - so adding photos
#  to an event is dropping files into a directory, and there is no list here
#  to keep in step with what is on disk.
#
#  The folder is resolved under /assets/images/, and all three of these name
#  the same place, so you do not have to remember which form is wanted:
#
#      event_photos/2026-intro-meeting
#      assets/images/event_photos/2026-intro-meeting
#      /assets/images/event_photos/2026-intro-meeting/
#
#  Only .jpg .jpeg .png .webp .gif and .avif are picked up, which keeps a
#  stray .DS_Store or .zip out of the grid. Sub-folders are included.
#
#  If the folder is empty or the path is wrong, the page prints the path it
#  was looking for instead of rendering nothing - a silent gallery and a typo
#  look identical otherwise.
#
#  Clicking a photo enlarges it in an overlay built on CSS :target, not
#  script, so it works with JavaScript off and the back button closes it.
# ---------------------------------------------------------------------------

photos: event_photos/example-event

# Heading over the grid. Defaults to "Photos".
photos_heading: Photos

# Alt text for any photo that has no caption of its own below. Falls back to
# the event title if omitted.
photos_alt: Attendees at the example event

# Optional filename -> caption map. The caption prints under the thumbnail and
# is used as that photo's alt text. A photo missing from this map is still
# shown, it just goes uncaptioned - so this is worth filling in for the three
# good shots and skipping for the other forty.
photo_captions:
  01-arrival.jpg: The hall half an hour before doors.
  04-bracket.jpg: The Smash bracket, round two.
---

Everything below the second `---` is the write-up, in Markdown, and is styled
exactly like a post - see _drafts/example-post.md for what the stylesheet
already handles.

## What to put here

Whatever the details block above cannot say in a word: what the night actually
is, who it is for, what to bring, what happened if you are writing it up
afterwards.

An event with nothing to add can leave this empty. The page still renders the
title, the details and the gallery.
