var quiz = [{question:"How many soldiers died during the battle of Verdun (estimated)?",answers:["143,000","162,000","305,000","254,000"], solution:2},
{question:"In the aftermath of Verdun, how many French villages and towns were destroyed?",answers:["11","10","13","15"], solution:1},
{question:"What made its first appearance at the Battle of the Somme?",answers:["Airships","Tanks","Airplane Bombers","Gas Weapons"], solution:1},
{question:"What did the Battle of the Somme do to Germany's strategy?",answers:["A defensive line was formed on the western front","An invasion of Russia","A decisive german offensive in France","Germany withdrawing from Russian Front"], solution:0},
{question:"Who was victorious in the Battle of Jutland?",answers:["German victory","Indecisive victory","British Victory","French Victory"], solution:1},
{question:"How many Armenians were killed between 1915 and 1923",answers:["1.5 Million","1 Million","2 Million","0.5 Million"], solution:0},
{question:"What was the impact of the Brusilov Offensive?",answers:["Massive Austro-Hungarian casualties","Forced Germany to withdraw from Verdun Offensive","Ottoman withdrawal from Black Sea","Massive Austro-Hungarian casualties and Forced Germany to withdraw from Verdun Offensive"], solution:3},
{question:"Why did the Ottoman Empire commit genocide during WWI",answers:["To remove religious groups from the Empire","To remove revolutionaries or possible Entente Supporters","To remove ethnic groups from the Empire","All other choices"], solution:3},];


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

