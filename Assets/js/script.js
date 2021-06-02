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
        var i =1
        for (x in questionKey[pick].choices){
            let options = document.createTextNode(questionKey[pick].choices[x]+ " ")
            let num = document.createTextNode(i + ":  ")
        let answerArea= document.createElement("BUTTON");
        answerArea.setAttribute("id", i) 
        console.log(answerArea)
        answerArea.appendChild(num);
        answerArea.appendChild(options);
        i++
        document.querySelector("#answers").appendChild(answerArea)
    }
        
    })
    var ans1= document.getElementById("1")
    var ans2=document.getElementById("2")
    var ans3=document.getElementById("3")
    var ans4=document.getElementById("4")
   ans1.onclick=function(){
       if(questionKey[pick].choices[0] == questionKey[pick].answer){
           console.log("yes")
       }
       else{
           console.log("still yes")
       }
   }
}
startquiz()