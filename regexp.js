// https://uk.javascript.info/regexp-introduction
// https://regexr.com/
// https://www.youtube.com/watch?v=CM8EYdkGFAg
// https://www.youtube.com/watch?v=iNEpqObFv7I
// https://www.youtube.com/watch?v=Qo1FZRvhYsI
// https://uk.javascript.info/regexp-character-classes
// https://uk.javascript.info/regexp-anchors
// https://uk.javascript.info/regexp-escaping
// https://uk.javascript.info/regexp-character-sets-and-ranges
// https://uk.javascript.info/regexp-quantifiers
// https://uk.javascript.info/regexp-lookahead-lookbehind


// let regex = /шаблон/флаги;
// або
// let regex = new RegExp("шаблон", "флаги");

// Флаги
// g	глобальний пошук (пошук шукає всі збіги, без нього – лише перший)
// i	без урахування регістру
// m	мультистроковий режим (Багаторядковий режим) https://uk.javascript.info/regexp-multiline-mode
// s	крапка ловить перенос рядка (при якому крапка . може відповідати символу нового рядка \n)
// u	юнікод (дозволяє коректну обробку сурогатних пар) https://uk.javascript.info/regexp-unicode
// y	sticky (пошук на конкретній позиції в тексті) https://uk.javascript.info/regexp-sticky 

// Основні символи
// .	  будь-який символ (крім перенесення на наступний рядок)
// \d  	цифра
// \D	  не цифра
// \w  	літера/цифра/_
// \W 	НЕ літера
// \s 	пробіл
// \S  	НЕ пробіл
// ^  	початок
// $	  кінець
// [abc]	  один з символів
// [^abc] 	не a/b/c
// (abc)  	група
// `	      `
// |	      0 або 1 (символ або шукається або ні, необов'язковий символ) https://uk.javascript.info/regexp-alternation
// ?	      0 або 1 (символ або шукається або ні, необов'язковий символ)
// *      	0+ (символ може повторюватись)
// +	      1+
// {n}	    рівно n
// {n,}	    мінімум n
// {n,m}	  від n до m
// [a-z]    всі літери
// [0-9]    всі цифри
// \        екранує всі символи наприклад: /\[a-z]\+/ буде шукати конкретно "[a-z]+"
// \b       перевіряє, чи є позиція в рядку межею слова "Hello, Java!".match(/\bJava\b/) // Java https://uk.javascript.info/regexp-boundary

// /[0-9]{9}/g // /\d{9}/ // підходять числа з 9 цифр
// /(p|s).com/g // s.com or p.com
// Методи

// 1. str.match(regexp) для рядка str повертає збіги з регулярним виразом regexp
// let str = "За Вас правда, за вас слава і воля святая!";
// alert(str.match(/вас/gi)); // Вас, вас (масив із 2х підрядків-збігів)
// matchAll()	всі збіги https://uk.javascript.info/regexp-methods 
// якщо збігів немає, то повертається null

// str.replace(regexp, replacement) замінює збіги з regexp у рядку str на replacement
// "We will, we will".replace(/we/i, "I"); // I will, we will

// test()	перевірка → true / false
// чи є хоч один збіг, якщо так, то повертає true, інакше false

// split()	розбивка 


// Перевірка уперед
// Синтаксис виглядає наступнм чином: X(?=Y), це означає “шукай X, але вважай його співпадінням, тільки якщо за ним слідує Y”. Замість X та Y можуть бути будь-які інші шаблони.
// let str = "1 індичка коштує 30€";
// alert( str.match(/\d+(?=€)/) ); // 30, число 1 ігнорується, оскільки після нього стоїть символ €
// Негативна перевірка уперед
// Синтаксис виглядає наступним чином: X(?!Y), і означає “шукай X, але за умови, що після нього не йде Y”.
// let str = "2 індички коштують 60€";
// alert( str.match(/\d+\b(?!€)/g) ); // 2 (ціна не відповідає вимогам шаблону і не відображається в результаті)

// Перевірка назад
// Позитивна перевірка назад: (?<=Y)X, співпадає з X, тільки за умови, якщо перед ним є Y.
// let str = "1 індичка коштує $30";
// alert( str.match(/(?<=\$)\d+/) ); // 30 (число 1 пропущено через відсутність знаку долару перед ним)
// Негативна перевірка назад: (?<!Y)X, співпадає X, тільки за умови, якщо перед ним немає Y.
// let str = "2 індички коштують $60";
// alert( str.match(/(?<!\$)\b\d+/g) ); // 2 (ціна не співпадає з умовами пошуку)