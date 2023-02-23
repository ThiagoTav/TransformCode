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
    var btn_gerar = document.getElementById('btGerar');
    var content = document.getElementById('main').innerHTML;
    var scripts = document.getElementById('scriptGerado');
    var section = document.getElementById('textInput');
    var button = document.getElementById('button');

    //botão de gerar
    btn_gerar.addEventListener("click", gerar);

    //funções
    function gerar(){
    var content_html = document.getElementById('textarea_html').value;
    var content_js = document.getElementById('textarea_js').value;

    section.style.display = "none";
    button.style.display = "none";
    //escrita do conteúdo
    content = content_html;
    scripts = content_js;
    //omitir tela e gerar html
    console.log(content)
    console.log(scripts)
}