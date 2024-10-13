const motApplication = "bonjour"
let motUser = prompt("Entrer le mot : " + motApplication)

switch(motUser){
    case motApplication: 
    console.log("Bravo !")
    break;
    case "Gredin" :
    console.log("Un peu de respect !")
    break;
    case "Mecreant" : 
    console.log("Attention á ce que tu dis !")
    break;
    case "Vilain" :
        console.log("Soyer gentil !")
        break;
        default :
        console.log("Vous avez fait une faute de frappe !")
}