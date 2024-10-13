const listMots = ["Cachalot", "Petunia", "Serviette"]
const listSentences = ["Bonjour", "Bonsoir", "Bonne nuit"]
let score = 0
let choice = prompt("Veuillez entrer : mots ou phrases")

while(choice !== "mots" && choice !== "phrases"){
    choice = prompt("Veuillez entrer : mots ou phrases")

}

if(choice === "mots"){
    for(let i = 0; i < listMots.length; i++){
        let motUser = prompt("Ecrivez le mot " + listMots[i])
        if(motUser === listMots[i]){
            score++
        }
        console.log("Votre score est " + score + "sur" + listMots.length)
    }
}
    else {
        for(let i = 0; i < listSentences.length; i++){
            let motUser = prompt("Ecrivez la phrase " + listSentences[i])
            if(motUser === listSentences[i]){
                score++
            }
        }
    }
    console.log("Votre score est " + score + "sur" + listSentences.length)





