/**
 * Created by ivan.datsiv on 3/21/2016.
 */

$(function(){

    var form = $("form");
    var span = null;

    form.on('mouseenter', 'input', function() {
        showTitle($(this));
        span = $(this).parent().find('span');
    });

    form.on('mouseleave', 'input', function(){
        span.addClass('title_hide');
        span.removeClass('title');
    });

    $('.btn_help').on('click', function(){
        showTitle(form.find('#firstName'));
        showTitle(form.find('#lastName'));
        showTitle(form.find('#Address'));
    });
});

function showTitle (elem){
    var span = elem.parent().find('span');
    if((!span.hasClass('title')) && (!span.hasClass('title_hide'))){
        var textTitle = $(elem).data('title');
        var title = $('<span>'+textTitle+'</span>');
        title.addClass('title');
        $(elem).parent().append(title);
    } else if ((span.hasClass('title_hide'))){
        span.removeClass('title_hide');
        span.addClass('title');
    }
}
