

let startButton = document.getElementById('startbutton')
let questionWrapper = document.getElementById('question-wrapper')
let nextButton= document.getElementById('nextquestion')


let shuffleQuestion, currentQuestionIndex






let questionElement= document.getElementById('questions')
let answerButtons= document.getElementById("answer-buttons")

startButton.addEventListener( 'click', startGame);


    function startGame() {
        // console.log("start game");
        shuffleQuestion = questions.sort(() => Math.random() - .5 )
        currentQuestionIndex = 0
        setNextQuestion()           

    }

    function setNextQuestion () {
        resetState()
            nextButton.classList.add('hide')
            while (answerButtons.firstChild){
                answerButtons.removeChild()
                (answerButtons.firstChild)
            }
        }



    function showQuestion(shuffleQuestion[currentQuestionIndex]) {

    }
    

    function showQuestion(questions) {
        questionElement.innerText = questions.questions
        questions.answer.forEach(answer =>{
            const button = document.createElement('button')
            button.innerText =answer.innerTex
            button.classList.add('button')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtons.appendChild(button);
        })
        

    }


    function resetState() {
        nextButton.classList.add('hide')
        while (answerButtons.firstChild){
            answerButtons.removeChild()
            (answerButtons.firstChild)
    }

    function selectAnaswer(e) {

    }
    


    
   
    }

    // var score = 0;

    // for (var i = 0; i, questions.length; i++) {
    //     var response = $("#response").text(questions[i].prompt);
    //     if (reponse === questions[i].answer) {
    //         score++;
    //     } else {
    //         alert("wrong");
    //     }
    // }

    // $(".results").html("<h2> You got" + score + "/" + questions.length + "<h/2>");
