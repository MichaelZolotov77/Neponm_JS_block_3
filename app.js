const developer = {
  name: "Vasiliy",
  surname: "Popov",
  age: 30,
  skills: ["JavaScript", "TypeScript", "CSS"],
  isMaried: false,
};

for (let prop in developer) {
  console.log(prop, developer[prop]); // перебор ключей и значений
}
