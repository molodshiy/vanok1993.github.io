/**
 * Created by ivan.datsiv on 4/19/2016.
 */

'use strict';

window.onload = function () {

    var answers = {
        'ans1': '3',
        'ans2': '1',
        'ans3': '2'
    };
    localStorage.setItem('answers', JSON.stringify(answers));

    var questions = {};
    createQuestions(3, 3);
    localStorage.setItem('questions', JSON.stringify(questions));

    var $formTmpl = $('#formTmpl').html();

    var content = tmpl($formTmpl, questions);
    $('body').append(content);

    var button = document.getElementById('button');
    button.addEventListener('click', checkTest);

    function createQuestions(quests, variants) {
        for (var i = 1; i <= quests; i++) {
            questions['qst' + i] = +i + ". Вопрос №" + i;
            createVariants(i, variants);
        }
    }

    function createVariants(qNumber, variants) {
        for (var j = 1; j <= variants; j++) {
            questions["qst" + qNumber + "Var" + j] = " Вариант ответа №" + j;
        }
    }

    function checkTest() {
        var result = [false, false, false];
        if (document.getElementById('q1ch3').checked) {
            result[1] = true;
        }
        alert(result);
    }
}