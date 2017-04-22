var quiz = [{question:"What events lead to the foundation of Israel",answers:["Balfor Declaration for a jewish state","Sykes-Picot Agreement influence on the Middle East","Ottoman Doctrine to give Middle East to its native populations","Balfor Declaration for a jewish state and Sykes-Picot Agreement influence on the Middle East"], solution:3},
{question:"What was a major impact of Communism/ Marxism Socialism in Russia?",answers:["Rapidly evolved Russia from Agrarian to Industrial Society","Their ideology spread with rapid success in Europe","New social programs aided population","Rapidly evolved Russia from Agrarian to Industrial Society and New social programs aided population"], solution:3},
{question:"Even after Peace, why did World War II occur?",answers:["Germany was not demilitarized completely","League of Nations did not prevent future conflicts","Weak replacement government allowed for Hitler to rise in power","All other choices"], solution:3},
{question:"Why did US start to become a world superpower after WWI?",answers:["Late joining of war, meant less casualties","No battles on American Soil","Major Industrialization and Economic Boom during the War","All other choices"], solution:3},
{question:"What major nation proposed the League of Nations but never joined?",answers:["France","Britan","The United States","Germany"], solution:2},
{question:"How many new nations existed after the Treaty of Versailles?",answers:["9","10","8","7"], solution:0},
{question:"How many people were casualties in WWI?",answers:["Over 35 Million casualties","25 Million Casualties","Over 40 Million Casualties","Over 30 Million Casualties"], solution:0},
];


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

