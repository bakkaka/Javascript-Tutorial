let listBoutons = document.querySelectorAll("button")
for(i = 0; i < listBoutons.length; i++){
     let boutonActuelle = listBoutons[i]
     console.log(boutonActuelle)

     boutonActuelle.addEventListener("click", (event) => {
          monBouton = event.target
     console.log(`J'ai cliqué sur le : ${monBouton.id}`)
    console.log(monBouton)

     })
}