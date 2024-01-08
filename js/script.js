function relogioDigital() {
    let agora = new Date();
    let horas =  agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');
    let tempoReal = `${horas}:${minutos}:${segundos}`;
    document.getElementById('hours').textContent = tempoReal;
    let body = document.body;

     if (horas > 4 && horas <= 12) {
        body.style.background = 'linear-gradient(0deg, rgba(133,253,45,1) 0%, rgba(34,156,195,1) 73%)';
    } else if (horas >12 && horas < 18) {
        body.style.background = 'radial-gradient(circle, rgba(209,58,17,1) 0%, rgba(255,171,0,1) 100%)';
    } else { 
        body.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(16,7,149,1) 100%)';
    }
}

    setInterval(relogioDigital, 1000);
    relogioDigital();