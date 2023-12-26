const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");

const str = "JavaScript is cool language. Everybody should learn JavaScript";

// i после рег. выр. означает, что большие и маленькие буквы это одно и то же. Метод test проверяет, есть ли в тексте соотв. шаблону
console.log(/javascript/i.test(str));

// Метод replace заменяет шаблон на значение во втором параметре. Ключ g указывает, что нужно искать в глобальной области, заменить везде где есть соотв. шаблону
console.log(str.replace(/javascript/gi, "php"));

// Метод match возвращает массив из значений, соотв. шаблону
console.log(str.match(/javascript/gi));

var str1 =
  "Смотри главу 3.4.5.1 для дополнительной информации. Смотри главу 5.4";
var re = /смотри (главу \d+(\.\d)*)/gi;
var found = str1.match(re);

console.log(found);
