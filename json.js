// https://uk.javascript.info/json
// https://www.youtube.com/watch?v=KyFA-WefJxY
// https://www.youtube.com/watch?v=syZhAlHgrxs

// JSON (JavaScript Object Notation) — текстовий формат для зберігання і передачі даних.
// Використовується:
// - в API
// - при збереженні в localStorage
// - при обміні між фронтом і бекендом

//  Ключі тільки в лапках
//  Рядки тільки в подвійних лапках/
//  Немає функцій, undefined, Symbol
//  Підтримує: string, number, boolean, null, object, array

// Не підтримує:
// функції
// undefined
// Symbol
// коментарі

// Приклад:
// {
//   "name": "Viktoriia",
//   "age": 42,
//   "isAdmin": true,
//   "skills": ["JS", "React", "CSS"]
// }


// JSON.stringify() 
// Перетворює JS → JSON (в рядок)

// const user = {
//   name: "Vika",
//   age: 31,
//   isAdmin: true,
// };
// const json = JSON.stringify(user);
// console.log(json);
// {"name":"Vika","age":31,"isAdmin":true}

// результат — рядок, не об'єкт

// Функції і undefined зникають
// const obj = {
//   name: "Vika",
//   sayHi() {
//     console.log("Hi");
//   },
//   value: undefined,
// };
// console.log(JSON.stringify(obj));
// {"name":"Vika"}

// Symbol ігнорується
// const sym = Symbol("id");
// const obj = {
//   name: "Vika",
//   [sym]: 123,
// };
// console.log(JSON.stringify(obj));
// {"name":"Vika"}

// Другий аргумент stringify – replacer
// const user = {
//   name: "Vika",
//   age: 18,
//   password: "12345"
// };
// const json = JSON.stringify(user, ["name", "age"]);
// console.log(json);
// // {"name":"Vika","age":18}

// Третій аргумент – форматування
// JSON.stringify(user, null, 2);
// Виведе красиво


// JSON.parse()
// Перетворює JSON → JS-об’єкт
// const json = '{"name":"Vika","age":11}';
// const user = JSON.parse(json);
// console.log(user.name); // Vika