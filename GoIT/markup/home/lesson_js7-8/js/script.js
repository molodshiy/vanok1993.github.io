/**
 * Created by ivan.datsiv on 3/16/2016.
 */



$(function() {
    var tabs = $('ul.tabs li');

    tabs.click(function(){
        var thisClass = $(this).attr('class').slice(0,2);

        var pastText = $('.text-current');
        var currentText = $('div.' + thisClass);

        pastText.hide();
        pastText.removeClass('text-current');

        currentText.addClass('text-current');
        currentText.show();

        $('.tab-current').removeClass('tab-current');
        $(this).addClass('tab-current');
    });

});