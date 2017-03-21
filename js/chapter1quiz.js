var quiz = [{question:"Why did Europeans Colonize Africa?", answers:["Economic", "Political", "Religious", "All of the Others"], solution:3},
	        {question:"Why was Africa easy to conquer for Europeans?",answers:["Europeans had better military",	"Europeans had better technology", "Europeans knew African land better",	"Europeans had better military and technology"], solution:3},
	        {question:"What Year did German Unification Occur?",answers:["1914", "1776", "1871", "1870"], solution:2},
	        {question:"Who was the main leader of German Unification?",answers:["Otto Von Bismarck", "Adolf Hitler", "Wilhelm I", "Wilhelm II"], solution:0},
	        {question:"Why were the Balkans Unstable?",answers:["Various Ethnic Groups", "Collapse of the Ottoman Empire", "Various Relegious Groups", "All of the above."], solution:3},
	        {question:"What Country/Empire supported Serbia?",answers:["England", "Russia", "Austria-Hungary", "France"], solution:1},
	        {question:"What year were airplanes used for Military Purpose?",answers:["1903", "1911", "1914", "1918"], solution:1},
	        {question:"Why did Zeppelins fail as weapons in WWI?",answers:["As the war went on Airplanes became more effective than the Zeppelins", "Inaccurate due to high altitude bombing", "New incendiary ammo made Zeppelins easier to shoot down", "All of the Above"], solution:3},
	        {question:"Who was not part of the Triple Alliance?",answers:["Ottoman Empire", "Austria-Hungary", "Germany", "Italy"], solution:0},
	        {question:"Which nation would switch sides during the war?",answers:["United State of America", "Netherlands", "Italy", "Russia"], solution:2},	    
	       ];

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
}

var endQuiz = function(cont){
        empty(cont);
        var div = document.createElement("div");
        var q = document.createElement("h1");    
        q.appendChild(document.createTextNode("Your score:" + correctAnswers.toString() + " out of " + quiz.length.toString()));
        div.appendChild(q);
        cont.appendChild(div);
}

var createStartButton = function(){
        var container = document.getElementById("chapter1quiz");
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

