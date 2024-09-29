// Задание 4.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. 
// Найти сумму всех элементов массива. Вывести в консоль.
numbers = [];
for (let i = 1; i < 10;i++){
    numbers.push(Math.floor(Math.random() * 50) + 1);
} 
let sum = 0;
for ( let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}


console.log('Массив:', numbers);
console.log('Сумма элементов:', sum);