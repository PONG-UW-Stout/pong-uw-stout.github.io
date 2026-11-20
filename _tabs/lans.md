---
layout: default
title: LANs
permalink: /lans/
order: 4
---

# LANs
<hr>
{%- comment -%}
  Without a sort, a collection with no `date` field comes out in filename
  order, which put LAN-iversary above LAN-Prix for alphabetical reasons and
  nothing else. Newest first: the LAN coming up next is the one people are
  here for, and the archive runs backwards underneath it.
{%- endcomment -%}
{% assign lans = site.lans | sort: "start_date" | reverse %}

<ul class="post-list">
  {% for lan in lans %}
    <li class="post-item">
      <h2>
        <a href="{{ lan.url | relative_url }}">{{ lan.title }}</a>
      </h2>
      <time datetime="{{ lan.start_date | date_to_xmlschema }}">
        {{ lan.start_date | date: "%B %d, %Y" }} - {{ lan.end_date | date: "%B %d, %Y" }}
      </time>
      {% if lan.description %}
        <p>{{ lan.description | strip_html }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>