/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let areaQuadrato;
const area = function (l1, l2) {
  areaQuadrato = l1 * l2;
  return;
};
area(10, 5);
console.log('esercizio 1', areaQuadrato);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum;
const crazySum = function (n1, n2) {
  if (n1 + n2 === 15) {
    sum = (n1 + n2) * 3;
    console.log('esercizio 2', 'piccola sorpresa!');
    return;
  } else {
    sum = n1 + n2;
    return;
  }
};
crazySum(5, 10);
console.log('esercizio 2', 'il risultato è', sum);
crazySum(9, 10);
console.log('esercizio 2', 'il risultato è', sum);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let diff;
const crazyDiff = function (n1) {
  if (n1 > 19) {
    diff = n1 - 19;
    if (n1 > 19) {
      diff = diff * 3;
      console.log('esercizio3', 'risultato con sorpresa', diff);
      return;
    } else if (n1 < 19) {
      diff = 19 - n1;
      console.log('esercizio3', 'risultato', diff);
      return;
    }
  }
};
crazyDiff(5);
crazyDiff(15);
crazyDiff(25);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1;
let boundary = function (n) {
  if (n >= 20 && n <= 100) {
    n1 = true;
    console.log('esercizio4', 'risultato', n1);
    return;
  }
  if (n === 400) {
    n1 = true;
    console.log('esercizio4', 'risultato', n1);
    return;
  }
  if (n < 20) {
    n1 = false;
    console.log('esercizio4', 'risultato', n1);
    return;
  }
  if (n < 100 && n > 400) {
    n1 = false;
    console.log('esercizio4', 'risultato', n1);
    return;
  }
  if (n > 400) {
    n1 = false;
    console.log('esercizio4', 'risultato', n1);
    return;
  }
};
boundary(20);
boundary(400);
boundary(2);
boundary(400);
boundary(1000);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let epify = function (l) {
  let epy = [];
  epy.unshift(l);
  if (epy[0] === 'EPICODE') {
    console.log('esercizio5', epy);
    return;
  } else {
    epy.unshift('EPICODE');
    console.log('esercizio5', 'ok', epy);
    return;
  }
};
epify('EPICODE');
epify('DADDA');
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let checck3an7 = function (number) {
  let n = number;
  if (n > 0) {
    if (number % 3 === 0) {
      console.log('esercizio6', 'è divisibile per 3');
      return;
    } else {
      console.log('esercizio6', 'non è divisibile per 3');
    }
    if (number % 7 === 0) {
      console.log('esercizio6', 'è divisibile per 7');
      return;
    } else {
      console.log('esercizio6', 'non è divisibile per 7');
    }
  } else {
    console.log('esercizio6', 'no numeri negativi grazie');
  }
};
checck3an7(-3);
checck3an7(7);
checck3an7(3);
checck3an7(3);
checck3an7(11);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let joinArray;
function reversString(w) {
  let splitString = w.split('');
  let reverseArray = splitString.reverse();
  joinArray = reverseArray.join('');
  return joinArray;
}
reversString('ciao sono Libanio');
console.log(joinArray);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let m;
function maiuscola(word) {
  let m1;

  for (let i = 0; i < m1.lenght; i++) {
    m2 = m1[i].charAT(0);
    m3 = m2.splice(0);
    m4 = m3.upperCase();
    m5[i] = m4.unshit(i);
    return m;
  }
}
maiuscola('ciao sono Libanio');
console.log(m);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
