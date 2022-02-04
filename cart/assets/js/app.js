$('.total-price').val($('.product-unitPrice').val() * $('.product-quantily').val()); 

function changeQuantily(){
    if($('.product-quantily').val() <= 0){
        $('.delete-product').removeClass('hide');
    }else{
        $('.total-price').val($('.product-unitPrice').val() * $('.product-quantily').val()); 
    }
}

$('.total-price1').val($('.product-unitPrice1').val() * $('.product-quantily1').val()); 

function changeQuantily1(){
    if($('.product-quantily1').val() <= 0){
        $('.delete-product').removeClass('hide');
    }else{
        $('.total-price1').val($('.product-unitPrice1').val() * $('.product-quantily1').val()); 
    }
}

$('.total-price2').val($('.product-unitPrice2').val() * $('.product-quantily2').val()); 

function changeQuantily2(){
    if($('.product-quantily2').val() <= 0){
        $('.delete-product').removeClass('hide');
    }else{
        $('.total-price2').val($('.product-unitPrice2').val() * $('.product-quantily2').val()); 
    }
}

function deleteProduct(){
    $('.delete-product').removeClass('hide');
}

function deleteCancel(){
    $('.delete-product').addClass('hide');
    $('.product-quantily').val(1);
    $('.total-price').val($('.product-unitPrice').val() * $('.product-quantily').val()); 
}

var a = parseFloat($('.total-price').val());
var b = parseFloat($('.total-price1').val());
var c = parseFloat($('.total-price2').val());

var sum = a + b + c;
$('#sum_id').val(sum);