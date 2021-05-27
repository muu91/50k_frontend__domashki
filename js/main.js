
// ========================================
// Корзина
var basket = document.querySelector('#basket');
var basketDropmenu = document.querySelector('.basket__dropmenu');
// console.log(basketDropmenu);
basket.onclick = function () {
  basketDropmenu.classList.toggle("active");
}
// ========================================
// Получение данных о товаре: картинку, заголвок, цены
var featImg = document.querySelectorAll('.f__item__img > img');
var featH4 = document.querySelectorAll('.featured__item > h4');
var featPrice = document.querySelectorAll('.f__item__prices > span');
var featDel = document.querySelectorAll('.f__item__prices > del');
// console.log(featImg.src);

// ========================================
// Перебор товаров

// featImg.forEach(img => console.log(img));
// featH4.forEach(h4 => console.log(h4));
// featPrice.forEach(price => console.log(price));
// featDel.forEach(del => console.log(del));

// ========================================

var btnBasket = document.querySelectorAll('.f__item__links > .btn__basket');
// console.log(btnBasket);

// По клику получаем название товара
btnBasket[0].addEventListener("click", function (event) {
  event.preventDefault();
  var featH4Length = featH4.length;
  for (var i = 0; i < featH4Length; i++) {
    console.log(featH4[i].innerText);
  }
});
// По клику получаем цену товара

btnBasket[1].addEventListener("click", function (event) {
  event.preventDefault();
  var featPriceLength = featPrice.length;
  for (var i = 0; i < featPriceLength; i++) {
    console.log(featPrice[i].innerText);
  }

});

// По клику получаем адрес ссылки изображения

btnBasket[2].addEventListener("click", function (event) {
  event.preventDefault();
  var featImgLength = featImg.length;
  for (var i = 0; i < featImgLength; i++) {
    console.log(featImg[i].src);
  }

});

// ========================================

// Домашка №30
// -------------------
// Вичисляем длину окружности, когда вводим радиус окружности

function lengthCircle(radius) {
  return 2 * Math.PI * radius;
}
var lengthCircleResults = lengthCircle(20);
console.log('Длина окружности равна: ' + lengthCircleResults);

// -------------------
// Функцию  которая возвращает меньшее из чисел a и b

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
var lesserNumber = min(5, 10);

console.log('Меньшее число: ' + lesserNumber);

// ========================================






// ========================================






