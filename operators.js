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
// let val = (x !== null && x !== undefined) ? x : defaultValue;
// let valNew = x ?? defaultValue;

// умовні оператори
// https://uk.javascript.info/ifelse
// https://uk.javascript.info/switch
// https://www.youtube.com/watch?v=PJF2cB4kLso

// if
const year = 2025;
if (year <= 2025) {
  // console.log('this true')
}

// if / else
if (year === 2045) {
  // console.log('done');
} else {
  // console.log('error')
}

// if / else if / else
let time = null;

if (year < 2025) {
  time = "past";
} else if (year > 2025) {
  time = "future";
} else {
  time = "present";
}
// console.log(time);

// тернарний оператор
// let result = умова ? значення1 : значення2;
age = 17;
let canDrive = age >= 18 ? "Yes" : "No";
// console.log(canDrive);
let canDriveBike =
  age < 16 ? "No" : age < 18 ? "Yes, but only bike" : "Yes and car";
// console.log(canDriveBike);

let result;
if (a + b < 4) {
  result = "Нижче";
} else {
  result = "Вище";
}
result = a + b < 4 ? "Нижче" : "Вище";

let message;
if (login == "Працівник") {
  message = "Привіт";
} else if (login == "Директор") {
  message = "Вітаю";
} else if (login == "") {
  message = "Немає логіну";
} else {
  message = "";
}
message =
  login == "Працівник"
    ? "Привіт"
    : login == "Директор"
    ? "Вітаю"
    : login == ""
    ? "Немає логіну"
    : "";

// switch
//  Значення повинні бути однакового типу
let a = 2 + 2;
let mes = null;
switch (a) {
  case 3:
    mes = "Not enough";
    break;
  case 4:
    mes = "Exactly";
    break;
  case 5:
  case 6:
    mes = "Too much";
    break;
  default:
    mes = "Dont know";
}

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }
// if (a == 2 || a == 3) {
//   alert("2,3");
// }
switch (a) {
  case 0:
    mes = "0";
    break;
  case 1:
    mes = "1";
    break;
  case 2:
  case 3:
    mes = "2, 3";
    break;
}
