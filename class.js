// https://www.youtube.com/watch?v=us1GTgdUsJo
// https://www.youtube.com/watch?v=HU_yHRzNJ5E
// https://www.youtube.com/watch?v=HAuiik0rBu0
// https://uk.javascript.info/class
// https://uk.javascript.info/class-inheritance
// https://uk.javascript.info/static-properties-methods
// https://uk.javascript.info/private-protected-properties-methods
// https://uk.javascript.info/extend-natives
// https://uk.javascript.info/instanceof
// https://uk.javascript.info/mixins

// відокремлення внутрішнього інтерфейсу від зовнішнього називається інкапсуляцією

class Student {
  // _ доступнa лише для читання
  _city = null;

  // static country = "Ukraine"; // завдяки статік можна звертатись напряму до класу (нюанс не можна використовувати this) належить класу, а не обʼєктам
  country = "Ukraine";
  region;

  constructor(name, age = 18) {
    this.name = name;
    this.age = age;

    this.#someSecretAction();
  }

  logAge() {
    console.log(this.age);
  }
  // гетери та сетери (get/set)
  set city(value) {
    const firstLetter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();

    this._city = `${firstLetter}${fromSecondLetter}`;
  }

  get city() {
    return `city ${this._city}`;
  }
  //  # не можна отримати доступ до приватних властивостей і методів ззовні класу
  #someSecretAction() {}
}
// на основі класу створюються об’єкти: екземпляри (instances)
const firstStudent = new Student("Vika", 56);
const secondStudent = new Student("Olia", 12);

firstStudent.city = "kyiV";

// console.log("firstStudent", firstStudent);
// console.log("secondStudent", secondStudent);

// console.log(firstStudent.city);

// Після слова extends допускається будь-який вираз
class Teacher extends Student {
  // Вчитель буде наслідувати всі властивості класу Учень
  constructor(name, age, color) {
    // Конструктори в класі, що наслідується, повинні викликати super(...) і (!) зробити це перед використанням this
    super(name, age);
    this.color = color;
  }
  logAge() {
    super.logAge(); // наслідування попереднії дії в бадьківському класі
    console.log("Hi");
  }
}
const firstTeacher = new Teacher("Dima", 6, "red");
// console.log("firstTeacher", firstTeacher);

// У JavaScript клас є своєрідною функцією
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi, my name is", this.name);
  }
}
//  клас -- це функція
// console.log(typeof User); //function
// точніше, метод конструктора
// console.log(User === User.prototype.constructor) // true
const user1 = new User("Vika");
// user1.sayHi();

// якщо метод об’єкта передається і викликається в іншому контексті, this більше не буде посиланням на цей об’єк
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}
let button = new Button("hello");
// setTimeout(button.click, 1000) //undefined
// setTimeout(button.click(), 1000) //error

// Ця проблема називається “втратою this”
// setTimeout(() => button.click(), 1000) // але для класу є інший розвязок

class Button1 {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  };
}
let button1 = new Button1("hello");
// setTimeout(button1.click, 1000)

// ЗАВДАННЯ ПЕРЕПИСАТИ НА КЛАС
// function Clock({ template }) {

//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();
class Clock {
  timer = null;

  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop = () => {
    clearInterval(this.timer);
    this.timer = null;
  };
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
let clock = new Clock({ template: "h:m:s" });
// clock.start();
// setTimeout(clock.stop, 5000)

// Оператор instanceof
// obj instanceof Class
// Він повертає true, якщо obj належить до класу Class або класу, який наслідується від нього.

let arr = [1, 2, 3];
// console.log(arr instanceof Object); // true

// mixin – це клас, що містить методи, які можуть бути використані іншими класами без необхідності успадкуватися від нього.
// міксин
let sayHiMixin = {
  sayHi() {
    console.log(`Привіт, ${this.name}`);
  },
  sayBye() {
    console.log(`До побачення, ${this.name}`);
  },
};
// використання:
class User3 {
  constructor(name) {
    this.name = name;
  }
}
// копіюємо методи
Object.assign(User3.prototype, sayHiMixin);
// тепер User може сказати привіт
// new User3("Іван").sayHi(); // Привіт, Іван!
