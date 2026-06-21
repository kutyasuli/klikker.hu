---
layout: default
hero: true
title: "Tanuljunk"
category: tanuljunk
permalink: /tanuljunk/
---
<section class="hero">
  <div class="hero__bubbles" aria-hidden="true">
    <span class="hero__bubble">📚</span>
    <span class="hero__bubble">🧠</span>
    <span class="hero__bubble">💡</span>
    <span class="hero__bubble">🐾</span>
  </div>
  <div class="hero__inner">
    <span class="hero__badge">Elmélet 📚</span>
    <h1>Tanuljunk!</h1>
    <p class="hero__lead">Ne ess abba a hibába, hogy rögtön tanítani akarsz! Az elmélet megértése nélkül később nem ismered fel a saját hibáidat. Itt megtudod, hogyan is tanulnak az állatok.</p>
  </div>
</section>

<section class="section">
  <ul class="card-grid">
    {% for link in site.data.navigation %}
      {% if link.title == 'Tanuljunk' %}
        {% assign colors = "card--sky,card--grape,card--grass,card--sun,card--coral" | split: "," %}
        {% for subitem in link.subitems %}
          {% assign ci = forloop.index0 | modulo: 5 %}
          <li>
            <a class="card {{ colors[ci] }}" href="{{ site.url }}{{ subitem.url }}">
              <span class="card__emoji">💡</span>
              <span class="card__title">{{ subitem.title }}</span>
              <span class="card__more">Tovább →</span>
            </a>
          </li>
        {% endfor %}
      {% endif %}
    {% endfor %}
  </ul>
</section>
