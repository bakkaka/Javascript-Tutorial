const listMot = ["Cachalot", "Petunia", "Serviette"]
const listSentences = ["Pas de panique", "La vie est belle", "Merci pour toi"]
let score = 0
let choice = prompt("Veuiller choisir liste ou mots ou sentences" )
while(choice !== "mots" && choice !== "sentences" ){
     choice !== "mots" && choice !== "sentences"
}

if(choice === "mots"){
    for(let i = 0; i < listMot.length; i++){

        let motUser = prompt("Entrer le mot : " + listMot[i])
    
    if(motUser === listMot[i]){
        score++
    }
    console.log("Votre score est de " + score + " sur" + listMot.length)
}
}
else {
    for(let i = 0; i < listSentences.length; i++){

        let motUser = prompt("Entrer le mot : " + listSentences[i])
    
    if(motUser === listMot[i]){
        score++
    }
    
}    
console.log("Votre score est de " + score + " sur" + listSentences.length)
}



