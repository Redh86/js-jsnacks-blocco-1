// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm (:sorrisetto:).
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine


// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

$(document).ready(function(){
    var zucchine = [
    {
        "nome" : "zucchina 1",
        "varietà" : "verde", 
        "peso": 13,
        "lunghezza": 14,
    },
    {
        "nome" : "zucchina 2",
        "varietà" : "verde",
        "peso": 12,
        "lunghezza": 18,
    },
    {
        "nome" : "zucchina 3",
        "varietà" : "verde",
        "peso": 43,
        "lunghezza": 15,
    },
    {
        "nome" : "zucchina 4",
        "varietà" : "verde",
        "peso": 34,
        "lunghezza": 17,
    },
    {
        "nome" : "zucchina 5",
        "varietà" : "verde",
        "peso": 34,
        "lunghezza": 18,
    },
    {
        "nome" : "zucchina 6",
        "varietà" : "verde",
        "peso": 64,
        "lunghezza": 13,
    },
    {
        "nome" : "zucchina 7",
        "varietà" : "verde",
        "peso": 23,
        "lunghezza": 4,
    },
    {
        "nome" : "zucchina 8",
        "varietà" : "verde",
        "peso": 11,
        "lunghezza": 30,
    },
    {
        "nome" : "zucchina 9",
        "varietà" : "verde",
        "peso": 33,
        "lunghezza": 24,
    },
    {
        "nome" : "zucchina 10",
        "varietà" : "verde",
        "peso": 12,
        "lunghezza": 14,
    },
    ]
    var pesoTot = 0;
    for (var key in zucchine) {
        pesoTot = pesoTot + zucchine[key].peso;
    };
    console.log(pesoTot);


    var zucPic = [];
    var zucGran = [];
    for (var key in zucchine) {
        if (zucchine[key].lunghezza < 15) {
            zucPic.push(zucchine[key]);
        } else if (zucchine[key].lunghezza >= 15) {
            zucGran.push(zucchine[key]);
        }
    }
    console.log(zucPic);
    console.log(zucGran);

    var pesoTotPic = 0;
    for (var key in zucPic) {
        pesoTotPic = pesoTotPic + zucPic[key].peso;
    }; 
    console.log(pesoTotPic);

    var pesoTotGran = 0;
    for (var key in zucGran) {
        pesoTotGran = pesoTotGran + zucGran[key].peso;
    }; 
    console.log(pesoTotGran);

    var parola = prompt("inserisci parola");
    var lowRegStr = parola.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr);




// 1)
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.
// 2)
// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari
// 3)
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
// 4)
// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// 5)
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

// 1
var nomi = [
{
    "nome": "dario"
},
{
    "nome": "marco"
},
{
    "nome": "franco"
}, 
{
    "nome": "nico"
}, 
{
    "nome": "salvatore"
},
];
var cognomi = [
{
    "cognome" : "rossi"
}, 
{
    "cognome" : "verdi"
},
{ 
    "cognome": "gialli"
},
{
    "cognome" :  "neri"
},
{
    "cognome" :  "viola"
},
];

nm = Math.floor(Math.random()*(nomi.length - 1));
cgnm = Math.floor(Math.random()*(cognomi.length - 1));

console.log(nm);
console.log(cgnm);

console.log((nomi[nm]["nome"]) + " " + (cognomi[cgnm]["cognome"]));


// 2
    var intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var res = 0
    for ( var i = 0 ; i < intArray.length; i++){
        if (intArray[i] % 3 == 0 ) {
            var num = intArray[i];
            var res = res + num; 
        }       
   }
    console.log(parseInt(res));

// 3
   var belli = [1, 2, 3, 4];
   var brutti = [5, 6, 7, 8, 9, 10];

   if (belli.length < brutti.length) {
        arrayPush(belli, brutti); 
   } else if (arrayPrim.length > arraySec.length) {
        arrayPush(brutti, belli);    
   }
   console.log(belli);
   console.log(brutti);
// 4
   var lettere = ["a", "b", "c"];
   var numeri = [1, 2, 3];
   var shuffle = [];
   shuffle(lettere, numeri, shuffle);
   console.log(shuffle);
// 5

});


// funzioni

function shuffle(l, n, s){
    var s = [];
    for ( i = l.length; i > s.length; i-- ) {     
        s.push(l[i]);
        for ( i = n.length; i > s.length; i--) {
            s.push(n[i]);
        }
    } return s;
};

function arrayPush(primoArray, secondoArray){
    for ( i = primoArray.length; i < secondoArray.length; i++ ) {
        primoArray.push(Math.floor(Math.random()*(100 - 1 + 1 ))) +1;
    };
};

function peso(tot, array){
    for (var key in array) {
        tot = tot + array[key].peso;
    }; 
    return tot;
};

function reverse(wrds) {
    var lowRegStr = wrds.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr;
};