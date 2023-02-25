//Lógica Black and White
const html = document.querySelector("html");
const body = document.querySelector("body");
const btn = document.getElementById('darkMode')

btn.onclick = function(){
  html.classList.toggle('active')
  this.classList.toggle('active')
  body.classList.toggle('active')
}

//declaração de variáveis para controle das pages
var btn_gerar = document.getElementById('btGerar');
var btn_voltar = document.getElementById('btVoltarDefault');
var page2 = document.getElementById('page2');
var content_user = document.getElementById('content');
var section = document.getElementById('textInput');
var page1= document.getElementById('page1');
/*
//declaração de variáveis para controle da seção introdução
var informacoesImagens = document.getElementsByClassName('conteudo')[0]
var enunciado = document.getElementsByClassName('escrita')[0]
var btComecar = document.getElementById('btGerar2');

//Ocultar a seção com os modelos
informacoesImagens.style.display = "none";
//Monitorar bt gerar para mexer com as seções
btComecar.addEventListener("mouseover", aparecerModelos)

function aparecerModelos(){
  enunciado.style.display = "none"
  informacoesImagens.style.display = "flex"
}*/

//Ocultar page2 quando a tela carregar
page2.style.display = "none";

//Monitoramento dos botões
btn_gerar.addEventListener("click", gerar);
btn_voltar.addEventListener("click", retornar);

//funções
function gerar(){
let content_html = document.getElementById('textarea_html').value;
let content_js = document.getElementById('textarea_js').value;

//Omitir a page1 e exibir page2
page1.style.display = "none";
page2.style.display = "flex";

//escrita do conteúdo HTML
content_user.innerHTML = content_html;

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

//Função do botão voltar 
function retornar(){

  //Mudar o link com CSS
  document.getElementById('link').setAttribute("href", "./css/styles.css");
  //Ocultar page 2
  page2.style.display = "none";
  //Mostra page1
  page1.style.display = "flex";
  

}
