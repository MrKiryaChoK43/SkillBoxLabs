//Задача 1
console.log("Задача 1"); 
// Исправьте код этой программы так, что в консоль выводился результат выполнения программы, а не ошибка
let currentYear = 2024

let student = 'Илья'
let year = 2006
let age = currentYear - year

console.log("Студент:", student);
console.log("Год рождения:", year);
console.log("Возраст:", age);

//Задача 2
console.log("Задача 2"); 
// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt("Введите название товара 1") // Название товара 1
let price1 = prompt("Введите стоимость товара  1") // Стоимость товара  1
let count1 = prompt("Введите количесто товара 1") // Количесто товара 1

console.log(product1, price1 * count1) // Вывод в консоль

let product2 = prompt("Введите название товара 2") // Название товара 2
let price2 = prompt("Введите стоимость товара  2")  // Стоимость товара  2
let count2 = prompt("Введите количесто товара 2") // Количесто товара 2

console.log(product2, price2 * count2) // Вывод в консоль

let product3 = prompt("Введите название товара 3") // Название товара 3
let price3 = prompt("Введите стоимость товара  3") // Стоимость товара  3
let count3 = prompt("Введите количесто товара 3") // Количесто товара 3

console.log(product3, price3 * count3) // Вывод в консоль
console.log("Сумма всей покупки", price1 * count1 + price2 * count2 + price3 * count3)

//Задача 3
console.log("Задача 3"); 
// Сделайте код программы короче, используя инкремент.

let index = 0 // Счетчик

// Бугун 1
let runner1 = "Денис"
console.log(++index, runner1);

// Бугун 2
let runner2 = "Виктория"
console.log(++index, runner2);

// Бугун 3
let runner3 = "Антон"
console.log(++index, runner3);

// Бугун 4
let runner4 = "Лена"
console.log(++index, runner4);

// Бугун 5
let runner5 = "Никита"
console.log(++index, runner5);

//Задача 4
console.log("Задача 4"); 

let sumAge = 0
for (let i = 1; i <= 3; i++) {
    let name = prompt()
    let year = prompt()
    sumAge = sumAge + 2024-year
    console.log(i, name, 2024-year);
  }
  console.log("Средний возраст:", sumAge/3)