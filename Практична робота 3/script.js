console.log("=== Варіант 1 ===");

const numbers = [5, 12, 7, 3, 20, 15];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const sorted = [...numbers].sort((a, b) => a - b);

console.log("Масив:", numbers);
console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований:", sorted);

console.log("=== Варіант 2 ===");

const users = [
    { name: "Анна", age: 17 },
    { name: "Іван", age: 22 },
    { name: "Марія", age: 19 },
    { name: "Олег", age: 15 }
];

const adults = users.filter(user => user.age > 18);

const names = users.map(user => user.name);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("Користувачі:", users);
console.log("Повнолітні:", adults);
console.log("Імена:", names);
console.log("Середній вік:", avgAge);

console.log("=== Варіант 3 ===");

const products = [
    { name: "Ноутбук", category: "Техніка" },
    { name: "Телефон", category: "Техніка" },
    { name: "Хліб", category: "Їжа" },
    { name: "Молоко", category: "Їжа" }
];

const grouped = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product.name);
    return acc;
}, {});

console.log("Згруповані товари:", grouped);

console.log("=== Варіант 4 ===");

const students = {
    Анна: { math: 90, english: 85, history: 88 },
    Іван: { math: 70, english: 75, history: 80 },
    Марія: { math: 95, english: 92, history: 89 }
};

for (let student in students) {
    const grades = Object.values(students[student]);
    const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;

    console.log(`${student}: середній бал = ${avg}`);
}

console.log("=== Варіант 5 ===");

const namesArray = ["Анна", "Іван", "Марія"];

const namesObject = namesArray.reduce((acc, name) => {
    acc[name] = name.length;
    return acc;
}, {});

console.log("Об'єкт:", namesObject);