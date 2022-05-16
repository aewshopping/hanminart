---
layout: layouts/base.njk
permalink: /portfolio/

---

<div class="grid-portfolio">

{% for post in collections.posts %}
  
{% set image_url = post.data.image %}
{% set image_url_thumb = image_url | replace("upload/", "upload/c_fill,w_400,h_400/q_60,f_auto/") %}
{% set image_url_bigthumb = image_url | replace("upload/", "upload/w_600/q_60,f_auto/") %}
  
<div class="grid-portfolio-cell {% if post.data.big_image == true %}grid-portfolio-cell-large{% endif %}">
<a class="main-link" href="{{post.url}}"><img class="grid-image-cover" loading="lazy" src="{% if post.data.big_image == true %}{{ image_url_bigthumb }}{% else %}{{ image_url_thumb }}{% endif %}" alt="{{ post.data.title}}"><span class="grid-portfolio-link-text-hidden">{{ post.data.title}}</span></a>
</div>

{% endfor %}
     
</div>