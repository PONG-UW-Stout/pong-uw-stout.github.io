---
layout: default
permalink: /games
order: 6
---

<!-- The bacon question, asked once per visitor and then never again. The cookie
     is set before the prompt, so picking bacon and coming back later doesn't
     land you in the same dilemma. -->
<script>
    (function () {
        var KEY = "pong_bacon";
        var YEAR = 60 * 60 * 24 * 365;

        if (document.cookie.split("; ").indexOf(KEY + "=1") !== -1) return;
        document.cookie = KEY + "=1; path=/; max-age=" + YEAR + "; SameSite=Lax";

        var msg = "Would you like endless bacon, but no more games, or would you like games, unlimited games, and no games.";

        if (confirm(msg)) {
            window.location.replace("https://en.wikipedia.org/wiki/Bacon");
        }
    })();
</script>


# Games
<hr>
<!-- I'm reusing the post CSS because it works and yeah -->
<!-- fuck you future webadmin -->
<ul class="post-list">
  {% for game in site.games %}
    <li class="post-item">
      <h2>
        <a href="{{ game.url | relative_url }}">{{ game.title }}</a>
      </h2>
      {% if game.description %}
        <p>{{ game.description | strip_html }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>