//question array containing questions and answers
let questions = [
    {
        quest: "Which is not a flex direction?",
        choices: ["row", "row-Reverse", "column", "inverse"],
        answer: "inverse"
    },
    {
        quest: "What does concatenate do?",
        choices: ["joins", "deletes", "moves", "segments"],
        answer: "joins"
    },
    {
        quest: "What is the most common data type of the following?",
        choices: ["bigINT","Null","string", "Read-Only"],
        answer: "string"
    },
    {
        quest: "Arrays are enclosed within?",
        choices: ["commas","flat brackets", "curly brackets","pound signs"],
        answer: "flat brackets"
    },
];
//unused score system and question number
let score = 0;
let questionNum = 0;
//initialized variables
let initialBox = document.getElementById("initialBox");
let timer = document.getElementById("timer");
let startButton = document.getElementById("startButton");
let questionBox = document.getElementById("questionBox");
let listCreater = document.createElement("ul");
let answerBox = document.getElementById("answerBox")
//time variables
let timeLeft = 80;
let penaltyTime = 10;
let tempInterval = 0;
//start button using click listener to begin timer and main function
startButton.addEventListener("click", function(){
    if (tempInterval === 0) {
        tempInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = "Time left:" + timeLeft;
            if (timeLeft === 0) {
            clearInterval(tempInterval);
            timer.textContent = "Time is up sorry!";
            QuizDone();
            }
        }, 1000);
    }
    Start(questionNum)
}
);
//main question asking function
    function Start(questionNum) {
        
        let askedQuestion = questions[questionNum];
        questionBox.textContent = askedQuestion.quest;

        
//supposed to cycle through questions after each
        askedQuestion.choices.forEach(function(choice,i) {
            let choiceSet = document.createElement("button");
            choiceSet.setAttribute("class", "choice");
            choiceSet.setAttribute("value", choice);

            choiceSet.textContent = i + 1 + ". " + choice;
            
            choiceSet.onclick = questionSelect;

            answerBox.appendChild(choiceSet);
        });
    }
//deducts time from clock on wrong answers, ensures it never goes negative
    function questionSelect() {
        if (this.value !== questions[questionNum].answer) {
            timeLeft = timeLeft - penaltyTime;

            if (timeLeft < 0) {
                timeLeft = 0;
            }

        }
// should skip to next question
    questionNum++;
//if else to repeat function till questions are over
    if (questionNum == questions.length) {
        QuizDone();
    } else {
        Start();
    }
    }
//clear function 
function QuizDone() {
    clearInterval(tempInterval);



    //I really tried but I cant seem to get it right and im basically panicing because I keep failing the assignments where I have to write my own code from scratch and im sorry.
}







