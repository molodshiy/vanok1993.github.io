/**
 * Created by ivan.datsiv on 7/25/2016.
 */

$(function () {
    var $listBands = $('.list_bands');


    var bandsList = {
        bands: [
            {
                id: 1,
                band_name: "Muse",
                members: [
                    "Matt Bellamy", "Chris Wolstenholme", "Dominic Howard"
                ],
                country: "UK",
                rate: 5,
                origin: 1994 - 01 - 01,
                band_photo: "muse.jpg",
                albums: [
                    {
                        name: "Showbiz",
                        cover: "showbiz.png",
                        year: 1999
                    },

                    {
                        name: "Origin of Symmetry",
                        cover: "origin_of_symmetry.png",
                        year: 2001
                    },

                    {
                        name: "Absolution",
                        cover: "absolution.png",
                        year: 2003
                    },

                    {
                        name: "Black Holes and Revelations",
                        cover: "black_holes_and_revelations.png",
                        year: 2006
                    },

                    {
                        name: "The Resistance",
                        cover: "resistance.png",
                        year: 2009
                    },

                    {
                        name: "The 2nd Law",
                        cover: "2nd_law.png",
                        year: 2012
                    },

                    {
                        name: "Drones",
                        cover: "drones.png",
                        year: 2015
                    }
                ]
            },
            {
                id: 2,
                band_name: "AC/DC",
                members: [
                    "Angus Young", " Cliff Williams", "Stevie Young", "Chris Slade"
                ],
                country: "AU",
                rate: 5,
                origin: 1973 - 01 - 01,
                band_photo: "acdc.jpg",
                albums: [
                    {
                        name: "High Voltage",
                        cover: "highVoltage.png",
                        year: 1975
                    },

                    {
                        name: "T.N.T.",
                        cover: "tnt.png",
                        year: 1975
                    },

                    {
                        name: "Dirty Deeds Done Dirt Cheap",
                        cover: "dirtyDeedsDoneDirtCheap.png",
                        year: 1976
                    },

                    {
                        name: "Let There Be Rock",
                        cover: "letThereBeRock.png",
                        year: 1977
                    },

                    {
                        name: "Powerage",
                        cover: "powerage.png",
                        year: 1978
                    },

                    {
                        name: "Highway to Hell",
                        cover: "highwaytoHell.png",
                        year: 1979
                    },

                    {
                        name: "Back in Black",
                        cover: "backInBlack.png",
                        year: 1980
                    },

                    {
                        name: "For Those About to Rock We Salute You",
                        cover: "forThoseAbouttoRockWeSaluteYou.png",
                        year: 1981
                    },

                    {
                        name: "Flick of the Switch",
                        cover: "flickOfTheSwitch.png",
                        year: 1983
                    },

                    {
                        name: "Fly on the Wall",
                        cover: "flyOnTheWall.png",
                        year: 1980
                    },

                    {
                        name: "Blow Up Your Video",
                        cover: "blowUpYourVideo.png",
                        year: 1988
                    },

                    {
                        name: "The Razors Edge",
                        cover: "theRazorsEdge.png",
                        year: 1990
                    },

                    {
                        name: "Ballbreaker",
                        cover: "ballbreaker.png",
                        year: 1995
                    },

                    {
                        name: "Stiff Upper Lip",
                        cover: "stiffUpperLip.png",
                        year: 2000
                    },

                    {
                        name: "Black Ice",
                        cover: "blackIce.png",
                        year: 2008
                    },

                    {
                        name: "Rock or Bust",
                        cover: "rockorBust.png",
                        year: 2014
                    }
                ]
            },

            {
                id: 3,
                band_name: "SOAD",
                members: [
                    "Serj Tankian", "Daron Malakian", "Shavo Odadjian", "John Dolmayan"
                ],
                country: "AU",
                rate: 5,
                origin: 1974 - 2006,
                band_photo: "soad.jpg",
                albums: []
            }
        ]
    };

    //створили JSON
    var jsonBands = JSON.stringify(bandsList, "", 4);
    console.log(jsonBands);

    //парсим JSON
    var objBands = JSON.parse(jsonBands);


    objBands.bands.forEach(function (s, i) {
        $listBands.append('<li>' + objBands.bands[i].band_name + '</li>');
    });


    $listBands.children().on('click', showBand);


    function showBand() {
        var currentElementBandName = $(this).html();
        var bandId = 0;
        var band_photo = 0;
        objBands.bands.forEach(function (s, i) {
            if (s.band_name = currentElementBandName) {
                bandId = s.id;
                band_photo = s.band_photo;
            }
        });
        console.log(bandId);
        var src1 ="<img src=" +"\"img/" + band_photo +"\"" +">";
        console.log(src1);
        /*$('.image_bang_img').attr('src', src1);*/
           /* .append('<img src=' + src + '>');*/

        objBands.bands.forEach(function (s, i) {
            /*$listBands.append('<li>' + objBands.bands[i].band_name + '</li>');*/
        });


    }


});
