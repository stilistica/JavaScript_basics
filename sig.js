// Symbol, Iterators, Generators

// https://www.youtube.com/watch?v=7wtbNNiOh30

// Symbol
//  — це унікальне значення, яке найчастіше використовується як ключ в об'єктах.
// Навіть два символи з однаковим описом не рівні.

// const ID = Symbol("id");
// const user = {
//   name: "Vika",
//   [ID]: 123
// };
// console.log(user[ID]);  // 123
// console.log(user.id);   // undefined

// не показуються в Object.keys()
// не перебираються в for...in
// не потрапляють в JSON.stringify()

// const s1 = Symbol("id");
// const s2 = Symbol("id");
// console.log(s1 === s2); // false

// Глобальний Symbol
// const s1 = Symbol.for("shared");
// const s2 = Symbol.for("shared");
// console.log(s1 === s2); // true
// Symbol.for() повертає той самий символ по ключу.

// Iterators
// це об'єкт, який повертає значення одне за одним.
// Він має метод: next()
// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0;

//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };
// const itr = iterator.gen();
// itr.next() // {value: 1, done: false} ...
// for (let k of iterator) {
// 	console.log(k) // 1, 2, ... 10
// }

// Generators (порціями видаємо результат)
// це функції, що автоматично створюють ітератори
// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* numberGen(n=10) {
// 	for (let i = 0; i < n; i ++) {
// 		yield i;
// 	}
// }
// for (let k of numberGen()) {
// 	console.log(k) // 0, 1, ... 10
// } // в генераторі вже є символ ітератор, який дозволяє працювати з циклом for of

// const num = numberGen(7);
// num.next() // {value: 0, done: false}
// num.next() // {value: 1, done: false}
// num.next() // {value: 2, done: false} ...
// num.next() // {value: 6, done: false}
// num.next() // {value: undefined, done: true}

