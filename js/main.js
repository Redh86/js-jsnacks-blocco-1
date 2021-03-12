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
});

function peso(tot, array){
    for (var key in array) {
        tot = tot + array[key].peso;
    }; 
    return tot;
}

function reverse(wrds) {
    var lowRegStr = wrds.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr;
};