/**
 * Created by ivan.datsiv on 3/21/2016.
 */

$(function(){
    $("form input").hover(function() {
        $(".t1").hide();
        $(".t2").hide();
        $(".t3").hide();


        /*$(this).find("title").animate({opacity: "show", top: "-75"}, "slow");
        var hoverText = $(this).attr("title");
        hoverText.addClass("title1");
        $(this).find("title").text(hoverText);
    }, function() {
        $(this).find("title").animate({opacity: "hide", top: "-85"}, "fast");*/
    });

});
