var quiz = [{question:"Why did Germany stop its unrestricted submarine warfare?", answers:["President Wilson's response to the Sinking of the Lusitania", "All of the German U-boats were destroyed", "The munitions for the U-boats need to be used on the frontlines", "The Austro-Hungarians requested them to stop"], solution:0},
	    {question:"What was the importance of the British tapping the German Transatlantic cable?",answers:["Allowed only British Propaganda reach the USA", "Allowed The British to spy on Germany", "Allowed Neutral nations to trade with the British", "Allowed only British Propaganda reach the USA and allowed The British to spy on Germany"], solution:3},
	    {question:"What nations in WWI controlled part of modern day Poland?",answers:["Germany, Austria-Hungary, Russia", "Germany, Austria-Hungary, France", "Norway, Germany, Russia", "Austria-Hungary, Romania, Germany"], solution:0},
	    {question:"Who was victorious by the end of 1915 in the Poland Campaign?",answers:["Russia controlled all of Poland", "Germany controlled all of Russian Poland", "Austria-Hungary controlled all of Russian Poland", "No decisive victory"], solution:1},
	    {question:"What two weapons made their first appearance in the Second Battle of Ypres?",answers:["Gas and Barbed Wire", "Gas and Tanks", "Gas and Flamethrowers", "Gas and Automatic Rifles"], solution:2},
	    {question:"What was the lethality of gas weapons (Killed and injured)?",answers:["25%", "5%" ,"10%", "1%"], solution:1},
	    {question:"What were symptoms of Shell Shock?",answers:["Nervous and Mental Shock", "Headaches and Deafness", "Shockwaves from shells fired", "Wounds from Artillery"], solution:0},
	    {question:"What was a major reason the Gallipoli Campaign failed?",answers:[
		"Ottomans were able to defend their Capital","Naval Assault failed","Serbian Defeat in Serbia","All of the other choices"], solution:3},
	    {question:"Which countries celebrate ANZAC day for their soldier's sacrifice during the Gallipoli Campaign and all other conflicts?",
	     answers:["Australia and New Zealand","Australia and India","New Zealand and Canada","Australia and Canada"], solution:0},
	    {question:"Why did Italy not declare war at the beginning of WWI?",answers:["Their military was not prepared to fight at the start of the war","Were afraid of a French Invasion","Their alliance with Germany and Austria-Hungary was a defensive alliance not offensive","Italy was busy with an African Colonial War"], solution:2},
	    {question:"What was the impact of the second invasion of Serbia in 1915?",answers:["Major victory for Central Powers","Clear train route between Central Powers","Bulgaria would join Central Powers","All of the other choices"], solution:3},
	    {question:"What was the Treaty of London?",answers:["Italy joining the Entente","granting Austro-Hungarian land to Italy after the War","granting Austro-Hungarian land to Serbia and Montenegro after the war","All of the other choices"], solution:3},
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

