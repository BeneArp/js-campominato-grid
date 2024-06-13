// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// RIFERIMENTI DAL DOM
const bottonePerGiocare = document.getElementById("bottone-gioco");
const containerGriglia = document.querySelector(".row");



// CICLO
// creazione griglia
for (let i = 1; i <= 100; i++){
    
    // creo i div con la classe associata usando la funzione
    const divBox = addHtmlElementWithClass("div", "box");
    divBox.addEventListener("click",
        function(){
            divBox.classList.add("active");
        }
    )

    // inserisco i numeri progressivi nei div
    divBox.append(i);

    // inserisco i div con i numeri nel dom
    containerGriglia.append(divBox);

}




// EVENTO CLICK SUL BOTTONE PER INIZIARE LA PARTITA
bottonePerGiocare.addEventListener("click",
    function(){
        // aggiungo la classe display non al bottone
        bottonePerGiocare.classList.add("invisible");
        // rimuovo la classe display none dalla griglia
        containerGriglia.classList.remove("invisible");
    }
)




// FUNZIONI

// crea un elemento html con una classe associata
function addHtmlElementWithClass (tag, elementClass){
    // creo un elemento
    const elemento = document.createElement(tag);
    // gli aggiugo una classe
    elemento.classList.add(elementClass);

    return elemento;
}
  
