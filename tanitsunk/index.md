---
layout: default
hero: true
title: "Tanítsunk"
category: tanitsunk
permalink: /tanitsunk/
---
<section class="hero">
  <div class="hero__bubbles" aria-hidden="true">
    <span class="hero__bubble">🐶</span>
    <span class="hero__bubble">🦴</span>
    <span class="hero__bubble">🎾</span>
    <span class="hero__bubble">🐾</span>
  </div>
  <div class="hero__inner">
    <span class="hero__badge">Gyakorlat 🐾</span>
    <h1>Tanítsunk!</h1>
    <p class="hero__lead">Kész vagy a tettek mezejére lépni? Itt megtalálod a konkrét gyakorlatokat lépésről lépésre – az ültetéstől a bukfencig. Válassz egy trükköt és klikk-kaja!</p>
  </div>
</section>

<section class="section">
  <ul class="card-grid">
    {% for link in site.data.navigation %}
      {% if link.title == 'Tanítsunk' %}
        {% assign colors = "card--grass,card--sky,card--sun,card--coral,card--grape" | split: "," %}
        {% for subitem in link.subitems %}
          {% assign ci = forloop.index0 | modulo: 5 %}
          <li>
            <a class="card {{ colors[ci] }}" href="{{ site.url }}{{ subitem.url }}">
              <span class="card__emoji">🐾</span>
              <span class="card__title">{{ subitem.title }}</span>
              <span class="card__more">Tovább →</span>
            </a>
          </li>
        {% endfor %}
      {% endif %}
    {% endfor %}
  </ul>
</section>
