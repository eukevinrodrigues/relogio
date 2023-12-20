function atualizarTempo(){

var display = document.querySelector(".display");

var agora = new Date();

var horario = agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds();

display.textContent = horario
}

setInterval(atualizarTempo, 1000);

console.log(horario);