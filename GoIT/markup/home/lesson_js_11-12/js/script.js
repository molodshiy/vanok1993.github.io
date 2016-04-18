/**
 * Created by ivan.datsiv on 4/18/2016.
 */

$(document).ready(function () {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function () {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function () {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
    });

    var html = $('#person').html();

    var myInfo = {
        fullName: 'Даців Іван Іванович',
        img: 'img/avatar.jpg',
        university: 'Студент Київського політехнічного інститу',
        need: {title: 'Хочу вчити фронтенд, тому що:', item1: 'Цікаво', item2: 'Швидко', item3: 'Зручно'},
        phoneNumber: {title: 'Мій контактний телефон', number: '+380665696610'},
        socialVk: {title: 'Мій профіль вконтакті', link: 'https://vk.com/'},
        myFeedback: {title: 'Мій фідбек:', feedback: 'Швидко навчаюсь'}

    };

    var content = tmpl(html, myInfo);
    $('body').append(content);
});