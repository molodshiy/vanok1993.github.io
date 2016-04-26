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

    var bnCheck = document.getElementById('bnCheck');
    bnCheck.addEventListener('click', checkTest);

    var bnReset = document.getElementById('bnReset');
    bnReset.addEventListener('click', resetForm);

    var result = document.getElementById('result');
    var ulAns = document.createElement('ul');


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
    var results = [false, false, false];


    function resetForm(){
        document.getElementById('testForm').reset();
        result.classList.remove('result_show');
        ulAns.innerHTML = '';
        results = [false, false, false];
    }

    function checkTest() {
        findId();
        if (checkCountAnswers()) {
            checkAns();
            showResult();
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
                        results[id.charAt(1) - 1] = true;
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

    function showResult(){
        for (var i in results){
            var li = document.createElement('li');
            li.innerHTML = i  +'. ' +results[i];
            ulAns.appendChild(li);
        }
        result.insertBefore(ulAns, result.children[1]);
        result.classList.add('result_show');
    }
}