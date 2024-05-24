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

I immerse myself in ancient Chinese painting techniques and the beauty of nature. Those are the 2 basic elements in my artworks. 
The traditional Chinese watercolor technique that I paint reached its peak in the Song dynasty, in the 10th century. The complexity, the beauty, and the relationship with nature always draw my attention. But we are living in the 21st century, so I paint my surroundings, the tulips, the daffodils, beautiful flowers in my garden, my neighbors’ gardens or just wild flowers in nature.

I don’t copy exactly what I see in nature, I use them as a model, and play with the composition to make them even more beautiful, more personal and imaginative.

My paintings are on silk and on Xuan paper. Just drop me an email if you would like to talk about my artworks.

<a class="btn btn-dark" href="/portfolio/">portfolio</a>