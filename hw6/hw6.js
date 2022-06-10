'use strict'

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  //   1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл


function getSubjects (student) {
    const arrSubject = Object.keys(student.subjects);
  
    return arrSubject.map(elem => (elem[0].toUpperCase()+elem.toLowerCase().slice(1)).replaceAll("_", " "))
    }
    
//   console.log('Cписок предметів для конкретного студента: ' , getSubjects(students[1]));

//   2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark (student) {

    const arrMarks = [].concat(...Object.values(student.subjects))
    return (arrMarks.reduce((prev, current) => prev + current) / arrMarks.length).toFixed(2);   
}

// console.log('Середня оцінка по усім предметам для переданого студента: ' , getAverageMark(students[2]));

// 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo (student) {
  return {
      "name": student.name,
      course: student.course,
      averageMark: +getAverageMark(student)
  };
}

// console.log('Інформація загального виду по переданому студенту: ' , getStudentInfo(students[1]));

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function  getStudentsNames(student){

  const nameSort = student.map(item => item.name).sort();
  return nameSort;
};

// console.log(getStudentsNames(students));

// 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
  const bestMark = Math.max(...students.map(student => getAverageMark(student)));
  return students.map(student => ({name: student.name, averageMark: getAverageMark(student)}))
      .filter(item => +item.averageMark === bestMark)
      .map(student => student.name).join('');
};

// console.log(getBestStudent(students));

// 6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word){
let word1 = word.split('').filter((letter) => letter !== ' ')
let res = {};
word1.forEach(s => res[s] = word1.filter(i => i == s).length);
return res;
}
// console.log(calculateWordLetters("тест"));

console.log('Cписок предметів для конкретного студента: ' , getSubjects(students[1]));
console.log('Середня оцінка по усім предметам для переданого студента: ' , getAverageMark(students[2]));;
console.log('Інформація загального виду по переданому студенту: ' , getStudentInfo(students[1]));
console.log( `Імена студентів у алфавітному порядку.`, getStudentsNames(students));
console.log( `Kращій студент зі списку по показнику середньої оцінки.`, getBestStudent(students));
console.log( `Функція калькулятор літер у слові`, calculateWordLetters("тест"));