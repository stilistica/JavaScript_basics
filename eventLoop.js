// https://uk.javascript.info/event-loop
// https://felixgerschau.com/javascript-event-loop-call-stack/
// https://www.youtube.com/watch?v=TFRdyxZdHWY
// https://www.jsv9000.app/
// https://www.youtube.com/watch?v=zDlg64fsQow&t=4s

// Event Loop — це механізм у JavaScript, який відповідає за те, коли буде виконаний код. (евент не являється частиною двіжковб таких як v8; надається браузером/ode.js)
// JS — однопоточна мова, але вона вміє виконувати асинхронні операції. І саме Event Loop керує цим.

// Після виконання кожного макротаску JS СПОЧАТКУ виконує всі мікротаски.


// JavaScript виконує код у такому порядку:
// Call Stack (стек викликів) — тут виконується синхронний код.
// Якщо код асинхронний (setTimeout, проміс, подія) — він передається у Web APIs.
// Потім результат ставиться в чергу макротасків або мікротасків.
// Event Loop слідкує:
//  - якщо стек порожній → бере задачі з черги → виконує їх.


// Call Stack - Місце, де виконується JS-код прямо зараз.
// Web APIs - Браузерні "служби", які чекають таймери, обробляють події, запити.

// Task Queue (macrotasks) - Сюди потрапляють:
// setTimeout
// setInterval
// DOM events
// fetch callbacks (старий стиль)

// Microtask Queue - Має вищий пріоритет! Сюди потрапляють:
// Promises .then/.catch
// queueMicrotask
// MutationObserver


// Типове запитання на співбесідах:
// що таке Event Loop і як працює звʼязка Call Stack, Event Loop, web APIs, microqueue, macroqueue
// Call Stack:
//   виконує синхронний код
// Web APIs:
//   setTimeout → чекає
//   Promise → одразу готує microtask
// Microtask Queue:
//   Promise.then
// Macrotask Queue:
//   setTimeout callback
// Event Loop:
//   якщо stack порожній → бере наступне



// Завдання
// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);
// 1, 7, 3, 5, 2, 6, 4 // - ВІРНО


// function showNumber(number) {
// 	console.log(number);
// }
// console.log(1)
// console.log(2)
// showNumber(3);
// console.log(4)
// for (let i = 5; i<9; i++) {
// 	console.log(i);
// }
// showNumber(9);
// console.log(10);
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 // - ВІРНО


// function one() {
// 	console.log(1)
// }
// function two() {
// 	console.log(2)
// }
// function three() {
// 	console.log(3)
// }
// function four(number) {
// 	console.log(number)
// }
// setTimeout(one, 0); // moved to Web API
// two()
// setTimeout(three, 1); // moved to Web API
// console.log(4)
// Promise.resolve(5).then.four; 
// 2, 4, 5, 1,  // - ВІРНО


// console.log(1);
// Promise.resolve().then(() => {
//   console.log(2);

//   Promise.resolve().then(() => {
//     console.log(3);
//   });

//   console.log(4);
// });
// console.log(5);
// setTimeout(() => {
//   console.log(6);

//   Promise.resolve().then(() => console.log(7));
// }, 0);
// console.log(8);
// 1, 5, 8, 2, 4, 3, 6, 7 // - ВІРНО


// console.log("A");
// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });

// }, 0);
// Promise.resolve().then(() => {
//   console.log("D");

//   setTimeout(() => {
//     console.log("E");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("F");
//   });
// });
// console.log("G");
// A, G, D, F, B, C, E // - DONE



// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);
// setTimeout(() => {
//   console.log(3);

//   Promise.resolve().then(() => console.log(4));

// }, 0);
// Promise.resolve().then(() => {
//   console.log(5);

//   setTimeout(() => console.log(6), 0);

//   Promise.resolve().then(() => console.log(7));
// });
// console.log(8);
// 1, 8, 5, 7, 2, 3, 4, 6 // - неправильно
// потрібно дивитись на таймінги в макротасках
// 1, 8, 5, 7, 3, 4, 6, 2 // - ВІРНО



// console.log("start");
// const target = document.createElement("div");
// new MutationObserver(() => {
//   console.log("mut");
// }).observe(target, { attributes: true });

// Promise.resolve().then(() => {
//   console.log("pro");

//   target.setAttribute("data-x", "1");

//   Promise.resolve().then(() => {
//     console.log("pro2");
//   });
// });
// setTimeout(() => console.log("time"), 0);
// console.log("end");
// start/ end/ mut/ pro/ pro2/ time // - неправильно 
// MutationObserver виконується ПІСЛЯ ВСІХ промісів, але ДО macrotask.
// start/ end/ pro/ pro2/ mut/ time // - ВІРНО 



// console.log("X");
// Promise.resolve().then(() => {
//   console.log("Y");
//   setTimeout(() => console.log("Z"), 0);
//   return Promise.resolve().then(() => {
//     console.log("W");
//     setTimeout(() => console.log("Q"), 0);
//   });
// }).then(() => {
//   console.log("R");
// });
// setTimeout(() => {
//   console.log("T");
//   Promise.resolve().then(() => console.log("U"));
// }, 0);
// console.log("V");
// X, V, Y, R, W, T, U, Z, Q // - неправильно
// спочатку виконується те шо в першому then потім переходимо на інший
// X, V, Y, W, R, T, U, Z, Q // - ВІРНО
