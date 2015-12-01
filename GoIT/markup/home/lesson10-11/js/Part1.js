/**
 * Created by ivan.datsiv on 12/1/2015.
 */

var number = prompt("Введіть число!", "Введіть число");
var power = prompt("Введіть степень!", "Введіть степень");

var numberInPow = pow(number, power);

function pow(number, power) {

    var numberInPow = 1;

    while (power > 0) {
        numberInPow = numberInPow * number;
        --power;
    }

    return numberInPow;
}

console.log(number + " in power " +power + " = " +numberInPow);