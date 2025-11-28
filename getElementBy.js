// https://www.youtube.com/watch?v=HlIxeXxSD4I
// youtube.com/watch?v=oI66jhr1Ak8&pp=ygUQZ2V0RWxlbWVudEJ5SWQoKQ%3D%3D

// ---- getElementById()
// id має бути унікальним

// <h1 id="title">Привіт</h1>
// <button id="btn">Натисни</button>

// const title = document.getElementById("title");
// const button = document.getElementById("btn");

// ---- getElementsByTagName()

// <p>One</p>
// <p>Two</p>
// <p>Three</p>

// Повертає: HTMLCollection (живу колекцію) 
// Це НЕ масив, а "живий список"
// Його не можна нормально ітерувати через .map().

// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// paragraphs[0].style.color = "red";

// ---- getElementsByClassName()

//<div class="box">A</div>
// <div class="box">B</div>

// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

// ---- querySelector()
// <div class="card" data-id="10"></div>

// document.querySelector("[data-id='20']"); // по атрибуту
// document.querySelector(".box");   // перший елемент з класом box
// document.querySelector("#title"); // елемент з id="title"
// document.querySelector("div p");  // перший <p> всередині <div>
// Якщо нічого не знайдено → null

// ---- querySelectorAll()

// const items = document.querySelectorAll(".item");
// Повертає: NodeList (не масив, але схожий)
// Тобто якщо додати новий елемент → він НЕ з’явиться у списку.