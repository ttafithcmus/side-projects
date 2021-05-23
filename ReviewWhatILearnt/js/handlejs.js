$(document).ready(function(){
    let i=0;

    let answer = {
        correct:0
    };

    showQuestions(answer, i);

    $('#submit').click(function(){
        var userAnswer = $('input[type="radio"]:checked').val();

        var isTrue = handleAnswers(userAnswer, answer.correct);
        
        if (isTrue){
            $('#message').show();
            $('#message').css('background', 'green');
            $('#message').html('Correct! :)');

            setTimeout(function(){
                $('#message').hide();
                showQuestions(answer, ++i);
            }, 1500);
        }
    });
    
});

function showQuestions(answer, questionNum) {
    // Get the content from a file using $.get()
    $.get('questions.txt', function(data) {
        var lines = data.split('\n');

        if (questionNum == lines.length){
            $('#message').show();
            $('#message').css('background', 'green');
            $('#message').html('Congratulations! You complished all the questions! :)');

            setTimeout(function(){
                location.reload();
            }, 5000);
        }
        else{
            var question = lines[questionNum].split('|')[0];
            var answers = lines[questionNum].split('|')[1];
            // Convert the type of this variable into number
            answer.correct = lines[questionNum].split('|')[2] - 0;

            $('#question').html(question);

            for (i=0; i<4; i++){
                $('label[for="answer' + (i+1) + '"]').html(answers.split(' ')[i]);
            }
        }
    })
}

function handleAnswers(userAnswer, rightAnswer){
    if (userAnswer == rightAnswer){
        return true;
    }
    else{
        $('#message').show();
        $('#message').css('background', 'red');
        $('#message').html('Wrong answer! :(');
    }
}