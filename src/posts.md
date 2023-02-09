---
layout: layouts/base.njk
pagination:
  data: posts_cms
  size: 1
  alias: mydata
permalink: "portfolio/{{ mydata.url_name }}"

---

{% set image_url = mydata.image_url %}
{% set image_url_post = image_url | replace("upload/", "upload/c_fill,w_1200/q_50,f_auto/") %}

<p class="post-title">{{mydata.artwork_title}}</p>
<img class="image-post" src="{{image_url_post}}" alt="">

<article class="padding-top-none">

  <p><i>{% if mydata.media %}{{mydata.media}} {% endif %}{{mydata.dimensions}}</i></p> {#<button>{{ mydata.tags }}</button>#}

{% if mydata.description %}
<hr>
  
{{ mydata.description }}

{% endif %}
</article>