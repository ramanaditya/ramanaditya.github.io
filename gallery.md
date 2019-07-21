---
layout: gallery
permalink: /gallery/
---

{% for post in site.assets.gallery.assets.images.thumbs %}
<article class="thumb">
    <a href="{{ post.url | absolute_url }}" class="image"><img src="{{ post.url | absolute_url }}" alt="" /></a>
    <h2>Magna feugiat lorem</h2>
    <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
</article>
{% endfor %}


<article class="thumb">
    <a href="{{ 'assets/gallery/images/fulls/13.jpg' | absolute_url }}" class="image"><img src="{{ 'assets/gallery/images/thumbs/13.jpg' | absolute_url }}" alt="" /></a>
    <h2></h2>
    <p></p>
</article>
<article class="thumb">
    <a href="{{ 'assets/gallery/images/fulls/14.jpg' | absolute_url }}" class="image"><img src="{{ 'assets/gallery/images/thumbs/14.jpg' | absolute_url }}" alt="" /></a>
    <h2></h2>
    <p></p>
</article>
<article class="thumb">
    <a href="{{ 'assets/gallery/images/fulls/15.jpg' | absolute_url }}" class="image"><img src="{{ 'assets/gallery/images/thumbs/15.jpg' | absolute_url }}" alt="" /></a>
    <h2></h2>
    <p></p>
</article>
