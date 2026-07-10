---
layout: default
permalink: /
order: 1
---

<div class="flex flex-column hero_section">
    <h1 class="center">People's Organization of Network Gaming</h1>
    <h2 class="center">University of Wisconsin - Stout Polytechnic's Premier Gaming Club</h2>
    <div class="center">
        {% assign discord_url = "" %}
        {% for social in site.data.pong_info.socials %}
            {% if social.type == "discord" %}
                {% assign discord_url = social.url %}
            {% endif %}
        {% endfor %}
        <div class="front-buttons">
            <a href="{{ discord_url }}" target="_blank">
                <img alt="Join our Discord" src="https://img.shields.io/badge/Join%20Our%20Discord!%20-%20%235865F2?style=for-the-badge&logo=discord&logoColor=FFFFFF">
            </a>
            <a href="/about">
                <img alt="More about us" src="https://img.shields.io/badge/More%20About%20Us%20-%20%23f79423?style=for-the-badge&logoColor=FFFFFF">
            </a>
        </div>
    </div>
</div>

<div class="dark_bg lan_section">
    <h2 class="center">Next LAN:</h2>
    {% if site.data.pong_info.next_lan %}
        <div class="lan_card">
            <img src="{{ site.data.pong_info.next_lan.banner | default: '/assets/pong_banner-logo_v1.webp' }}" 
     alt="{{ site.data.pong_info.next_lan.name | default: 'PONG LAN' }}" 
     class="lan_banner">
            <div class="lan_info">
                <h3>{{ site.data.pong_info.next_lan.name }}</h3>
                <p>{{ site.data.pong_info.next_lan.start_date }} - {{ site.data.pong_info.next_lan.end_date }}</p>
                {% if site.data.pong_info.next_lan.name != "To Be Announced" %}
                    <a href="{{ site.data.pong_info.next_lan.details_url }}" class="lan_details_link">Details &gt;</a>
                {% endif %}
            </div>
        </div>
    {% else %}
        <p class="center">No upcoming LAN scheduled yet, check back soon!</p>
    {% endif %}
</div>

<div class="posts_section">
    <h2 class="center">Latest Posts</h2>
    <hr>
    <div class="posts_grid">
        {% for post in site.posts limit: 3 %}
            <div class="card post_card">
                <a href="{{ post.url }}">
                    <h3>{{ post.title }}</h3>
                    <time class="post_date">{{ post.date | date: "%B %d, %Y" }}</time>
                    <p class="post_excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                </a>
            </div>
        {% endfor %}
    </div>
</div>