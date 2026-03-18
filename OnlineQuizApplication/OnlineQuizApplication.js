const quizData = [
    {
        question: "What is Java?",
        options: ["Programming Language","Normal Language","Database","None"],
        correct: 1
    },
    {
        question: "If Java is fully Object Oriented Language?",
        options: ["Yes","No","not a programming language","none"],
        correct: 2
    },
    {
        question: "Full Form of OOPS?",
        options: ["Object Oriented Programming System","Object Oriented programming style",
                   "both","none"],
        correct: 1
    }
];
let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const optionsE1 = document.getElementById("options");
const next = document.getElementById("next");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionE1.textContent = q.question;
    optionsE1.innerHTML = "";

    q.options.forEach((options,index) => {
        let button = document.createElement("button");
        button.textContent = options;
        button.classList.add("options");
        button.click = () => selectOption(index);
        optionsE1.appendChild(button);
    });
}
function selectOption(selectedIndex) {
    if(selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }
    next.style.display = "block";
}
next.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
        next.style.display = "none";
    }else {
        showResult();
    }
});
function showResult() {
    document.querySelector(".quiz-container").innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}
loadQuestion();