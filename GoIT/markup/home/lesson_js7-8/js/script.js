/**
 * Created by ivan.datsiv on 3/16/2016.
 */

$(function() {
    var tabs = $('ul.tabs li');

    tabs.click(function(){
        var thisClass = this.className.slice(0,2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + thisClass).show();
        tabs.find('.tab-current').removeClass('tab-current');
        $(this).addClass('tab-current');
    });

});