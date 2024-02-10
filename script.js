

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

 count++
 console.log("count: " + count)


    

    if(playerUno === true){
    
        if(turnoFermoUno > 0){
            turnoFermoUno--  
        }
        else{
            muoviUno()
        }

    }else if(playerDue === true  ){

        if(turnoFermoDue > 0){
            turnoFermoDue--
        }else{
            muoviDue()

        }
    }

  
    
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
    

    if(posizionePedinaUno > 63){
       
        const caselleIndietro = posizionePedinaUno - 63
        posizionePedinaUno = 63 - caselleIndietro
        console.log("caselle indietro: " + caselleIndietro)

        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1]);

        colonna.classList.add("pedina-indietro-uno");
        playerUno == false 
        playerDue == true
        turno.innerHTML = "È il turno player due"

        // Esci dalla funzione se la pedina si muove indietro
        return risultato;
 
    }
    else if(posizionePedinaUno == 63){
        alert("Player uno hai vinto!!!")
        btn.setAttribute("disabled", "disabled")
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
        colonna.classList.add("winner");
        
    }
    else if(posizionePedinaUno == 10){
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
        colonna.classList.add("pedina-stop-uno");
        passaTurnoUno()
        
    }
    else{
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
        colonna.classList.add("pedina-avanti-uno")
        playerUno = false 
        playerDue = true
        turno.innerHTML = "È il turno player due"
        console.log("posizione uno:" + posizionePedinaUno)
        console.log("player uno: " + playerUno , "player due: " + playerDue)
    }
   }

function muoviDue(){
    turno.innerHTML = "turno giocatore due";
    let risultato = Math.floor(Math.random() * (1, 6) + 1);
    document.getElementById("result").innerHTML = "È uscito: " + risultato;
    posizionePedinaDue += risultato 

    // elimina classe avanti
    const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
    // cicla tutte le colonne dove c'è la classe e la toglie
    colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-due"));
    // elimina classe indietro
    const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
    // cicla tutte le colonne dove c'è la classe e la toglie
    colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-due"))
    

    if(posizionePedinaDue > 63){
       
        const caselleIndietro = posizionePedinaDue - 63
        posizionePedinaDue = 63 - caselleIndietro
        console.log("caselle indietro: " + caselleIndietro)

        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1]);

        colonna.classList.add("pedina-indietro-due");
        playerUno = true 
        playerDue = false
        turno.innerHTML = "È il turno player uno"

        // Esci dalla funzione se la pedina si muove indietro
        return risultato;
 
    }
    else if(posizionePedinaDue == 63){
        alert("Player due hai vinto!!!")
        btn.setAttribute("disabled", "disabled")
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
        colonna.classList.add("winner");
        
    }
    else if(posizionePedinaDue == 10){
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
        colonna.classList.add("pedina-stop-due");
        passaTurnoDue() // Imposta il numero di turni fermi sulla casella 10
        
    }
    else{
        const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
        colonna.classList.add("pedina-avanti-due")

        playerUno = true 
        playerDue = false
        turno.innerHTML = "È il turno player uno"
        console.log("posizione due:" + posizionePedinaDue)
    }
}

function passaTurnoUno() {
    if (posizionePedinaUno === 10) {
        playerUno = !playerUno;
        turnoFermoUno = 2; // Imposta il numero di turni fermi sulla casella 10 per il playerUno
    }
}

function passaTurnoDue() {
    if (posizionePedinaDue === 10) {
        playerDue = !playerDue;
        turnoFermoDue = 2; // Imposta il numero di turni fermi sulla casella 10 per il playerDue
    }
}



function lanciaDado(){
    

    muoviPedina()

}



