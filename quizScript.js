/*
The code below is for storing all the questions
*/
const myQuiz = [
    {
        question: "How many layers in TCP/IP reference model?",
        a: "7",
        b: "6",
        c: "5",
        d: "4",
        correct: "d",
    },
    {
        question: "What is the length of a MAC address?",
        a: "36",
        b: "42",
        c: "48",
        d: "96",
        correct: "c",
    },
    {
        question: "Which of the following is a class B IPv4 address?",
        a: "223.1.1.0",
        b: "126.3.1.1",
        c: "190.3.2.1",
        d: "224.0.1.2",
        correct: "b",
    },
    {
        question: "What is the minimum size of IP header?",
        a: "18",
        b: "32",
        c: "20",
        d: "24",
        correct: "c",
    },
    {
        question: "Which is the maximum payload size of Ethernet.?",
        a: "66535 bytes",
        b: "1500 bytes",
        c: "1480 bytes",
        d: "1500 bits",
        correct: "b",
    },
    {
        question: "What are they srvice models from least abstraction to most abstract?",
        a: "IaaS PaaS SaaS Caas FaaS",
        b: "IaaS Caas PaaS FaaS SaaS",
        c: "PaaS SaaS IaaS Caas FaaS",
        d: "SaaS Caas IaaS PaaS FaaS",
        correct: "b",
    },
    {
        question: "What p would be for a “embarrassingly parallel” with regard to Amdahl’s law?",
        a: "Almost 1",
        b: "Almost 0",
        c: "0.5",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What p would be for a “Inherently serial” with regard to Amdahl’s law?",
        a: "Almost 1",
        b: "Almost 0",
        c: "0.5",
        d: "None of the above",
        correct: "b",
    },
    // {
    //     question: "Which of the following statement is NOT true?",
    //     a: "A Docker image consists of many layers.",
    //     b: "Each layer corresponds to a command in an image’s Dockerfile.",
    //     c: "The layers in a Docker image are immutable. That is, they can never be changed.",
    //     d: "A Docker image is essentially the description of a small compact virtual machine.",
    //     correct: "d",
    // },
];

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questions = document.getElementById('question')
// get the elements out of the text
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const subButton = document.getElementById('submit')

// start the index of the quiz
let current = 0
let score = 0

loadQuestions()

/*
The code below is for loading all the questions
*/
function loadQuestions() {
    deselectAnswers()

    const currentQuizData = myQuiz[current]

    questions.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

/*
The code below is for deselecting the answer
*/
function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
}

/*
The code below is for getting the selected answer
*/
function getSelected() {
    let answer

    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

/*
The code below is for responding the mouse click by the user
*/
subButton.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === myQuiz[current].correct) {
            score++
        }

        current++

        if(current < myQuiz.length) {
            loadQuestions()
        } else {
            quiz.innerHTML = `
                <h2>You got questions ${score}/${myQuiz.length} correctly</h2>
                <button onclick="location.reload()">Try again</button>
            `
        }
    }
})