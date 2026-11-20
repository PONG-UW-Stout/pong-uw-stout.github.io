---
layout: default
---

<div class="post-page event-page">

<header class="post-head">
  <h1>{{ page.title }}</h1>
  <time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: "%A, %B %-d, %Y" }}</time>
</header>

{% include event-details.html %}

<hr>

<div id="post-container">
  <article>
    {{ content }}
  </article>
</div>

{% include event-gallery.html %}

{% include social-share.html heading="Share this event" %}

</div>
