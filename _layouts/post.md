---
layout: default
---

<header>
  <h1>{{ page.title }}</h1>
  <time>{{ page.date | date: "%B %d, %Y" }}</time><br>
  <p>
    Written by
    {% for author in page.authors %}
      {% if forloop.last and forloop.length > 1 %} and {% endif %}
      {{ author }}{% if forloop.rindex > 2 %}, {% endif %}
    {% endfor %}
  </p>
</header>

<hr>

<div id="post-container">
  <article>
    {{ content }}
  </article>
</div>