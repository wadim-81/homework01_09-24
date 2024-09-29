// Задание 2.
// Объвить массив из 10 любых элементов, заполнить.
//  Вырезать первый элемент и добавить его в конец массива.
numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.shift();//вырезает первый элемент
numbers.push(1);//добавляет элемент в конец
console.log(numbers)

// Задание 3.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75.
//  Найти минимальное и максимальное значение в массиве.
//  Вывести в консоль их сумму.
const randomNumbers = [];
for (let i = 1; i < 10; i++) {
 randomNumbers.push( Math.floor(Math.random() * 75) + 1);
 console.log(randomNumbers)  }

 let max = randomNumbers[0];
let min = randomNumbers[0];
for (let i = 1 ; i < randomNumbers.length;i++){
if (randomNumbers[i] > max)
    {max = randomNumbers[i];

    } 
    if (randomNumbers[i] < min) {
        min = randomNumbers[i];
    }}
     console.log('максимальное число', max);
     console.log('минимальное число',min);
     console.log('max+min =',max + min)
