// https://www.youtube.com/watch?v=r96hLF8FZ6U
// https://www.youtube.com/watch?v=uBZb1rt9IC8
// https://uk.javascript.info/call-apply-decorators
// https://www.youtube.com/watch?v=aUNPmByrtr8
// https://uk.javascript.info/bind
//  ????

// контекст = Область видимості змінної + змінна this
// this - посилання на об'єкт, який визиває код в даний час

// У JavaScript є 3 головні контексти:
// Глобальний контекст
// Контекст функції
// Контекст eval (майже ніхто не використовує)

// У кожного контексту є:
// this — визначається по тому, як викликається функція
// Lexical Environment — змінні, які “видно” у цьому місці
// Scope Chain — звідки беруться змінні (вкладеність)
// Variable Environment — місце зберігання var-змінних

// let obj = {
//   x: 10,
//   show() {
//     console.log(this.x);
//   }
// };

// let f = obj.show;
// f(); //  undefined, бо this загубився

// ------- call - дозволяє викликати функцію явно задаючи їй this
// func.call(context, arg1, arg2, ...)
const name = "Dima";
function sayHi() {
  console.log(this.name);
}
let user = { name: "Vika" };
let admin = { name: "Sasha" };
// sayHi(); // undefined
// sayHi.call(user); // Vika
// sayHi.call(admin); // Sasha

// ------ apply
// func.apply(context, args)
// call та apply в тому, що call очікує список аргументів, в той час як apply приймає псевдо-масив з ними
// переадресація викликі:
// let wrapper = function() {
//   return func.apply(this, arguments);
// };
// arguments є одночасно як ітеровуваним, так і псевдо-масивом, але не справжнім масивом

// ці два виклики майже рівні
// func.call(context, ...args); - дозволяє передати ітеровуваний args у вигляді окремих елементів до call
// func.apply(context, args); - приймає лише псевдо-масив args

function getPrice() {
  console.log(this.price);
  return this; // пишемо після 100 строчки
}
function getSumPrice(currency = 0) {
  console.log(currency + this.price);
  return this; // пишемо після 100 строчки
}
function getName() {
  console.log(this.name);
  return this; // пишемо після 100 строчки
}

const prod1 = {
  name: "Intel",
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ["blabla"],
    getInfo: function () {
      console.log(this);
    },
  },
};

// prod1.getPrice(); //100
// prod1.info.getInfo(); //{ information: [ 'blabla' ], getInfo: [Function: getInfo] }

const prod2 = {
  name: "ADM",
  price: 50,
  getPrice,
};
prod2.getName = prod1.getName;
// prod2.getPrice(); // 50
// prod2.getName(); // 'ADM'

const prod3 = {
  name: "ADM",
  price: 50,
  // getPrice, // закоментувати після 103
  getName,
};

// prod3
//   .getName() // ADM, якщо ми не пишемо явно return функція повертає undefined
//   .getPrice(); // error - undefined.getPrice()
// щоб все було Ок потрібно щоб кожна функція повертала this

// допустимо немає цих методів в prod3

// getPrice.call(prod3); // визов функції в контексті prod3
// getSumPrice.call(prod3, 6);

// getSumPrice.apply(prod3, [6])

const getNameBind = prod3.getName.bind(prod3); // на відміну від call/apply не визиває функцію, а повертає функцію але з прив'яханим контекстом
// setTimeout(prod3.getName, 1000) // undefined
// setTimeout(getNameBind, 1000) // ADM

// Декоратор – це обгортка навколо функції, яка доповнює її поведінку. Основна робота все ще виконується за допомогою функції.
// Завдання

// Створіть декоратор spy(func), який повинен повернути обгортку, яка зберігає всі виклики функції у властивості calls.
// Кожен виклик зберігається як масив аргументів.
// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];
//   return wrapper;
// }
// function sum(a, b) {
//   return a + b;
// }
// let spySum = spy(sum);
// spySum(1, 2);
// spySum("He", "lo");
// console.log(spySum.calls)

// Створіть декоратор delay(f, ms), яка затримує кожен виклик f на ms мілісекунд.
// function delay(f, ms) {
//   return function () {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }
// let f1000 = delay(console.log, 1000);

// f1000("тест");
