$('.js-button-campaign').click(function(){
    $('POPUP_REGI_VOLUN').css('filter','blur(5px)');
    $('.js-overlay1-campaign').fadeIn();
    $('.js-overlay1-campaign').addClass('disambled');
});
$('.js-close-popup-campaign').click(function(){
    $('.js-overlay1-campaign').fadeOut();
    $('POPUP_REGI_VOLUN').css('filter','none');
});
$(document).mouseup(function(p){
var pop=$('.js-pop-campaign');
if(p.target!=pop[0]&&pop.has(p.target).length === 0){
    $('.js-overlay1-campaign').fadeOut();
    $('POPUP_REGI_VOLUN').css('filter','none');
}
    });
$(window).on('load',function(){
    setTimeout(function(){
        if($('.js-overlay1-campaign').hasClass('disabled'))
            {
                return false;}
        else{
            $('POPUP_REGI_VOLUN').css('filter','blur(5px)');
            $('.js-overlay1-campaign').fadeIn();
            }
        },5000);
});
