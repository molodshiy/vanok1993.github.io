/**
 * Created by ivan.datsiv on 3/21/2016.
 */

$(function(){
    $("form").on('mouseenter', 'input', function() {
        showTitle(this);
    });

    $("form").on('mouseleave', 'input', function(){
        $(this).parent().find('span').removeClass('title');
        $(this).parent().find('span').addClass('title_hide');
    });

    $('.btn_help').on('click', function(){
        showTitle($('form').find('#firstName'));
        showTitle($('form').find('#lastName'));
        showTitle($('form').find('#Address'));
    });
});

function showTitle (elem){
    if(elem.parent().find('span') == false){
        var textTitle = $(elem).data('title');
        var title = $('<span>'+textTitle+'</span>');
        title.addClass('title');
        $(elem).parent().append(title);
    } else if (elem.parent().find('span') == true && (elem.parent().find('span').hasClass(''))){
        $(elem).parent().find('span').addClass('title');
    }
}
