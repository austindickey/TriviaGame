var QandA = [
    { q: "What’s the diameter of a basketball hoop in inches?", a: "18 inches", bad: "16 inches" },
    { q: "What do you call it when a player makes three back to back strikes in bowling?", a: "Turkey", bad: "Trio" },
    { q: "A sporting event is held every year on Memorial Day. What is it?", a: "Indianapolis 500", bad: "NBA Finals Game 1" },
    { q: "How many players are on a baseball team?", a: "9", bad: "15" },
    { q: "Before 1894, basketball games were played with what sort of ball?", a: "Soccer Ball", bad: "Volley Ball" },
    { q: "What team gets the advantage of first bat in baseball?", a: "Away", bad: "Home" },
    { q: "How many dimples does an average golf ball have?", a: "336", bad: "244" },
    { q: "What country has competed the most times in the summer Olympics without winning a gold medal?", a: "The Phillippines", bad: "Iceland" },
    { q: "How many minutes was the longest recorded point in the history of tennis?", a: "29", bad: "19" },
    { q: "During the first ever modern Olympics, what were the first players awarded with?", a: "Silver medals", bad: "Platinum medals" },
    { q: "What is the only team in the NFL to neither host nor play in the Super Bowl?", a: "Cleveland Browns", bad: "Jacksonville Jaguars" },
    { q: "Who was the youngest player to reach 10,000 points in the regular season in 20th century NBA?", a: "Kobe Bryant", bad: "Lebron James" },
    { q: "How many seasons did Michael Jordan play with the Chicago Bulls?", a: "13", bad: "11" },
    { q: "Kyrie Irving was born in what country?", a: "Australia", bad: "Germany" },
    { q: "What is the NFL's record distance for a single punt?", a: "98 yards", bad: "78 yards" },
    { q: "" }
]
var beginning = true
var userPoints = 0
var missedQ = 0
var questionIndex = 0
var questionTimer = 15
var nqTimer = 3
var timerInterval

$(document).ready(function () {

    // Start of question timer
    function decreaseQuestionTimer() {
        questionTimer--;
        $("#timer").html("Time Remaining: " + questionTimer);

        if (questionTimer === 0) {
            stopTimer()
            runNQTimer()
            questionTimer = 15
            nqTimer = 3
            $("#question").text("Time is up...")
            $("#answer1").text("")
            $("#answer2").text("")
        }
    }

    function runQuestionTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(decreaseQuestionTimer, 1000);
    }
    // End of question timer

    // Start of nqTimer
    function decreaseNQTimer() {
        nqTimer--;
        $("#timer").html("Next Question: " + nqTimer);

        if (nqTimer === 0) {
            stopTimer()
            newQuestion()
            questionTimer = 15
            nqTimer = 3
        }
    }

    function runNQTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(decreaseNQTimer, 1000);
    }
    // End of nqTimer

    function stopTimer() {
        clearInterval(timerInterval)
    }

    function newQuestion() {
        var randNum = Math.floor(Math.random() * 2)

        $("#question").text(QandA[questionIndex].q)

        if (randNum === 1){
            $("#answer1").append("<button class='answers' data-answer='correct'>" + QandA[questionIndex].a + "</button>")
            $("#answer2").append("<button class='answers' data-answer='wrong'>" + QandA[questionIndex].bad + "</button>")
        } else {
            $("#answer1").append("<button class='answers' data-answer='wrong'>" + QandA[questionIndex].bad + "</button>")
            $("#answer2").append("<button class='answers' data-answer='correct'>" + QandA[questionIndex].a + "</button>")
        }

        runQuestionTimer()

        questionIndex++

        if (questionIndex === 16 && userPoints > 11) {
            stopTimer()
            $("#timer").text("")
            $("#game h3").text("Congratulations!")
            $("#question").text("You are a sports trivia king!")
            $("#answer1").text("Correct: " + userPoints)
            $("#answer2").text("Wrong: " + missedQ)
            $("#restart").append("<button class='reset'>Restart Game</button>")
            resetGame()
            
        } else if (questionIndex === 16){
            stopTimer()
            $("#timer").text("")
            $("#game h3").text("Sorry...")
            $("#question").text("Better luck next time!")
            $("#answer1").text("Correct: " + userPoints)
            $("#answer2").text("Wrong: " + missedQ)
            $("#restart").append("<button class='reset'>Restart Game</button>")
            resetGame()
        }
        
    }

    $(document).on("click", ".answers", function () {
        
        if ($(this).attr("data-answer") === "correct") {
            stopTimer()
            runNQTimer()
            userPoints++
            $("#question").text("Correct!")
            $("#answer1").text("")
            $("#answer2").text("")
            $("#userScore").text(userPoints)
        } else {
            stopTimer()
            runNQTimer()
            $("#question").text("Wrong!")
            $("#answer1").text("")
            $("#answer2").text("")
            missedQ++
        }
    })

    function resetGame() {
        $(document).on("click", ".reset", function () {
            $("#game h3").text("Question:")
            $("#question").text("")
            $("#question").append("<button id='start'>Start Game</button>")
            $("#answer1").text("")
            $("#answer2").text("")
            $("#restart").text("")
            $("#userScore").text("")
            beginning = true
            userPoints = 0
            missedQ = 0
            questionIndex = 0
            questionTimer = 15
            nqTimer = 3
            startGame()
        })
    }

    function startGame() {
        if (beginning) {
            $("#start").on("click", function () {
                newQuestion()
            })
        }
        beginning = false
    }

    startGame()

})