let score = 8;
console.log(typeof score);

let priceValue = 8.8;
console.log(typeof priceValue);

let companyName = "Workplace";
console.log(typeof companyName);

let isStudent = false;
console.log(typeof isStudent);

let randomText = "fklfdjkgnkggg n bnxghjyjgtgtgt mmdfgngngt";

score = "10";
console.log(score);
console.log(typeof score);

priceValue = 20;
console.log(priceValue);
console.log(typeof priceValue);

companyName = true;
console.log(companyName);
console.log(typeof companyName);

isStudent = 1;
console.log(isStudent);
console.log(typeof isStudent);

let example = score + companyName;
console.log(example);

let convertNumber = Number(isStudent);
console.log(convertNumber);

let dataObject = {
    number: score,
    text: companyName,
    string: randomText,
    boolean: isStudent
};

console.log(JSON.stringify(dataObject));

let num1 = Number(prompt("Введіть перше число"));
let num2 = Number(prompt("Введіть друге число"));
let num3 = Number(prompt("Введіть третє число"));

let average = (num1 + num2 + num3) / 3;

console.log("Середнє арифметичне:", average);

console.log("Модуль:", Math.abs(num1));
console.log("Округлення вверх:", Math.ceil(num2));
console.log("Округлення вниз:", Math.floor(num3));
console.log("Степінь:", Math.pow(num1, 2));

console.log("Ділиться на 5:", num1 % 5 === 0);
console.log("Ділиться на 7:", num2 % 7 === 0);

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}

let a = Number(prompt("Введіть число A"));
let b = Number(prompt("Введіть число B"));
let c = Number(prompt("Введіть число C"));

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log("Найбільше число:", max);
console.log("Найменше число:", min);

let evenCheck = (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0);

console.log("Хоча б одне число парне:", evenCheck);

let condition = (a > b && b < c);

console.log("Результат умови:", condition);

let number = Number(prompt("Введіть число для перевірки простоти"));

let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (number <= 1) {
    isPrime = false;
}

console.log("Число просте:", isPrime);

let name = prompt("Введіть ім'я");
let birthYear = Number(prompt("Введіть рік народження"));
let city = prompt("Введіть місто проживання");

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Ваш вік:", age);

if (age < 12) {
    console.log("Ви дитина");
}
else if (age < 18) {
    console.log("Ви підліток");
}
else if (age < 60) {
    console.log("Ви дорослий");
}
else {
    console.log("Ви літня людина");
}
letcity = prompt("Введіть назву вашого міста")
let capital = "Київ";

if (city.toLowerCase() === capital.toLowerCase()) {
    console.log("Ваше місто є столицею країни");
} else {
    console.log("Ваше місто не є столицею країни");
}