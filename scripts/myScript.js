function displayResult(score, nbSuggested){

    console.log("Your score is " + score + " over " + nbSuggested)

}

/*Here no paramters because the user must enter the words or phrases */
function chooseWordsOrPhrases(){
    let choice = prompt("Please what list would you like to play ?  words or phrases ? " )
    while(choice !== "words" && choice !== "phrases"){
        choice = prompt("Please what list would you like to play ?  words or phrases ? " )

    }
    return choice
}
 
function startInitialGame(listSuggestions){
    let score = 0
    for(let i = 0; i < listSuggestions.lenght; i++){
        // We ask to the user to enter his choice
        let wordUser = prompt("Enter the word : " + listSuggestions[i] )
        if(wordUser === listSuggestions[i]){
            //If the wordUser is correct we increment the score
            score++

        }
}
    return score
}
function startGame(){
    // Initialisation
    let choice = chooseWordsOrPhrases()
    let score = 0 
    let nbSuggested = 0

    // We define the lists to be sugested to the user
    if(choice === "words"){
        score = startInitialGame(listWords)
        nbSuggested = listWords.length
    }
    else {
        score = startInitialGame(listPhrases)
        nbSuggested = listPhrases.length
    }

    displayResult(score, nbSuggested)

    
}