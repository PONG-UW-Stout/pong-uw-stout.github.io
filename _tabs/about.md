---
layout: default
permalink: /about/
order: 2
---

<div class="about_page_text_container">
    <h1>About Us</h1>
    <hr>
    <h2><em>What is PONG?</em></h2>
    <p>The People’s Organization of Network Gaming, or “PONG” is a student organization at the University of Wisconsin-Stout made up of students, alumni, and friends that are passionate about video games. There is no special requirement to be a member, you don't even need to be a Stout student! You may need a moderate tolerance for cringe memes.</p>
    <p>PONG’s premier focus are LAN Party events that are hosted on UW-Stout’s Campus in the Memorial Student Center. These LAN events are run by PONG’s Executive Board, but also with the help of members of the organization. Two LAN Events are held per semester, with a total of four during each school year. These events run from <time>4:00 PM Friday</time> to <time>4:00 PM Sunday</time> for <span class="number">48 hours</span> of non-stop fun. Some activities you can find at a LAN include party games, group photos, prize drawings, and plenty of tournaments.</p>
    <p>The bottom line is that we want to make an enjoyable experience for all, regardless of games you like, how often you play, and anything in between. Come with us and have a good time!</p>
    <br>
    <h2>Meet our execs and staff members!</h2>
</div>

<div class="dark_bg">
   <div class="content_container">
        <h1>Execs</h1>
        <div class="flex container">
            {% for exec in site.data.execs %}
                <div class="flex capsule">
                    <img src="{{ exec.photo }}" alt="photo of {{exec.name}}">
                    <div class="block">
                        <div class="capsule_header exec">
                            <div class="capsule_header_text_container">
                                <div class="capsule_name">{{exec.name}}</div>
                                <div class="capsule_role">{{exec.role}}</div>
                            </div>
                        </div>
                        <div class="flex capsule_link_container">
                            {% for social in exec.socials %}
                                {% assign href = social.url %}
                                {% if social.type == "email" %}
                                    {% assign href = "mailto:" | append: social.url %}
                                {% endif %}
                                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                                    <i class="{{ site.data.socials[social.type].icon }}"></i>
                                </a>
                            {% endfor %}  
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
<br>

<div class="dark_bg">
   <div class="content_container">
        <h1>Staff</h1>
        <div class="flex container">
            {% for staff in site.data.staff %}
                <div class="flex capsule">
                    <img src="{{ staff.photo }}" alt="photo of {{staff.name}}">
                    <div class="block">
                        <div class="capsule_header staff">
                            <div class="capsule_header_text_container">
                                <div class="capsule_name">{{staff.name}}</div>
                                <div class="capsule_role">{{staff.role}}</div>
                            </div>
                        </div>
                        <div class="flex capsule_link_container">
                            {% for social in staff.socials %}
                                {% assign href = social.url %}
                                {% if social.type == "email" %}
                                    {% assign href = "mailto:" | append: social.url %}
                                {% endif %}
                                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                                    <i class="{{ site.data.socials[social.type].icon }}"></i>
                                </a>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
<br>


<div class="dark_bg">
   <div class="content_container">
        <h1>Advisors</h1>
        <div class="flex container">
            {% for advisor in site.data.advisors %}
                <div class="flex capsule">
                    <img src="{{ advisor.photo }}" alt="photo of {{advisor.name}}">
                    <div class="block">
                        <div class="capsule_header advisor">
                            <div class="capsule_header_text_container">
                                <div class="capsule_name">{{advisor.name}}</div>
                                <div class="capsule_role">{{advisor.role}}</div>
                            </div>
                        </div>
                        <div class="flex capsule_link_container">
                            {% for social in advisor.socials %}
                                {% assign href = social.url %}
                                {% if social.type == "email" %}
                                    {% assign href = "mailto:" | append: social.url %}
                                {% endif %}
                                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                                    <i class="{{ site.data.socials[social.type].icon }}"></i>
                                </a>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
<br>

<div class="dark_bg">
   <div class="content_container">
        <h1>Mentors</h1>
        <div class="flex container">
            {% for mentor in site.data.mentors %}
                <div class="flex capsule">
                    <img src="{{ mentor.photo }}" alt="photo of {{mentor.name}}">
                    <div class="block">
                        <div class="capsule_header mentor">
                            <div class="capsule_header_text_container">
                                <div class="capsule_name">{{mentor.name}}</div>
                                <div class="capsule_role">{{mentor.role}}</div>
                            </div>
                        </div>
                        <div class="flex capsule_link_container">
                            {% for social in mentor.socials %}
                                {% assign href = social.url %}
                                {% if social.type == "email" %}
                                    {% assign href = "mailto:" | append: social.url %}
                                {% endif %}
                                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                                    <i class="{{ site.data.socials[social.type].icon }}"></i>
                                </a>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
<br>

<div class="dark_bg">
  <div class="content_container">
    <h1>Platinum Sponsors ($250+)</h1>
    <div class="flex container">
      {% for sponsor in site.data.pong_info.sponsors.tiers['platinum'] %}
        <div class="flex capsule">
          <img src="{{ sponsor.logo }}" alt="logo for {{ sponsor.name }}">
          <div class="block">
            <div class="capsule_header platinum">
              <div class="capsule_header_text_container">
                <div class="capsule_name">{{ sponsor.name }}</div>
                <div class="capsule_role">Platinum Sponsor</div>
              </div>
            </div>
            <div class="flex capsule_link_container">
              {% for social in sponsor.socials %}
                {% assign href = social.url %}
                {% if social.type == "email" %}
                  {% assign href = "mailto:" | append: social.url %}
                {% endif %}
                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                  <i class="{{ site.data.socials[social.type].icon }}"></i>
                </a>
              {% endfor %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="dark_bg">
  <div class="content_container">
    <h1>Diamond Sponsors ($100-$250)</h1>
    <div class="flex container">
      {% for sponsor in site.data.pong_info.sponsors.tiers['diamond'] %}
        <div class="flex capsule">
          <img src="{{ sponsor.logo }}" alt="logo for {{ sponsor.name }}">
          <div class="block">
            <div class="capsule_header diamond">
              <div class="capsule_header_text_container">
                <div class="capsule_name">{{ sponsor.name }}</div>
                <div class="capsule_role">Diamond Sponsor</div>
              </div>
            </div>
            <div class="flex capsule_link_container">
              {% for social in sponsor.socials %}
                {% assign href = social.url %}
                {% if social.type == "email" %}
                  {% assign href = "mailto:" | append: social.url %}
                {% endif %}
                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                  <i class="{{ site.data.socials[social.type].icon }}"></i>
                </a>
              {% endfor %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="dark_bg">
  <div class="content_container">
    <h1>Gold Sponsors ($0-$100)</h1>
    <div class="flex container">
      {% for sponsor in site.data.pong_info.sponsors.tiers['gold'] %}
        <div class="flex capsule">
          <img src="{{ sponsor.logo }}" alt="logo for {{ sponsor.name }}">
          <div class="block">
            <div class="capsule_header gold">
              <div class="capsule_header_text_container">
                <div class="capsule_name">{{ sponsor.name }}</div>
                <div class="capsule_role">Gold Sponsor</div>
              </div>
            </div>
            <div class="flex capsule_link_container">
              {% for social in sponsor.socials %}
                {% assign href = social.url %}
                {% if social.type == "email" %}
                  {% assign href = "mailto:" | append: social.url %}
                {% endif %}
                <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                  <i class="{{ site.data.socials[social.type].icon }}"></i>
                </a>
              {% endfor %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

</div>

<br>
<div class="flex flex-column center">
    <h2>PONG Socials</h2>
    <p>Catch up with us on our socials!</p>
    <div class="flex capsule_link_container center dark_bg flex_wrap">
        {% for social in site.data.pong_info.socials %}
            {% assign href = social.url %}
            {% if social.type == "email" %}
                {% assign href = "mailto:" | append: social.url %}
            {% endif %}
            <a href="{{ href }}" class="capsule_link" target="_blank" rel="noopener" style="background-color: {{ site.data.socials[social.type].color }};">
                <i class="{{ site.data.socials[social.type].icon }}"></i>
            </a>
        {% endfor %}
    </div>
</div>