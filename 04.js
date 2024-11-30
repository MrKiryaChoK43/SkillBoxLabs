//Задача 1
function calcArithMean (a, b, c){
    return ((a+b+c)/3)
}

console.log("Задача 1")

console.log(calcArithMean(5, 1, 3))
console.log(calcArithMean(4, 4, 4))
console.log(calcArithMean(0, 10, 11))

//Задача 2
function celsiusToFahrenheit (c) {
    return (c * 1.8 + 32)
}

function fahrenheitToCelsius (f) {
    return ((f-32) / 1.8)
}

console.log("Задача 2")

console.log (celsiusToFahrenheit(25))
console.log (celsiusToFahrenheit(10))
console.log (fahrenheitToCelsius(77))
console.log (celsiusToFahrenheit(0))
console.log (fahrenheitToCelsius(100))
console.log (fahrenheitToCelsius(0))

//Задача 3
let celsiusToFahrenheit2 = c => c * 1.8 + 32

let fahrenheitToCelsius2 = f => (f-32) / 1.8

console.log("Задача 3")

console.log (celsiusToFahrenheit(25))
console.log (celsiusToFahrenheit(10))
console.log (fahrenheitToCelsius(77))
console.log (celsiusToFahrenheit(0))
console.log (fahrenheitToCelsius(100))
console.log (fahrenheitToCelsius(0))

//Задача 4
let count = 0

function countPlusOne () {
    count += 1
}

console.log("Задача 4")

countPlusOne ()
console.log (count)
countPlusOne ()
countPlusOne ()
console.log (count)

//Задача 5
function totalSum(priceItem, amountItem, discountItem) {
    return (priceItem * amountItem * (1 - discountItem/100))
}

console.log("Задача 5")

console.log (totalSum(2500, 3, 20))