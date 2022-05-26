let questions = [
    {
        quest: "Which is not a flex direction?",
        choice: ["row", "row-Reverse", "column", "inverse"],
        answer: "inverse"
    },
    {
        quest: "What does concatenate do?",
        choice: ["joins", "deletes", "moves", "segments"],
        answer: "joins"
    },
    {
        quest: "What is the most common data type of the following?",
        choice: ["bigINT","Null","string", "Read-Only"],
        answer: "string"
    },
    {
        quest: "Arrays are enclosed within?",
        choice: ["commas","flat brackets", "curly brackets","pound signs"],
        answer: "flat brackets"
    },
]

let score = 0;
let questionNum = 0;

let initialBox = document.getElementById("initialBox");
let timer = document.getElementById("timer");
let startButton = document.getElementById("startButton");
let questionBox = document.getElementById("questionBox");
let promptList = document.getElementById("promptList");
let listCreater = document.createElement("ul");

let timeLeft = 30;
let penaltyTime = 10;

startButton.addEventListener("click", function(){
    let timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = "Time left:" + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time is up sorry!";
        }
}, 1000);
        Start(questionNum)
}
);

    function Start(questionNum) {
        questionBox.innerHTML = "";
        listCreater.innerHTML = "";

        for (let i = 0; i < questions.length; i++) {
            let userQuest = questions[questionNum].quest;
            let userChoice = questions[questionNum].choice;
            questionBox.textContent = userQuest;
    }

    userChoice.forEach (function(ansList){
        let listedContent = document.createElement("li");
        listedContent.textContent = ansList;
        questionBox.appendChild(listCreater);
        listedContent.addEventListener("click", (compare));
    })
}