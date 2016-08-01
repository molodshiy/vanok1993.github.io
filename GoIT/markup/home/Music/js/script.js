/**
 * Created by ivan.datsiv on 7/25/2016.
 */
$(function () {

    var objBands = {};
    var copyObjBandForSort = {"bands": []};
    var albums = [];

    $.ajax({
        url: "info/bands.json",
        type: "GET",
        data: ({}),
        dataType: "json",
        beforeSend: funcBefore,
        success: funcSuccess
    });

    function funcBefore() {
    }

    function funcSuccess(data) {
        objBands = data;
        data.bands.forEach(function (s, i) {
            copyObjBandForSort.bands[i] = createCopyBand(s);
        });
        writeBandName();
    }

    function createCopyBand(s) {

        function ObjBandCopy(name, origin, rate) {
            this.name = name;
            this.origin = origin;
            this.rate = rate;
        }

        return new ObjBandCopy(s.band_name, s.origin, s.rate);
    }

    function writeBandName() {
        objBands.bands.forEach(function (s, i) {
            var bandName = objBands.bands[i].band_name;

            var liBandName = $('<li>' + bandName + '</li>');
            $('.list_bands').append(liBandName);
        });

        $("select")
            .change(function () {
                var str = "";
                $("select option:selected").each(function () {
                    str += $(this).text() + "";
                });
                var sortedName = [];

                switch (str) {
                    case 'Name':
                        copyObjBandForSort.bands.sort(compareName);
                        writeSortedName();
                        break;

                    case 'Year':
                        copyObjBandForSort.bands.sort(compareOrigin);
                        writeSortedName();
                        break;

                    case 'Rate':

                        copyObjBandForSort.bands.sort(compareRate);
                        writeSortedName();
                        break;
                }

                function writeSortedName() {
                    copyObjBandForSort.bands.forEach(function (s, i) {
                        sortedName[i] = s.name;
                    });
                }

                var $listBans = $('.list_bands');

                $listBans.text("");

                for (var j = 0; j < sortedName.length; j++) {
                    $listBans.append($('<li>' + sortedName[j] + '</li>'));
                }

                $listBans.children().on('click', showBand);
            })
            .trigger("change");

        function compareName(a, b) {
            return a.name.localeCompare(b.name);
        }

        function compareOrigin(a, b) {
            return a.origin - b.origin;
        }

        function compareRate(a, b) {
            return b.rate - a.rate;
        }
    }

    function showBand() {
        var bandId = -1;
        var $currentElementBand = $(this);

        $currentElementBand.addClass("active_band")
            .siblings().removeClass("active_band");

        var $currentElementBandName = $currentElementBand.text();

        objBands.bands.forEach(function (s) {
            if (s.band_name === $currentElementBandName) {
                bandId = s.id;
                var imgBand = "img/" + s.band_photo;
                var classStarRate = "rate" + s.rate;
                $('.img_band').attr("src", imgBand);
                $('.band_name').html(s.band_name);
                $('.rate').removeClass().addClass("rate " + classStarRate);
                $('.about_band_info').html(s.about_band);
                $('.members').html(s.members.join(", "));
                $('.origin').html(s.origin);
                $('.country').html(s.country);
            }
        });

        writeBandAlbums(bandId);
    }

    function writeBandAlbums(bandId) {
        $('.albums').show();
        var listAlbums = $('.list_albums');
        var albumName = 0;
        listAlbums.text("");
        albums = objBands.bands[bandId - 1].albums;
        albums.forEach(function (s, i) {
            var boxPlayer = $('<div class = "album_hide clearfix"></div>');
            albumName = $('<h3 class="album_name">' + s.name + " - " + albums[i].year + '</h3>');
            var albumLi = $('<li id="album' + i + '"></li>');
            albumLi.append(albumName);
            albumLi.append(boxPlayer);
            $('.list_albums').append(albumLi);
            var albumImgSrc = "img/albums/" + albums[i].cover;
            var imgAlbum = '<img class= "album_img" src="' + albumImgSrc + '">';
            boxPlayer.append(imgAlbum);
        });
        listAlbums.children().on('click', changeClassActive);
    }

    function changeClassActive() {

        $(this).off('click');

        $('.active_album_name').removeClass('active_album_name');
        $(this).children().filter($('.album_name')).addClass('active_album_name');

        var $albumActive = $('.album_active');
        $albumActive.addClass('album_hide')
            .removeClass('album_active');

        $(this).find('.album_hide')
            .removeClass('album_hide')
            .addClass('album_active');

        $('.wrapper').remove();
        $albumActive.append('<div class="wrapper"></div>');
        player();
    }

    function player() {
        $('.wrapper').append('<audio preload></audio> <ol class="list_songs"></ol>')

        var songs = objBands.bands[0].albums[0].songs;
        for (var i = 0; i < songs.length; i++) {
            $('.list_songs').append('<li><a href="#" data-src="info/mp3/muse/showbiz/' + songs[i] + '.mp3"></a>' + songs[i] + '</li>');
        }
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
        var $olLi = $('ol li');
        first = $('ol a').attr('data-src');
        $olLi.first().addClass('playing');
        audio.load(first);
        // Load in a track on click
        $olLi.click(function (e) {
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
            }
        })
    }
})
;