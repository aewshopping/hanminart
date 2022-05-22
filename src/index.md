---
layout: layouts/base.njk
background: dark
footer_show: hide

---

{% set image_url="https://res.cloudinary.com/ds2o5ecdw/image/upload/han_min/flower_on_silk_highres.jpg" %}

{% set image_url_small_adj = image_url | replace("upload/", "upload/w_800/q_60,f_auto/e_gradient_fade:1,y_0.3,b_rgb:4A442E/") %}

{% set image_url_large_adj = image_url | replace("upload/", "upload/w_1500/q_60,f_auto/e_gradient_fade:1,y_0.3,b_rgb:4A442E/") %}

<img class="image_fullpage" srcset="{{ image_url_small_adj }} 800w,
            {{ image_url_large_adj }} 1500w"
     sizes="(max-width: 550px) 800px,
            1500px"
     src="{{ image_url_small_adj }}"
     alt="flower on silk">

{# <p><a href="/about/" class="splash_enter_link">visit</a></p> #}
