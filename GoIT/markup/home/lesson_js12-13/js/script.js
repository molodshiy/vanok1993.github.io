/**
 * Created by Vania on 16.12.2015.
 */
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = 'sans-serif';

var title = document.createElement('h1');
title.innerHTML = "Тест по програмировинию";
title.style.fontSize = '22px';
title.style.fontWeight = 'normal';
title.style.textAlign = 'center';
document.body.appendChild(title);

var form = document.createElement('form');
form.setAttribute('action', 'answers');
document.body.appendChild(form);

var questions = document.createElement('ul');
questions.className = "questions";
questions.style.listStyle = 'none';
form.appendChild(questions);

for(var i = 1; i < 4; i++){

    var h3 = document.createElement('h3');
    h3.innerHTML =+i +". Вопрос №" +i;
    h3.style.fontSize = '22px';
    h3.style.fontWeight = 'normal';
    h3.style.marginBottom = '8px';

    var li = document.createElement('li');
    li.appendChild(h3);

    for(var j = 1; j < 4; j++) {

        var li2 = document.createElement('li');
        li2.style.marginLeft = '20px';

        var inputCheckbox = document.createElement('input');
        inputCheckbox.style.backgroundColor = 'grey';
        inputCheckbox.style.border = '2px solid black';
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
submit.style.margin = '36px auto 0';
submit.style.display = 'block';
submit.style.backgroundColor = '#cfe2f3';
submit.style.border = '2px solid black';
submit.style.padding = '12px 36px';
questions.appendChild(submit);