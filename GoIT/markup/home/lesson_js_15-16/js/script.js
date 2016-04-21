/**
 * Created by ivan.datsiv on 4/21/2016.
 */
function GoogleCallback () {
    console.log(arguments);
}

$(function(){
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2' +
        'WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + 'test' + '&callback=GoogleCallback&context=?',

        dataType: 'jsonp'
    });
});