// https://uk.javascript.info/recursion
// https://www.youtube.com/watch?v=QY-ZldUrvZA
// https://www.youtube.com/watch?v=AQZCP3Tmgg0

// Рекурсія — це коли функція викликає сама себе.
// Але є два важливі правила:
// 1️⃣ Має бути базовий випадок
// — умова, при якій рекурсія зупиняється
// і функція не викликає сама себе далі.
// 2️⃣ Має бути крок наближення до базового випадку
// — щоб кожен виклик ставав простішим
// і в кінці зупинився.

// Приклад;
function countdown(n) {
  if (n === 0) return;

  console.log(n);
  countdown(n - 1);
}
// countdown(5);

const array = [1, 1, [2, 2], [[3, [4, 5, [0]], 3], 2]];
function concatArrRecursively(items) {
  const flattened = [];
  items.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...concatArrRecursively(item));
    } else {
      flattened.push(item);
    }
  });
  return flattened;
}
// console.log(concatArrRecursively(array)) // (1, 1, 2, 2, 3, 4, 5, 0, 3, 2)
// 1. concatArrRecursively([1, 1, [2, 2], [[3, [4, 5, [0]], 3], 2]])
// 2. concatArrRecursively([2,2])
// 3. concatArrRecursively([[3, [4, 5, [0]], 3], 2])
// 4. concatArrRecursively([[3, [4, 5, [0]], 3]]) 
// 5. concatArrRecursively([4, 5, [0]]) -> [4,5] + ...[0]
// 6. concatArrRecursively([0])

// Будь-яка рекурсія може бути переписана за допомогою циклу. Варіант з використанням циклу зазвичай може бути більш ефективним.

// Завдання:
// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.
function sumTo(n) {
	if (n===1) return 1;
	return n + sumTo(n-1) // 10 + 9 + 8 +...+ 1;
}
console.log(sumTo(10))
