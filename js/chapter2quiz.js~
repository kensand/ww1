var quiz = [
	{question:"Whose assassination was a major cause of WWI?", answers:["Archduke Franz Ferdinand", "Otto Von Bismarck", "Franz Joseph", "Heinrich Lammasch"], solution:0},
	{question:"Which nation would declare war first?",answers:["Austria-Hungary declared war on Serbia", "Austria-Hungary declared war on England", "England declared War on Germany", "Russia declared war on Austria-Hungary"], solution:0},
	{question:"What was the purpose of the Schlieffen Plan?",answers:["A strategy for a two front war for Germany", "To take out France in 6 weeks", "Defeat Russia after it mobilizes", "All of the other answers"], solution:3},
	{question:"What Country did Germany invade to flank France?",answers:["Belgium", "Luxembourg", "Switzerland", "Belgium and Luxembourg"], solution:3},
	{question:"What was barbed wire used for first?",answers:["To contain livestock", "Bridge suspension", "Military defenses", "Sturdy Rope"], solution:0},
	{question:"Why is the first Battle of the Marne Important?",answers:["The Ententes first major victory", "German offensive pushed to Paris", "The failure of the Schlieffen Plan", "The Ententes first major victory and the failure of the Schlieffen Plan"], solution:3},
	{question:"When year and event made the Ottoman Empire join the war?",answers:["1915 and the Gallipoli Campaign","1915 and the Black Sea Raids", "1914 and the Secret Treaty with Germany", "1914 and Attacking Greece"], solution:2},
	{question:"How many offensives did it take before the Austro-Hungarians retreated from Serbia in 1914",answers:["1","2","3","4"], solution:2},
	{question:"Why was WWI a total War?",answers:["Many civilians were enlisted to fight", "Military fronts were in civilian areas", "Bombing of civilian areas", "All of the other answers"], solution:3},
	{question:"What was the Race to the Sea?",answers:["A Peace treaty for Christmas where Germans and French ran around on the Coast", "Various battles that occurred at the frontline that ended near the coast", "The military operations of building trenches from Switzerland to the coast", "Various battles that occurred at the frontline that ended near the coast and the military operations of building trenches from Switzerland to the coast"], solution:3},
	{question:"Why was Propaganda used in WWI?",answers:["To instill Patriotism and Nationalism", "To encourage enlisting", 'Alter opinion of the "Enemy"', "All of the other answers"], solution:3},
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

