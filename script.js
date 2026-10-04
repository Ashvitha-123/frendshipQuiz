let currentQuestion = 0;
let score = 0;

let creatorQuestions = [];
let creatorQuestionNumber = 1;


// =========================
// ASHVITHA'S QUIZ
// =========================

const questions = [

    {
        question: "What will Ashvitha most likely do when she's bored? 👀",
        options: [
            "📚 Study",
            "😴 Sleep",
            "📱 Scroll Instagram",
            "😂 Annoy her friends"
        ],
        answer: 3
    },

    {
        question: "If Ashvitha says 'I'm coming in 5 minutes', what does it actually mean? 😂",
        options: [
            "⏰ Exactly 5 minutes",
            "😌 10 minutes",
            "😂 30 minutes",
            "🚫 Don't wait"
        ],
        answer: 2
    },

    {
        question: "What is Ashvitha most likely to say? 🤔",
        options: [
            "Brooo",
            "Wait",
            "Actually...",
            "All of the above 😂"
        ],
        answer: 3
    },

    {
        question: "If Ashvitha gets ₹1 lakh, what will she probably do first? 💰",
        options: [
            "💸 Spend everything",
            "🏦 Save it",
            "📈 Invest it",
            "🧠 Make a whole life plan"
        ],
        answer: 3
    },

    {
        question: "How important are you to Ashvitha? 👀",
        options: [
            "❤️ Bestie",
            "😌 Good friend",
            "🙂 Friend",
            "💀 Who are you?"
        ],
        answer: 0
    },

    {
        question: "What is Ashvitha most likely to choose? 🍕",
        options: [
            "🍕 Pizza",
            "🍔 Burger",
            "🍜 Noodles",
            "🥗 Salad"
        ],
        answer: 0
    },

    {
        question: "What happens when Ashvitha gets a new idea? 💡",
        options: [
            "Forget it immediately",
            "Think about it for 5 minutes",
            "Make a huge plan 😂",
            "Tell nobody"
        ],
        answer: 2
    },

    {
        question: "What is Ashvitha's biggest weakness? 😂",
        options: [
            "📱 Phone",
            "🍫 Food",
            "😴 Sleep",
            "👀 Overthinking"
        ],
        answer: 3
    },

    {
        question: "If Ashvitha has an exam tomorrow, what is she most likely doing tonight? 📚",
        options: [
            "📖 Studying seriously",
            "😴 Sleeping early",
            "📱 Using her phone",
            "😂 Saying 'I'll start in 5 minutes'"
        ],
        answer: 3
    },

    {
        question: "What type of friend is Ashvitha? 😈",
        options: [
            "❤️ The caring one",
            "😂 The annoying one",
            "🧠 The advice giver",
            "🔥 All of the above"
        ],
        answer: 3
    }

];


// =========================
// START QUIZ
// =========================

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("startScreen").style.display = "none";

    document.getElementById("creatorScreen").style.display = "none";

    document.getElementById("resultScreen").style.display = "none";

    document.getElementById("quizScreen").style.display = "block";

    showQuestion();
}


// =========================
// SHOW QUESTION
// =========================

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    document.getElementById("question").innerText =
        q.question;

    let optionsHTML = "";

    for (let i = 0; i < q.options.length; i++) {

        optionsHTML += `
            <button
                id="answerButton${i}"
                onclick="selectAnswer(${i})"
            >
                ${q.options[i]}
            </button>
        `;
    }

    document.getElementById("options").innerHTML =
        optionsHTML;
}


// =========================
// SELECT ANSWER
// =========================

function selectAnswer(selectedAnswer) {

    let correctAnswer =
        questions[currentQuestion].answer;

    let buttons =
        document.querySelectorAll("#options button");

    // Disable all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }


    // CORRECT ANSWER

    if (selectedAnswer === correctAnswer) {

        score++;

        buttons[selectedAnswer].innerHTML =
            "✅ " + questions[currentQuestion].options[selectedAnswer];

        buttons[selectedAnswer].style.background =
            "#28a745";

        buttons[selectedAnswer].style.color =
            "white";

    }

    // WRONG ANSWER

    else {

        buttons[selectedAnswer].innerHTML =
            "❌ " + questions[currentQuestion].options[selectedAnswer];

        buttons[selectedAnswer].style.background =
            "#dc3545";

        buttons[selectedAnswer].style.color =
            "white";


        // Show the actual correct answer

        buttons[correctAnswer].innerHTML =
            "✅ " + questions[currentQuestion].options[correctAnswer];

        buttons[correctAnswer].style.background =
            "#28a745";

        buttons[correctAnswer].style.color =
            "white";
    }


    // Wait 1 second and go to next question

    setTimeout(function () {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResult();

        }

    }, 1000);
}


// =========================
// SHOW RESULT
// =========================

function showResult() {

    document.getElementById("quizScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "block";


    let percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        document.getElementById("resultTitle").innerText =
            "100% — BESTIE MATERIAL ❤️";

        document.getElementById("resultMessage").innerText =
            "Okayyy! You actually know Ashvitha. You're officially a real friend 😂🔥";

    }

    else if (percentage >= 80) {

        document.getElementById("resultTitle").innerText =
            percentage + "% — REAL FRIEND 😎";

        document.getElementById("resultMessage").innerText =
            "You actually know Ashvitha pretty well! Respect 😂❤️";

    }

    else if (percentage >= 50) {

        document.getElementById("resultTitle").innerText =
            percentage + "% — NOT BAD 👀";

        document.getElementById("resultMessage").innerText =
            "You know me... but clearly you need to pay more attention 😂";

    }

    else {

        document.getElementById("resultTitle").innerText =
            percentage + "% — STRANGER ALERT 🚨";

        document.getElementById("resultMessage").innerText =
            "Bro... have we even met before? 💀😂";
    }
}


// =========================
// RESTART QUIZ
// =========================

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("resultScreen").style.display =
        "none";

    document.getElementById("startScreen").style.display =
        "block";
}


// =========================
// SHOW QUIZ CREATOR
// =========================

function showCreator() {

    document.getElementById("startScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "none";

    document.getElementById("quizScreen").style.display =
        "none";

    document.getElementById("creatorScreen").style.display =
        "block";


    creatorQuestions = [];

    creatorQuestionNumber = 1;

    updateCreatorProgress();

    clearCreatorFields();
}


// =========================
// CREATOR PROGRESS
// =========================

function updateCreatorProgress() {

    document.getElementById("creatorProgress").innerText =
        "Question " +
        creatorQuestionNumber +
        " of 10";
}


// =========================
// ADD CREATOR QUESTION
// =========================

function addCreatorQuestion() {

    let name =
        document.getElementById("creatorName").value.trim();

    let question =
        document.getElementById("creatorQuestion").value.trim();

    let option0 =
        document.getElementById("option0").value.trim();

    let option1 =
        document.getElementById("option1").value.trim();

    let option2 =
        document.getElementById("option2").value.trim();

    let option3 =
        document.getElementById("option3").value.trim();


    let selectedAnswer =
        document.querySelector(
            'input[name="correctAnswer"]:checked'
        );


    if (name === "") {

        alert("Please enter your name! 😈");

        return;
    }


    if (question === "") {

        alert("Please enter your question! 😈");

        return;
    }


    if (
        option0 === "" ||
        option1 === "" ||
        option2 === "" ||
        option3 === ""
    ) {

        alert("Please fill all 4 options! 😈");

        return;
    }


    if (selectedAnswer === null) {

        alert("Please tick the correct answer! ☑️");

        return;
    }


    let correctAnswer =
        Number(selectedAnswer.value);


    let newQuestion = {

        question: question,

        options: [
            option0,
            option1,
            option2,
            option3
        ],

        answer: correctAnswer
    };


    creatorQuestions.push(newQuestion);


    // If 10 questions completed

    if (creatorQuestionNumber === 10) {

        alert(
            "🎉 Your 10 questions are ready!"
        );

        console.log(
            "Quiz created by:",
            name
        );

        console.log(
            creatorQuestions
        );

        return;
    }


    // Move to next question

    creatorQuestionNumber++;

    updateCreatorProgress();

    clearCreatorFields();
}


// =========================
// CLEAR CREATOR FIELDS
// =========================

function clearCreatorFields() {

    document.getElementById("creatorQuestion").value = "";

    document.getElementById("option0").value = "";

    document.getElementById("option1").value = "";

    document.getElementById("option2").value = "";

    document.getElementById("option3").value = "";


    document.querySelector(
        'input[name="correctAnswer"][value="0"]'
    ).checked = true;
}


// =========================
// CANCEL CREATOR
// =========================

function cancelCreator() {

    document.getElementById("creatorScreen").style.display =
        "none";

    document.getElementById("startScreen").style.display =
        "block";
}