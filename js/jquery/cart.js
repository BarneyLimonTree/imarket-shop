var cart = {};
function loadCart(){
    //здусь я проверяю есть ли localStorage 
    if (localStorage.getItem('cart')) {
        //если есть сработает эта часть кода - я применяю парсинг и записываю в переменную 
        cart  = JSON.parse(localStorage.getItem('cart'));
        showCart();
    }
    else {
        $('.main-cart').html('Корзина пуста');
    }
}

function showCart () {
    if(!isEmpty (cart)) {
        $('.main-cart').html('Корзина пуста');
    }
    else {
        $.getJSON('goobs.json', function(data) {
            var goobs = data;
            var out = '';
            for (var id in cart) {
                out += `<div class = "cart__display">`
                out += `<button data-id="${id}" class="del-goods">x</button>`;
                out += `<img class = "cartImages" src = "img\\${goobs[id].img}">`;
                out += `${goobs[id].name}`;
                out += '</div>';
            }
            $('.main-cart').html(out);
            $('.del-goods').on('click', delGoods);
        } );
    }
}

function delGoods () {
    //удаляем товар из корзины 
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function isEmpty(object){
    //данная функция выполняет проверку на пустоту 
    for (var key in object)
    if(object.hasOwnProperty(key)) return true;
    return false;
}

$(document).ready(function () {
    loadCart();
})