

let posizionePedinaUno = 0;
let posizionePedinaDue = 0;
let risulato = " ";
let caselle = {};
let btn = document.getElementById("dado");
let playerUno = true;
let playerDue = false;
let turnoFermo = 0;
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
 console.log(count)


    if (turnoFermo > 0) {
        turnoFermo--;
        if (turnoFermo === 0) {
            passaTurno();
        }
        return;

    }

    

    if(playerUno == true){
        
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
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("winner");
            
        }
        // else if(posizionePedinaUno === 10){
            
        //     turnoFermo == 1
        //     playerUno = false
        //     playerDue = true
        //     console.log ("stop player uno" + turnoFermo)
        //     console.log("posizione uno: " + posizionePedinaUno)
        // }
        else{
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaUno - 1 ])
            colonna.classList.add("pedina-avanti-uno")
            if (posizionePedinaUno == 10) {
                turnoFermo = 2; // Imposta il numero di turni fermi sulla casella 10
            } else {
                passaTurno();
            }
            playerUno = false 
            playerDue = true
            turno.innerHTML = "È il turno player due"
            console.log("posizione uno:" + posizionePedinaUno)
            console.log("player uno: " + playerUno , "player due: " + playerDue)
        }

    }else if(playerDue = true  ){
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
        // else if(posizionePedinaDue == 10){
        //     turnoFermo == 2
        //     playerUno = true
        //     playerDue = false
        //     console.log ("stop player due" + turnoFermo)
        //     console.log("posizione due: " + posizionePedinaDue)
        // }
        else{
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedinaDue - 1 ])
            colonna.classList.add("pedina-avanti-due")
            if (posizionePedinaDue == 10) {
                turnoFermo = 2; // Imposta il numero di turni fermi sulla casella 10
            } else {
                passaTurno();
            }
            playerUno = true 
            playerDue = false
            turno.innerHTML = "È il turno player uno"
            console.log("posizione due:" + posizionePedinaDue)
        }
    }

  
    
}

function passaTurno() {
    playerUno = !playerUno;
    playerDue = !playerDue;


}



function lanciaDado(){
    

    muoviPedina()

}



