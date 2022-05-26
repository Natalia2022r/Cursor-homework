const table = 15.678;
const tv = 123.965;
const bed = 90.2345;

const sum = table + tv + bed;
const middle = (table + tv + bed) / 3
const discount = Math.round (Math.random()*100);
const discount1 = Math.round((sum - discount) * 100) / 100;



// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const max = Math.max(table, tv, bed)

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const min = Math.min (table, tv, bed);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const sumFloot =  Math.floor(table) + Math.floor(tv) + Math.floor(bed);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const sum1 = (Math.floor (sum/100))*100;

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const booleanSum = (Math.floor(sum) % 2 === 0)? true : false;


// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const change = 500 - sum;


// Виведіть середнє значення цін, округлене до другого знаку після коми
const middleRounding = middle.toFixed(2);

// Створіть змінну, в якої збережіть випадкову знижку

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const discountRounding = discount1.toFixed(2);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни
const profit = Math.floor((sum/2)-discount1);


// ИТОГ

console. log ( "Максимальна ціна:"  +  max) ;
console. log ( "Мінімальна ціна:"  +  min ) ;
console. log ( "Вартість всех товаров: "  + sum) ;
console. log ( " Вартість товарів  без копійок : " + sumFloot ) ;    
console. log ( "Сумма товарів округлена до сотен : " + sum1) ;     
console. log ( "Булеве значення: " + booleanSum );         
console. log ( "Решта без округления:"  +  change ) ;
console. log ( "Середнє значення цін, округлене до другого знака писля коми: "  +  middleRounding );
console. log ( "Знижка:"  +  discount ) ;
console. log ( "Сума олати зі знижкою:  " +  discountRounding)      
console. log ( " Чистый прибуток  : " +  profit) ;     