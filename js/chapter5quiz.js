var quiz = [{question:"Why did the United States enter WWI?",answers:["A German telegram to Mexico, suggesting that they declare war on the USA","Unrestricted U-boat attacks began again in 1917","Germany declared war on the United States","A German telegram to Mexico, suggesting that they declare war on the USA","Unrestricted U-boat attacks began again in 1917"], solution:3},
{question:"What was the major cause of the Russian revolutions?",answers:["Weakening Monarchy under Nicholas II	War weariness","Communist ideology spreading","All other choices"], solution:3},
{question:"Which revolution gave communist control of Russia?",answers:["March/Red Revolution","October /Bolshevik Revolution","February / Duma Revolution","June/Stalin Revolution"], solution:1},
{question:"What was the importance of the Italian Front in 1917",answers:["Germany needed Austria-Hungary to keep fighting","Italians were backing off to fight in Greece Instead","It was stalemate between Austria-Hungary and Italy","Germany needed Austria-Hungary to keep fighting and It was stalemate between Austria-Hungary and Italy"], solution:3},
{question:"Who would aid the Arabs in their revolution and fighting against the Ottomans?",answers:["Winston Churchill","T. E. Lawrence","John Maxwell","Edward Bulfin"], solution:1},
{question:"Why did the Arabs join British Forces?",answers:["Were offered large amount of land if victorious","Opposed the Ottoman Rule","They were offered a large amount of money/wealth","Were offered large amount of land if victorious and Opposed the Ottoman Rule"], solution:3},
{question:"What battle of Ypres is know as the battle of Passchendaele",answers:["First Battle of Ypres","Second Battle of Ypres","Third Battle of Ypres","Fourth Battle of Ypres"], solution:2},];

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

