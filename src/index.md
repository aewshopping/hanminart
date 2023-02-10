---
layout: layouts/base.njk
background: dark
footer_show: hide

---

{% set image_url="https://res.cloudinary.com/dzmf4w5qr/image/upload/v167554720/art/RoyalPeony.jpg" %}

{% set image_url_small_adj = image_url | replace("upload/", "upload/w_1200/q_60,f_auto/e_gradient_fade:1,y_0.3,b_rgb:4A442E/") %}

{% set image_url_large_adj = image_url | replace("upload/", "upload/w_1500/q_60,f_auto/e_gradient_fade:1,y_0.3,b_rgb:4A442E/") %}

<img class="image_fullpage" srcset="{{ image_url_small_adj }} 800w,
            {{ image_url_large_adj }} 1500w"
     sizes="(max-width: 550px) 800px,
            1500px"
     src="{{ image_url_small_adj }}"
     alt="artwork of han min">

