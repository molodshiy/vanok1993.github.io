/**
 * Created by ivan.datsiv on 4/21/2016.
 */


function GoogleCallback (j, data) {

    document.getElementById("content").innerHTML = '';
    var ul = document.createElement("ul");
    $.each(data.results, function(i, val){
        var li = document.createElement("li");
        li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;
        ul.appendChild(li);
    });
    $('.content').append(ul);
}

function search (){
    var $textSearch = $('#input_search').attr('value');
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2' +
        'WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + $textSearch + '&callback=GoogleCallback&context=?',

        dataType: 'jsonp'
    });
}

$(function(){

    $('#bt_search').on('click', search);
    $('#input_search').keypress(function( event ) {
        if (event.which == 13) {
            event.preventDefault();
            search();
        }
    });
});