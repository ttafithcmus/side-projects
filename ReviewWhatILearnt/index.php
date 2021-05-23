<!--  
    What I need to build: 
        1> Answer with text.
        2> Radio CSS.
 -->

<html>
    <head>
        <meta charset="UTF-8">
        <title>Review What I Learnt Yesterday</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="js/handlejs.js"></script>
    </head>
    <body>
        <div class="container">
            <h1>What I Learnt Yesterday</h1>
        </div>
        <div class="quiz">
            <div id="message"></div>
            <div id="question"></div>
            <div id="answers">
                <input type="radio" id="answer1" name="answer" value="1">
                <label for="answer1"></label><br>
                <input type="radio" id="answer2" name="answer" value="2">
                <label for="answer2"></label><br>  
                <input type="radio" id="answer3" name="answer" value="3">
                <label for="answer3"></label><br>
                <input type="radio" id="answer4" name="answer" value="4">
                <label for="answer4"></label><br>  
            </div>
            <div id="result"></div>
            <button id="submit">Submit</button>
        </div>
    </body>
<html>