document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          answer: "William Shakespeare",
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz);

    nextBtn.addEventListener('click', RenderNextQuestion);

    restartBtn.addEventListener('click', restartQuiz);

    function startQuiz() {
        startBtn.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        resultContainer.classList.add("hidden");
        renderQuestions()
    }

    function renderQuestions() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "" //clear previous choices

        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = `${choice}`
            choicesList.appendChild(li);

            li.addEventListener("click", () => {
                li.style.backgroundColor = "#3e0095"
                selectAnswer(choice)
            });
        });

    }

    function selectAnswer(choice) {
        
        const correctAnswer = questions[currentQuestionIndex].answer;
        nextBtn.classList.remove('hidden')
        if(choice === correctAnswer) {
            score++;
        }
    }

    function RenderNextQuestion() {
        currentQuestionIndex++;

        if(currentQuestionIndex < questions.length) {
            renderQuestions();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add('hidden')
        nextBtn.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        scoreDisplay.innerHTML = `${score} out of ${questions.length}`
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        questionContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        startQuiz();

    }

})

  
