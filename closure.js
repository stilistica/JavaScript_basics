// https://uk.javascript.info/closure
// https://www.youtube.com/watch?v=BOjr2L3VXsc
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Closures

// Замикання – це функція, яка запам’ятовує свої зовнішні змінні та може отримати до них доступ. У деяких мовах це зовсім неможливо, або функція має бути написана особливим чином. Але, як пояснювалося вище, в JavaScript замикання для функції – це природньо і не потребує жодних зусиль.
// Тобто: функції автоматично запам’ятовують, де вони були створені, використовуючи приховану властивість [[Environment]], а потім їхній код може отримати доступ до зовнішніх змінних.
// Коли під час співбесіди розробник отримує запитання “що таке замикання?”, правильною відповіддю буде визначення замикання та пояснення, що всі функції в JavaScript є замиканнями, і, можливо, ще кілька слів про технічні деталі: властивість [[Environment]], і як взагалі працюють лексичні середовища.

// Замикання — це комбінація функції та лексичного середовища, у якому ця функція була оголошена

// {
//   let message = "Привіт"; // змінна, яка буде видима тільки у цьому блоці

//   console.log(message);
// }

// console.log(message); // error

// 1. функції повертають новф функції
// 2. Повернені функції пам'ятають контекст, де були створені
function createFn() {
  const message = "hello";
  function greeting(str) {
    console.log(message, str);
  }
  return greeting;
}
const hello = createFn();
// console.log(typeof hello) // function
// hello()
// hello('Vika')

function addByX(num) {
  return function (x) {
    return num + x;
  };
}
const addByTwo = addByX(2);
const addByFive = addByX(5);

// console.log(addByTwo(3)) // 5
// console.log(addByTwo(6)) // 8
// console.log(addByFive(6)) // 11

function once(fn) {
  let hasBeenCalled = false;
  let cacheResult;

  return function (...args) {
    if (hasBeenCalled) return cacheResult;
    hasBeenCalled = true;
    cacheResult = fn(...args);

    return cacheResult;
  };
}
const addByTwoOnce = once((num) => num + 2);

// console.log(addByTwoOnce(2)); // 4
// console.log(addByTwoOnce(7)); // 4
// console.log(addByTwoOnce(9)); // 4

// ЗАВДАННЯ:
// Напишіть функцію sum яка працює ось так: sum(a)(b) = a+b.
// Саме так, використовуючи подвійні дужки (це не друкарська помилка)
function sum(a) {
  return function (b) {
    return a + b;
  };
}
// console.log(sum(1)(2)) // 3

// 2.
let x = 1;
function func() {
  console.log(x); // ?  “мертвa зонa”.

  let x = 2;
}
// func(); // -y цьому прикладі ми можемо спостерігати особливу різницю між “неіснуючою” та “неініціалізованою” змінною.
