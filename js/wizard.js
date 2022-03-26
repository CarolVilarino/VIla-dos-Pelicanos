

function changeText1 () {
    document.getElementById("textoMuda").innerHTML = "Agora eu preciso que você me ajude! Você poderia ir até a minha biblioteca ?  <br> 1) Ir até a biblioteca <br> 2) Jogar algo na cara do Wizard <br> 3) Ir Embora";  
    var escolha1 = prompt("Qual sera a sua escolha ?")

    var tentativas = 2;
    var tentou = 0;
    while (tentou <= tentativas ) {

        if (escolha1 == 1) {
            alert ("Otimo, agora preciso que me ajude a invocar uma Spell. Há boatos de um lobisomen na cidade e quero combatelo")
            window.location.href="../html/fases/fase-um-wizard.html"
            
        } else if ( escolha1 == 1 ) {
            alert ("Você me decepcionou, saia de minha casa!")
            window.location.href="../html/escolhaPersonagem.html" 
        }
    }
}

 