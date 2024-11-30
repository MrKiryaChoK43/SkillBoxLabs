//Задача 1
console.log('Задача 1')

let hasCard = true
let cardBalance = 1300

let enteredSumm = prompt("Введите сумму, которую хотите снять")

if (hasCard === true && cardBalance >= enteredSumm){
    console.log('Операция выполнена')
}
else {
    console.log('Операция отклонена')
}

//Задача 2
console.log('Задача 2')

let power = prompt("Введите мощность автомобиля")
let tax

if (power < 100){
    tax = 12
}
else if (100 <= power && power < 125 ){
    tax = 25
}
else if (125 <= power && power < 150 ){
    tax = 35
}
else if (150 <= power && power < 175 ){
    tax = 45
}
else if (175 <= power && power < 200 ){
    tax = 50
}
else if (200 <= power && power < 225 ){
    tax = 65
}
else if (225 <= power && power < 250 ){
    tax = 75
}
else {
    tax = 150
}

console.log("Сумма налога:", power * tax)