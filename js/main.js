
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
var featImg = document.querySelector('.f__item__img > img');
var featH4 = document.querySelector('.featured__item > h4');
var featPrice = document.querySelector('.f__item__prices > span');
var featDel = document.querySelector('.f__item__prices > del');
// console.log(featDel);
// ========================================






