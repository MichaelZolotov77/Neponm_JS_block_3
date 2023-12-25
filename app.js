const person = {
  name: "Anna",
  surname: "Dance",
  age: 18,
  greeting() {
    console.log("hello");
  },
  changeSurname(surname) {
    this.surname = surname;
  },
};

person.greeting();
person.changeSurname("Musatova");
console.log(person);
