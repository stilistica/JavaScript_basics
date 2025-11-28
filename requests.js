// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
// https://www.youtube.com/playlist?list=PL0lO_mIqDDFUgBqIpiaES9vhZLJbucdUa
// https://www.youtube.com/watch?v=4T4dc2w2O-c
// https://www.youtube.com/watch?v=sClpStULLfU

// технологія отримання даних з серверу без перезагрузки сторінки

// XMLHttpRequest — це старий браузерний об’єкт, який дозволяє:
// відправляти HTTP-запити
// отримувати відповіді
// працювати з сервером асинхронно
// Весь fetch — це сучасна обгортка над його ідеєю.

// XMLHttpRequest використовується в запитах AJAX і особливо в односторінкових додатках.

// config
const APIKEY = 'КЛЮЧ'
const URL = 'https://api/itgid.info'

function sendRequest() {
  // 1. створення об'єкта
  let request = new XMLHttpRequest();

  // Спрацьовує кожного разу, коли змінюється readyState
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      // відповідь вже отримана
      const response = JSON.parse(request.responseText);
      // console.log(response)
      // console.log(request.responseText)
    } else {
      // запрос обробляється, ще не отриман
    }
  };

  // 2. конфігурація
  let method = "get";
  // let url = 'https://jsonplaceholder.typicode.com/posts';
  let async = true;

  request.open(method, url, async);

  // 3. обработчик
  // onload викликається один раз, і тільки коли:
  //  запит завершився
  //  відповідь успішно отримана
  request.onload = function () {
    console.log(request.status); // 200
    console.log(request.response);
    // const data = JSON.parse(request.response)
  };

  // 4. посилаємо запит
  request.send();
}

// sendRequest()

// GET з авторизацією
function f2() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", URL + "/api/25/employee/read");

  xhr.setRequestHeader("apikey", APIKEY);

  xhr.onload = function () {
    console.log(request.status); // 200
    console.log(request.response);
    // const data = JSON.parse(request.response)
  };

  xhr.send();
}

// POST
function f3() {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", URL + "/api/25/random/generate-password");

  xhr.setRequestHeader("apikey", APIKEY);

  const data = new FormData();
  data.append("length", 8);

  xhr.onload = function () {
    console.log(request.status); // 200
    console.log(request.response);
    // const data = JSON.parse(request.response)
  };

  xhr.send(data); // !!!!!
}
