var playing=false;
var score;
var action;
var timeReducer;
var correctAns;
var prog;
var wrongSound;
var correctSound;
var gamesong;
var gameOversong;
var correctAns;
//var x;
//var y;



//var correctPosition;


document.getElementById("startreset").onclick = 
    function(){
            if(playing==true){
                location.reload();
                
            }else{ 
                initiate();
            
            }

    }

    function initiate(){
                playing=true;
                
                score= 0;
                timeReducer=0;
                document.getElementById("scoreValue").innerHTML=score;
                show("timeremaining");
                document.getElementById("startreset").innerHTML="Reset Game";
               
                hide("gameOver");
                generateQe();
                mysoundGame();
                hide("instruction");
                show("progress");
                progressBar();
    }

    //sound wrong
    wrongSound=document.getElementById("wrongSound");
    function mysoundWrong(){
        wrongSound.play();
    }
    //correct wrong
    correctSound=document.getElementById("correctSound");
    function mysoundCorrect(){
        correctSound.play();
    }
    //game song
    gamesong=document.getElementById("gameSound");
    function mysoundGame(){
        gamesong.play();
    }
    //gameOver song
    gameOversong=document.getElementById("gameoverSound");
    function mysoundGameover(){
        gameOversong.play();
    }

    function startCountdown(){
        action=setInterval(function(){
            if(timeReducer<10){
                timeReducer +=1;
                document.getElementById("timeremainingvalue").innerHTML=timeReducer;

                progressBar(); 
            }else{

                
                    stopCountdown();
                    timeReducer=0;
                    document.getElementById("timeremainingvalue").innerHTML=timeReducer;
                    //progress bar off
                    hide("progress");
                    show("instruction");
                    progressBar();

                    
                    show("gameOver");
                    document.getElementById("gameOver").innerHTML=
                    "<p>Game Over!</p><p>Your Score is "+score+"</p>";

                    hide("correct");
                    hide("wrong");
                    hide("timeremaining");
                    document.getElementById("startreset").innerHTML="Start Game";
                    playing=false;
                    gamesong.pause();
                    mysoundGameover();
                }
        },1000)
    } 



    function hide(id){
            document.getElementById(id).style.display="none";
    }

    function show(id){
        document.getElementById(id).style.display="block";
    }   

function stopCountdown(){
    clearInterval(action);
}
//mathematics problem;

function generateQe() {
    
    if(timeReducer==0){
        
    startCountdown();
    
       matOperator=["*","/","+","-"];
     

       var ope=matOperator[Math.floor(Math.random()*matOperator.length)];
       
        var x;//= Math.round(9*Math.random())+1;
        var y;//= Math.round(9*Math.random())+1;
    
         switch(ope){
            case "*" :
                    x= Math.round(9*Math.random())+1;
                    y= Math.round(9*Math.random())+1;
            correctAns=x*y;
            break;
            case "/" :
                
                    do{
                        x= Math.round(49*Math.random())+1;
                        y= Math.round(9*Math.random())+1;
                        //console.log( ope);
                        //console.log( x,y);
                        
                        
                   }
                   while( x%y!==0 || x<y || y==1)
                   //console.log("result"+""+ x,y);

                         
            correctAns=x/y;
           
            break;
            case "+" :
                    x= Math.round(49*Math.random())+1;
                    y= Math.round(49*Math.random())+1;
            correctAns=x+y;
            break;
            case "-" :
                    {
                        do{
                            x= Math.round(39*Math.random())+1;
                            y= Math.round(39*Math.random())+1;
                        // console.log( ope);
                        //console.log( x,y);
                       }
                       while(x<y || x-y==0)}
                      // console.log("result"+""+ x,y);
            correctAns=x-y;
            
            break;

        
    }
    

       document.getElementById("sum").innerHTML=x+ope+y;
        

        //position portion;
        var correctPosition=1+Math.round(Math.random()*3);
     document.getElementById("box"+correctPosition).innerHTML=correctAns;

     //Generate wrong Answer
     //confirm all option will be different;

     var answers=[correctAns];
        
                for(i=1; i<5; i++){
                    if(i!=correctPosition){
                        var wrongAns;
                        do{
                            wrongAns=(1+ Math.round(9*Math.random()))
                    *( 1+Math.round(9*Math.random()));
                    
                        }
                        //while(wrongAns == correctAns)
                        while(answers.indexOf(wrongAns)>-1)
                       
                    document.getElementById("box"+i).innerHTML=wrongAns;
                    answers.push(wrongAns);
                     
                }
            }
        }
    }


    
 
    


//correct and wrong into boxes;

for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=
function(){
    if(playing==true){
        if(this.innerHTML==correctAns){
            show("correct");
            setInterval(function(){hide("correct")},1000);
            hide("wrong");
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            mysoundCorrect();
            stopCountdown();
            timeReducer=0;
            document.getElementById("timeremainingvalue").innerHTML=timeReducer;
            progressBar();
            generateQe();
            
            

        }else{
            show("wrong");
            setInterval(function(){hide("wrong")},1000);
            hide("correct");
            //time cut for correct ans
            if(timeReducer<9){
            timeReducer=timeReducer+2;}
        
            mysoundWrong();
            document.getElementById("timeremainingvalue").innerHTML=timeReducer;
            progressBar();
                }
            }
        }
    }

    //progressBar;

    function progressBar(){
        if(timeReducer>10){
            timeReducer=10
            var element= document.getElementById("progress");
            var width=0;
            width+=45*timeReducer; 
            element.style.width = width + 'px';
        }  else{
        var element= document.getElementById("progress");
        var width=0;
        width+=45*timeReducer; 
        element.style.width = width + 'px'; 
        
    }
}

