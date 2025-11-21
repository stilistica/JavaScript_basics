// https://uk.javascript.info/event-delegation
// https://www.youtube.com/watch?v=1lcM6MS1X1c
// https://www.youtube.com/watch?v=ydnfxSf45MY
// https://www.youtube.com/watch?v=Pl2xy0W38Mo

// event.target — це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна.
// event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.


// Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об’єкта події (event):
// event.stopPropagation(),
// event.stopImmediatePropagation(),

// Делегування подій (event delegation) полягає в додаванні одного обробника на спільного предка цих елементів.

// // html ...
// <div class="wrapper">
//   <div class="wrapper__item">1</div>
//   <div class="wrapper__item">2</div>
//   <div class="wrapper__item">3</div>
//   <div class="wrapper__item">4</div>
//   <div class="wrapper__item">5</div>
//   <div class="wrapper__item">6</div>
// </div>;
// // ... html

// const wrapper = document.querySelector(".wrapper");
// const wrapperItem = document.querySelector(".wrapper__item");

// const printHello = (event) => {
//   event.stopPropagation(); // припинняє підняття і спрацьовує лише на даному елементі
//   event.preventDefault(); // відміняє стандартну поведінку події
//   event.target.closest('.wrapper__item')
//   console.log(event.currentTarget);
// };
// const printWrapper = (event) => {
//   console.log(event.currentTarget);
// };
// const toggleActiveItem = (event) => { // допустимо вішаємо на wrapper клікаємо на item 2
//   console.log(event.target); // item 2
//   console.log(event.currentTarget); // wrapper
// };

// wrapperItem.onClick = printHello; // можна повісити лише один обробник подій, виконуватись буде завжди останній
// wrapperItem.onClick = printHello(); // функція визвиться відразу

// wrapperItem.addEventListener('click', printHello) // мжна дублювати, все вмконується
// wrapper.addEventListener('click', printWrapper); 


// function delegate(box, eventname, selector, handler) {
// 	box.addEventListener(eventname, function(evt) {
// 		let el = evt.target.closest(selector);

// 		if (el !== null && box.contains(el)) {
// 			handler.call(el, evt); // later
// 		}
// 	})
// }


// делегування по класу
// html
{/* <div id="buttons">
  <button class="buy">Buy</button>
  <button class="sell">Sell</button>
  <button class="buy">Buy again</button>
</div>
document.querySelector("#buttons").addEventListener("click", (e) => {
  if (e.target.classList.contains("buy")) {
    console.log("BUY clicked");
  }
  if (e.target.classList.contains("sell")) {
    console.log("SELL clicked");
  }
}); */}

// делегування у формі
{/* <form id="form">
  <input type="text" name="username">
  <input type="email" name="email">
</form>
document.getElementById("form").addEventListener("input", (e) => {
  console.log("Field:", e.target.name, "Value:", e.target.value);
}); */}

// делегування для меню з глибокою вкладеністю
// document.body.addEventListener("click", (e) => {
//   let link = e.target.closest("a");
//   if (!link) return;

//   e.preventDefault();
//   console.log("Navigation to:", link.href);
// });