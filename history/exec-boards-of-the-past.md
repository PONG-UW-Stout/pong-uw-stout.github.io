---
layout: post
toc: true
title: Exec Boards of the Past
description: Every PONG executive board we have evidence for, from 2001 to now.
---

Twenty-six years of boards, pieced back together from org renewal paperwork, meeting minutes, election results, old budget filings, the forum archives and a very long recording made one night in October 2026.

It is not complete and it is not going to be. Some years run to eleven names, some to one. Where a seat is blank, it is blank because nothing in the archive fills it, not because nobody sat in it. If you know one of the missing names, the exec board would like to hear from you.

## How to read this

The academic year runs August to May, so every board is listed as a range like `2016-2017`.

Terms do not actually line up with that. Elections run in March and the new board is sworn in a few weeks later, which means a board labelled `2016-2017` was elected in March 2016 and took over that spring. So the range is the academic year a board served, and each term overlaps the next by a few weeks.

A few seats changed names over the years. **Sponsorship Liaison** later became **Ambassador**, **Tournament Coordinator** became **Games Coordinator**, and **Webmaster** became **Web Administrator**. The titles below are the ones in use at the time, as best we can tell.


{% for y in site.data.past_execs reversed %}
## {{ y.year }}

{% if y.note %}*{{ y.note }}*

{% endif %}| Position | Name |
|---|---|
{% for seat in y.board %}| {{ seat.position }} | {{ seat.name }} |
{% endfor %}
{% endfor %}

## The gaps

The holes are worth naming, because they are the shape of what got lost.

**2001 to 2010** is the thinnest stretch. For most of those years we have a president, an advisor, and very little else. The club was running events the whole time, the paperwork just did not survive. PONG's first event was in 2002, but the earliest trace of one that survives is a photo gallery folder dated October 2004. The earliest full board we can reconstruct is 2011-2012, out of an org renewal filing.

For the founding years we know the board had five seats, because the club announced its officer elections on its own site in 2002. We can name two of the five: Eric Landru as president and Troy VanAsten on public relations. Two further handles from that era, **Navatar1** and **Big-T**, posted like execs and were active enough to have been execs, but no real name has ever been attached to either.

**Treasurer** has the worst run of it. Nothing between 2007 and 2009, nothing for 2010-2011, and the 2014-2015 treasurer is recorded only as "Psarahdactyl", welcomed mid-year in a meeting note after the spring election turned up no candidates at all.

**Vice President** is missing for most of the 2000s, which is frustrating, because the constitution says the vice president inherits the presidency. In theory the VP list should be the president list shifted back one year. In practice the names were never written down.

**Secretary** only existed between 2011 and 2020. It was added to the constitution in 2011 because the Student Senate required one, and quietly retired once the duties moved elsewhere.

**2017 to 2026** is thin in a different way. We have the names, because people remember them, but almost none of the paperwork. The club's shared drive effectively stops in March 2017.
