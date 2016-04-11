/**
 * Created by ivan.datsiv on 3/16/2016.
 */



$(function() {
    var $tabs = $('ul.tabs li');

    $tabs.on('click', function(){
        var
            $thisClass = $(this).attr('class').slice(0,2),
            $pastText = $('.text-current'),
            $currentText = $('div.' + $thisClass);

        $pastText.hide();
        $pastText.removeClass('text-current');

        $currentText.addClass('text-current');
        $currentText.show();

        $('.tab-current').removeClass('tab-current');
        $(this).addClass('tab-current');
    });

});