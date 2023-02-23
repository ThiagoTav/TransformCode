//Lógica Black and White
const html = document.querySelector("html");
const body = document.querySelector("body");
var data = new Date();
var horas = data.getHours();

console.log(horas);

window.addEventListener("load", function () {
  if (horas < 18) {
    html.classList.toggle("white-mode");
    body.classList.toggle("white-mode");
  }
});


//declaração de variáveis
var content_html = document.getElementById('textarea_hmtl');
var content_js = document.getElementById('textarea_js');
var btn_gerar = document.getElementById("button")

//botão de gerar
btn_gerar.addEventListener("click", gerar);

