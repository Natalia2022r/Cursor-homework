// "use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

console.log(`1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.`)

const girls = students.filter((elem) => {
    return elem.lastIndexOf('а') === elem.length - 1;    
});
// console.log (girls);
const boys = students.filter((elem) => {
    return elem.lastIndexOf('а') !== elem.length - 1;
});
// console.log (boys);
const allStudents = (students) => {
return boys.map((boys, i) => [boys, girls[i]]);
}
console.log (allStudents(students));
const allStudent = allStudents();

// 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

console.log(`2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.`)
 
function taskforСouples () {
    const taskforСouple= [];
    for(let i = 0; i < allStudent.length; i++){
    taskforСouple.push([allStudent[i].join(' і ') , themes[i]])
    };
    return taskforСouple;
    };
    console.log (taskforСouples())

  const  taskforСouples1 = taskforСouples()


// 3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

console.log(`3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]`)


function getStudenMarks(){
let studentMarks = [];

for (let i = 0; i < students.length; i++){

    studentMarks.push([students[i] + `, ` + marks[i]] );
}
return studentMarks
}

console.log(getStudenMarks(students, marks));



// 4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

console.log(`4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт`)

const randomEvaluation = (taskforСouples1) => 
taskforСouples1.map((el)=> [...el, Math.floor((Math.random()* 5)+1)]);

console.log(randomEvaluation(taskforСouples1, themes));