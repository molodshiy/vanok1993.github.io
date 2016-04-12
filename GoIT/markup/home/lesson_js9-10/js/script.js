/**
 * Created by ivan.datsiv on 4/11/2016.
 */

$(function(){
    $("#default-usage-select").selectbox().bind('change', function () {
        $('<div>Value of #default-usage-select changed to: ' + $(this).val() + '</div>').appendTo('#demo-default-usage .demoTarget').fadeOut(5000, function () {
            $(this).remove();
        });
    });

        $(".niceCheck").mousedown(
        function() {
            changeCheck($(this));
        });

        $(".niceCheck").each(
        function() {
            changeCheckStart($(this));
        });

    function changeCheck(el) {
        var el = el,
        input = el.find("input").eq(0);
        if(!input.attr("checked")) {
            el.css("background-position","0 -17px");
            input.attr("checked", true)
        } else {
            el.css("background-position","0 0");
            input.attr("checked", false)
        }
        return true;
    }

    function changeCheckStart(el){
        var el = el,
        input = el.find("input").eq(0);
        if(input.attr("checked")) {
            el.css("background-position","0 -17px");
        }
        return true;
    }

});