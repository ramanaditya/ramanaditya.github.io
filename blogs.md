---
layout: default
permalink: '/blogs/'
---

<div id="main" class="alt" style="text-align: center;">
    <br>
    <header class="major">
      <h1>Popular Categories</h1>
    </header>
</div>


  <div class="row uniform">
    <div class="1u 12u$(medium)">
      <p></p>
    </div>
    <div class="10u 12u$(medium)">
{% capture site_categories %}{% for category in site.categories %}{{ category | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign category_words = site_categories | split:',' | sort %}

<div class="categories" >
  {% for item in (0..site.categories.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ category_words[item] | strip_newlines }}{% endcapture %}
    <a href="#{{ this_word | cgi_escape }}" class="categories-link button small" style="margin-bottom:5px;">{{ this_word | upcase }} <span>{{ site.categories[this_word].size }}</span></a>&nbsp;&nbsp;
  {% endunless %}{% endfor %}

  <hr>

  {% for item in (0..site.categories.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ category_words[item] | strip_newlines }}{% endcapture %}
      <header class="major">
        <h3 class="categories-title" id="{{ this_word | cgi_escape }}">
          {{ this_word | upcase }}
        </h3>
      </header>
      <div class="categories-group">
        {% for post in site.categories[this_word] %}
        {% if post.title != null %}
          
        <div class="box alt">
            <div class="row 50% uniform">
                <article>
                <span class="image left" style="max-width:30%;margin-right:10px;">
                <a href="{{ post.url | prepend: site.baseurl }}" class="image">
                <img src="{{ post.image | absolute_url }}" alt=""/></a>
                </span>
                <a class="category-link" href="{{ post.url | prepend: site.baseurl }}" style="font-weight:900;font-size: 1.17em;">{{ post.title }}</a>
                <span class="category-date">&nbsp;|&nbsp;{{ post.date | date_to_string }}</span>
                <br><br>            
                {{ post.excerpt }}<br>
                {% for tag in post.tags %}
                <a href="{{ site.baseurl }}/tags#{{ tag }}" style="color:#7f888f"><span class="icon fa-tag">{{ tag }}</span></a>
                {% endfor %}
                <span style="float:right;">
                    {% assign words = post.content | strip_html | number_of_words %}
                    {% if words < 360 %}
                      {% if words < 180 %}
                        Less than 1 min Read
                      {% else %}
                        1 min Read
                      {% endif %}
                    {% else %}
                      {{ words | divided_by:180 }} mins Read
                    {% endif %}
                </span>
                </article>
            </div>
           
        </div>
               
        {% endif %}
        {% endfor %}
        </div>
    {% endunless %}
    {% endfor %}
</div> <!-- /.Blogs -->
    <div class="1u 12u$(medium)">
        <p></p>
    </div>
</div>
