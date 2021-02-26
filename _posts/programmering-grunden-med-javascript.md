---
title: 'Programmering — grunden med javascript'
image:
  url: '/assets/blog/computermagic.jpg'
  width: 1200,
  height: 600,
author: 'Joel Drake'
date: '2021-02-02'
tags: coding
lang: sv
---

Det här är en guide för dig som vill lära dig hur programmering fungerar generellt, men inriktningen är webbutveckling. Guiden utgår från javascript, då det är vad som används för att skapa hemsidor och webbappar, men principen för den mesta formen av programmering är ändå densamma.

Innan vi går in på javascript måste vi först göra göra en snabb genomgång av generell webbutveckling.

## De tre beståndsdelarna av en webbsida

En webbsida består tekniskt sett av tre olika byggstenar: `HTML`, `CSS` och `Javascript`. Det sista (javascript) är den delen som egentligen handlar om programmering. Men för att kunna bygga en webbsida behöver du känna till de andra två delarna också.

### HTML

Detta är webbsidans skelett. Du kan skapa en fil med valfritt namn och filändelsen `.html`, öppna den sedan med en webbläsare så kommer webbläsaren att avkoda din HTML-kod och visa innehållet.

Olika html-taggar används för att berätta för webbläsaren vad det är för typ av innehåll. De kan även påverka hur innehållet visas eller ge en viss funktion.

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

### CSS

Detta är webbsidans design. Centralt i css är `classer` som skrivs och sedan hakas på i html-kodens taggar.

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

### Javascript

Detta är vad som gör webbsidan interaktiv. Med javascript kan du göra så att något händer när användaren t.ex. klickar på en knapp eller eller skriver något i ett textfält.

```html
<div>
  <button id="exempelKnapp">Klicka på mig</button>
</div>

<script>
  function visaMeddelande() {
    alert('Hej 👋, alert är en inbyggd funktion i javascript');
  }

  const exempelKnapp = document.getElementById('exempelKnapp');

  exempelKnapp.onclick = visaMeddelande;
</script>
```

<button onclick="alert('Hej 👋, alert är en inbyggd funktion i javascript')">Klicka på mig</button>

<br />

Nu har du koll på grunderna för webben. Nu kan vi komma igång med det intressanta!

## Nu börjar programmeringen 🤓

Javascript är den del av webbprogrammering som mest liknar klassisk programmering, som förekommer i andra delar av IT-världen. Vi börjar med att gå igenom några grundkoncept.

## Variabler

En variabel är ett namn du skapar, ger ett värde och sedan kan jobba med.

```javascript
let antal = 10;
antal = antal + 5;
// antal är nu 15 (förresten, så här ser en kommentar i koden ut)
```

Variabler kan _deklareras_ med `let` eller `const` i javascript. let skapar en variabel som kan ändras senare i koden, const (står för "constant") är menad att inte ändras efter den är satt. Att det finns olika sätt är tänkt att fungera som ett stöd för att undvika buggar 🐛 i koden.

### De olika typer en variabel kan ha

Det finns en rad olika typer av variabler. Nedan är inte en komplett lista över alla typer som finns, utan istället de vanligt förekommande formerna du jobbar med när du programmerar.

```javascript
// Nummer (går att ändra med matematiska operatorer)
const antal = 10;

// Sträng (all typ av text)
const efternamn = 'Johansson';

// Objekt (fungerar som ett sätt att samla flera variabler under ett gemensamt namn)
const user = { name: 'Kalle', surname: 'Johansson', age: 42 };

// Array (en lista av variabler, bra för att senare kunna stega igenom alla saker i listan)
const frukter = ['Äpple', 'Banan', 'Ananas'];

// Boolean (kan vara true eller false)
const open = true;

// Ej satt värde (om satt manuellt så används null, variabel som aldrig haft ett värde är undefined)
const value = null;
```

I javascript bestäms variabelns typ automatiskt när du skapar den. Det går sedan att ändra typ genom att bara ge den ett annat typ av värde.

I många andra programmeringsspråk måste man ange vilken typ variabeln ska ha när man skapar den, och sedan går det inte att ändra. Detta är för att hålla ordning och reda och undvika buggar.

I takt med att javascript har utvecklats har det här tänket börjat användas mer och mer i webbutveckling. Många avancerade webbsidor använder [Typescript](https://www.typescriptlang.org/) för att tvinga typ-deklaration.

## if-satser

En if-sats låter dig köra utvald kod när det du testar i if-satsen är `true`. Observera att det som anges i if-satsens parentes _exekveras_ för att kolla om värdet är true/false.

Du kan ange en boolean variabel, eller vilken annan typ av variabel som helst, om den har ett värde så kommer den anses vara true. Det finns några specialregler här som t.ex. att siffran 0 är false och även en tom sträng är false.

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

Du kan även kolla om en variabel stämmer överens med något. Detta görs med trippla likhetstecken (det går att använda dubbla likhetstecken, det är en mindre strikt kvarleva från den gamla tiden och bör undvikas). Ett enkelt likhetstecken skulle ändra värdet på det som exekveras i parentesen, det vill vi inte, vi vill bara kolla om det är sant.

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
// alerten kommer att köras, för kontrollen på namnet resulterar i true
```

### Operatorer

Det finns en uppsjö av [operatorer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) för att ändra eller kontrollera värden i koden. Här är en förteckning av de vanligaste.

| Operator | Förklaring                         | Exempel  |
| -------- | ---------------------------------- | -------- |
| =        | Sätter en variabel till ett värde  | a = b    |
| ===      | Lika med? (jämför två värden)      | a === b  |
| !==      | Inte lika med                      | a !== b  |
| +        | Plus                               | a + b    |
| +=       | Adderar värde till en variabel     | a += b   |
| ++       | Ökar värdet med 1                  | a++      |
| -        | Minus                              | a - b    |
| -=       | Subtraherar värde från en variabel | a -= b   |
| --       | Minskar värdet med 1               | a--      |
| /        | Delat med                          | a / b    |
| \*       | Gånger                             | a \* b   |
| >        | Större än                          | a > b    |
| <        | Mindre än                          | a < b    |
| >=       | Större eller lika med              | a >= b   |
| <=       | Mindre eller lika med              | a <= b   |
| \|\|     | Eller                              | a \|\| b |
| &&       | Och                                | a && b   |

## Funktioner

När du skapat en funktion kan du kalla på den från andra ställen i koden. Funktioner kan ta emot en eller flera variabler, de kan utföra en uppgift och de kan `returnera` en variabel.

#### Exempel utan returnering

```javascript
let antal = 10;

function add(amount) {
  antal = antal + amount;
}

add(1);
add(5);

// antal är nu 16
```

#### Exempel med returnering

```javascript
function add(a, b) {
  return a + b;
}

let antal = add(5, 5);
// antal är nu 10
```

Man kan sätta ett namn på sin funktion som man sedan använder för att kalla på den, som i exemplen ovan. Det går även att skapa _anonyma_ funktioner. De har inget namn och används på ställen där ett namn på funktionen skulle vara överflödigt. Dessa funktioner kallas också för `arrow functions` eftersom syntaxen har en form av "pil" i sig.

```javascript
(a, b) => {
  return a + b;
};
```

Det går även att lagra en anonym funktion i ett variabelnamn. Då får man samma beteende som en namngiven funktion (med vissa skillnader).

```javascript
const namn = () => {
  return 'Kalle';
};

alert(namn());
// Kommer skicka upp en alert() med texten "Kalle"
```

Observera att det finns en _mängd_ inbyggda funktioner i javascript. Till exempel `alert()` som i exemplet ovan är en inbyggd funktion som skickar upp en ruta med valfri text. En annan vanligt förekommande är `fetch()` som används för att hämta data över nätverket.

## Iterationer/loopar

Iterationer kallas oftast i svenskt talspråk för loopar. På engelska säger man dock _iteration_ så det kan vara enklast att förhålla sig till det (det internationella språket som används inom programmeringskod är engelska).

En iteration är en instruktion i koden att en viss sak ska hända upprepade gånger.

```javascript
let antal = 0;
for (let index = 0; index < 100; index++) {
  // följande kod kommer att köras 100 gånger
  antal++;
}

// antal är nu 100
```

Exemplet ovan är en _klassik_ syntax för iteration som förekommer i en del andra programmeringsspråk också.

Det finns många andra sätt att göra iterationer i javascript. Vissa metoder är lämpade för att ändra en lista till en annan form. Andra former är lämnade för att filtrera en lista till ett mindre antal.

#### Exempel på att gå igenom alla värden i en array

```javascript
const frukter = ['Äpple', 'Banan', 'Ananas'];
frukter.forEach((frukt) => {
  // kommer att kalla på funktionen eat() med respektive frukt
  eat(frukt);
});
```

#### Exempel på att filtrera en array

```javascript
const listaMedNummer = [42, 123, 64, 2, 70];
const urval = listaMedNummer.filter((antal) => {
  return antal > 50;
});

// urval kommer vara en array de siffror som var över 50: [123, 64, 70]
```

## Sammanfattning

Det här inlägget skrapar på ytan av _vissa delar_ av programmering med javascript. Jag hoppas det har gett dig en lite bättre insikt i denna värld. Jag har insett att det är ett ganska stort åtagande att försöka täcka in allt i ett enskilt blogginlägg... 😅

Om du vill lära dig vidare så är min rekommendation att ladda ner textredigeraren [Visual Studio Code](https://code.visualstudio.com/), skapa en fil med filändelsen `.html` och börja testa dig fram.

Googla sedan saker du vill göra. Bra sidor att hämta information från när man googlat är [w3schools.com](https://www.w3schools.com/), [developer.mozilla.org](https://developer.mozilla.org/) och [stackoverflow.com](https://stackoverflow.com/).

När du kommit en bit på vägen och vill börja utforska mer avancerad webbutveckling så kommer du behöva sätta dig in i terminalen på din dator, npm, ramverk som t.ex React, Vue eller Svelte. I framtiden kanske jag gör ett nytt blogginläggsom som handlar om detta.

<br />

_Det här inlägget kan komma att uppdateras i framtiden_
