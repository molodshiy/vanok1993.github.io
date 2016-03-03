/**
 * Created by Vania on 16.12.2015.
 */

var title = document.createElement('h1');
title.innerHTML = "Тест по програмировинию";
title.className = "title";
document.body.appendChild(title);

var form = document.createElement('form');
form.setAttribute('action', 'answers');
document.body.appendChild(form);

var questions = document.createElement('ul');
questions.className = "questions";
form.appendChild(questions);

for(var i = 1; i < 4; i++){

    var h3 = document.createElement('h3');
    h3.innerHTML =+i +". Вопрос №" +i;
    h3.className = 'questions_title';
    var li = document.createElement('li');
    li.appendChild(h3);

    for(var j = 1; j < 4; j++) {

        var li2 = document.createElement('li');
        li2.className = 'questions_item';

        var inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute("type", "checkbox");

        var spanText = document.createElement('span');
        spanText.innerHTML =" Вариант ответа №" +j;

        li2.appendChild(inputCheckbox);
        li2.appendChild(spanText);
        li.appendChild(li2);
    }

    questions.appendChild(li);
}

var submit = document.createElement('button');
submit.setAttribute("type", "submit");
submit.innerHTML = "Проверить мои результаты";
submit.className = "bt_submit";
questions.appendChild(submit);