"use strict";
// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandomArray = (length, min, max) => {
const randomArray = [];
for (let i = 0; i < length; i++){
randomArray.push(Math.floor(Math.random() * (max - min) + min));
} 
return randomArray;
}    
    // console.log (getRandomArray(10, 3, 100));

// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2


const getModa = (...numbers) =>{
    let arrModa = (numbers.map(elem => parseInt(elem)));
    const uniqSet = new Set();
    for (let i = 0; i < arrModa.length; i++) {
        for (let j = 0; j < i; j++)
        if (arrModa[j] === arrModa[i]) {
            uniqSet.add(arrModa[i])
        }
    }
    return Array.from(uniqSet)}
    // console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//    3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) =>{
let arr = (numbers.map(elem => parseInt(elem)));
let sum = 0;
for(let i = 0; i < arr.length; i++){
sum += arr[i];
}
return sum / arr.length;
};
// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian1 = (...numbers) =>{

    let arr = (numbers.map(elem => parseInt(elem)));
    const median = arr.sort(function(a, b){
    return a-b;
    });
    let medianSize = median.length;
    if(medianSize % 2 === 1){
    return median[(medianSize / 2) - .5];
    } 
    return (median[medianSize / 2] + median[(medianSize / 2) - 1]) / 2;
        
    }
    // console.log(getMedian1 (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers  =(...numbers) => numbers.filter(elem => elem % 2 !== 0);

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers =(...numbers) => numbers.filter(elem => elem > 0).length;

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const  getDividedByFive  =(...numbers) => numbers.filter(elem => elem % 5 === 0);

/*8.Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"*/

const replaceBadWords = (string) => {
    let string = string.split(``).join(``);
    let bedWords = [`shit`, `fuck`];
    console.log(bedWords)
}
