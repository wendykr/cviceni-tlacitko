# Cvičení: Vlastní DOM elementy

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Tlačítko

Pomocí vlastních DOM elementů přidáme na stránku několik tlačítek.

- Založte si nový projekt příkazem

```javascript
npm init kodim-app@latest cviceni-tlacitko html-css-js
```

- Otevřete si ve VS Code vytvořenou složku `cviceni-tlacitko`.

- Vytvořte si jednoduchou stránku obsahující nám tak dobře známý element `#app`.

```html
<body>
  <div id="app"></div>
</body>
```

- Otevřete si konzoli prohlížeče a pomocí funkce `document.createElement` si do nějaké proměnné vytvořte tlačítko `button`.

- Nastavte tomuto tlačítku `textContent` na „Mačkej“.

- Přidejte na tlačítko CSS třídu `btn`.

- Vyberte ze stránky element `#app` a vložte tlačítko na stránku pomocí metody `append`.

- Stejným postupem přidejte na stránku ještě další dvě tlačítka s různými nápisy a sledujte, kam do stránky se vložila.