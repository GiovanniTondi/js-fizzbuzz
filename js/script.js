/*
    Scrivi un programma che stampi i numeri da 1
    a 100.
    Per i multipli di 3 stampi “Fizz” al posto del numero.
    Per i multipli di 5 stampi "Buzz" al posto del numero.
    Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.
*/

var volte = 100;

for (var i = 1; i <= volte; i++) {
    if (i%15 == 0) {
        console.log("FizzBuzz");
    } else if (i%3 == 0) {
        console.log("Fizz");
    } else if (i%5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
