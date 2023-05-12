const appElm = document.querySelector('#app');

const button1Elm = document.createElement('button');
const button2Elm = document.createElement('button');
const button3Elm = document.createElement('button');

button1Elm.textContent = 'Mačkej';
button1Elm.classList.add('btn');

button2Elm.textContent = 'Klikni';
button2Elm.classList.add('btn');

button3Elm.textContent = 'Přidrž';
button3Elm.classList.add('btn');

appElm.append(button1Elm, button2Elm, button3Elm);
