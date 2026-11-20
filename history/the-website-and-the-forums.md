---
layout: post
toc: true
title: The Website and the Forums
description: From a cork board outside an office to Discord, via two forum platforms and a homegrown LAN portal.
---

PONG has been on the internet almost as long as it has existed, and has thrown away its entire online home at least four times.

## The "cork board"

Before any of it, announcements went on a cork board outside Kevin Olson's office in Fryklund Hall.

There was something else as well, before the forums existed, but nobody can name it. Kevin has mentioned it once and could not remember what it was called.

## The first forums

The club's first discussion board was built by **Bergamot**, president around 2004-2005 

He hand-wrote it from the ground up, in PHP with a MySQL backend, as his capstone project. The assignment was to build a database-backed application. The club got a forum out of it.

The earliest account on that board was created on **29 July 2005**, and it is Bergamot's own.

That first board eventually accumulated 6,627 accounts, the overwhelming majority of them spam registrations. It was quietly dropped somewhere between 2014 and 2016.

## phpBB, 2011 to 2016

The club migrated to phpBB in **August 2011**, and this is the forum people actually remember. At its peak it carried 1,296 real accounts, 6,521 posts and 1,109 topics.

Its sub-forums are now an accidental historical record, because a new one was created for every LAN and closed afterwards. That list is most of the [LAN name catalogue](lan-names).

The two most-viewed threads in the forum's entire life were:

1. **"EPIC Gifs and Lulz!"**, 39,755 views and 372 replies.
2. The **Child's Play Charity LAN** thread, 36,966 views.

Which is a fair summary of a gaming club: one thread of reaction GIFs, one thread of doing something good.

By **February 2015** the minutes read, simply: *"The forums are down.... Website is still up.... A Whole New WEBSITE FOR PONG"*. A year later, in **March 2016**, the board voted to retire the forums in favour of a Facebook community group, with a brand new Discord server for what the minutes call "random chatter". Tournament brackets moved to Challonge the same month.

The forums survive today only through the Internet Archive.

## ALP

The best thing PONG ever built was **ALP**, its own LAN party portal, written in-house and launched on **24 February 2012**. The launch announcement explains it well enough:

> Welcome to the new way of preregistering for PONG LANs! With this site, you can sign up for the next PONG LAN, pick your seat for the LAN, check out the tournaments, sign up for the tournaments, and check the overall schedule for the event!

It did all of that. It also did considerably more than that.

**Seating.** A pixel-coordinate seating chart editor mapped to the actual venue floor plan. The February 2014 snapshot has **784 seats** laid out with shape, direction and table grouping.

**Registration.** By the 2014 snapshot there were 500 registered users. By 2016 there were 1,781. Each profile carried your handle, your gaming group, a personal quote, a proficiency rating, your arrival and departure times, and the make and model of your CPU, memory and GPU.

**Tournaments.** Brackets, teams, match-by-match win/loss progression. The February 2014 event alone recorded 15 tournaments, 24 teams and 101 matches.

**Prize voting.** Attendees voted on which prizes they wanted. That feature logged 1,430 votes in 2014 and 2,711 by 2016, which makes it one of the most-used things on the site.

**A caffeine tracker.** This is the part that is hard to explain. ALP maintained a reference table of **76 named beverages**, each with a caffeine-milligrams-per-ounce multiplier. Bawls at 8.0. Jolt at 6.0. Diet Coke at 3.92. Afri-Cola at 8.33. Decaf sodas at zero.

Seven people used it. Across 40 logged servings they put away 3,664.7 milligrams of caffeine and roughly six gallons of beverage. The top consumer logged 898 milligrams across eleven drinks, with a single peak dose of 154.22 milligrams at 22:32 on the Friday the LAN started.

The logging window runs from October 2013 to February 2014, which means people were tracking their caffeine intake *between* LANs, for months, as an ongoing activity.


ALP also ate the user database once. See [The ALP Database Wipe](stories/the-alp-database-wipe).

## WordPress, and a quiet lesson in caching

The main site ran WordPress at `pong.uwstout.edu` on a custom theme called PONG2, with exactly two plugins: a TeamSpeak web viewer so you could see who was in voice chat, and NextGEN Gallery for the photos.

Those photo galleries turned out to be the single most valuable historical artifact the club has, because the folder names preserve a dated event list going back to 2004 that survives nowhere else.

They also nearly killed the site. The gallery plugin minted a brand new database row for every single render of a gallery widget and never cleaned them up, all flagged to load on every page view. By 2014 that table had grown to roughly **1.86 million rows** and the options file alone was 275 megabytes. Somebody cleaned it up before 2016, by which point the same file was back down to 547 kilobytes.

By 2016 there were three separate WordPress installs running at once and none of them had been decommissioned.

## Today

Discord is the club's main home, with a Facebook group, a Steam group, Instagram, a Twitch channel at `twitch.tv/ponguwstout`, and this website.

LAN seating now runs through a service called LAN Reg rather than something homegrown.

One Discord channel is worth calling out: **the retirement home**, where past execs, current execs, mentors, advisors, staff and collaborators all hang out together. It is where a fair amount of this history came from, and where a long-running pastime is making Dan Wald feel old.

## Keep reading

- [A History of PONG](pong-history)
- [The ALP Database Wipe](stories/the-alp-database-wipe)
