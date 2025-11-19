// https://www.youtube.com/watch?v=oUXOLLANopQ
// https://www.youtube.com/watch?v=UmpMa-f7dM4
// https://www.youtube.com/watch?v=ubYPpR9acQc
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://uk.javascript.info/try-catch

// try {
//   // код, який може викликати помилку
// } catch (error) {
//   // що робити, якщо сталася помилка
// } finally {
//   // (необов'язково) виконується завжди
// }

// try {
//   const userJSON = `{
//     "age": 28 
//   }`;

//   const user = JSON.parse(userJSON);
//   const { name, age } = user;

// 	if (!name) {
// 		const errMes = 'have not name';
// 		throw new Error(errMes) // об'єкт з інфо про помилку 
// 	}
// 	console.log(`
// 		Hi, ${name}!
// 		You are ${age}`)
// } catch (err) {
// 	console.log('error:', err)
// 	console.log('name:', err.name)
// 	console.log('message:', err.message)
// 	console.log('stack:', err.stack)
// }
// console.log('end');


// Щоб блок try...catch спрацював, код повинен запускатися. Іншими словами, це повинен бути валідний JavaScript код.
// try {
//   {{{{{{{{{{{{
// } catch (err) {
//   alert("Це не валідний код, рушій його не зрозуміє");
// }


// try...catch працює синхронно
// try {
//   setTimeout(function() {
//     noSuchVariable; // скрипт припинить свою роботу
//   }, 1000);
// } catch (err) {
//   alert( "не спрацює" );
// }
// Це відбувається через те, що функція буде виконана пізніше, коли рушій вже вийде з блоку try...catch.

// Щоб перехопити виняток всередині функції запланованої до виконання, try...catch повинен бути всередині тієї функції:
// setTimeout(function() {
//   try {
//     noSuchVariable; // try...catch опрацює помилку!
//   } catch {
//     alert( "помилку перехоплено тут!" );
//   }
// }, 1000);