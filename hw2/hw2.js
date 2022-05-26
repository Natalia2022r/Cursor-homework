let N = +prompt ( `Введите первое целое число`, `Ввод`);

while(!Number.isInteger(N)){
    alert("Введите корректное число");
    N = +prompt ( `Введите первое целое число`, `Ввод`);
}

let M = +prompt ( `Введите второе целое число`, `Ввод`);

while(!Number.isInteger(M)){
    alert("Введите корректное число");
    M = +prompt ( `Введите второе целое число`, `Ввод`);
}

let booleanNumbers = confirm("При сложении чисел пропускать четные?");
let sum;

for (sum = 0; N <= M; N++) {
   if (booleanNumbers && N % 2 == 0)  continue;
    sum += N;
}
alert (sum);