"use strict";
// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandomArray = (length, min, max) => {
const randomArray = [];
if (min > max){
    return `Введіть правільні значення`;
}
for (let i = 0; i < length; i++){
randomArray.push(Math.floor(Math.random() * (max - min) + min));
} 
return randomArray;
}    
    // console.log (getRandomArray(10, 3, 100));

// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2


const getModa = (...numbers) =>{
    const arrModa = numbers.map((elem) => Number(elem)).filter((item) => parseInt(item) === item);
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
let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
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

    let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
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

const  getDividedByFive  =(...numbers) => {
    let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
    let i = 0;
    if (arr[i] === 0){
        return `Введіть значення`
    }
     return arr.filter(elem => elem % 5 === 0);}


/*8.Створіть функцію replaceAll(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceAll("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceAll("Holy shit!") -> "Holy ****!" Приклад: replaceAll("It's bullshit!") -> "It's bull****!"*/

function replaceAll(string) {

    let reg = /(shit)|(Fuck)/gi;  
    let newstr = string.replace(reg,  function(a) {
    return a.replace(/./g, '*');});
    return newstr;

};

// console.log(replaceAll('Are you fucking kidding?'));

// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
// Приклад: divideByThree("Commander") -> ["com", "man", "der"] 
// Приклад: divideByThree("live") -> ["liv", "e"]

const divideByThree = (word) => {
    if(Number.isInteger(+word)) {
        return 'number is found';
      }

    let word1 = word.split('').filter((letter) => letter !== ' ');
   
    let arrWord = [];
     for(let i = 0; i < word1.length; i + 3){
         arrWord.push(word1.splice(0, 3).join('').toLowerCase());
     }
     return arrWord;
    }
//  console.log(divideByThree(`Commander`)); }


 /*10.Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. 
 Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]*/

 function generateCombinations(str) {

   if (str.length > 10) {
    return `Введіть слово довженною не більше 10 літер`;
   };

 let str1 = str.toLowerCase().split('');

 if(str1.length === 1){ return [str1]};
 let res = [];
 for (let i = 0; i < str1.length; i++){
 const letter = str1.splice(0, 1);
 const result = generateCombinations(str1.join(''));
 result.forEach(item => res.push(item + letter));
 str1 = [...str1, ...letter];
 }
return res;
 }
//  console.log(generateCombinations("man"));



console.log('getRandomArray(10, 3, 100)=> ', getRandomArray(10, 3, 100));

console.log('getModa(4, 75, 62, 5, 2)=> ', getModa(4, 75, 62, 5, 2));
console.log('getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=> ',
    getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=> ',
    getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('getMedian1(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=>', 
getMedian1(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('getMedian1(1, 2, 3, 4)=>', getMedian1(1, 2, 3, 4));


console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6)=> ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6)=>', countPositiveNumbers(1, -2, 3, -4, -5, 6));

console.log('getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=>',
    getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log(`replaceAll('Are you fucking kidding?', 'shit', 'Fuck')=>`,
    replaceAll('Are you fucking kidding?', 'shit', 'Fuck'));
console.log('replaceAll(`It\'s bullshit!`=>', replaceAll(`It's bullshit!`));

console.log(`divideByThree('Commander')=> `, divideByThree('Commander'));
console.log(`divideByThree('live')=> `, divideByThree('live'));

console.log(`generateCombinations('man')=>`, generateCombinations('man'));
console.log(`generateCombinations('ol')=>`, generateCombinations('ol'));