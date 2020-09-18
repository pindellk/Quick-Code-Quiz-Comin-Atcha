// Establish array containing questions, choices, and answers
var questions = [
  {
    title: "Functions must be wrapped in:",
    choices: ["{}", "[]", "()", " '' "],
    answer: "{}",
  },
  {
    title: "Which term is not used to create variables:",
    choices: ["const", "let", "var", "set"],
    answer: "set",
  },
  {
    title: "A variable declared outside a function is:",
    choices: ["local", "visible", "global", "null"],
    answer: "global",
  },
  {
    title: "Console.log _______ to the console:",
    choices: ["links", "switches", "codes", "prints"],
    answer: "prints",
  },
  {
    title: "The control flow through functions is called the:",
    choices: ["function flow", "call stack", "lexical scoping", "environment"],
    answer: "call stack",
  },
];

// Establish global variables
var seconds = 75;
var questionCount = 0;
var endScreen = document.getElementById("end-screen");

// Document ready function to wrap functions in
$(document).ready(function () {

  // On click of the start quiz button, all our events kick off
  $("#start-quiz").on("click", function () {

    // Initialize timer countdown
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

    // Display questions 
    handleQuestion();

    // Display end screen
    endQuiz();

    // Store seconds in local storage 
    localStorage.setItem("timer", seconds);
  });


  // Display question/append to DOM
  function handleQuestion() {
    var question = $("<div>");
    question.text(questions[0].title);
    $("#mainpage").append(question);

    // Choices
    for (var i = 0; i < questions[0].choices.length; i++) {
      var answerButton = $("<button>");
      answerButton.addClass("btn btn-primary btn-sm");
      answerButton.text(questions[0].choices[i]);
      $("#mainpage").append(answerButton);
    };

    var button = document.querySelector("button");
    button.addEventListener("click", function (event) {
      event.preventDefault();

      var answerState = $("<div>");

      if (button.val === questions[0].answer[i]) {
        answerState.text("Correct!");
      }

      else {
        answerState.text("Wrong!");
        // Decrement time by 10 seconds for wrong answer
        seconds -= 10;
      }
      question.append(answerState);
      $("#mainpage").append(answerState)
    });
  };

  function endQuiz() {
    var endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class");
  }


});


