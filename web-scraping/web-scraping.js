let arrayJson = [];
$.each($(".product-card"), function() {
titulo = $(this).find(".product-card__title").text();
desconto = parseInt($(this).find(".promotion-tag-discount").text())*-1+'%';
valor = $(this).find(".promotion-price").text();
arrayJson.push({titulo,desconto,valor});
});
console.log(JSON.stringify(arrayJson, null, 2));
