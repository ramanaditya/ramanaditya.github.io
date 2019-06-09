---
layout: default
---

<!-- Section -->
<section>
	<header class="major">
		<h2>About Me</h2>
	</header>
	<div class="features">
		<article>
			<span class="icon fa-user"></span>
			<div class="content">
				<a href="https://ramanaditya.github.io/about.html"><h3>Portfolio</h3></a>
				<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			</div>
		</article>
		<article>
			<!--<span class="icon" ><strong><i class="fas fa-pencil-alt" style="font-size:2.6em; color: rgb(255,92,95);margin-top:1.5em;"></i></strong></span>-->
			<span class="icon fa-pencil"></span>
			<div class="content">
				
				<a href="#"><h3>Blogs</h3></a>
				<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			</div>
		</article>
		<article>
			<span class="icon fa-rocket"></span>
			<div class="content">
				<h3>Projects</h3>
				<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			</div>
		</article>
		<!--<article>
			<span class="icon fa-folder-open-o"></span>
			<div class="content">
				<h3>Sed magna finibus</h3>
				<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			</div>
		</article>-->
	</div>
</section>

<!-- Section -->
<section>
	<header class="major">
		<h2>Ipsum sed dolor</h2>
	</header>
	<div class="posts">
		{% for post in site.posts %}
		<article>
			<a href="#" class="image"><img src="{{ post.image }}" alt="" /></a>
			<h3>{{ post.title }}</h3>
			<p>{{ post.excerpt }}</p>
			<ul class="actions">
				<li><a href="{{ post.url | relative_url }}" class="button">Read More</a></li>
			</ul>
		</article>
		{% endfor %}
		<!--
		<article>
			<a href="#" class="image"><img src="assets/images/pic02.jpg" alt="" /></a>
			<h3>Nulla amet dolore</h3>
			<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			<ul class="actions">
				<li><a href="#" class="button">More</a></li>
			</ul>
		</article>-->
	</div>
</section>
