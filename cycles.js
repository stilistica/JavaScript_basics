// https://www.youtube.com/watch?v=jMQAkhwYb5U
// https://uk.javascript.info/while-for

// оператори циклу
// ітерація - одне виконання циклу

// ------ while
// let w = 2;
// while (w < 6) {
// 	// console.log(w);
// 	w++;
// }
// while (w) {
// 	// console.log(w--);
// }
// --- break
// while (true) {
// 	w++;
// 	if (w = 6)
// 		console.log('Stop')
// 	break;
// 	console.log('Done')
// }
// let i = 0;
// Префіксна форма ++i:
// while (++i < 5) console.log( i ); // 1-4 (++і збфльшує на 1 і повертає нове значення)
// Постфіксна форма i++
// while (i++ < 5) console.log( i ); // 1-5 (i++ збільшує на один і повертає старе значення)

// ------ do...while
// при такій умові цикл виконається хоча б один раз
// let dw = 0;
// do {
// 	console.log(dw)
// } while (dw > 4)

// ------ for
// будь-яку частину for можна пропустити.
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = `Значення в координатах (${i},${j})`;
// 		console.log(input)
//   }
// }
// let i = 0;
// Префіксна форма ++i:
// for (let i = 0; i < 5; ++i) console.log( i ); // 0-4
// Постфіксна форма i++
// for (let i = 0; i < 5; i++) console.log( i ); // 0-4
// Якщо true – виконати тіло циклу: викликати alert(i), а потім i++(++і).

// --- continue
// for (let i = 0; i < 10; i++) {
// 	// якщо умова справджується, тоді пропускаємо решту циклу та починаємо з наступної ітерації
// 	if (i % 2 == 0) continue;

// 	console.log(i); // 1 3 5 7 9
// }

// ЗАВДАННЯ вивести прості числа від 2 до 10 
let n = 10;
for (let i = 2; i <= n; i ++) {
	dontStop = true;

	for (let k = 2; k < i; k++) {
		if (i % k == 0) {
			dontStop = false;
			break;
		}
	}

	if (dontStop) console.log(i);
}