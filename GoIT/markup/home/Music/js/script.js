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
            var newObjBand = createCopyBand(s);
            copyObjBandForSort.bands[i] = newObjBand;
        });
        writeBandName();
    }

    function createCopyBand(s) {

        function ObjBandCopy(name, origin, rate) {
            this.name = name;
            this.origin = origin;
            this.rate = rate;
        }

        var newObj = new ObjBandCopy(s.band_name, s.origin, s.rate);
        return newObj;
    };


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
                var sortedArr = [];
                var sortedName = [];

                switch (str) {
                    case 'Name':
                        copyObjBandForSort.bands.forEach(function (s, i) {
                            sortedArr[i] = s.name;
                        });
                        sortedArr.sort(compareName);
                        sortedName = sortedArr;
                        break;

                    case 'Year':
                        copyObjBandForSort.bands.forEach(function (s, i) {
                            sortedArr[i] = s.origin;
                        });
                        sortedArr.sort(compareOrigin);
                        for (var j = 0; j < sortedArr.length; j++) {
                            copyObjBandForSort.bands.forEach(function (s, i) {
                                if (s.origin === sortedArr[j]) {
                                    sortedName[j] = s.name;
                                }
                            });
                        }

                        break;

                    case 'Rate':
                        copyObjBandForSort.bands.forEach(function (s, i) {
                            sortedArr[i] = s.rate;
                        });
                        sortedArr.sort(compareRate);
                        for (var j = 0; j < sortedArr.length; j++) {
                            copyObjBandForSort.bands.forEach(function (s, i) {
                                if (s.rate === sortedArr[j]) {
                                    sortedName[j] = s.name;
                                }
                            });
                        }
                        break;
                }

                console.log(JSON.stringify(sortedArr));
                console.log(JSON.stringify(sortedName));
                $('.list_bands').text("");

                for (var j = 0; j < sortedName.length; j++) {
                    $('.list_bands').append($('<li>' + sortedName[j] + '</li>'));
                }
                ;
                $('.list_bands').children().on('click', showBand);
            })
            .trigger("change");

        function compareName(a, b) {
            return a.localeCompare(b);
        }

        function compareOrigin(a, b) {
            return a - b;
        }

        function compareRate(a, b) {
            return b - a;
        }

    }

    function showBand() {
        var bandId = -1;
        var $currentElementBand = $(this);

        var $currentElementBandName = $currentElementBand.text();

        objBands.bands.forEach(function (s, i) {
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
            boxPlayer.append('<div class="wrapper"><audio preload></audio> <ol class="list_songs"></ol></div>');
        });

        player(albumName);
        $('.list_albums').children().on('click', changeClassActive);
    }

    function changeClassActive() {
        $('.album_active').addClass('album_hide');
        $('.album_active').removeClass('album_active');

        var q = $(this).find('.album_hide');
        q.removeClass('album_hide');
        q.addClass('album_active');
    }

    function player(albumName) {
        //Player

        $('.list_songs').append('<li><a href="#" data-src="info/mp3/muse/showbiz/Cave.mp3">Cave</a></li>');
        $('.list_songs').append('<li><a href="#" data-src="info/mp3/muse/showbiz/Cave.mp3">Cave</a></li>');
        $('.list_songs').append('<li><a href="#" data-src="info/mp3/muse/showbiz/Cave.mp3">Cave</a></li>');
        $('.list_songs').append('<li><a href="#" data-src="info/mp3/muse/showbiz/Cave.mp3">Cave</a></li>');
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
            }
        })
    }
})
;
/*var imgBand = "<img src=" + "\"img/" + s.band_photo + "\"" + ">";
 $('.about_band')
 .append(imgBand);*/