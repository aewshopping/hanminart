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
  
Erica Min Han, Chinese name: 韩敏.

Chinese born, London based artist.

Graduated from UAL, MA. 

Nature is my inspiration. The complexity, beauty, and the relationship with nature always draws my attention. I also immerse myself in ancient Chinese painting techniques. These are the two basic elements in my artwork.

The traditional Chinese watercolour technique that I paint reached its peak in the Song dynasty, in the 10th century. But we are living in the 21st century, so I paint my surroundings: the tulips, the daffodils, beautiful flowers in the garden or flowers in the wild.

With nature as my model, I play with the composition to make the scene even more beautiful, more personal and imaginative. I make live drawings from nature, and then transfer them onto silk using ink. Then I apply the colours layer by layer.

Most of my paintings are on silk, because the transparency of silk gives life to the work – if a breeze comes, as if the leaves would move.

My paintings are on silk and on Xuan paper.

Just drop me an email if you would like to talk about my artworks: {{ staticdata.links.myemail }}

I also take commissions. Just drop me an email if you would like to talk about it.

<a class="btn btn-dark" href="/portfolio/">portfolio</a>