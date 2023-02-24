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
    var content = document.getElementById('textwraper');
    var scripts = document.getElementById('scriptGerado');
    var section = document.getElementById('textInput');
    var page1= document.getElementById('page1');
    

    //botão de gerar
    btn_gerar.addEventListener("click", gerar);
  
    //funções
    function gerar(){
    var content_html = document.getElementById('textarea_html').value;
    var content_js = document.getElementById('textarea_js').value;

    //Trocar o css
    document.getElementById('link').setAttribute("href", "./css/stylePagina2.css");
    
    //Omitir fase 1 
    page1.style.display = "none";
    //escrita do conteúdo
    content.innerHTML = content_html;
    scripts.innerHTML = content_js;

    console.log(content)
    console.log(scripts)
    
    

}
