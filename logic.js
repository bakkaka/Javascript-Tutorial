function displayResult(score, nbSuggestedWords){
    console.log("Your score is : " + score + " over " + nbSuggestedWords)

}

function chooseWordsOrSentences(){
    let choice = prompt("What list would you play? 'words' or 'sentences' ? ")
    //Stil the user dont input a word we relist the list one more time
    while(choice !== "words" && choice !== "sentences"){
        choice = prompt("What list would you play? 'words' or 'sentences' ? ")

    }
    return choice
}

function startLoopSuggestions(listSuggestions){
    let score = 0
    
    for(let i = 0; i < listSuggestions.length; i++){
        let wordUser = prompt("Enter word : " + listSuggestions[i])
    }
    if(wordUser === listSuggestions[i]){
        score++
    }
    return score

}

function startGame(){
    //Initialisation
    let choice = chooseWordsOrSentences()
    let score = 0
    let nbSuggestedWords = 0
    // Here we determine lists of words or sentences
    if(choice === "words"){
        score = startLoopSuggestions(listWords)
        nbSuggestedWords = listWords.length

    }
    else {
        score = startLoopSuggestions(listSentences)
        nbSuggestedWords = listSentences.length 
    }
  displayResult(score, nbSuggestedWords)

}