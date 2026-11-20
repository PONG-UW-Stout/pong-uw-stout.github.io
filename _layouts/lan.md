---
layout: default
---

<header>
  <h1>{{ page.title }}</h1>
  <time>{{ page.start_date | date: "%B %d, %Y" }} - {{ page.end_date | date :"%B %d, %Y" }}</time>
</header>

<div id="post-container">
  <article>
    {{ content }}
  </article>
</div>

{%- comment -%}
  Every LAN page gets prev/next through the whole archive. A page that renders
  its own ring in its body sets `webring: self` in front matter so it does not
  get a second one; LAN-iversary does that, in Windows 95 dress.
{%- endcomment -%}
{%- unless page.webring == "self" -%}
  {% include lan-webring.html %}
{%- endunless -%}