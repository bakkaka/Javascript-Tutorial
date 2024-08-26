const myWords = ["Bonjour", "Bonsoir", "Bon aprés midi"]
const myResponses = ["Bienvenue", "Bonne á vous", "A vous egalement"]
let score = 0

let request = prompt("Enter your words : myWords ou myResponses")

while( request != "myWords" && request != "myResponses"){
    request = prompt("Please choose your myWords or myResponses")
}

if(request === "myWords"){
    for(let i = 0; i < myWords.length; i++ ){
        let wordUser = prompt("Please choose this word " + myWords[i])
        if(wordUser === myWords[i]){
            score++

        }
    }
     console.log("Your score is " + score + " over " + myWords.length)
}
        let responseUser = prompt("Please choose this response " + myResponses[i])
        if(responseUser === myResponses[i]){
            score++
        }
    } 
    console.log("Your score is " + score + "over " + myResponses.length)
}
