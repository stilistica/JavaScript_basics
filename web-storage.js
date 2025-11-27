// https://www.youtube.com/watch?v=3NJjyqO_Y3s
// https://www.youtube.com/watch?v=aO7wur1tBmc

// https://developer.mozilla.org/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
// https://uk.javascript.info/localstorage

// Вебсховище складається з локального сховища та сховища сеансів.
// Локальне сховище (Local Storage): унікальне для кожного вебдодатку і буде однаковим на кількох вкладках, де вебдодаток відкритий. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript. Доступ до даних у локальному сховищі можливий з будь-якої вкладки або вікна браузера, пов'язаної з доменом, який створив дані.
// Сховище сесії (Session Storage): на відміну від локального сховища, дані у сховищі сесії зберігаються лише протягом одної сесії браузера. Якщо користувач закриє вкладку або браузер, дані будуть видалені. Сховище сесії зручне для зберігання тимчасових даних або станів, які не повинні зберігатися довгий час.

// Доступ до локального сховища:
// console.log(localStorage);
// Storage {length: 0}

// Додавання даних setItem(key, value)
// localStorage.setItem("theme", "light");
// console.log(localStorage); // Storage {theme: "light", length: 1}
// А що як у сховищі вже існував запис із ключем "theme"? 
// Виклик методу setItem(key, value) перезапише його значення.

// Додавання складних даних JSON.stringify().
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));
// читаємо: JSON.parse(string)


// Отримання даних getItem(key)
// localStorage.getItem('theme')

// Видалення даних removeItem(key)
// localStorage.removeItem('theme')

// Очищення усіх даних clear()
// localStorage.clear();

// подія storage спрацьовує в інших вкладках, коли змінюється localStorage
// window.addEventListener("storage", () => {
  // console.log("Дані змінились в іншій вкладці!");
// });