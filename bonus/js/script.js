// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// RIFERIMENTI DAL DOM
const bottonePerGiocare = document.getElementById("bottone-gioco");
const containerGriglia = document.querySelector(".row");
const selettore = document.getElementById("livello");

// CICLO
// creazione griglia
// for (let i = 1; i <= 100; i++){
    
//     // creo i div con la classe associata usando la funzione
//     const divBox = addHtmlElementWithClass("div", "box");

//     // inserisco i numeri progressivi nei div
//     divBox.append(i);

//     // aggiungo l'evento al click di ogni div
//     divBox.addEventListener("click",
//         function(){
//             divBox.classList.add("active");
//             console.log(i);
//         }
//     )

//     // inserisco i div con i numeri nel dom
//     containerGriglia.append(divBox);

// }





// EVENTO CLICK SUL BOTTONE PER INIZIARE LA PARTITA
bottonePerGiocare.addEventListener("click",
    function(){
        // aggiungo la classe display non al bottone
        bottonePerGiocare.classList.add("invisible");
        // aggiungo la classe display non al bottone
        selettore.classList.add("invisible");
        // rimuovo la classe display none dalla griglia
        containerGriglia.classList.remove("invisible");
        // valore livello di difficoltà scelto
        const sceltaUtente = selettore.value;
        console.log(sceltaUtente);

        if(sceltaUtente === "facile"){
            // crezione griglia con funzione
            createGrid(1, 100, containerGriglia);

        }else if(sceltaUtente === "medio"){
            createGrid(1, 81, containerGriglia);

        }else{
            // crezione griglia con funzione
            createGrid(1, 49, containerGriglia)
        }
        

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

// funzione creazione girglia
  function createGrid (min, max, contenitoreElementi){

    for(let i = min; i <= max; i++){
        const divBox = addHtmlElementWithClass("div", "box");

        divBox.append(i);
     
        divBox.addEventListener("click",
            function(){
                divBox.classList.add("active");
                console.log(i);
            }
        )

        contenitoreElementi.append(divBox);

       }
     return contenitoreElementi;
  }