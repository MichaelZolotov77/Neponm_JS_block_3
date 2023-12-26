const str = "Hello World";

console.log(str.toUpperCase()); // исходная строка не меняется
console.log(str.toLowerCase());

console.log(str.includes("World")); // есть ли в строке
console.log(str.indexOf("World")); // 6 (индекс если есть, -1 если нет)

console.log(str.slice(0, 5)); // нарезать строку, с 0 по 5 индекс не включая
console.log(str.slice(6)); // с 6 индекса и до конца строки

console.log(str.split(" ")); // создать массив по разделителю пробел
// chaining, когда методы идут один за другим
// создать опять из массива строку и поставить между ячейками разделитель
console.log(str.split(" ").join(" | "));
