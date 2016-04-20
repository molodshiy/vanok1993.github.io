/**
 * Created by ivan.datsiv on 4/19/2016.
 */

'use strict';

window.onload = function () {

    var answersObj = {
        'ans1': 'q1ch3',
        'ans2': 'q2ch1',
        'ans3': 'q3ch2'
    };

    localStorage.setItem('answers', JSON.stringify(answersObj));

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

    var answersStr = localStorage.getItem('answers');
    var answers = JSON.parse(answersStr);

    var checkboxs = document.getElementsByTagName('input');
    var checkboxsId = [];
    var result = [false, false, false];

    function checkTest() {
        findId();
        if (checkCountAnswers()) {
            checkAns();
            alert(result);
        }
    }

    function checkCountAnswers() {
        var countAnsInQues = [0, 0, 0];

        $('input').each(function () {
            if ($(this).is(':checked')) {
                var id = this.getAttribute('id');
                countAnsInQues[id.charAt(1) - 1] += 1;
            }
        });

        function isTwoAnswers(number) {
            return number > 1;
        }

        if (countAnsInQues.some(isTwoAnswers)) {
            alert('Виберіть одну відповідь в питанні!');
            return false;
        }
        return true;
    }

    function checkAns() {
        for (var i = 0; i < checkboxsId.length; i++) {

            $('input').each(function () {
                if ($(this).is(':checked')) {
                    var id = this.getAttribute('id');
                    var ansKey = "ans" + id.charAt(1);
                    if (id === answers[ansKey]) {
                        result[id.charAt(1) - 1] = true;
                    }
                }
            });
        }
    }

    function findId() {
        for (var i = 0; i < checkboxs.length; i++) {
            var id = checkboxs[i].getAttribute('id');
            checkboxsId.push(id);
        }
    }
}