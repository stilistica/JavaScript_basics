// https://www.youtube.com/watch?v=kXAM_VuiBMM
// https://www.youtube.com/watch?v=cHMu1NRAydY
// https://uk.javascript.info/object
// https://uk.javascript.info/object-copy
// https://uk.javascript.info/garbage-collection
// https://uk.javascript.info/object-methods

// let user = new Object(); // синтаксис "конструктора об’єктів"
// let user = {};  // синтаксис "літералу об’єкта"

let color2 = "color";
let user = {
  name: "Vika",
  age: 32,
  [color2]: "blue",
  "likes big-birds": true, // Ім’я властивості з декількох слів повинно бути в лапках
};
// console.log(user[color2]) // blue
// для видалення властивості
delete user[color2];

user.isAdmin = true;

user["likes big-birds"] = false; // альтернативний спосіб доступу до властивостей
delete user["likes big-birds"];

let key = "name";
// console.log(user.key) // undefined
// console.log(user[key]) // Vika

// in - перевірка існування властивості
// console.log( 'bla' in user) // властивості немає в об"єкті
// console.log(key in user); // true

// for...in
// for (let key in user) {
// 	console.log(key);
// 	console.log(user[key])
// }

// “властивості впорядковані особливим чином”. Властивості з цілочисельними ключами сортуються за зростанням, інші розташовуються в порядку створення
// “цілочисельна властивість” означає рядок, який може бути перетворений в ціле число і назад без змін.

let admin = user; // копіювання посилання
// Тепер у нас є дві змінні, кожна з яких зберігає посилання на той самий об’єкт
admin.name = "Viktoriia";
// console.log(user) //{ name: 'Viktoriia', age: 32, isAdmin: true }

// створемо клон, який не прив"язаний до user
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Sasha";
// console.log(user); //{ name: 'Viktoriia', age: 32, isAdmin: true }
// console.log(clone); //{ name: 'Sasha', age: 32, isAdmin: true }

// Object.assign

let permissions = { canRead: true };

// копіює всі властивості з permissions в clone
Object.assign(clone, permissions, { name: "Петро" });
// console.log(clone); // { name: 'Петро', age: 32, isAdmin: true, canRead: true }

// Ми також можемо використовувати Object.assign, щоб виконати просте клонування об’єкта:
let clone2 = Object.assign({}, user);

// ------ “глибоке клонування(deep cloning)”
user.sizes = {
  height: 182,
  width: 50,
}; // user.sizes є об’єктом і буде скопійовано за посиланням
// Існує метод structuredClone, який реалізує таке глибоке клонування.
let clone3 = structuredClone(user);
// structuredClone не працює,  коли об’єкт має властивість з функцією

// this
function sayHi() {
  console.log(this.name);
}
user.f = sayHi;
// user.f()

// Стрілкові функції не мають “this”

// ?. - перевірка чи є властивість (не буде помилки)
// console.log(user?.sizes?.width)

// функція конструктор 
// 1. назва з великої літери
// 2. визов new
function UserInfo(name) {
	this.name = name;
	this.age = 30;
}
// console.log(new UserInfo('Olia'))


// ЗАВДАННЯ
// Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.
let calculator = {
  read(a, b) {
    this.a = +a;
    this.b = +b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
