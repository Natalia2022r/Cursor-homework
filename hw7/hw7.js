"use strict";

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary){return  Number((this.tax * +salary).toFixed(2)) };

console.log(`getMyTaxes.call(ukraine, 3000)` ,getMyTaxes.call(ukraine, 3000));
console.log(`getMyTaxes.call(latvia, 4000)` ,getMyTaxes.call(latvia, 4000));
console.log(`getMyTaxes.call(litva, 5000)`, getMyTaxes.call(litva, 5000));

// 2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(country){return Number(this.tax * this.middleSalary)};

console.log(`getMiddleTaxes.call(ukraine)`, getMiddleTaxes.call(ukraine));
console.log(`getMiddleTaxes.call(latvia)`, getMiddleTaxes.call(latvia));
console.log(`getMiddleTaxes.call(litva)`, getMiddleTaxes.call(litva));

// 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(country){ return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2))};

console.log(`getTotalTaxes.call(ukraine)`, getTotalTaxes.call(ukraine));
console.log(`getTotalTaxes.call(latvia)`, getTotalTaxes.call(latvia));
console.log(`getTotalTaxes.call(litva)`, getTotalTaxes.call(litva));

// 5.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country){
    
    const interval = setInterval(() =>{
    
    let salary = Number((Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500).toFixed(2));
    let taxes = Number((this.tax * salary).toFixed(2));
    let profit = Number((salary - taxes).toFixed(2));
		const result = {
			salary: salary,
			taxes: taxes,
			profit: profit,
		};
		console.log(result);
	}
		, 10000)
		setTimeout(()=> clearInterval(interval),50000);

}
getMySalary.call(ukraine);