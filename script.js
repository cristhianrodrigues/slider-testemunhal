let imagemNaTela = 0,
    imagens = document.querySelectorAll(".imagensDoSlide img")
    maximoDeImagens = imagens.length,
    textoNaTela = 0,
    textos = document.querySelectorAll(".parteDoTexto div")
    maximoDeTextos = textos.length;

var botaoAnterior = document.getElementById("anterior");
var botaoProximo = document.getElementById("proximo");


botaoAnterior.addEventListener('click', function(){

    imagens[imagemNaTela].classList.remove("imagemSelecionada")
    textos[textoNaTela].classList.remove("textoSelecionado")

    imagemNaTela--
    textoNaTela--

    if(imagemNaTela <= -1)
        imagemNaTela = (maximoDeImagens -1)
        imagens[imagemNaTela].classList.add("imagemSelecionada")

    if(textoNaTela <= -1)
        textoNaTela = (maximoDeImagens -1)
        textos[textoNaTela].classList.add("textoSelecionado")
});

botaoProximo.addEventListener('click', function(){

    imagens[imagemNaTela].classList.remove("imagemSelecionada")
    textos[textoNaTela].classList.remove("textoSelecionado")

    imagemNaTela++
    textoNaTela++

    if(imagemNaTela >= maximoDeImagens)
        imagemNaTela = 0
        imagens[imagemNaTela].classList.add("imagemSelecionada")
    
    if(textoNaTela >= maximoDeTextos)
        textoNaTela = 0
        textos[textoNaTela].classList.add("textoSelecionado")
});







