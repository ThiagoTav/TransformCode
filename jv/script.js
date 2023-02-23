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
