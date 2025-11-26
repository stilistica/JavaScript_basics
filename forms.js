// https://www.youtube.com/watch?v=m_w6ZQelgz8
// https://www.youtube.com/watch?v=797JCY_TzTI
// https://www.youtube.com/watch?v=jcMqPYwVZtc

// https://uk.javascript.info/form-elements
// https://uk.javascript.info/focus-blur
// https://uk.javascript.info/events-change-input
// https://uk.javascript.info/forms-submit

// https://html.spec.whatwg.org/multipage/forms.html#the-select-element

// Форми в документі є членами спеціальної колекції document.forms.
// Коли у нас є форма, будь-який її елемент доступний в іменованій колекції form.elements.

{
  /* <form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form> */
}
// let form1 = document.forms.my;
// let elem1 = form1.elements.one;
// elem1.value; // 1;

{
  /* <form>
  <input type="radio" name="age" value="10">
  <input type="radio" name="age" value="20">
</form> */
}
// let form2 = document.forms[0];
// let ageElems = form2.elements.age;
// ageElems[0]; // [object HTMLInputElement]

// Елементи <fieldset> як “підформи”

{
  /* <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
  </form> */
}
// form.elements.login; // <input name="login">
// let fieldset = form.elements.userFields;
// fieldset; // HTMLFieldSetElement
// // ми можемо отримати поле за іменем як з форми, так і з елементу fieldset
// (fieldset.elements.login == form.elements.login); // true

// Коротший варіант: form.name
// Існує коротший варіант запису: ми можемо отримати доступ до елемента через form[index/name]
{
  /* <form id="form">
  <input name="login">
</form> */
}
// form.elements.login == form.login; // true, це один і той самий <input>
// form.login.name = "username"; // змінюємо ім’я поля вводу
// // form.elements оновив ім’я:
// form.elements.login; // undefined
// form.elements.username; // input
// // а у формі доступні обидва імені: нове та старе
// form.username == form.login; // true

// Елементи форми

// --------- input та textarea
// Ми можемо отримати доступ до їх значення через властивість input.value (рядок) або input.checked (логічне значення) для чекбоксів і перемикачів (radio buttons).
// input.value = "Нове значення";
// textarea.value = "Новий текст";
// input.checked = true; // для чекбокса або перемикача (radio button)

// --------- select та option
// select.options – набір піделементів <option>,
// select.value – значення поточного обраного елемента <option>,
// select.selectedIndex – номер поточного обраного елемента <option>.
{
  /* <select id="select">
  <option value="apple">Яблуко</option>
  <option value="pear">Груша</option>
  <option value="banana">Банан</option>
</select> */
}
// select.options[2].selected = true;
// select.selectedIndex = 2;
// select.value = 'banana';

// Ось приклад того, як отримати вибрані значення з елемента <select> з множинним вибором:
{
  /* <select id="select" multiple>
  <option value="blues" selected>Блюз</option>
  <option value="rock" selected>Рок</option>
  <option value="classic">Класика</option>
</select> */
}
// let selected = Array.from(select.options)
//   .filter((option) => option.selected)
//   .map((option) => option.value);
// alert(selected); // blues,rock

// --------- Елементи <option>
// option.selected
// Вказує чи обрана опція.
// option.index
// Номер опції серед інших в елементі <select>.
// option.text
// Текстовий зміст опції (те, що бачить відвідувач).

// Події focus/blur
// Поточний елемент в фокусі можна отримати з document.activeElement.
// Обробник події blur перевіряє чи заповнено поле email, а якщо ні – показує помилку.
// Обробник події focus ховає повідомлення про помилку (на blur перевірку буде виконано ще раз)
{
  /* Ваша електронна адреса: <input type="email" id="input">
 <div id="error"></div> */
}
// input.onblur = function () {
//   if (!input.value.includes("@")) {
//     // це не електронна адреса
//     input.classList.add("invalid");
//     error.innerHTML = "Будь ласка, введіть правильну електронну адресу.";
//   }
// };
// input.onfocus = function () {
//   if (this.classList.contains("invalid")) {
//     // видалити індикатор помилки, тому що користувач хоче ввести дані заново
//     this.classList.remove("invalid");
//     error.innerHTML = "";
//   }
// };

// Методи focus/blur
//  встановлюють/прибирають фокус на елементі

// Події

// ------- change
// Подія change спрацьовує після закінчення зміни елемента.
// Для текстовогополя це означає, що подія відбувається, коли втрачається фокус.
{
  /* <input type="text" onchange="alert(this.value)">
<input type="button" value="Button"></input> */
}

// ------- input
// Подія input запускається щоразу після того, як користувач змінює значення.
{
  /* <input type="text" id="input"> oninput: <span id="result"></span> */
}
// input.oninput = function() {
//   result.innerHTML = input.value;
// };

// ------- cut, copy, paste
// Ці події відбуваються під час вирізання/копіювання/вставлення значення.
// Ми можемо використовувати event.preventDefault(), щоб припинити дію, тоді нічого не буде скопійовано/вставлено.
// Дії можна запобігти. Властивість event.clipboardData надає доступ до буфера обміну. Усі браузери, крім Firefox, також підтримують navigator.clipboard.


// Подія: submit
// Метод form.submit() дозволяє ініціювати відправку форми за допомогою JavaScript. Ми можемо використовувати його для динамічного створення та надсилання власних форм на сервер.
// Щоб надіслати форму на сервер вручну, ми можемо викликати form.submit().