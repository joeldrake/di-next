---
title: 'Webbprogrammering — grunden'
image:
  url: '/assets/blog/code.jpg'
  width: 1200,
  height: 600,
author: 'Joel Drake'
date: '2021-02-02'
tags: coding
lang: sv
hidden: true
---

Det här är en guide för dig som vill lära dig hur programmering fungerar. Inriktningen kommer vara webbprogrammering, för att kunna skapa hemsidor och webbappar, men principen för den mesta formen av programmering är ändå densamma.

## De tre beståndsdelarna av en webbsida

En webbsida består tekniskt sett av tre olika byggstenar: `HTML`, `CSS` och `Javascript`. Det sista (javascript) är den delen som egentligen handlar om programmering. Men för att kunna bygga en webbsida behöver du känna till de andra två delarna också.

### HTML

Detta är webbsidans skelett. Du kan skapa en fil med valfritt namn och filändelsen `.html`, öppna den sedan med en webbläsare så kommer webbläsaren att avkoda din HTML-kod och visa innehållet.

Olika html-taggar används för att berätta för webbläsaren vad det är för typ av innehåll, och de kan även påverka hur innehållet visas.

```html
<div>
  <h4>Hej, det här är en rubrik 👋</h4>
  <p>Det här är en paragraf med <i>kursiv text</i></p>
</div>
```

<div>
  <h4>Hej, det här är en rubrik 👋</h4>
  <p>Det här är en paragraf med <i>kursiv text</i></p>
</div>

<br />

## CSS

Detta är webbsidans design. Du kan skapa en fil med filändelsen `.css` och sedan länka in den i din html-fil. Du kan även skriva css-kod inbakat i din html-fil. Så har jag gjort i exemplet nedan.

```html
<div class="exempel">
  <h4 class="rubrik">Hej, det här är en rubrik 👋</h4>
  <p class="paragraf">Det här är en paragraf med <i>kursiv text</i></p>
</div>

<style>
  .rubrik {
    font-size: 32px;
  }
  .paragraf {
    color: blue;
  }
  .exempel i {
    font-weight: bold;
  }
</style>
```

<div class="exempel">
  <h4 class="rubrik">Hej, det här är en rubrik 👋</h4>
  <p class="paragraf">Det här är en paragraf med <i>kursiv text</i></p>
</div>

<style>
  .rubrik {
    font-size: 32px;
  }
  .paragraf {
    color: blue;
  }
  .exempel i {
    font-weight: bold;
  }
</style>

<br />

## Javascript

Detta är vad som gör webbsidan interaktiv. Med javascript kan du göra så att något händer när användaren t.ex. klickar på en knapp eller eller skriver något i ett textfält.

På samma sätt som css kan javascript bakas in i din html-fil, som i exemplet nedan. Men det vanligaste sättet är att man lägger det i en egen fil med filändels `.js`.

```html
<div>
  <button id="exempelKnapp">Klicka på mig</button>
</div>

<script>
  function visaMeddelande() {
    alert('Hej 👋, alert är en inbyggd function i javascript');
  }

  const exempelKnapp = document.getElementById('exempelKnapp');

  exempelKnapp.onclick = visaMeddelande;
</script>
```

<button onclick="alert('Hej 👋, alert är en inbyggd function i javascript')">Klicka på mig</button>

<br />

Nu har du koll på grunderna för webben. Nu kan vi komma igång med det intressanta!

## Nu börjar programmeringen 🤓

Javascript är den del av webbprogrammering som mest liknar klassisk programmering, som förekommer i andra delar av IT-världen. Vi börjar med att gå igenom några grundkoncept.

### Variablar

En variabel är ett namn du skapar och sedan ge ett värde.

```javascript
let antal = 10;
```

Du kan sedan använda din variabel i koden, t.ex. skicka den till en funktion. Variablar kan _deklareras_ med `let` eller `const` i javascript. let skapar en variabel som kan ändras senare i koden, const (står för "constant") är menad att inte ändras efter den är satt. Att det finns två olika sätt är tänkt att fungera som ett sätt att hjälpa dig att undvika buggar 🐛 i koden.

### De olika typer variabel kan ha

Det finns en rad olika typer av variablar.
