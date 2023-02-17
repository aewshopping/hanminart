---
layout: layouts/article.njk
permalink: /about/

---

{% set myimage = "https://res.cloudinary.com/ds2o5ecdw/image/upload/v1654502374/han_min/birdwhiteflower.jpg" %}

{% set myimage_crop = myimage | replace("upload/", "upload/c_crop,h_800,w_1200,x_0,y_100/q_50,f_auto/") %}

{# alt image transformation upload/c_fill,w_1200/q_50,f_auto/ #}

<div class="image-position">

<img class="image-fullwidth-right" src="{{ myimage_crop }}" alt="painting of a bird with a flower">

<img class="image-fullwidth-left" src="{{ myimage_crop }}" alt="painting of a bird with a flower">

{% set myphoto_url = "https://res.cloudinary.com/dzmf4w5qr/image/upload/v1676666848/erica_han_wall.jpg" %}

{% set myphoto_transf = myphoto_url | replace("upload/", "upload/ar_1.0,c_fill,h_600,g_north/f_auto/") %}

<img class="image-portrait" src="{{ myphoto_transf }}" alt="the artist Han Min">

</div>
  
I paint in traditional Chinese watercolor style, taking inspiration from the flowers, plants and trees around us. My paintings are on silk and on paper.

My home is London UK: I moved here in 2009 to study interior and spatial design in Chelsea College of Art. Before that I lived for a decade in Beijing working as an interior designer.

I was born in Shanxi province and some of my earliest memories are of playing in the rice fields and by the river of my home town. I try to recreate this feel of touching nature in my art.

<a class="btn btn-dark" href="/portfolio/">portfolio</a>