---
layout: layouts/base.njk
permalink: /portfolio/

---

<div class="grid-portfolio">

{% for post in posts_cms %}

{% set image_url = post.image_url_https %}
{% set image_url_thumb = image_url | replace("upload/", "upload/c_fill,w_600,h_600/q_60,f_auto/") %}
{% set image_url_bigthumb = image_url | replace("upload/", "upload/w_600/q_60,f_auto/") %}

<div class="grid-portfolio-cell {% if post.portfolio_size == "big" %}grid-portfolio-cell-large{% endif %}">
<a href="{{post.url_name}}"><img class="grid-image-cover{% if post.portfolio_size == "big" %}-large{% endif %}" loading="lazy" src="{% if post.portfolio_size == "big" %}{{ image_url_bigthumb }}{% else %}{{ image_url_thumb }}{% endif %}" alt="{{ post.artwork_title}}" width="450" height="450" ></a>
</div>

{% endfor %}
     
</div>