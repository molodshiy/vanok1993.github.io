/**
 * Created by ivan.datsiv on 7/25/2016.
 */

$(function () {

    var objBands = {};
    var albums = [];
    $.ajax({
        url: "info/bands.json",
        type: "GET",
        data: ({}),
        dataType: "html",
        beforeSend: funcBefore,
        success: funcSuccess
    });

    function funcBefore() {
        /* $('#text').text("Waiting...");*/
    }

    function funcSuccess(data) {

        objBands = JSON.parse(data);
        /* $('#text').text("Success");*/

        writeBandName(objBands);

    }


    function writeBandName() {
        objBands.bands.forEach(function (s, i) {
            $('.list_bands').append('<li>' + objBands.bands[i].band_name + '</li>');
        });
        $('.list_bands').children().on('click', showBand);
    }

    function showBand() {
        $('.albums').css("display", "block");
        $('.about_album').text("");
        var currentElementBand = $(this);

        var currentElementBandName = currentElementBand.html();
        var bandId = 0,
            bandName = 0,
            bandMembers = [],
            bandCountry = 0,
            bandRate = 0,
            bandOriginal = 0,
            bandPhoto = 0;
        objBands.bands.forEach(function (s, i) {
            if (s.band_name === currentElementBandName) {
                bandId = s.id;
                bandName = s.band_name;
                bandMembers = s.members;
                bandCountry = s.country;
                bandRate = s.rate;

                bandOriginal = s.origin;
                bandPhoto = s.band_photo;
            }
        });
        console.log(classStarRate);
        var classStarRate = "rate" + bandRate;

        var imgBand = "<img src=" + "\"img/" + bandPhoto + "\"" + ">";
        $('.about_band').text("")
            .append(imgBand)
            .append('<div class="content_band"></div>');

        $('.content_band').text("")
            .append('<h1 class="band_nane">' + bandName + '</h1>')
            .append('<span class="rate ' + classStarRate + '"></span>')
            .append('<p>' + bandMembers + '</p>')
            .append('<p>' + bandCountry + '</p>')
            .append('<p>' + bandOriginal + '</p>');

        writeBandAlbums(bandId);
    }


    function changeClassActive() {
        $('.album_active').addClass('album_hide');
        $('.album_active').removeClass('album_active');

        var q = $(this).find('.album_hide');
        q.removeClass('album_hide');
        q.addClass('album_active');

        /*player(albumName);*/
    }

    function writeBandAlbums(bandId) {
        var listAlbums = $('.list_albums');
        listAlbums.text("");
        albums = objBands.bands[bandId - 1].albums;
        albums.forEach(function (s, i) {
            $('.list_albums').append('<li id="album' + i + '"> <h3 class="album_name">' + s.name + '</h3></li>');
            var e = $('#album' + i + '');
            var imgAlbum = "<img src=" + "\"img/albums/muse/" + albums[i].cover + "\"" + ">";
            e.append('<div class="album_hide" id="albumInfo' + i + '">' + imgAlbum + '</div>');
            $('#albumInfo' + i + '').append(albums[i].year);
        });

        $('.list_albums').children().on('click', changeClassActive);
    }


    function showAlbum() {


    }


    function player(albumName) {
        //Player

        $('.list_songs').append('<li><a href="#" data-src="info/mp3/muse/showbiz/Cave.mp3">Cave</a></li>');

        //Find soungs
        /*$.ajax({
         url: "info/mp3/muse/showbiz/",
         success: function(data){
         $(data).find('a:contains(" .mp3 ")').each(function(){
         // will loop through
         alert("Found a file: " + $(this).attr("href"));
         });
         }
         });*/


        // Setup the player to autoplay the next track
        var a = audiojs.createAll({
            trackEnded: function () {
                var next = $('ol li.playing').next();
                if (!next.length) next = $('ol li').first();
                next.addClass('playing').siblings().removeClass('playing');
                audio.load($('a', next).attr('data-src'));
                audio.play();
            }
        });
        // Load in the first track
        var audio = a[0];
        first = $('ol a').attr('data-src');
        $('ol li').first().addClass('playing');
        audio.load(first);
        // Load in a track on click
        $('ol li').click(function (e) {
            e.preventDefault();
            $(this).addClass('playing').siblings().removeClass('playing');
            audio.load($('a', this).attr('data-src'));
            audio.play();
        });
        // Keyboard shortcuts
        $(document).keydown(function (e) {
            var unicode = e.charCode ? e.charCode : e.keyCode;
            // right arrow
            if (unicode == 39) {
                var next = $('li.playing').next();
                if (!next.length) next = $('ol li').first();
                next.click();
                // back arrow
            } else if (unicode == 37) {
                var prev = $('li.playing').prev();
                if (!prev.length) prev = $('ol li').last();
                prev.click();
                // spacebar
            } else if (unicode == 32) {
                audio.playPause();


                /* var currentElementAlbum = $(this);
                 currentElementAlbum.append('<div class="about_album"></div>');
                 var currentElementAlbumName = currentElementAlbum.html();
                 var albumId = 0,
                 albumName = 0,
                 albumCover = 0,
                 albumYear = 0;
                 albums.forEach(function (s, i) {
                 if (s.name === currentElementAlbumName) {
                 albumId = i;
                 albumName = s.name;
                 albumCover = s.cover;
                 albumYear = s.year;
                 }
                 });
                 $('.about_album').text("")
                 .append('<p>' + albumName + '</p>')
                 .append('<p>' + albumCover + '</p>')
                 .append('<p>' + albumYear + '</p>');

                 player(albumName);*/
            }
        })
    }
})
;
