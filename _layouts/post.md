---
layout: default
---

{%- comment -%}
  .post-page is the hook pong/posts.scss scopes the whole reading layout to.
  It has to exist because #post-container below is NOT unique to posts:
  _layouts/lan.md wraps the LAN pages in the same id, and those carry bespoke
  full-bleed designs (pong/lans/lan-tasy, pong/lans/lan-prix) that a reading
  measure would wreck. Without a class here the stylesheet would be left
  guessing which layout it was in from the shape of the markup.
{%- endcomment -%}
<div class="post-page">

<header class="post-head">
  <h1>{{ page.title }}</h1>
  <time>{{ page.date | date: "%B %d, %Y" }}</time><br>
  {%- if page.authors and page.authors.size > 0 %}
  <p>
    Written by
    {% for author in page.authors -%}
      {{- author -}}
      {%- unless forloop.last %}{% if forloop.rindex == 2 %} and {% else %}, {% endif %}{% endunless -%}
    {%- endfor %}
  </p>
  {%- endif %}
</header>

<hr>

<div id="post-container">
  {% include post-toc.html %}
  <article>
    {{ content }}
  </article>
  {% include social-share.html %}
</div>

</div>
