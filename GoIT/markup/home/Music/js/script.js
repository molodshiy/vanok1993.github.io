/**
 * Created by ivan.datsiv on 7/25/2016.
 */

$(function () {

    var objBands = {};
    $.ajax({
        url: "info/bands.json",
        type: "GET",
        data: ({}),
        dataType: "html",
        beforeSend: funcBefore,
        success: funcSuccess
    });

    function funcBefore() {
        $('#text').text("Waiting...");
    }

    function funcSuccess(data) {

        objBands = JSON.parse(data);
        $('#text').text("Success");

        writeBandName(objBands);

    }


    function writeBandName() {
        objBands.bands.forEach(function (s, i) {
            $('.list_bands').append('<li>' + objBands.bands[i].band_name + '</li>');
        });
        $('.list_bands').children().on('click', showBand);
    }

    function showBand() {
        var currentElementBandName = $(this).html();
        var bandId = 0,
            bandName = 0,
            bandMembers = [],
            bandCountry = 0,
            bandOriginal = 0,
            bandPhoto = 0;
        objBands.bands.forEach(function (s, i) {
            if (s.band_name === currentElementBandName) {
                bandId = s.id;
                bandName = s.band_name;
                bandMembers = s.members;
                bandCountry = s.country;
                bandOriginal = s.origin;
                bandPhoto = s.band_photo;
            }
        });
        var imgBand = "<img src=" + "\"img/" + bandPhoto + "\"" + ">";
        $('.about_band').text("")
            .append(imgBand)
            .append('<p>' + bandName + '</p>')
            .append('<p>' + bandMembers + '</p>')
            .append('<p>' + bandCountry + '</p>')
            .append('<p>' + bandOriginal + '</p>');

        objBands.bands.forEach(function (s, i) {
            /*$listBands.append('<li>' + objBands.bands[i].band_name + '</li>');*/
        });


    }
});
