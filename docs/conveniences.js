$(document).ready(function(){
    $("input:radio[name=option]").click(function() {
        var value = $(this).val();
        var image_name;
        if(value == 'rest'){
            image_name = "img/restaurant.png";
        }else{
            if(value == 'trans'){
                image_name = "img/transportation.png";
            }else{
                image_name = "img/convstore.png";
            }
        }
         $('#conv-image').attr('src', image_name);
    });
});