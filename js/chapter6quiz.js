var quiz = [{question:"What was the objective of the Spring Offensive?",answers:["To take finish the war on west via breaking Entente lines","To take out Italy","To to take out Entente forces by reaching English Channel","To take on Entente head on"], solution:0},
{question:"Why were the Entente able to push back Germany in the 100 Day Offensive?",answers:["Germany was weakened after their Spring Offensive","got American and Entente reinforcements","Caught Germans by surprise with their counter attack","All other choices"], solution:3},
{question:"When was the Armistice signed to stop the war?",answers:["11/11/1918","10/21/1919","6/28/1919","10/25/1917"], solution:0},
{question:"Why did Germany have problems with the Versailles Peace Treaty?",answers:["They were given the reparations for a total of $31 Billion ($442 Billion Today)","Were blamed to be only one responsible for WWI (War Guilt)","Its population would not be happy if signed","All other choices"], solution:3},
{question:"Why did Woodrow Wilson get a Nobel Prize?",answers:["For creating the League of Nations","For ensuring peace after WWI","For stopping the Ottoman Genocides","For creating the League of Nations and For ensuring peace after WWI"], solution:3},
{question:"What were the broad goals of Wilson's 14 points",answers:["Restore territory to nations and create new nations from old ones","Create a League of Nations","Create international peace","All Choices"], solution:3},];


var input = [];

var questionTime = 3000;
//var questionNumber = 0;
var correctAnswers = 0;
var startTime = new Date().getTime();
var run = true;
var answer = null;

//beginning
var empty = function(cont){
    while (cont.hasChildNodes()) {
	cont.removeChild(cont.lastChild);
    }
}

var loadQuestion = function(cont, number){
    empty(cont);
    var div = document.createElement("div");
    var q = document.createElement("h1");

    
    q.appendChild(document.createTextNode(quiz[number].question));
    div.appendChild(q);
    for(var j = 0; j < quiz[number].answers.length; j++){
	
	var button = document.createElement("a");
	q = document.createElement("h1");
	q.appendChild(document.createTextNode(quiz[number].answers[j]));
	q.className+="noSelect";
	button.appendChild(q);
        button.className = "quizButton";
	button.ans = j;
	button.onclick = function(){
	    submitAnswer(this.ans, number);
	    number++;
	    if(number >=quiz.length){
		endQuiz(cont);
	    }
	    else{
		loadQuestion(cont, number);
	    }
	}
	div.appendChild(button);
    }
    cont.appendChild(div);
    answer = null;
}

var submitAnswer = function(ans, questionNumber){
    if(ans == quiz[questionNumber].solution){
	correctAnswers++;
    }
    input.push(ans);
}

var endQuiz = function(cont){
    empty(cont);
    var div = document.createElement("div");
    var q = document.createElement("h1");    
    q.appendChild(document.createTextNode("Your score:" + correctAnswers.toString() + " out of " + quiz.length.toString()));
    div.appendChild(q);
    cont.appendChild(div);
    for(var i = 0; i < quiz.length; i++){
	var div = document.createElement("div");
	var q = document.createElement("h2");    
	q.appendChild(document.createTextNode("Question " + (i+1).toString()));
	
	div.appendChild(q);
	var q = document.createElement("p");    
	q.appendChild(document.createTextNode("Your answer: " + quiz[i].answers[input[i]]));
	
	div.appendChild(q);
	var q = document.createElement("p");    
	q.appendChild(document.createTextNode("Correct answer: " + quiz[i].answers[quiz[i].solution]));
	div.style.textAlign = "left";
	div.className+="quizAns";
	div.appendChild(q);
	cont.appendChild(div);

    }
}

var createStartButton = function(){
    var container = document.getElementById("chapterquiz");
    var button = document.createElement("a");
    empty(container);
    button.className = "quizStartButton";
    //button.id = "quizStartButton";
    button.appendChild(document.createTextNode("Start Quiz"));
    
    button.onclick = function(){
	loadQuestion(container, 0);
    }
    
    container.appendChild(button);
}

createStartButton();

