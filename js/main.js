
// ========================================
// Корзина
// var basket = document.querySelector('#basket');
// var basketDropmenu = document.querySelector('.basket__dropmenu');
// // console.log(basketDropmenu);
// basket.onclick = function () {
//   basketDropmenu.classList.toggle("active");
// }
// // ========================================
// // Получение данных о товаре: картинку, заголвок, цены
// var featImg = document.querySelectorAll('.f__item__img > img');
// var featH4 = document.querySelectorAll('.featured__item > h4');
// var featPrice = document.querySelectorAll('.f__item__prices > span');
// var featDel = document.querySelectorAll('.f__item__prices > del');
// // console.log(featImg.src);

// ========================================
// Перебор товаров

// featImg.forEach(img => console.log(img));
// featH4.forEach(h4 => console.log(h4));
// featPrice.forEach(price => console.log(price));
// featDel.forEach(del => console.log(del));

// ========================================

// var btnBasket = document.querySelectorAll('.f__item__links > .btn__basket');
// // console.log(btnBasket);

// // По клику получаем название товара
// btnBasket[0].addEventListener("click", function (event) {
//   event.preventDefault();
//   var featH4Length = featH4.length;
//   for (var i = 0; i < featH4Length; i++) {
//     console.log(featH4[i].innerText);
//   }
// });
// // По клику получаем цену товара

// btnBasket[1].addEventListener("click", function (event) {
//   event.preventDefault();
//   var featPriceLength = featPrice.length;
//   for (var i = 0; i < featPriceLength; i++) {
//     console.log(featPrice[i].innerText);
//   }

// });

// // По клику получаем адрес ссылки изображения

// btnBasket[2].addEventListener("click", function (event) {
//   event.preventDefault();
//   var featImgLength = featImg.length;
//   for (var i = 0; i < featImgLength; i++) {
//     console.log(featImg[i].src);
//   }

// });

// ========================================

// Домашка №30
// -------------------
// Вичисляем длину окружности, когда вводим радиус окружности

// function lengthCircle(radius) {
//   return 2 * Math.PI * radius;
// }
// var lengthCircleResults = lengthCircle(20);
// console.log('Длина окружности равна: ' + lengthCircleResults);

// // -------------------
// // Функцию  которая возвращает меньшее из чисел a и b

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// var lesserNumber = min(5, 10);

// console.log('Меньшее число: ' + lesserNumber);
// -------------------

// ========================================
// Домашка №31
// -------------------
// 1) Возводим в степень числа вводимые пользователем

// function powerNum(number) {
//   return Math.pow(number, 2);
// }
// let numberPow = 20;
// let powerResult = powerNum(numberPow);

// console.log('Результат возведения в степени числа ' + numberPow + ' равна: ' + powerResult);

// // -------------------
// // 2) Находим площадь круга, радиус который вводит пользователь

// function areaCircle(radius) {
//   return Math.pow(radius, 2) * Math.PI;
// }
// let areaCircleUser = 5;
// let areaCircleRes = areaCircle(areaCircleUser);
// console.log('Площадь круга c радиусом ' + areaCircleUser + ' равна: ' + areaCircleRes);

// // -------------------
// // 3) Находим площадь прямоугольника

// function areaRectangle(lengthRectangle, widthRectangle) {
//   return lengthRectangle * widthRectangle;
// }
// let areaRectangleLength = 8;
// let areaRectangWidth = 6;

// let areaRectangleResult = areaCircle(areaRectangleLength, areaRectangWidth);
// console.log('Площадь прямоугольника с длиной ' + areaRectangleLength + ' и шириной ' + areaRectangWidth + ' равна: ' + areaRectangleResult);

// ========================================

// Домашка №32

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1.2, 1.2).toFixed(2));
// console.log(sum(2.5, 2.3).toFixed(5));
// console.log(sum(2.5, 2.7).toFixed(5));
// console.log(sum(2.5, 3.2).toFixed(6));

// ========================================

// Домашка №33
//Фунция которая запрашивает ввести логин и парол

// var btnBasket = document.querySelectorAll('.f__item__links > .btn__basket');
// // console.log(btnBasket);

// let myFunction = function (e) {
//   let login = prompt('Пожалуйста, введите ваш логин: ')
//   e.preventDefault();
//   if (login === 'Ulanbek') {
//     for (let i = 2; i >= 0; i--) {
//       let password = prompt('Введите ваш пароль: ')
//       if (password !== '54321') {
//         alert('У вас осталось ' + i + ' попыток');
//       } else {
//         alert('Добро пожаловать, ' + login)
//         break
//       }
//       if (i === 0) {
//         alert('Извините, вы 3 раза ввели неправильный пароль. Тебе не место тута.');
//         break
//       }
//     }
//   } else {
//     alert('Вы неправильно ввели Логин! Перезагрузите страницу, чтобы ввести повторно...')
//   }
// }

// for (let i = 0; i < btnBasket.length; i++) {
//   btnBasket[i].addEventListener('click', myFunction, false);
// }
// // ========================================
// // Домашка №33 (2)

// document.body.onload = addElement;
// var my_div = newDiv = null;

// function addElement() {

//   // Создаём новый элемент div
//   // и добавляем в него немного контента
//   let tagName = prompt('Какой тег создать? ');
//   var newDiv = document.createElement(tagName);
//   let textName = prompt('Какой текст хотите вставить? ');
//   newDiv.innerHTML = textName;

//   // Добавляем только что созданный элемент в дерево DOM

//   my_div = document.getElementById("org_div1");
//   let newTag = document.body.insertBefore(newDiv, my_div);

//   let textColor = prompt('Какой цвет текст хотите вставить? ');
//   newTag.style.color = textColor;

// }
// ========================================

// Домашка №34(1)

// let psevdoArray = { 0: 'first', 1: 'second', 2: 'third', length: 3 };
// let array1 = [];

// for (let i = 0; i < psevdoArray.length; i++) {
//   array1.push(psevdoArray[i])
// }
// console.log(array1);

// // Домашка №34(2)

// let array2 = ["first", "second", "third"];

// for (let i = 0; i < array2.length; i++) {
//   console.log(Array.from(array2[i]));
// }
// ========================================

// ========================================
// Домашка №35

// let myName = prompt("Введите имя: ", "");
// let mySurname = prompt("Введите фамилию: ", "");
// let myCode = prompt("Введите код: ", "");

// if (myName == "Ulanbek" && mySurname == "Moidunov" && myCode == "1111") {
//   function myFunc(myObj) {
//     const newObj = {};
//     let key;
//     for (key in myObj) {
//       newObj[key] = myObj[key];
//     }
//     return newObj;

//   }
//   const oldObj = {
//     name: 'Ulanbek',
//     surname: 'Moidunov',
//     kod: '1111',
//     hobby: {
//       1: "football",
//       2: "coding"
//     }
//   }
//   // console.log(oldObj);
//   console.log(myFunc(oldObj));

// } else {
//   alert(" Ошибочка вышла!!!!(");
// }

// ========================================

// Домашка №36
// let salary = {
//   almaz: 1200,
//   adilet: 1300,
//   nursultan: 3000,
// };
// let bonus = {
//   almaz: 400,
//   adilet: 300,
//   nursultan: 200,
// };

// var sum = {}
// Object.keys(salary).forEach(function (a) {
//   sum[a] = salary[a] + bonus[a]

// })
// console.log(sum)

// ========================================

// Домашка №38

// function num_1(num_user) {

//   if (typeof num_user === "number") {

//     let num_16 = num_user.toString(16); // Шестнадцатеричный  код
//     let num_8 = num_user.toString(8); // Восьмеричный  код
//     let num_2 = num_user.toString(2); // Двоичный код

//     console.log(num_16);
//     console.log(num_8);
//     console.log(num_2);


//   } else {
//     console.log('Введенные вами данные, не число');
//   }
// }

// // num_1(prompt('Введите число: ', ''));
// num_1(13);
// num_1(55);
// num_1(16);

// ========================================

// Домашка №42

// let headerSubmenu = document.querySelectorAll('.header__submenu ul > li > a');
// console.log(headerSubmenu);

// headerSubmenu.forEach((e) => {
//   e.onclick = function () {
//     this.remove();
//   }
// });

// ========================================
// Домашка №43
let body = document.querySelector('body');
let btn_red = document.querySelector('.red');
let btn_yellow = document.querySelector('.yellow');
let btn_green = document.querySelector('.green');
let btn_default = document.querySelector('.default');

body.style.transition = '1s';

btn_red.addEventListener('click', function (e) {
  e.preventDefault();
  body.style.backgroundColor = 'red';
});
btn_yellow.addEventListener('click', function (e) {
  e.preventDefault();
  body.style.backgroundColor = 'yellow';
});
btn_green.addEventListener('click', function (e) {
  e.preventDefault();
  body.style.backgroundColor = 'green';
});
btn_default.addEventListener('click', function (e) {
  e.preventDefault();
  body.style.backgroundColor = 'transparent';
});

// ========================================

























