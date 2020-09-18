
// Establish global variables
var seconds = 75;
var questionCount = 0;

// Establish global array containing questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "mama used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  }
];

// Document ready function to wrap functions in
$(document).ready(function () {
  // On click of the start quiz button, all our events kick off

  $("#start-quiz").on("click", function () {

    // Initialize timer countdown at 75 seconds
    var timer = setInterval(countDown, 1000);
    function countDown() {
      document.getElementById("timer").innerHTML = seconds;
      seconds -= 1;
      if (seconds <= 0) {
        clearInterval(timer);
      }
    }
    // Hide contents of main page
    var homeScreen = document.getElementById("home-screen");
    homeScreen.style.display = "none";

    // Display question - call functions that rely on click event
    handleQuestion();

    handleAnswer();

    // to reset set to ""
  });



  // Each question has 3 attributes: title, choices, and answer
  function handleQuestion() {
    var answerButton;
    var question = $("<div>");
    question.text(questions[0].title);
    $("#mainpage").append(question);

    // Choices  - figure out how to show on new line
    for (var i = 0; i < questions[0].choices.length; i++) {
      var answerButton = $("<button>");
      $(".button").attr("id", "answer-button");
      answerButton.addClass("btn btn-primary btn-sm");
      answerButton.text(questions[0].choices[i]);
      $("#mainpage").append(answerButton);

    };

    answerButton.addEventListener("click", function (event) {
      answerState = $("<div>");
      // userAnswer.attr("class");  -- add styling

      if ($("#answer-button").value === questions[i].answer[i]) {
        answerState.text("Correct!");
      }

      else {
        answerState.text("Wrong!");
        // Decrement time by 10 seconds for wrong answer
        seconds -= 10;
      }

      $("#mainpage").append(answerState)
    });
  };

  // function handleAnswer() {
  //   var answerButton
  //   "#answer-button".addEventListener("click", function (event) {
  //     event.preventDefault();


  //   });




});


// set question counter
  // Store seconds in local storage 
  // localStorage.setItem("timer", seconds);