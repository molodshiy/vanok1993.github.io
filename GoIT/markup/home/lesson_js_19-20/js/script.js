/**
 * Created by ivan.datsiv on 5/11/2016.
 */
$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    var $h4 = $('.banners_place > h4');

    $h4.on('click', click_banners);

    function click_banners (){
        $(this).next().toggle();
        $(this).toggleClass('h4_click');
        /*$(this).before("").css('background-color','white');*/
    }
});