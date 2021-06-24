// Корзина
var basket = document.querySelector('#basket');
var basketDropmenu = document.querySelector('.basket__dropmenu');
// console.log(basketDropmenu);
basket.onclick = function () {
  basketDropmenu.classList.toggle("active");
}
const btn__basket = document.querySelectorAll('.btn__basket');

let add_to_card = function (e) {
  e.preventDefault();

  let title = this.parentNode.parentNode.querySelectorAll('h4');
  let currency = this.parentNode.parentNode.querySelectorAll('.f__item__prices > span .currency ');
  let price = this.parentNode.parentNode.querySelectorAll('.f__item__prices > span .price_number ');
  let image = this.parentNode.parentNode.querySelectorAll('.f__item__img > img');

  // console.log(title[0].innerText);
  // console.log(price[0].innerText);
  // console.log(image[0].src);

  let create_li = document.createElement('li');
  create_li.innerHTML = ' <div class="element__img">\
                            <img src="'+ image[0].src + '" alt = "featured">\
                          </div >\
                          <div class="element__text">\
                            <h4>\
                              '+ title[0].innerText + '\
                            </h4>\
                            <div>\
                              <p>\
                                <span>\
                                  <span>\
                                  '+ currency[0].innerText + '\
                                  </span>\
                                  <span class="price_li">\
                                  '+ price[0].innerText + '\
                                  </span>\
                                </span>\
                              </p>\
                              <p>\
                                <del>$42.00</del>\
                              </p>\
                            </div>\
                          </div>\
                          <a href="#" class="element__remove">\
                            <i class="far fa-trash-alt"></i>\
                          </a>'
  let dropmenu__elements = document.querySelector('.dropmenu__elements  ul');
  dropmenu__elements.appendChild(create_li);

  // Удаление карточек

  const remove_card = document.querySelectorAll('.element__remove');

  let remove_to_card = function (evt) {
    evt.preventDefault();
    this.parentNode.remove();
    // Вызов функции Определения обшей цены
    totalPrice();
    // Вызов функции Определения количества карточек в корзине
    quantityCards();
  }

  for (let i = 0; i < remove_card.length; i++) {
    remove_card[i].addEventListener('click', remove_to_card, false);
  }

  // Вызов функции Определения обшей цены
  totalPrice();
  // Вызов функции Определения количества карточек в корзине
  quantityCards();

}

for (let i = 0; i < btn__basket.length; i++) {
  btn__basket[i].addEventListener('click', add_to_card, false);
}



// Определение обшей цены
function totalPrice() {

  let countAllPrice = document.querySelectorAll('.price_li');
  let total_price = 0;

  for (let i = 0; i < countAllPrice.length; i++) {
    total_price = total_price + (+countAllPrice[i].textContent);
  }

  let basket_price = document.querySelectorAll('.basket_price');
  let dropmenu_price = document.querySelectorAll('.dropmenu_price');

  basket_price[0].innerHTML = total_price;
  dropmenu_price[0].innerHTML = total_price;

}

// Определение количества карточек в корзине

function quantityCards() {

  let all_li = document.querySelectorAll('.dropmenu__elements ul > li');
  let all_cards = 0;

  for (let i = 0; i < all_li.length; i++) {
    all_cards = all_li.length;
  }

  let quantity_cards = document.querySelectorAll('.quantity_cards');
  quantity_cards[0].innerHTML = all_cards;

}