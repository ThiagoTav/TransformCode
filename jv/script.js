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
    var btn_gerar = document.getElementById('button');
    var content = document.getElementById('textInput');
    var script = document.getElementById('scriptGerado');

//botão de gerar
    btn_gerar.addEventListener("click", gerar);

//funções
    function gerar(){
    //omitir tela e gerar html
        var content_html = document.getElementById('textarea_hmtl').innerHTML;
        var content_js = document.getElementById('textarea_js').innerHTML;

        content.style.display = "none";
        document.body.innerHTML = content_html;
        document.script.innerHTML = content_js;
    }
