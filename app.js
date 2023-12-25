const developer = {
  name: "Vasiliy",
  surname: "Popov",
  age: 30,
  skills: ["JavaScript", "TypeScript", "CSS"],
  isMaried: false,
  addAge() {
    this.age++;
    console.log(this);
  },
  getMarried() {
    this.isMaried = true;
  },
  getDivorced() {
    this.isMaried = false;
  },
};

console.log(developer.hasOwnProperty("name"));
