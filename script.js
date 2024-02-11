

let posizionePedinaUno = 0;
let posizionePedinaDue = 0;
let risulato = " ";
let caselle = {};
let btn = document.getElementById("dado");
let playerUno = true;
let playerDue = false;
let turnoFermoUno = 0;
let turnoFermoDue = 0;
let turno = document.getElementById("turno");
let count = 0


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

    console.log("posizione player uno: " + posizionePedinaUno)
    console.log("posizione player due: " + posizionePedinaDue)

    
    
}

function muoviUno(){
    let risultato = Math.floor(Math.random() * (1, 6) + 1);
    document.getElementById("result").innerHTML = "È uscito: " + risultato;
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
    else if( posizionePedinaUno == 10 || posizionePedinaUno == 25){
        passaTurnoUno()
        playerUno = false
        playerDue = true
    }
    else{
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
        colonna.classList.add("pedina-avanti-uno")
        playerUno = false 
        playerDue = true
        turno.innerHTML = "È il turno player due"
        
    }
   }

function muoviDue(){
    turno.innerHTML = "turno giocatore due";
    let risultato = Math.floor(Math.random() * (1, 6) + 1);
    document.getElementById("result").innerHTML = "È uscito: " + risultato;
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
    else if(posizionePedinaDue == 10 || posizionePedinaDue == 25){

        passaTurnoDue()
        playerDue = false
        playerUno = true
    }

    else{
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
        colonna.classList.add("pedina-avanti-due")
        playerUno = true 
        playerDue = false
       
    }
}

function passaTurnoUno() {
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
    colonna.classList.add("pedina-stop-uno");
    playerUno = !playerUno;
    turnoFermoUno = 1; 
       // Imposta il numero di turni fermi sulla casella 10 per il playerUno
    
}

function passaTurnoDue() {
    const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
    colonna.classList.add("pedina-stop-due")
    playerDue = !playerDue;
    turnoFermoDue = 1;
        // Imposta il numero di turni fermi sulla casella 10 per il playerDue
    
}



function lanciaDado(){
    

    muoviPedina()

}



