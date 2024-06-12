let listaDeNumerosSortedos = []
numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;



console.log(numeroAleatorio)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial() {
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
mensagemInicial()
function verificarChute() {
    console.log("tentativas", + tentativas)

    let chute = document.querySelector('input').value;
    

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'vc acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `vc descobriu com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.querySelector("#reiniciar").removeAttribute('disabled')
    

    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p','o numero é menor q o chute');
        }else {
            exibirTextoNaTela('p','o numero é maior q o chute');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementsNaLista = listaDeNumerosSortedos.length;



    if (quantidadeDeElementsNaLista == numeroLimite){
        listaDeNumerosSortedos = []
    }
    if (listaDeNumerosSortedos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSortedos.push(numeroEscolhido)
        return numeroEscolhido;
        
    }
    
    
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciar() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
    console.log("numero ale", + numeroAleatorio)
    
}


