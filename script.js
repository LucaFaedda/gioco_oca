

let posizionePedina = 0
let risulato = " "
let caselle = {}
let btn = document.getElementById("dado")
let playerUno = true
let playerDue = false
let turno = document.getElementById("turno")
console.log(turno)


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



function turnoPlayerUno(playerUno){
    if(playerUno == true){
        
        // lancio dado
        let risultato = Math.floor(Math.random() * (1, 6) + 1);
        document.getElementById("result").innerHTML = "È uscito: " + risultato;
        posizionePedina += risultato 
    
        // elimina classe avanti
        const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-uno"));
        // elimina classe indietro
        const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-uno"))
        
    
        if(posizionePedina > 63){
           
            // caselle indietro se raggiunge il 63
            const caselleIndietro = posizionePedina - 63
            posizionePedina = 63 - caselleIndietro
            
            // rimanda indietro di tot caselle
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1]);
            
            //assegna classe caselle indietro
            colonna.classList.add("pedina-indietro-uno");
            turno.innerHTML = "È il turno player due"
            playerUno == false 
            playerDue == true
    
            // Esci dalla funzione se la pedina si muove indietro
            return risultato;
     
        }
        else if(posizionePedina == 63){
            alert("Player uno hai vinto!!!")
            btn.setAttribute("disabled", "disabled")
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("winner");
            
        }
        else{
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("pedina-avanti-uno")
            stop(posizionePedina)
            turno.innerHTML = "È il turno player due"
            playerUno = false 
            playerDue = true
            return risultato;
        }

    
}}

function turnoPlayerDue(playerDue){
    if(playerDue == true){
        turno.innerHTML = "turno giocatore due";
        let risultato = Math.floor(Math.random() * (1, 6) + 1);
        document.getElementById("result").innerHTML = "È uscito: " + risultato;
        posizionePedina += risultato 
    
        // elimina classe avanti
        const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-due"));
        // elimina classe indietro
        const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-due"))
        
    
        if(posizionePedina > 63){
           
             // caselle indietro se raggiunge il 63
            const caselleIndietro = posizionePedina - 63
            posizionePedina = 63 - caselleIndietro
           
            // rimanda indietro di tot caselle    
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1]);
            
            //assegna classe caselle indietro
            colonna.classList.add("pedina-indietro-due");
            turno.innerHTML = "È il turno player uno"
            playerUno = true 
            playerDue = false
    
            // Esci dalla funzione se la pedina si muove indietro
            return risultato;
     
        }
        else if(posizionePedina == 63){
            alert("Player due hai vinto!!!")
            btn.setAttribute("disabled", "disabled")
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("winner");
            
        }
        else{
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("pedina-avanti-due")
            stop(posizionePedina)
            turno.innerHTML = "È il turno player uno"
            playerUno = true 
            playerDue = false
            return risultato;
        }
    }
}

function muoviPedina(){
    if(playerUno == true){
        
        let risultato = Math.floor(Math.random() * (1, 6) + 1);
        document.getElementById("result").innerHTML = "È uscito: " + risultato;
        posizionePedina += risultato 
    
        // elimina classe avanti
        const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-uno"));
        // elimina classe indietro
        const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-uno"))
        
    
        if(posizionePedina > 63){
           
            const caselleIndietro = posizionePedina - 63
            posizionePedina = 63 - caselleIndietro
            console.log("caselle indietro: " + caselleIndietro)
    
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1]);
    
            colonna.classList.add("pedina-indietro-uno");
            playerUno == false 
            playerDue == true
            turno.innerHTML = "È il turno player due"
    
            // Esci dalla funzione se la pedina si muove indietro
            return risultato;
     
        }
        else if(posizionePedina == 63){
            alert("Player uno hai vinto!!!")
            btn.setAttribute("disabled", "disabled")
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("winner");
            
        }
        else{
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("pedina-avanti-uno")
            stop(posizionePedina)
            playerUno = false 
            playerDue = true
            turno.innerHTML = "È il turno player due"
        }

    }else if(playerDue == true){
        turno.innerHTML = "turno giocatore due";
        let risultato = Math.floor(Math.random() * (1, 6) + 1);
        document.getElementById("result").innerHTML = "È uscito: " + risultato;
        posizionePedina += risultato 
    
        // elimina classe avanti
        const colonne = document.querySelectorAll('.col-2-orrizontale , .col-2-verticale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne.forEach(colonna => colonna.classList.remove("pedina-avanti-due"));
        // elimina classe indietro
        const colonne_indietro = document.querySelectorAll('.col-2-orrizontale');
        // cicla tutte le colonne dove c'è la classe e la toglie
        colonne_indietro.forEach(colonna => colonna.classList.remove("pedina-indietro-due"))
        
    
        if(posizionePedina > 63){
           
            const caselleIndietro = posizionePedina - 63
            posizionePedina = 63 - caselleIndietro
            console.log("caselle indietro: " + caselleIndietro)
    
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1]);
    
            colonna.classList.add("pedina-indietro-due");
            playerUno = true 
            playerDue = false
            turno.innerHTML = "È il turno player uno"
    
            // Esci dalla funzione se la pedina si muove indietro
            return risultato;
     
        }
        else if(posizionePedina == 63){
            alert("Player due hai vinto!!!")
            btn.setAttribute("disabled", "disabled")
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("winner");
            
        }
        else{
            const colonna = document.getElementById(Object.keys(caselle)[posizionePedina - 1 ])
            colonna.classList.add("pedina-avanti-due")
            stop(posizionePedina)
            playerUno = true 
            playerDue = false
            turno.innerHTML = "È il turno player uno"
        }
    }

  
    
}

function stop(posizionePedina){
    
    if(posizionePedina == 10){
        console.log("STOP")
    }
}

function lanciaDado(){
    
    muoviPedina()

}



