$(document).ready(function(){

    if($.cookie('winkelmand') === undefined){
        $.cookie('winkelmand', "[]", { expires: 365 * 10 });
        console.log($.cookie('winkelmand'));
    }else{
        console.log($.cookie('winkelmand'));
    }



    $(".in-shopping-cart").click(function () {
        var nrOfProduct = $(this).closest(".in-shopping-cart").attr("id");

        var arrayFromCookie;
        if($.cookie('winkelmand') !== "" || $.cookie('winkelmand') !== null){
            arrayFromCookie = JSON.parse($.cookie('winkelmand'));
        }

        var found = false; var index = -1;
        for(var i = 0; i < arrayFromCookie.length; i++) {

            if (arrayFromCookie[i].productnr === nrOfProduct) {
                arrayFromCookie[i].value++;
                found = true;
                index = i;
                break;
            }
        }

        if(found !== true){
            console.log("maak nieuw aan!");
            obj = {
                "productnr": nrOfProduct,
                "value": 1
            };

            arrayFromCookie.push(obj);
        }else{
            console.log("zit er al in");
        }

        console.log(arrayFromCookie);
        $.cookie('winkelmand', JSON.stringify(arrayFromCookie));
    });



    $(".out-of-shopping-cart").click(function () {
        var nrOfProduct = $(this).closest(".out-of-shopping-cart").attr("id");

        var arrayFromCookie;
        if($.cookie('winkelmand') !== "" || $.cookie('winkelmand') !== null){
            arrayFromCookie = JSON.parse($.cookie('winkelmand'));
        }

        var updatedArray = arrayFromCookie.filter(function( obj ) {
            return obj.productnr !== nrOfProduct;
        });

        $.cookie('winkelmand', JSON.stringify(updatedArray));
        location.reload();
    });



});




function updateCart(nrOfProduct, value) {

    var arrayFromCookie;
    if($.cookie('winkelmand') !== "" || $.cookie('winkelmand') !== null){
        arrayFromCookie = JSON.parse($.cookie('winkelmand'));
    }

    for(var i = 0; i < arrayFromCookie.length; i++) {
        if (arrayFromCookie[i].productnr == nrOfProduct) {
            arrayFromCookie[i].value = parseInt(value);
            break;
        }
    }

    $.cookie('winkelmand', JSON.stringify(arrayFromCookie));
}