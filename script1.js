const listMots = ["Cachalot", "Petunia", "Serviette"]
const listePhrases = ["Pas de panique", "La vie, l'univers et le reste ", "Merci pour le poisson"]
let score = 0

let choix = prompt("Veuilez choisir la liste: mots ou phrases" )
while( choix != "mots" && choix != "phrases"){
    choix = prompt("Veuiilez choisir la liste : mots ou phrases")
  
}
if(choix === "mots"){
    for (let i = 0; i < listMots.length; i++){
        let motUser = prompt("Entrer le mots " + listMots[i])
        if (motUser === listMots[i]){
            score++
    }
}
console.log("Votre score est de " + score + "sur" + listMots.length)
}
else {
    
    for (let i = 0; i < listePhrases.length; i++){
       let  phraseUser = prompt("Entrer la phrase " + listePhrases[i])
        if(phraseUser === listePhrases[i]){
            score++
        }
    }
    console.log("Votre score est de " + score + "sur"  + listePhrases.length)
}
