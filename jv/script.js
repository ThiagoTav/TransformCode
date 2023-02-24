//Lógica Black and White
const html = document.querySelector("html");
const body = document.querySelector("body");
var data = new Date();
var horas = data.getHours();
console.log(horas);
window.addEventListener("load", function () { //Lógica LEITURA
  if (horas < 18) {
    html.classList.toggle("white-mode");
    body.classList.toggle("white-mode");
  }
});

//declaração de variáveis
var btn_gerar = document.getElementById('btGerar');
var content = document.getElementById('page2');
var section = document.getElementById('textInput');
var page1= document.getElementById('page1');

//Ocultar page2(content)
content.style.display = "none";

//Monitoramento do botão gerar
btn_gerar.addEventListener("click", gerar);

//função
function gerar(){
let content_html = document.getElementById('textarea_html').value;
let content_js = document.getElementById('textarea_js').value;

//Omitir a page1 e exibir page2
page1.style.display = "none";
content.style.display = "flex";

//escrita do conteúdo HTML
content.innerHTML = content_html;

//Mudar o link com CSS
document.getElementById('link').setAttribute("href", "./css/stylePagina2.css");

//gerar script a partir do js do usuário
var tagScript = document.createElement("script")
tagScript.setAttribute("type", "text/javascript")
var textScript = document.createTextNode(content_js)
tagScript.appendChild(textScript)
document.body.appendChild(tagScript)

//teste console
console.log(content)
console.log(scripts)
}

