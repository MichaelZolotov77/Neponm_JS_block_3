const numbers = [1, 2, 3, 4];

// push, pop - добавить и удалить в конце массива
// shift, unshift - добавить и удалить в начале массива

// есть ли в массиве такое значение
console.log(numbers.includes(4));
// какой индекс в массиве, если не найдет то -1
console.log(numbers.indexOf(2));
// получить новый массив по срезу
console.log(numbers.slice(0, 2));
// в массив добавить еще ячеек, предыдущий остается без изменений
const nums2 = numbers.concat([6, 7, 8]);
console.log(nums2);
// создать из массива строку, между ячейками добавить запятую и пробел
console.log(numbers.join(", "));
