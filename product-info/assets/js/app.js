let a = $('#quantily_id').val();
$('.minus').prop('disabled', true);
$('.plus').prop('disabled', false);

function minus(){
    a--;
    if(a == 1){
        $('.minus').prop('disabled', true);
        $('.plus').prop('disabled', false);
    }else if(a == 10){
        $('.minus').prop('disabled', false);
        $('.plus').prop('disabled', true);
    }else{
        $('.plus').prop('disabled', false);
        $('.minus').prop('disabled', false);
    }
    
    $('#quantily_id').val(a);
}

function plus(){
    a++;
    if(a == 1){
        $('.minus').prop('disabled', true);
        $('.plus').prop('disabled', false);
    }else if(a == 10){
        $('.minus').prop('disabled', false);
        $('.plus').prop('disabled', true);
    }else{
        $('.plus').prop('disabled', false);
        $('.minus').prop('disabled', false);
    }
    $('#quantily_id').val(a);
}