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
        out += `<button class="add-to-cart">Купить</button>`;
        out += `</div>`;
    }
    $(".goods-out").html(out);
};

$(document).ready(function () {
    init();
});