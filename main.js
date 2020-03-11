$(document).ready(function () {

let questionBank = [

    {
    prompt: "Poodles belong to which American Kennel Club(AKC) group?",
    choices: ["Non-sporting", "Sporting", "Herding", "Hound"],
    answer: 0,
    photo: "images/poodle.jpg" 
    
},
{
    prompt: "How many breeds of dogs are recognized by the American Kennel Club(AKC)?",
    choices: [ "100", "303", "202", "404"],
    answer: 2,
    photo:"images/AKCyears.png" 

},

{
    prompt: "How many years has the Labrador Retriever been pn the AKC's top 10 most popular breed list?",
    choices: [ "2 Consecutive years", "5 Consecutive years", "10 Consecutive years", "25 Consecutive years"],
    answer: 3,
    photo:"images/lab.jpg" 

},

{
    prompt: "What country did the Australian Shepherd orginate from?",
    choices: [ "Australia", "The United States of America", "Africa", "Newfoundland"],
    answer: 1,
    photo:"images/asd.jpg" 

},

{
    prompt: "Schipperkes orginate from what country?",
    choices: [ "THe United States of America", "Africa", "Belgium", "Japan"],
    answer: 2,
    photo:"https://vetstreet-brightspot.s3.amazonaws.com/00/2ec490a80611e0a0d50050568d634f/file/Shipperke-3-645mk062811.jpg" 

},
{
    prompt: "According to the AKC what is the weight range of an Airedale Terrier?",
    choices: [ "50-70lbs", "70-80lbs", "35-55lbs", "50-55lbs"],
    answer: 0,
    photo:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/30202205/Airedale-Terrier-standing-stacked-outdoors.jpg" 

},
{
    prompt: "What country is the Labraodor Retriever orginally from?",
    choices: [ "Australia", "The United States of America", "Africa", "Newfoundland"],
    answer: 3,
    photo:"images/lab.jpg" 

},
{
    prompt: "What country is the Labraodor Retriever orginally from?",
    choices: [ "Australia", "The United States of America", "Africa", "Newfoundland"],
    answer: 3,
    photo:"images/lab.jpg" 

}




];


let correctAnswers = 0;
let wrongAnswers= 0;
let timer = 20;
let intervalId;
let userGuess;
let timing = false;
let total = questionBank.length;
let turn;
let index;
let newArray = [];
let holder = [];


$("#nextQuestion").hide();
$("#newGame").hide();


$("#start").on("click", function ()
{
    $("#start").hide();
    displayQuestion();
    runTime();
    for (let i=0; i<questionBank.length; i++)
    {
        holder.push(questionBank[i]);
    }
})

function runTime()
{
    if (!timing)
    {
        intervalId = setInterval(decrement, 1000);
        timing = true;
    }
}

function decrement()
{
    $("#timer").html("<h3>" + "Time remaining: <br> " + timer + "</h3>");
    timer --;
    if (timer===0)
    {
        wrongAnswers ++;
        stop();
        $("#answer").html("<p>" + "Rut Roh! You ran out of time " + turn.choices[turn.answer] + "is the correct answer" + "</p>");
        hidePic();
    }

}

function stop()
{
    timing = false;
    clearInterval(intervalId);
}

function displayQuestion()
{
    index = Math.floor(Math.random()*questionBank.length);
    turn = questionBank[index];

    $("#question-holder").html("<h2> " + turn.prompt + "</h2>");
    for (let i=0; i<turn.choices.length; i++)
    {
        let userChoice = $("<div>");
        userChoice.addClass("answerChoice");
        userChoice.html( "<hr>" + turn.choices[i]);
        userChoice.attr("data-guess-value", i)
        $("#answer").append(userChoice);
    }




$(".answerChoice").on("click", function(){
    userGuess = parseInt($(this).attr("data-guess-value"));
    if (userGuess === turn.answer)
    {
        stop();
        correctAnswers++;
        userGuess= " ";
        $("#answer").html("<p>" +" Correct!" + "</p>");
        hidePic();
    }
    else
    {
        stop();
        wrongAnswers++;
        userGuess="";
        $("#answer").html("<p>" + "Wrong! The correct answer is:  " + turn.choices[turn.answer] + "</p>");
        hidePic();
    }
})
}

function hidePic (){
    $("#answer").append("<img src= " + turn.photo + ">");
   newArray.push(turn)
   questionBank.splice(index, 1);

      setTimeout(function()
   {
        $("#answer").empty();
        timer = 20;

        if ((wrongAnswers + correctAnswers) === total)
        {
            $("#question-holder").empty();
            $("#question-holder").html("<h3>" +" Thank you for playing!" + "<br>" + "Game Over" + "</h3>");
            $("#answer").append("<h4>" + "Number of Correct: " + correctAnswers + "</h4>");
            $("#answer").append("<h4>" + "Number of Wrong: " + wrongAnswers + "</h4>");
            $("#nextQuestion").show();
            correctAnswers = 0;
            wrongAnswers = 0;
            percentage()


            function percentage(correctAnswers, wrongAnswers){
                let percentage =(Math.floor((correctAnswers/ wrongAnswers) * 100))
                console.log(percentage)

            }
              




    
                

            


        }
        else
        {
            runTime();
            displayQuestion();
        }
   }, 5000);
}
$("#nextQuestion").on("click", function()
{
    $("#nextQuestion").hide();
    $("#answer").empty();
    $("#question-holder").empty();
	for(var i = 0; i < holder.length; i++) {
		questionBank.push(holder[i]);
	}
	runTime();
	displayQuestion();
})


});


