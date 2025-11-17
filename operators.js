// логічні оператори
// https://uk.javascript.info/logical-operators
// https://www.youtube.com/watch?v=Nn79iOFiBuY
// https://www.youtube.com/watch?v=DF6hcWazXbI

// < <= >= > == ===(враховує типи даних) != !== ! && || "()"

// || (АБО)
// повертає перше true або останннє false
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// console.log(true || 5); // true
// console.log(false || 5); // 5
// console.log("" || "Vika"); // "Vika"
// console.log(0 || "default"); // "default"

// && (І)
// повертає перше false або останнє true
// якщо ліве false далі не двиться, якщо ліве true повертає праве значення
true && true; // true
true && false; // false
false && true; // false
false && false; // false

let age = 17;
if (age >= 18 && age <= 64) {
}

// console.log(true && 5); // 5
// console.log(false && 5); // false
// console.log(0 && "Hello"); // 0
// console.log("Hello" && 0); // 0
// console.log("Hi" && "JS"); // "JS"
// console.log("Hi" && false); // "false"

// ! (НЕ)
// перевертає значення
// console.log(!true);   // false
// console.log(!!true);   // true
// console.log(!0);      // true
// console.log(!"Vika"); // false
// console.log(!"");     // true

// ?? (оператор null-об’єднання).
// повертає перше значення, яке не null і не undefined
// відмінність від || сприймає як false значення 0, "", NaN, а ?? їх не чіпає.

let user = { name: null, age: 0 };

// console.log(user.name ?? "Default Name"); // "Default Name"
// console.log(user.age ?? 18); // 0
let val = (x !== null && x !== undefined) ? x : defaultValue;
let valNew = x ?? defaultValue;
