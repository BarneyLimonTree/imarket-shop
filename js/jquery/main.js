var cart = {}; //корзина
function init() {
    //вызываем файл из JSON
    $.getJSON("goobs.json", goodsOut);
}

function goodsOut(data) {
    //вывод на страницу из JSON 
    var out = "";
    for (var item in data) {
        out += `<div class="cart">`;
        out += `<p class="name">${data[item].name}</p>`;
        out += `<img class="image" src="img/${data[item].img}" alt="">`;
        out += `<div class="cost"> Стоимость: '${data[item].cost}'</div>`;
        out += `<button class="add-to-cart" data-id="${item}">Купить</button>`;
        out += `</div>`;
    }
    $(".goods-out").html(out);
    $(".add-to-cart").on("click", addToCart);
};
function addToCart() {
    //кладем товар в корзину 
    var id = $(this).attr("data-id");
    //Проверка работы путем вывода в консоль 
    //console.log(id);
    if(cart[id]==undefined) {
        cart[id] = 1; // если в корзине ничего нет то добаляем 1 ед 
    } else {
        cart[id]++; // если такой товар есть, то увеличиваю на 1 
    }
    //для проверки опять вывожу в консоль 
    showMiniCart();
    saveCart();
}
function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showMiniCart(){
    //в этой функции вывожу корзину (пока пробно без фронта)
    var out = "";
    for (var item in cart){
        out += item +' --- '+ cart[item]+'<br>';
    }
    $('.mini-cart').html(out);
}

function loadCart(){
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function () {
    init();
    loadCart();
});