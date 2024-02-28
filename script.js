
let dadoRotate = document.getElementById("dice");
let btn = document.getElementById("dado");
let turno = document.getElementById("turno");
let showModal = document.getElementById("modal-show");
const containerGrande = document.getElementsByClassName(".container")
let posizionePedinaUno = 0;
let posizionePedinaDue = 0;
let risulato = " ";
let caselle = {};
let playerUno = true;
let playerDue = false;
let turnoFermoUno = 0;
let turnoFermoDue = 0;
let count = 0;
let ritiraTimeDue; 
let duration = 2;



const numeriColonne = [
    "uno", "due", "tre", "quattro", "cinque", "sei",
    "sette", "otto", "nove", "dieci", "undici", "dodici",
    "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto",
    "diciannove", "venti", "ventuno", "ventidue", "ventitre", "ventiquattro",
    "venticinque", "ventisei", "ventisette", "ventotto", "ventinove", "trenta",
    "trentuno", "trentadue", "trentatre", "trentaquattro", "trentacinque", "trentasei",
    "trentasette", "trentotto", "trentanove", "quaranta", "quarantuno", "quarantadue",
    "quarantatre", "quarantaquattro", "quarantacinque", "quarantasei", "quarantasette", "quarantotto",
    "quarantanove", "cinquanta", "cinquantuno", "cinquantadue", "cinquantatre", "cinquantaquattro",
    "cinquantacinque", "cinquantasei", "cinquantasette", "cinquantotto", "cinquantanove", "sessanta",
    "sessantuno", "sessantadue", "sessantatre"
];


for ( let i = 1; i <= 63; i++){
    caselle[numeriColonne[i - 1]] = i
}

turno.innerHTML = "È il  turno del player uno"


function muoviPedina(){

    if(playerUno == true){
        if(turnoFermoUno > 0){
            turnoFermoUno-- 
            playerUno = false
            playerDue = true
        }
        else{
            muoviUno()
        }

    }else if(playerDue == true){
        if(turnoFermoDue > 0){
            turnoFermoDue--
            playerUno = true
            playerDue = false
        }else{
            muoviDue()

        }
    }



    
    
}

function muoviUno(){

    let risultato = Math.floor(Math.random() * (1, 6) + 1);
    switch(risultato){
        case 1:
            dadoRotate.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;
        case 2:
            dadoRotate.style.transform = 'rotateX(180deg) rotateY(0deg)';
            break;
        case 3:
            dadoRotate.style.transform = 'rotateX(-90deg) rotateY(0deg)';
            break;
        case 5:
            dadoRotate.style.transform = 'rotateX(0deg) rotateY(270deg)';
            break;
        case 4:
            dadoRotate.style.transform = 'rotateX(0deg) rotateY(90deg)';
            break;
        case 6:
            dadoRotate.style.transform = 'rotateX(90deg) rotateY(0deg)';
            break;
        default:
            break;
    }
    
    document.getElementById("result").innerHTML =  "È uscito: " + risultato;
    dadoRotate.classList.add("rotate-dice");
    posizionePedinaUno += risultato 
    

    // elimina classe avanti
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    // cicla tutte le colonne dove c'è la classe e la toglie
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-uno"));
    // elimina classe indietro
    const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
    // cicla tutte le colonne dove c'è la classe e la toglie
    colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-uno"))
    // elimina colonne stop
    const colonne_stop = document.querySelectorAll('.pedina-stop-uno');
    // cicla colonne stop
    colonne_stop.forEach(colonna => colonna.classList.remove('pedina-stop-uno'))
    console.log("è uscito: " + risultato)

    if(posizionePedinaUno > 63){
       
        const caselleIndietro = posizionePedinaUno - 63
        posizionePedinaUno = 63 - caselleIndietro

        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1]);

        colonna.classList.add("pedina-indietro-uno");
        playerUno = false 
        playerDue = true
        turno.innerHTML = "È il turno player due"
    }
    else if(posizionePedinaUno == 63){
        alert("Player uno hai vinto!!!")
        btn.setAttribute("disabled", "disabled")
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
        colonna.classList.add("winner");
        
    }
    else if( posizionePedinaUno == 10 || posizionePedinaUno == 25 || posizionePedinaUno == 54){
        passaUnTurnoUno()
        document.getElementById("stop").innerHTML = "Fermo UN turno";
        document.getElementById("stop").classList.add("stop");
        setTimeout(closeStop, 2000);
        playerUno = false;
        playerDue = true;
    }
    else if(posizionePedinaUno == 35 || posizionePedinaUno == 55 ){
        passaDueTurnoUno()
        document.getElementById("stop-due").innerHTML = "Fermo DUE turni";
        document.getElementById("stop-due").classList.add("stop");
        setTimeout(closeStopDue, 2000);
        playerUno = false;
        playerDue = true;
    }
    else if(posizionePedinaUno == 9 || posizionePedinaUno == 27 || posizionePedinaUno == 45 ){
        ritiraUno()
        document.getElementById("rilancia").innerHTML = "Ritira";
        document.getElementById("rilancia").classList.add("rilancia");
        setTimeout(rilancia, 2000);

    }
    else if(posizionePedinaUno == 5 || posizionePedinaUno == 29 || posizionePedinaUno == 49 ){
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ]);
        colonna.classList.add("pedina-avanti-uno");
        if(posizionePedinaUno == 5){
            document.getElementById("go-to").innerHTML = "Vai alla casella numero 13";
            document.getElementById("go-to").classList.add("go-to");
        }
        else if(posizionePedinaUno == 29){
            document.getElementById("go-to").innerHTML = "Vai alla casella numero 40";
            document.getElementById("go-to").classList.add("go-to");
        }
        else if(posizionePedinaUno == 49){
            document.getElementById("go-to").innerHTML = "Vai alla casella numero 55 e stai fermo due turni";
            passaDueTurnoUno()
            document.getElementById("go-to").classList.add("go-and-stop");
            setTimeout(closeStopDue, 2000);
            playerUno = false;
            playerDue = true;
        }
        setTimeout(goToUno, 2000);
        
    }
    else if(posizionePedinaUno == 20 || posizionePedinaUno == 60){
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ]);
        colonna.classList.add("pedina-avanti-uno");
        if(posizionePedinaUno == 20){
            document.getElementById("return-to").innerHTML = "Ritorna alla casella 14";
        }
        else if(posizionePedinaUno == 60){
            document.getElementById("return-to").innerHTML = "Ritorna alla casella 1";
        }
        document.getElementById("return-to").classList.add("return-to");
        setTimeout(returnToUno, 2000);
    }
    else{
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ]);
        colonna.classList.add("pedina-avanti-uno");
        playerUno = false;
        playerDue = true;
        turno.innerHTML = "È il turno player due";
        
    }
   }

function muoviDue(){

    let risultato = Math.floor(Math.random() * (1, 6) + 1);
    switch(risultato){
        case 1:
            dadoRotate.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;
        case 2:
            dadoRotate.style.transform = 'rotateX(180deg) rotateY(0deg)';
            break;
        case 3:
            dadoRotate.style.transform = 'rotateX(-90deg) rotateY(0deg)';
            break;
        case 5:
            dadoRotate.style.transform = 'rotateX(0deg) rotateY(270deg)';
            break;
        case 4:
            dadoRotate.style.transform = 'rotateX(0deg) rotateY(90deg)';
            break;
        case 6:
            dadoRotate.style.transform = 'rotateX(90deg) rotateY(0deg)';
            break;
        default:
            break;
    }
    document.getElementById("result").innerHTML = "È uscito: " + risultato;
    dadoRotate.classList.add("rotate-dice");
    turno.innerHTML = "turno giocatore due";
    posizionePedinaDue += risultato 
    console.log("è uscito: " + risultato)

    // elimina classe avanti
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    // cicla tutte le colonne dove c'è la classe e la toglie
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-due"));
    // elimina classe indietro
    const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
    // cicla tutte le colonne dove c'è la classe e la toglie
    colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-due"))
    // elimina classe stop
    const colonne_stop = document.querySelectorAll('.pedina-stop-due');
    // cicla colonne stop
    colonne_stop.forEach(colonna => colonna.classList.remove('pedina-stop-due'))
    

    if(posizionePedinaDue > 63){
       
        const caselleIndietro = posizionePedinaDue - 63
        posizionePedinaDue = 63 - caselleIndietro

        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1]);

        colonna.classList.add("pedina-indietro-due");
        playerUno = true 
        playerDue = false
        turno.innerHTML = "È il turno player uno"

 
    }
    else if(posizionePedinaDue == 63 ){
        alert("Player due hai vinto!!!")
        btn.setAttribute("disabled", "disabled")
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
        colonna.classList.add("winner");
        
    }
    else if(posizionePedinaDue == 10 || posizionePedinaDue == 25 || posizionePedinaDue == 54){
        passaUnTurnoDue()
        document.getElementById("stop").innerHTML = "Fermo UN turno";
        document.getElementById("stop").classList.add("stop");
        setTimeout(closeStop, 2000)
        playerDue = false
        playerUno = true
    }
    else if(posizionePedinaDue == 35 || posizionePedinaDue == 55){
        passaDueTurnoDue()
        document.getElementById("stop-due").innerHTML = "Fermo DUE turni";
        document.getElementById("stop-due").classList.add("stop");
        setTimeout(closeStopDue, 2000)
        playerDue = false
        playerUno = true
    }
    else if(posizionePedinaDue == 9 || posizionePedinaDue == 27 || posizionePedinaDue == 45 ){
        ritiraDue()
        document.getElementById("rilancia").innerHTML = "Ritira";
        document.getElementById("rilancia").classList.add("rilancia");
        setTimeout(rilancia, 2000);


    }
    else if(posizionePedinaDue == 5 || posizionePedinaDue == 29 || posizionePedinaDue == 49 ){
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ]);
        colonna.classList.add("pedina-avanti-due");
        if(posizionePedinaDue == 5){
            document.getElementById("go-to").innerHTML = "Vai alla casella numero 13";
            document.getElementById("go-to").classList.add("go-to");
        }
        else if(posizionePedinaDue == 29){
            document.getElementById("go-to").innerHTML = "Vai alla casella numero 40";
            document.getElementById("go-to").classList.add("go-to");
        }
        else if(posizionePedinaDue == 49){
            document.getElementById("go-to").innerHTML = "Vai alla casella numero 55 e stai fermo due turni";
            passaDueTurnoDue()
            document.getElementById("go-to").classList.add("go-and-stop");
            setTimeout(closeStopDue, 2000);
            playerUno = false;
            playerDue = true;
        }
        setTimeout(goToDue, 2000);
    }
    else if(posizionePedinaDue == 20 || posizionePedinaDue == 60){
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ]);
        colonna.classList.add("pedina-avanti-due");
        if(posizionePedinaDue == 20){
            document.getElementById("return-to").innerHTML = "Ritorna alla casella 14";
        }
        else if(posizionePedinaDue == 60){
            document.getElementById("return-to").innerHTML = "Ritorna alla casella 1";
        }
        document.getElementById("return-to").classList.add("return-to");
        setTimeout(returnToDue, 2000);
    }

    else{
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
        colonna.classList.add("pedina-avanti-due")
        playerUno = true 
        playerDue = false
        turno.innerHTML = "È il turno player uno"
    }
}



// funzioni caselle speciali


function passaUnTurnoUno() {
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
    colonna.classList.add("pedina-stop-uno");
    playerUno = !playerUno;
    turnoFermoUno = 1;  
    console.log("turno fermo uno funzione passaTurno: " + turnoFermoUno)   
}

function passaUnTurnoDue() {
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
    colonna.classList.add("pedina-stop-due")
    playerDue = !playerDue;
    turnoFermoDue = 1;
    console.log("turno fermo due funzione passaTurno: " + turnoFermoDue)  
}

function passaDueTurnoUno() {
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
    colonna.classList.add("pedina-stop-uno");
    playerUno = !playerUno;
    turnoFermoUno = 2;     
}

function passaDueTurnoDue() {
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
    colonna.classList.add("pedina-stop-due")
    playerDue = !playerDue;
    turnoFermoDue = 2;
}

function ritiraUno(){
    console.log("ritira uno time function")
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
    colonna.classList.add("pedina-avanti-uno")


}

function ritiraDue(){
    console.log("ritira due time function")
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
    colonna.classList.add("pedina-avanti-due")

}

function goToUno(){
    removeGoTo()
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-uno"));
    if(posizionePedinaUno == 5){
        posizionePedinaUno = 13;
    }
    else if(posizionePedinaUno == 29){
        posizionePedinaUno = 40;
    }
    else if(posizionePedinaUno == 49){
        posizionePedinaUno = 55;
    }
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
    colonna.classList.add("pedina-avanti-uno")
    playerUno = false;
    playerDue = true;
}

function goToDue(){
    removeGoTo()
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-due"));
    if(posizionePedinaDue == 5){
        posizionePedinaDue = 13;
    }
    else if(posizionePedinaDue == 29){
        posizionePedinaDue = 40;
    }
    else if(posizionePedinaDue == 49){
        posizionePedinaDue = 55;
    }
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
    colonna.classList.add("pedina-avanti-due")
    playerUno = true 
    playerDue = false
}

function returnToUno(){
    removeReturnTo()
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-uno"));
    if(posizionePedinaUno == 20){
        posizionePedinaUno = 14;
    }
    else if(posizionePedinaUno == 60){
        posizionePedinaUno = 1;
    }
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
    colonna.classList.add("pedina-avanti-uno")
    playerUno = false;
    playerDue = true;
}

function returnToDue(){
    removeReturnTo()
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-due"));
    if(posizionePedinaDue == 20){
        posizionePedinaDue = 14;
    }
    else if(posizionePedinaDue == 60){
        posizionePedinaDue = 1;
    }
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
    colonna.classList.add("pedina-avanti-due")
    playerUno = true;
    playerDue = false;
}


// funzioni modale per messaggi

function closeModal(){
   showModal.style.display = "none";
  

}

function closeStop(){
    document.getElementById("stop").innerHTML = "  ";
    document.getElementById("stop").classList.remove("stop");
}

function closeStopDue(){
    document.getElementById("stop-due").innerHTML = "  ";
    document.getElementById("stop-due").classList.remove("stop");
}

function rilancia(){
    document.getElementById("rilancia").innerHTML = " ";
    document.getElementById("rilancia").classList.remove("rilancia");
}

function removeGoTo(){
    document.getElementById("go-to").innerHTML = " ";
    document.getElementById("go-to").classList.remove("go-to");
}

function removeReturnTo(){
    document.getElementById("return-to").innerHTML = " ";
    document.getElementById("return-to").classList.remove("return-to");
}

// funzione rotazione dado




function diceOpacity(){
}

function lanciaDado(){
    muoviPedina()
    showModal.style.display = "flex";
    setTimeout(closeModal, 5000);
}

