---
title: 'Webbprogrammering — grunden'
image:
  url: '/assets/blog/computer.jpg'
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

På samma sätt som css kan javascript bakas in i din html-fil, som i exemplet nedan. Men det vanligaste sättet är att man lägger det i en egen fil med filändelse `.js`.

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

### Variabler

En variabel är ett namn du skapar, ger ett värde och sedan kan jobba med.

```javascript
let antal = 10;
antal = antal + 5;
// antal är nu 15 (förresten, så här ser en kommentar i koden ut)
```

Variabler kan _deklareras_ med `let` eller `const` i javascript. let skapar en variabel som kan ändras senare i koden, const (står för "constant") är menad att inte ändras efter den är satt. Att det finns olika sätt är tänkt att fungera som ett stöd för att undvika buggar 🐛 i koden.

### De olika typer variabel kan ha

Det finns en rad olika typer av variabler. Nedan är inte en komplett lista över alla typer som finns, utan istället de vanligt förekommande formerna du jobbar med när du programmerar.

```javascript
// Nummer (går att ändra med vanlig matematik )
const antal = 10;

// Sträng (all typ av text)
const efternamn = 'Johansson';

// Objekt (fungerar som ett sätt att samla en massa variabler under ett gemensamt namn)
const user = { name: 'Kalle', surname: 'Johansson', age: 42 };

// Array (en lista av variabler, bra för att senare kunna stega igenom alla saker i listan)
const frukter = ['Äpple', 'Banan', 'Ananas'];

// Boolean (kan vara true eller false)
const open = true;

// Ej satt värde (om satt manuellt så används null, variabel som aldrig haft ett värde kan vara undefined)
const value = null;
```

I javascript bestäms variabelns typ automatiskt när du skapar den. Det går sedan att ändra typ genom att bara ge den ett annat typ av värde.

I många andra programmeringsspråk måste man ange vilken typ variabeln ska ha när man skapar den, och sedan går det inte att ändra. Detta är för att hålla ordning och reda och undvika buggar. Det är bra praxis att försöka använda samma mönster i javascript även fast det inte är ett krav.

### if-satser

En if-sats låter dig köra utvald kod om det du anger i if-satsen är `true`. Observera att det som anges i if-satsens parentes _exekveras_ för att kolla om värdet är true/false.

Du kan ange en boolean variabel, eller vilken annan typ av variabel som helst, om den har ett värde så kommer den anses vara true (det finns några specialregler här som t.ex. att siffran 0 är false och även en tom sträng.

```javascript
let open = true;
if (open) {
  alert('Det är öppet!');
}

let antal = 10;
if (antal) {
  alert('Det finns ett antal');
}
```

Du kan även kolla om en variabel stämmer överens med något. Detta görs med dubbla eller trippla likhetstecken (beroende på hur strikt jämförelsen ska vara). En enkelt likhetstecken skulle ändra värdet på det som exekveras i parentesen, det vill vi inte, vi vill bara kolla om det är sant.

```javascript
let namn = 'Hugo';
if (namn === 'Kalle') {
  alert('Det är Kalle!');
}
// alerten kommer inte att köras, för kontrollen på namnet resulterar i false
```

Det går att vända på true/false värdet med ett utropstecken.

```javascript
let open = true;
if (!open) {
  alert('Det är stängt!');
}

let namn = 'Hugo';
if (namn !== 'Kalle') {
  alert('Det är inte Kalle!');
}
// alerten kommer inte att köras, för kontrollen på namnet resulterar i false
```

### Funktioner

När du skapat en funktion kan du kalla på den hur många gånger du vill. Funktionen kan ta emot en eller flera variabler, den kan utföra en uppgift och den kan `returnera` en variabel.

```javascript
let antal = 10;

function add(amount) {
  antal = antal + amount;
}

add(1);
add(5);

// antal är nu 16
```
