/**
 * Created by ivan.datsiv on 4/21/2016.
 */


function GoogleCallback(j, data) {

    document.getElementById("content").innerHTML = '';
    var ul = document.createElement("ul");
    $.each(data.results, function (i, val) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="' + val.url + '" title="' + val.url + '" target="_blank">' + val.title + "</a> - " + val.content;
        ul.appendChild(li);
    });
    $('.content').append(ul);
}

function search() {
    var $textSearch = $('#input_search').attr('value');
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2' +
        'WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + $textSearch + '&callback=GoogleCallback&context=?',

        dataType: 'jsonp'
    });
}

$(function () {

    $('#bt_search').on('click', search);
    $('#input_search').keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            search();
        }
    });

    function Humen() {
        this.name = "Vania";
        this.age = 22;
        this.gender = "male";
        this.growth = 185;
        this.weigth = 75;
    }

    function Worker() {
        this.company = 'google';
        this.salary = 2000;
        this.work = function () {
            console.log("work!");
        }
    }

    function Student() {
        this.institute = 'kpi';
        this.scholarship = 700;
        this.watchSerial = function() {
            console.log("watch Serial!")
        };
    }

    Worker.prototype = new Humen();
    Student.prototype = new Humen();

    var newWorker1 = new Worker;
    console.log(newWorker1.name);
    console.log(newWorker1.age);

    var newStudent1 = new Student();
    console.log(newStudent1.growth);
    newStudent1.watchSerial();
});