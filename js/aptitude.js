let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion()
{
    let q =
    aptitudeQuestions[currentQuestion];

    document.getElementById("question")
    .innerHTML =
    q.question;

    let optionsDiv =
    document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(option => {

        let btn =
        document.createElement("button");

        btn.classList.add("option");

        btn.innerHTML = option;

        btn.onclick = function()
        {
            selectAnswer(option);
        };

        optionsDiv.appendChild(btn);
    });
}

let selectedAnswer = "";

function selectAnswer(answer)
{
    selectedAnswer = answer;
}

function nextQuestion()
{
    if(selectedAnswer === "")
    {
        alert("Please select an answer");
        return;
    }

    if(selectedAnswer ===
       aptitudeQuestions[currentQuestion].answer)
    {
        score++;
    }

    selectedAnswer = "";

    currentQuestion++;

    if(currentQuestion <
       aptitudeQuestions.length)
    {
        loadQuestion();
    }
    else
    {
        localStorage.setItem(
        "aptitudeScore",
        score
        );

        document.querySelector(
        ".quiz-container"
        ).innerHTML =

        "<h1>Quiz Completed!</h1>" +
        "<h2>Your Score : "
        + score +
        "/10</h2>" +

        "<br><br>" +

        "<button onclick='goDashboard()'>Dashboard</button>";
    }
}

function goDashboard()
{
    window.location.href =
    "dashboard.html";
}

let timeLeft = 60;

let timer = setInterval(() => {

    document.getElementById("timer").innerHTML =
    "Time Left: " + timeLeft;

    timeLeft--;

    if(timeLeft < 0)
    {
        clearInterval(timer);

        alert("Time Up!");

        nextQuestion();
    }

}, 1000);