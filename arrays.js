// https://www.youtube.com/watch?v=KPACLYD1jTY
// https://www.youtube.com/watch?v=Cqe5vaW0roo
// https://www.youtube.com/watch?v=SC61eRpwuUg
// https://uk.javascript.info/array
// https://uk.javascript.info/array-methods
// https://www.youtube.com/watch?v=Y9ZP1tFNgqU

// Масив – це об’єкт, тому він поводить себе як об’єкт.
// let arr = new Array(); // new Array викликається з одним аргументом, а саме числом, він створить порожній масив з довжиною, яка дорівнює цьому числу
let arr = [];
// arr[10] = 5 // [ <10 empty items>, 5 ]

// загальна к-сть елементів
arr.length;

// Масиви не мають Symbol.toPrimitive, або робочого valueOf, вони реалізують лише метод toString таким чином, що [] стає порожнім рядком, [1] стає "1" або [1,2] стає "1,2"
// console.log([] + 1); //'1'
// console.log([1,2] + 1); //'1,21'

// не використовуйте оператор ==. Натомість порівнюйте їх в циклі, елемент за елементом. Також можна використати методи перебору, про які написано в наступному розділі
// console.log([] == []) // false Технічно ці масиви є різними об’єктами. Тому вони не рівні.

// отримати останній елемент можна двома способами
let fruits = ["Яблуко", "Апельсин", "Слива"];

// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1)) // i >= 0, він працює так само як arr[i]

let arr1 = fruits; //копіюється за посиланням (дві змінні посилаються на один масив)
// console.log(arr1 === fruits); // true (при змінні одного масиву змінюється і інший)

// console.log(String(fruits)) // Яблуко,Апельсин,Слива
// ------------ МЕТОДИ

// PUSH(...items) - додає в кінець списку
fruits.push("Персик", "Апельсин");

// POP() - видаляє елемент з кінця
fruits.pop();

// UNSHIFT(...items) - додає елемент в початок масиву
fruits.unshift("Apple");

// SHIFT() = видаляє перший елемент масиву
fruits.shift();

// splice - повертає масив видалених елементів:
let arr5 = ["I", "study", "JavaScript", "right", "now"];
arr5.splice(1, 1); // з індексу 1 видалимо 1 елемент
// console.log( arr5 ); // ["I", "JavaScript"]
arr5.splice(0, 2, "Let's", "dance");
// console.log( arr5 ); // [ "Let's", 'dance', 'right', 'now' ]
// починаючт з індекса 2
// видалимо 0 елементів
// ваставити "complex" та "language"
arr.splice(2, 0, "complex", "language");

let arr6 = [1, 2, 5];
// починаючи з індексу -1 (перед останнім елементом)
// видалимо 0 елементів,
// вставимо значення 3 та 4
arr6.splice(-1, 0, 3, 4);
// console.log(arr6); // 1,2,3,4,5

// slice - він повертає новий масив, копіюючи до нього всі елементи від індексу start до end (не включаючи end)
// arr.slice([start], [end])
let arr7 = ["t", "e", "s", "t"];
// console.log(arr7.slice(1, 3)); // e,s (копіює з 1 до 3)
// console.log(arr7.slice()) // щоб створити копію масиву для подальших перетворень, які не повинні змінювати вихідний масив

// concat - створює новий масив, в який копіює дані з інших масивів та додаткові значення
// arr.concat(arg1, arg2...)
let arr12 = [1, 2];
// console.log(arr12.concat([3,4]));

// forEach - дозволяє запускати функцію для кожного елемента масиву
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, arr) => {
//   console.log(`${item} має позицію ${index} в масиві ${arr}`);
// });

// indexOf
// arr.indexOf(item, from) – шукає item, починаючи з індексу from, і повертає індекс, на якому був знайдений шуканий елемент, в іншому випадку -1.

// lastIndexOf - такий самий, як indexOf, але шукає справа наліво.

// includes
// arr.includes(item, from) – шукає item, починаючи з індексу from, і повертає true, якщо пошук успішний.
// Метод includes правильно обробляє NaN
const ar = [NaN];
// console.log(ar.indexOf(NaN)); // -1 (повинен бути 0, але === перевірка на рівність не працює з NaN)
// console.log(ar.includes(NaN)); // true (вірно)

// find і findIndex/findLastIndex
// Метод find шукає один (перший) елемент, на якому функція-колбек поверне true
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let user = users.find((item) => item.id == 1);
// console.log(user.name); //John
// findIndex – по суті, те ж саме, але повертає індекс, на якому був знайдений елемент, а не сам елемент, і -1, якщо нічого не знайдено.
// findLastIndex схожий на findIndex, але шукає справа наліво, подібно до lastIndexOf.

// filter
// повертає масив з усіх відфільтрованих елементів
let users1 = users.filter((item) => item.id < 3);
// console.log(users1);

// map
// викликає функцію для кожного елемента масиву і повертає масив результатів виконання цієї функції.
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// console.log(lengths); // 5,7,6

// sort
// сортує масив “на місці”, змінюючи в ньому порядок елементів
// змінюється сам arr
// За замовчуванням елементи сортуються як рядки.
[1, 2, 15].sort(function (a, b) {
  return a - b;
  // return  b - a;
});
// [1, 2, 15].sort( (a, b) => a - b );

// для порівняння рядків:
["Österreich", "Andorra", "Vietnam"].sort((a, b) => a.localeCompare(b));

// reverse
// змінює порядок елементів в arr на зворотний.
// Він також повертає масив arr зі зміненим порядком елементів.
[1, 2, 3, 4, 5].reverse(); // [ 5, 4, 3, 2, 1 ]

// split(delim)
// розбиває рядок на масив по заданому роздільнику
let names = "Вася, Петя, Маша";
let arrNames = names.split(", "); // можна виконати обмеження через другий аргумент .split(', ', 2) (лише два елемента в масиві)
// console.log(arrNames)
// split('') з порожнім аргументом s розбиває рядок на масив букв

// join(glue)
// створює рядок з елементів arr, вставляючи glue між ними
// console.log(["Вася", "Петя", "Маша"].join("; "));

// reduce
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);
// accumulator – результат попереднього виклику цієї функції, дорівнює initial при першому виклику (якщо переданий initial),
// item – черговий елемент масиву,
// index – його індекс,
// array – сам масив.
[1, 2, 3, 4, 5].reduce((sum, current) => sum + current, 0);
// при відсутності initial в якості першого значення береться перший елемент масиву, а перебір стартує з другого

// reduceRight працює аналогічно, але проходить по масиву справа наліво

// Array.isArray
// alert(Array.isArray([]));

// some - перевіряє чи хоча б один з елементів масивів задовольняє умову
// console.log([1, 23, 14, 3, 5, 55].some(el => el > 18)); // true

// every - чи кожен з елементів задвольняє умову 
// console.log([1, 23, 14, 3, 5, 55].every(el => el > 18)); // false


// ------------ ЦИКЛИ

// for
// for (let i = 0; i < fruits.length; i ++) {
// 	console.log(fruits[i]);
// }

// for..of - не надає доступу до індексу поточного елементу, тільки до його значення
// for (let el of fruits) {
// 	console.log(el)
// }

// for...in - погана ідея (ніколи не використовуйте!)
// for (let key in fruits) {
// 	console.log(fruits[key]);
// }

// console.log(fruits);

// ЗАВДАННЯ
// Давайте спробуємо 5 операцій з масивом.
// 1. Створіть масив styles з елементами “Jazz” та “Blues”.
// 2. Додайте “Rock-n-Roll” в кінець масиву.
// 3.Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
// 4. Видаліть перший елемент масиву та покажіть його.
// 5. Вставте Rap та Reggae на початок масиву.

let styles = ["Jazz", "Blues"];
// console.log(styles);

styles.push("Rock-n-Roll");
// console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

styles.shift();
// console.log(styles);

styles.unshift("Rap", "Reggae");
// console.log(styles);

// 2. На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].
// Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.
// Написати функцію getMaxSubSum(arr) яка повертає таку суму.
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let el of arr) {
    partialSum += el;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));

// 2. Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.
function camelize(str) {
  let result = str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
  console.log(result);
}
// camelize("-webkit-transition");

// 4. Hапишіть функцію shuffle(array), яка перемішує (випадковим чином переставляє) елементи масиву.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
