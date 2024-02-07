


let numeroDado = 0 
let casellaUno = document.getElementById("uno")
let casellaDue = document.getElementById("due") 
let casellaTre = document.getElementById("tre") 
let casellaQuattro = document.getElementById("quattro") 
let casellaCinque = document.getElementById("cinque") 
let casellaSei = document.getElementById("sei") 
let casellaSette = document.getElementById("Sette") 

casellaUno = 1
casellaDue = 2
casellaTre = 3
casellaQuattro = 4
casellaCinque = 5
casellaSei = 6
casellaSette = 7


function lancio(){
    let risultato = Math.floor(Math.random() * (1, 6) + 1);
    document.getElementById("result").innerHTML = "È uscito: " + numeroDado;
    numeroDado = risultato
    
}

function lanciaDado(){
    lancio()
    console.log(numeroDado)
}



