// "use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

console.log(`1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.`)

const girls = students.filter((elem) => {
    return elem.lastIndexOf('а') === elem.length - 1;
    
});
console.log (girls);

const boys = students.filter((elem) => {
    return elem.lastIndexOf('а') !== elem.length - 1;

});
console.log (boys);

let allStudents = (students) => {

return boys.map((boys, i) => [boys + ` ` + `i` + ` ` + girls[i]]);
}
console.log (allStudents(students));

let allStudent = allStudents();

// 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

console.log(`2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.`)

let taskforСouples = [];

for (let i = 0; i < allStudent.length && i < themes.length; i++){

    taskforСouples.push([allStudent[i] + ` ` + `,` + ` ` + themes[i]] );
    };
console.log(taskforСouples);

// 3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

console.log(`3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]`)

let studentmarks = [];

for (let i = 0; i < students.length && i < marks.length; i++){

    studentmarks.push([students[i] + `,` + ` ` + marks[i]] );
    };
console.log(studentmarks);

// 4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

console.log(`4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт`)

let randomEvaluation = [];

for (let i = 0; i < taskforСouples.length; i++){

    randomEvaluation.push([taskforСouples[i] + `,` + ` ` +  Math.floor((Math.random()* 5)+1)]);
    };
console.log(randomEvaluation);
