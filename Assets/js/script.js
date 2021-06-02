let question = document.querySelector("#question")
let answers = document.querySelector("#answers")
let start = document.querySelector("#start")
let time = document.querySelector("#timer")
const questionKey = [
    {
    title : "Which of these is not a data type present in javascript?",
    choices : ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

timeLeft = 60
function startquiz(){
    start.addEventListener("click", () =>{
        setInterval(() => {
            timeLeft -=1
            time.textContent = timeLeft
        }, 1000);
        pick = Math.floor(Math.random()* (questionKey.length -1))
        question.textContent = questionKey[pick].title;
        for(var x=0;x<4;x++){
            let test = document.createElement("BUTTON")
            test.setAttribute("id","choice" + x)
            test.textContent = questionKey[pick].choices[x]
            document.querySelector("#answers").appendChild(test)
        }
        console.log(pick)
    getQuestion(pick, timeLeft)      
    })
    
}
function getQuestion(pick, timeLeft) {
    
        var ans1 = document.querySelector("#choice0")
        var ans2 = document.querySelector("#choice1")
        var ans3 = document.querySelector("#choice2")
        var ans4 = document.querySelector("#choice3")
    
    ans1.onclick=function(){
        if(questionKey[pick].choices[0] == questionKey[pick].answer){
            getQuestion()
        }
        else{
            timeLeft-=5
            getQuestion()
        }

    }
       
    ans2.onclick=function(){
        if(questionKey[pick].choices[1] == questionKey[pick].answer){
            getQuestion()
        }
        else{
            timeLeft-=5
            getQuestion()
        }
 
    }
    ans3.onclick=function(){
        if(questionKey[pick].choices[2] == questionKey[pick].answer){
            getQuestion()
        }
        else{
            timeLeft-=5
            getQuestion()
        }
 
    }
    ans4.onclick=function(){
        if(questionKey[pick].choices[3] == questionKey[pick].answer){
            getQuestion()
        }
        else{
            timeLeft-=5
            getQuestion()
        }
 
    } 
}
startquiz()