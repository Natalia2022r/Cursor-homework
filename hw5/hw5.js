"use strict";
// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
const getRandomArray = (length, min, max) => {
const randomArray = [];
if (min > max){
    return `Введіть правільні значення`;
}
for (let i = 0; i < length; i++){
randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
} 
return randomArray;
}    

// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 

const getModa = (...numbers) =>{
    const arrModa = numbers.map((elem) => Number(elem)).filter((item) => parseInt(item) === item);
    const countItems = arrModa.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
      }, {});
      const result = Object.keys(countItems).filter((item) => countItems[item] > 2);
      return result; 
    
}


//    3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ


const getAverage = (...numbers) =>{
let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
let sum = 0;
for(let i = 0; i < arr.length; i++){
sum += arr[i];
}
return sum / arr.length;
};



// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ


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
 

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції


const filterEvenNumbers  =(...numbers) =>{
    let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
       if (arr.length === 0){
        return `Введіть значення`
    }

 return numbers.filter(elem => elem % 2 !== 0);
}

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0


const countPositiveNumbers =(...numbers) => {
    let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
    if (arr.length === 0){
        return `Введіть значення`
    }
   return numbers.filter(elem => elem > 0).length;
}

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

const  getDividedByFive  =(...numbers) => {
    let arr = numbers.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
    let i = 0;
    if (arr[i] === 0){
        return `Введіть значення`
    }
     return arr.filter(elem => elem % 5 === 0 && elem !== 0);}


/*8.Створіть функцію replaceAll(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.*/


function replaceAll(string) {

    let reg = /(shit)|(Fuck)/gi;  
    let newstr = string.replace(reg,  function(argument) {
    return argument.replace(/./g, '*');});
    return newstr;

};

// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 

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



 /*10.Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. */


function generateCombinations(string) {
    if (!string) return 'Ще не ввели значення';
       if (string.length > 10) {
        return `Введіть слово довженною не більше 10 літер`;
       };
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        } else {
            let out = [];
            for (let i = 0; i < string.length; i++) {
                let pre = string.substring(0, i);
                let post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            return out;
        }
    }
    let distinct = {};
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    return Object.keys(distinct);
}
 

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
console.log(`generateCombinations('ol')=>`, generateCombinations(`ol`));
