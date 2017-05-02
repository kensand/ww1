var quiz = [{question:"Why did Europeans Colonize Africa?", answers:["Economic", "Political", "Religious", "All of the other answers"], solution:3},
	        {question:"Why was Africa easy to conquer for Europeans?",answers:["Europeans had better military",	"Europeans had better technology", "Europeans knew African land better",	"Europeans had better military and technology"], solution:3},
	        {question:"What Year did German Unification Occur?",answers:["1914", "1776", "1871", "1870"], solution:2},
	        {question:"Who was the main leader of German Unification?",answers:["Otto Von Bismarck", "Adolf Hitler", "Wilhelm I", "Wilhelm II"], solution:0},
	        {question:"Why were the Balkans Unstable?",answers:["Various Ethnic Groups", "Collapse of the Ottoman Empire", "Various Relegious Groups", "All of the other answers"], solution:3},
	        {question:"What Country/Empire supported Serbia?",answers:["England", "Russia", "Austria-Hungary", "France"], solution:1},
	        {question:"What year were airplanes used for Military Purpose?",answers:["1903", "1911", "1914", "1918"], solution:1},
	        {question:"Why did Zeppelins fail as weapons in WWI?",answers:["As the war went on Airplanes became more effective than the Zeppelins", "Inaccurate due to high altitude bombing", "New incendiary ammo made Zeppelins easier to shoot down", "All of the other answers"], solution:3},
	        {question:"Who was not part of the Triple Alliance?",answers:["Ottoman Empire", "Austria-Hungary", "Germany", "Italy"], solution:0},
	        {question:"Which nation would switch sides during the war?",answers:["United States of America", "Netherlands", "Italy", "Russia"], solution:2},	    
	       ];


var input = [];

var questionTime = 3000;
//var questionNumber = 0;
var correctAnswers = 0;
var startTime = new Date().getTime();
var run = true;
var answer = null;
var numbers = new Array(quiz.length).fill(false);

//beginning
var empty = function(cont){
    while (cont.hasChildNodes()) {
	cont.removeChild(cont.lastChild);
    }
}

var loadQuestion = function(cont){
    empty(cont);
    var div = document.createElement("div");
    var q = document.createElement("h1");

    var number = Math.floor(Math.random() * quiz.length);
    while(numbers[number]){
	number = Math.floor(Math.random() * quiz.length);
    }
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
	    numbers[number] = true;
	    submitAnswer(this.ans, number);
	    if(input.length == quiz.length){
		endQuiz(cont);
	    }
	    else{
		loadQuestion(cont);
	    }
	}
	var list = div.getElementsByClassName("quizButton")
	if(list.length == 0){
	    div.appendChild(button);
	}
	else{
	    
	    div.insertBefore(button, list[Math.floor(Math.random() *list.length)]);
	}
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
	q.appendChild(document.createTextNode(quiz[i].question));
	
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

