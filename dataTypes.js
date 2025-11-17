// https://www.youtube.com/watch?v=o1nyyEThAtw
// https://www.youtube.com/watch?v=kfcl02Nd2YI
// https://www.youtube.com/watch?v=g7jDucodUzQ
// https://www.youtube.com/watch?v=aoIqgApVsFI
// https://uk.javascript.info/types

// JS динамічно типізована мова

// Примітивні типи:

// ----------- string
const firstName = "Viktoriia";
const lastName = "Rozhkova";
const name = `${firstName} ${lastName}`;
// console.log(name);
// String()
// noString.toString()
// noString.description

// ----------- number
const x = 5;
const y = 2.5;
const number = 1_000_000; // 1000000
const point = (x + y) / (x - y);
typeof x;
// console.log("Ok" / 100); // NaN (не число) математична помика
// console.log(100 / 0); // Infinity завжди більше любого числа
// console.log(-100 / 0); // -Infinity завжди менше любого числа
// Number()
// console.log(typeof +'5') //number
// console.log(typeof NaN); // number

// ----------- BigInt
// console.log(9900000000000091 + 2); // 9900000000000094 помика точності
// console.log(9900000000000091n + 2n); // 9900000000000093n

// ----------- boolean
const booleanTrue = true; // 1
const booleanFalse = false; // 0
// console.log(Boolean(-1)) // true
// console.log(Boolean(0)) // false
// console.log(Boolean(1)) // true
// console.log(Boolean(-1.25)) // true
// console.log(Boolean('0')) // true
// console.log(Boolean(' ')) // true
// console.log(Boolean('')) // false

// !!!!!
// завжди false
// 0, NaN, '', null, undefined
// все інше true

// ----------- null
let data = null; // (0) "порожнє" фбо "невідоме", навмисно присвоюється
// console.log(typeof null); // https://habr.com/ru/articles/200664/

// ----------- undefined
let undef;
// console.log(undef); // undefined значення не присвоєно
// console.log(typeof undef);
// bigint

// ----------- symbol
let id = Symbol("id");
// console.log(typeof id);
Symbol("id") !== Symbol("id"); // вони завжди будуть різні.
// Symbol не потрапляє в:
// for...in
// Object.keys()
// JSON.stringify()

// Є спеціальні вбудовані символи:
// Symbol.iterator
// Symbol.toPrimitive
// Symbol.asyncIterator
// Symbol.toStringTag
// Symbol.species
// Symbol.hasInstance


// Складні типи:

// ----------- object
const user = {
  name: "Vika",
  age: 55,
  haveDog: false,
};
const numbers = [4, 8, 15, 24, 45];
const map = new Map();
const set = new Set();
const date = new Date();
// console.log(typeof map);

// function
function sum() {
  return 5 + 10;
}
// console.log(typeof sum); // function
