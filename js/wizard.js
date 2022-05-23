$(document).ready( function() {
     
});

function mudaTexto () {
    $(".zeroUm").click(function() {
        $('.texto-um').hide()
        $('.texto-dois').removeClass('invisible').addClass('visible');
    });
}
function escolhaUmMuda () {  
    $('.texto-dois').hide()
    $('.texto-tres').removeClass('invisible').addClass('visible')
}

function escolhaUm () {
    
    var escolha1 = prompt("Qual sera a sua escolha ?")
 

    if (escolha1 == 1) {  
        escolhaUmMuda()   
    } else if ( escolha1 == 2 ) {
        alert ("Você me decepcionou, saia de minha casa!")
        window.location.href="../html/escolhaPersonagem.html" 
    } else {
        alert ('Você decidiu não ajudar o mago e ele ficou com raiva de você')
        window.location.href='../html/finalmagoUm.hmtl'
    }
}

function escolhaDoisMuda() {
    $('#zeroTresMuda').click(function (){
        $('.texto-tres').hide()
        $('.texto-tres-a').removeClass('invisible').addClass('visible')
    })
}

function escolhaDois () {
    var escolha2 = prompt('O que deseja fazer?')

    if (escolha2 == 1) {  
        alert ('Você achou livros muito interessantes e ficou por horas perdido no mundo, o mago até esqueceu da sua existência e quando você se deu conta já era noite') 
        window.location.href='../html/fases/finalmagoUm.html'
    } else if ( escolha2 == 2 ) {
        alert ("Era uma armadilha hahaha, o mago não precisava de pedra alguma. Agora você terá de arrumar a bagunça dele, caso o contrário você irá virar um sapo...Bom, é o que diz no bihete misterioso em cima da pilha de roupa") 
        window.location.href='../html/fases/finalMagoUM.html'
    } else {
        alert ('Você encontrou a pedra e agora poderá ajudar o mago. Todo mundo da vila sabe como ele é muito misterioso, talvez você ganhe recompensas maravlhosas')
        window.location.href='../html/fases/FinalMagoTres.html'
    }

}