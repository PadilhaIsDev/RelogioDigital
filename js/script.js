
function updateClock() {
let now = new Date();
let horas = now.getHours().toString().padStart(2, '0');
let minutos = now.getMinutes().toString().padStart(2, '0');
let segundos = now.getSeconds().toString().padStart(2, '0');
let body = document.body;

document.getElementById('hours').innerHTML = horas;

document.getElementById('minutes').innerHTML = minutos;

document.getElementById('seconds').innerHTML = segundos;

if (horas > 5 && horas <= 12) {
    body.style.background = 'linear-gradient(180deg, rgba(29,240,253,1) 0%, rgba(255,255,255,1) 43%, rgba(84,252,69,1) 100%)'
}
else if (horas >= 13 && horas <= 17) {
    body.style.background = 'linear-gradient(180deg, rgba(255,43,43,1) 0%, rgba(254,216,21,1) 85%, rgba(250,214,49,1) 100%)'
}
else {
    body.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 16%, rgba(20,10,172,1) 100%)'
}
}

let button =document.querySelector('#botao')
let showH = document.querySelector('#hours')
let showM = document.querySelector('#minutes')
let showS = document.querySelector('#seconds')
button.addEventListener('click', () => {
    button.classList.toggle('green');
    showH.classList.toggle('show');
    showM.classList.toggle('show');
    showS.classList.toggle('show');
})

setInterval(updateClock, 1000);

updateClock;