// https://uk.javascript.info/function-basics
// https://uk.javascript.info/function-expressions
// https://uk.javascript.info/arrow-functions-basics
// https://www.youtube.com/watch?v=2paWsAFc7_8&list=PLM7wFzahDYnF2VdVjew48HKA7E_pnItDi
// https://www.youtube.com/watch?v=847iSyAkEFk
// https://www.youtube.com/watch?v=nGVYdna4kq4

// function name(parameter1, parameter2, ... parameterN) {
//   // ...тіло функції...
// }
// name(); // виклик функції

// Змінна, яка оголошена в функції доступна лише в тілі цієї функції.
// Функція може використовувати зовнішні змінні
// Параметр – це змінна між дужками функції (використовується під час оголошення функції)
// Аргумент – це значення, передане в функцію під час її виклику (використовується під час виконання функції).

// function sum(a = 1, b = 2) {
// 	console.log( a + b);
// }
// sum(undefined, 5);
// sum(3,5)

// function checkAge(age) {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }
// let age1 = 18
// if (checkAge(age1)) {
//   console.log("Доступ надано");
// } else {
//   console.log("У доступі відмовлено");
// }

// Функція з порожнім return, або без return повертає undefined
// function doNothing() {
// 	return
// }
// console.log(doNothing()) // undefined
//  не додавайте новий рядок між return і значенням (довгий вираз обгортається в дужки)

// ЗАВДАННЯ:
// 1.Наступна функція повертає true, якщо параметр age більший за 18.
// Інакше вона запитує підтвердження через confirm і повертає його результат:
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }

// 2.Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function min(a, b) {
//   return a < b ? a : b;
// }

// 3. Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.
// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// n = 2;
// x = 5;
// if (n < 1) {
//   console.log('n dont -');
// } else {
//   console.log(pow(x, n));
// }
// function pos(x,n) {
// 	return (
// 		n % 1 == 0 && n>=1 ? console.log(x**n) : console.log('не натуральне')
// 	)
// }
// pos(5, 2)

// -----  Функціональні вирази
// sayHi('Vika') // error
// let sayHi = function(name) {
// 	console.log(`Hi, ${name}`)
// }
// sayHi('Vika') // Hi, Vika
// У суворому режимі, якщо Оголошення Функції знаходиться в блоці {...}, то функція доступна усюди всередині блоку. Але не зовні.
// let age = 18;
// if (age < 18) {
//   welcome(); // виконується
//   function welcome() {
//     console.log("Hello");
//   }
// } else {
//   function welcome() {
//     console.log("Hi");
//   }
// }
// welcome(); // помилка в суворому режимі error

// Стрілкові функції, основи
// let func = (arg1, arg2, ..., argN) => expression;
// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(sum(1, 2));

// Завдання
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );
