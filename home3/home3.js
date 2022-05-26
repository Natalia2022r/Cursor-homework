"use strict";

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {


    if (number < 0) throw new RangeError("Positive number is expected");
    if (number < 10) return number;
    return number = Math.max(number % 10, getMaxDigit(parseInt(number / 10)));
  
  }
  function rand () {
  return rand = Math.floor(Math.random() * 1000);};
  
  const maxDigit = getMaxDigit(rand());
  
  document.getElementById("result1").innerHTML = (`<div ><p>getMaxDigit => ${rand} => ${maxDigit}</p></div>`);

    // 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл


    function pow(x, n) {
        let result = 1;
      
        for (let i = 1; i < n; i++) {
          result *= x;
        }
      
        return result;
      }
      
      // alert( pow(prompt (`Число`), prompt(`Степень`)) );

      document.getElementById("result2").innerHTML = (`<div ><p>function pow (5, 3) => ${pow(5, 3)}</p></div>`);

    //  3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

    
// function name1() {
//   // let str = prompt ('Введите имя');
    
//   // while(!str || +str) {
//   //   alert(`Введите имя`);
//   //  str = prompt ('Введите имя');
//   //  }
  
//   return str[0].toUpperCase() + str.slice(1).toLowerCase();
//      }
    
//     alert(name1());

    const isname = (name) => {
        return name[0].toUpperCase() + name.toLowerCase().slice(1);
    }

    document.getElementById("result3").innerHTML = (`<div ><p>function name(naTALIA) => ${isname(`naTALIA`)}</p></div>`);
    document.getElementById("result31").innerHTML = (`<div ><p>function name(naTAlIa) => ${isname(`naTAlIa`)}</p></div>`);



    // 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

const calcResult = (salary, taxRate ) => salary - salary * (parseFloat(taxRate) / 100);

//  alert (calcResult (prompt (`salary`), prompt(`taxRate`)));

document.getElementById("result4").innerHTML = (`<div ><p>function calcResult(6000, 19.5% ) => ${calcResult(6000, 19.5)}</p></div>`);



//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (n, m) =>{
    return Math.floor(Math.random() * (m - n + 1)) + n; 
}
// console.log(getRandomNumber(5, 25))

document.getElementById("result5").innerHTML = (`<div ><p>function getRandomNumber(5, 25) => ${getRandomNumber(5, 25)}</p></div>`);

// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
    if (!isNaN(Number(letter)) && letter !== ' ') {

       return 'Ви ввели число';
       } else if (!isNaN(Number(word)) && word !== ' ') {

        return 'Ви ввели число';}

    let counter = 0;
    let letterLower = letter.toLowerCase();
    let wordLower = word.toLowerCase();
    for (let i = 0; i < wordLower.length; i++) {
         if (wordLower[i] === letterLower) {
             counter++;
            }
        }
        return counter;
     }

     document.getElementById("result6").innerHTML = (`<div ><p>function countLetter(е, В лесу живет змееед) => ${countLetter(`е`, `В лесу живет змееед`)}</p></div>`);
  
     //7(7. 8.)  Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

     const convertMoney = (money) => {
       money = money.toUpperCase();
        let result;
        if (money.includes("$")){
            result = (parseInt(money) * 28) + "UAH";
            return result;
        }
        if (money.includes("UAH")){
            result = (parseInt(money) / 28) + "$";
            return result;
        }
        if (!money.includes("$") || !money.includes("UAH")){
            return "Ми не конвертуєм вашу валюту"
        }
       
    }
    // console.log(convertMoney(`2000UAH`));

    document.getElementById("result7").innerHTML = (`<div ><p>function convertMoney(2800UAH) => ${convertMoney(`2800uah`)}</p></div>`);
    document.getElementById("result71").innerHTML = (`<div ><p>function convertMoney(120$) => ${convertMoney(`120$`)}</p></div>`);
  
   
   //8.(9. 10.) Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
   // Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

   function getRandomPassword(length = 8) {
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        newPassword += Math.floor(Math.random() * 10)
    }
    return newPassword;
  }
  
 // alert (getRandomPassword());

 document.getElementById("result8").innerHTML = (`<div ><p>function getRandomPassword(length = 8) => ${getRandomPassword(length = 8)}</p></div>`);
document.getElementById("result81").innerHTML = (`<div ><p>function getRandomPassword(length = 6) => ${getRandomPassword(length = 6)}</p></div>`);

 //9.Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, word) {
    if (!isNaN(Number(letter)) && letter !== ' ') {
    return 'Ви ввели число';
 } else if (!isNaN(Number(word)) && word !== ' ') {
                
 return 'Ви ввели число';}
 let letterLower = letter.toLowerCase();
 let wordLower = word.toLowerCase();
    return wordLower.split(letter).join('');
  
  }
  //console.log (deleteLetters(`a`, `BLABLABLA`))

  document.getElementById("result9").innerHTML = (`<div ><p>function deleteLetters(е, змееед) => ${deleteLetters(`е`, `змееед`)}</p></div>`);

//10.Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom (word) {
    if (!isNaN(Number(word)) && word !== ' ') {
    return 'Ви ввели число';}
    let wordLower = word.toLowerCase();
    const wordRevers = wordLower.split('').reverse().join('').toLowerCase();
     if (wordLower === wordRevers){
        return true;
    } 
    return false;

}
//console.log (isPalyndrom(`blb`))

document.getElementById("result10").innerHTML = (`<div ><p>function isPalyndrom(шалаш) => ${isPalyndrom(`шалаш`)}</p></div>`)
document.getElementById("result101").innerHTML = (`<div ><p>function isPalyndrom(шашлык) => ${isPalyndrom(`шашлык`)}</p></div>`)

//11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter (string) {
    if (!isNaN(Number(string)) && string !== ' ') {
    return 'Ви ввели число';}
    let str = string.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (i != str.lastIndexOf(str[i])) {
            str = str.split(str[i]).join('');
            i--;
        }
    }
    return str;

}
document.getElementById("result11").innerHTML = (`<div ><p>function deleteDuplicateLetter(Я люблю есть сладкое.) => ${deleteDuplicateLetter(`Я люблю есть сладкое.`)}</p></div>`)