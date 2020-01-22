var QandA = [
    { q: "What’s the diameter of a basketball hoop in inches?", a: "18 inches", bad: "16 inches" },
    { q: "What do you call it when a player makes three back to back strikes in bowling?", a: "Turkey" },
    { q: "A sporting event is held every year on Memorial Day. What is it?", a: "Indianapolis 500" },
    { q: "How many players are on a baseball team?", a: "9" },
    { q: "Before 1894, basketball games were played with what sort of ball?", a: "Soccer Ball" },
    { q: "What team gets the advantage of first bat in baseball?", a: "Away" },
    { q: "How many dimples does an average golf ball have?", a: "336" },
    { q: "What country has competed the most times in the summer Olympics without winning a gold medal?", a: "The Phillippines" },
    { q: "How many minutes was the longest recorded point in the history of tennis?", a: "29" },
    { q: "During the first ever modern Olympics, what were the first players awarded with?", a: "Silver medals" },
    { q: "What is the only team in the NFL to neither host nor play in the Super Bowl?", a: "Cleveland Browns" },
    { q: "Who was the youngest player to reach 10,000 points in the regular season in 20th century NBA?", a: "Kobe Bryant" },
    { q: "How many seasons did Michael Jordan play with the Chicago Bulls?", a: "13" },
    { q: "Kyrie Irving was born in what country?", a: "Australia" },
    { q: "What is the NFL's record distance for a single punt?", a: "98 yards" }
]
var beginning = true
var userPoints = 0

$(document).ready(function () {

    function newQuestion() {
        $("#question").text(QandA[0].q)
        $("#answer1").append("<button>" + QandA[0].a + "</button>")
        $("#answer2").append("<button>" + QandA[0].bad + "</button>")

        $("#answer1").on("click", function () {
            $("#question").text("Correct!")
            $("#answer1").text("")
            $("#answer2").text("")
            userPoints++
        })

        $("#answer2").on("click", function () {
            $("#question").text("Wrong!")
            $("#answer1").text("")
            $("#answer2").text("")
            userPoints++
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