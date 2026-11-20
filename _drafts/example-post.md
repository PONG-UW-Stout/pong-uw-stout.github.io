---
# ===========================================================================
#  EXAMPLE POST - a reference template, not a real draft.
#
#  Copy this file to _posts/YYYY-MM-DD-some-slug.md, delete the comments and
#  the `published: false` below, and write. Every key is explained; only
#  `title` and `date` are required.
#
#  The filename is not decoration. Jekyll reads the date and the slug out of
#  it, so _posts/2026-10-10-welcome-to-PONG.md publishes at
#  /posts/welcome-to-PONG/ (the permalink shape is set in _config.yml).
# ===========================================================================

# Keeps this file out of the build even when someone runs `jekyll serve
# --drafts`. It is documentation, not a post anybody is finishing. DELETE
# THIS LINE in a real post - with it present the post will never appear, and
# that is a confusing afternoon.
published: false

# ---------------------------------------------------------------------------
#  Required.
# ---------------------------------------------------------------------------

# Shown as the page's <h1>, in the browser tab as "Title | PONG", on the card
# at /posts/, and in the link preview when the url is pasted into Discord.
title: Example Post

# The date must parse. YYYY-MM-DD, optionally with a time and a UTC offset -
# use the offset form if the publication time matters, because without one
# Jekyll applies the site's timezone and the post can appear to shift a day.
# Jekyll refuses to build a collection document whose date it cannot read, so
# a typo here fails the whole site, not just this page.
date: 2026-10-10 15:45:33 -0500

# ---------------------------------------------------------------------------
#  Strongly recommended.
# ---------------------------------------------------------------------------

# One or two sentences. This is the card's summary at /posts/, the <meta
# name="description"> search engines read, and the line Discord, Slack,
# Bluesky and iMessage print under the title when someone pastes the link.
#
# Without it _includes/head.html falls back to the post's own excerpt - the
# opening of the body, markup and all - so writing one is worth the minute.
description: One or two sentences summarising the post.

# A list, even for one person, and printed as "Written by A, B and C" under
# the title. Omit the key entirely for an unsigned post: the byline is
# conditional and renders nothing rather than an empty "Written by".
authors:
  - Daisy Hardwick

# ---------------------------------------------------------------------------
#  Optional.
# ---------------------------------------------------------------------------

# The table of contents in the right-hand gutter, built from the ## and ###
# headings in the body. _config.yml already switches it on for every post, so
# this line only exists to switch it OFF for a short post that does not need
# one. Below 72rem of viewport the TOC moves inline above the article, so a
# post with two headings looks cluttered on a phone.
toc: false

# Overrides the picture in the link preview. Site-wide this is the PONG
# wordmark from _config.yml, which is a white logo on a transparent
# background and therefore invisible in Slack's light mode - so a post with a
# real picture to show should say so here. Absolute path from the site root.
# image: /assets/images/posts/example.png
# image_alt: What the picture shows, for screen readers and for the preview.
---

Everything above the second `---` is front matter; everything below it is the
post, written in Markdown.

## Headings become the table of contents

`##` and `###` headings are what _includes/post-toc.html collects, so they are
worth writing as real section names rather than as jokes - they are the
navigation.

### Third level works too

And nests under its `##` in the contents.

## What the stylesheet already handles

Links, **bold**, *italic*, `inline code`, lists, tables, block quotes and
fenced code blocks are all styled in _sass/pong/posts.scss. Numerals inside a
sentence can be wrapped in `<span class="number">` if they look light against
the body face, though the font handles most of them now.

> A block quote looks like this.

Images are centred at the reading measure automatically:

![Alt text that describes the picture](/assets/images/example.png)
