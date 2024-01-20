$(document).ready(function(){
    $('#buttomUp').click(function(){
        $('#buttomUp').addClass('active');
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 1500 ){
            // $('#buttomUp').slideDown(300);
            $('#buttomUp').addClass('visible');
        } else if( $(this).scrollTop() == 0 ){
            // $('#buttomUp').slideUp(300);
            $('#buttomUp').removeClass('visible');
            $('#buttomUp').removeClass('active');
        }
    });
});