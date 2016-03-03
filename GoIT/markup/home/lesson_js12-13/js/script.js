/**
 * Created by Vania on 16.12.2015.
 */
var body = document.body;
var title = createTitle();
var form = createForm();
var test = createTest();


addElements(body, title);
addElements(body, form);
addElements(form, test);

createQuestions(test, 3, 3);

var button = createButton();
addElements(test, button);


function createTitle() {
    var title = document.createElement('h1');
    title.innerHTML = "Тест по програмировинию";
    title.className = "title";
    return title;
}

function createForm() {
    var form = document.createElement('form');
    form.setAttribute('action', 'answers');
    return form;
}

function createTest() {
    var test = document.createElement('ul');
    test.className = "test";
    return test;
}

function createQuestions(test1, quests, variants) {

    for(var i = 1; i <= quests; i++){

        var h3 = document.createElement('h3');
        h3.innerHTML =+i +". Вопрос №" +i;
        h3.className = 'questions_title';
        var li = document.createElement('li');
        li.appendChild(h3);

        lis = createVariants(li, variants);

        test1.appendChild(lis);
    }
}

function createVariants(lis, variants) {
    for (var j = 1; j <= variants; j++) {

        var li2 = document.createElement('li');
        li2.className = 'questions_item';

        var inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute("type", "checkbox");

        var spanText = document.createElement('span');
        spanText.innerHTML = " Вариант ответа №" + j;

        li2.appendChild(inputCheckbox);
        li2.appendChild(spanText);
        lis.appendChild(li2);
    }

    return lis;
}

function createButton(){
    var submit = document.createElement('button');
    submit.setAttribute("type", "submit");
    submit.innerHTML = "Проверить мои результаты";
    submit.className = "bt_submit";
}

function addElements(parrent, child) {
    parrent.appendChild(child);
}