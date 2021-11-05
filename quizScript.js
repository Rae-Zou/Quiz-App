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
        question: "What are they srvice models from least abstraction to most abstract?",
        a: "IaaS PaaS SaaS Caas FaaS",
        b: "IaaS Caas PaaS FaaS SaaS",
        c: "PaaS SaaS IaaS Caas FaaS",
        d: "SaaS Caas IaaS PaaS FaaS",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = myQuiz[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === myQuiz[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < myQuiz.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You got questions ${score}/${myQuiz.length} correctly</h2>
                <button onclick="location.reload()">Try again</button>
            `
        }
    }
})