$(document).ready(function(){

    $(".options__button").click(function(){
      
        $(".text__editor").toggleClass("active__text__editor");
    });

    $(".entry__button").click(function(){
       
        $(".text__entry").toggle();
    });

    $(".subheader").click(function(){
     
        $(".h").toggle();
    });
});