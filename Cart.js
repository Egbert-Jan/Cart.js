$(document).ready(function(){

    if($.cookie('cart') === undefined){
        $.cookie('cart', "[]", { expires: 365 * 10 });
        console.log($.cookie('cart'));
    }else{
        console.log($.cookie('cart'));
    }

    $(".in-shopping-cart").click(function (e) {
        e.preventDefault();
        var idOfProduct = $(this).closest(".in-shopping-cart").attr("data-product-id");

        var arrayFromCookie;
        if($.cookie('cart') !== "" || $.cookie('cart') !== null){
            arrayFromCookie = JSON.parse($.cookie('cart'));
        }

        var found = false; var index = -1;
        for(var i = 0; i < arrayFromCookie.length; i++) {

            if (arrayFromCookie[i].productId === idOfProduct) {
                arrayFromCookie[i].amount++;
                found = true;
                index = i;
                break;
            }
        }

        if(found !== true){
            console.log("Product added!");
            obj = {
                "productId": idOfProduct,
                "amount": 1
            };

            arrayFromCookie.push(obj);
        }else{
            console.log("zit er al in");
        }

        console.log(arrayFromCookie);
        $.cookie('cart', JSON.stringify(arrayFromCookie));

    });

    $(".out-of-shopping-cart").click(function (e) {
        e.preventDefault();

        if (confirm('Are you sure you want to delete this product?')) {
            var idOfProduct = $(this).closest(".out-of-shopping-cart").attr("data-product-id");

            var arrayFromCookie;
            if($.cookie('cart') !== "" || $.cookie('cart') !== null){
                arrayFromCookie = JSON.parse($.cookie('cart'));
            }

            var updatedArray = arrayFromCookie.filter(function( obj ) {
                return obj.productId !== idOfProduct;
            });

            $.cookie('cart', JSON.stringify(updatedArray));
            location.reload();
        } else {

        }
    });



});

function updateCart(idOfProduct, amount) {

    var arrayFromCookie;
    if($.cookie('cart') !== "" || $.cookie('cart') !== null){
        arrayFromCookie = JSON.parse($.cookie('cart'));
    }

    for(var i = 0; i < arrayFromCookie.length; i++) {
        if (arrayFromCookie[i].productId == idOfProduct) {
            arrayFromCookie[i].amount = parseInt(amount);
            break;
        }
    }

    $.cookie('cart', JSON.stringify(arrayFromCookie));
}