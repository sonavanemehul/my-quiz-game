class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("lightblue");
    //write code to show a heading for showing the result of Quiz
    textSize(50);
    fill("blue");
text ("results of the quiz",150,100);
text("...............................", 320, 65)
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestestants !==undefined) {
      var displayAnswers = 230;
      fill ("blue");
      textSize(20);
      text ("*NOTE: contestant who answered correct are highlighted in green color!",130,230);
        
        for(var plr in allContestants){
          var correctAns = "2";
          if(correctAns === allContestestants[plr].answer)
          fill("green")
          else
          fill("red")

displayAnswers = displayAnswers +30;
textSize (15);
text(allContestants[plr].name + " : " + allContestants[plr].answer, 250, displayAnswers)
        
        
         
    //write code to add a note here

    //write code to highlight contest who answered correctly
        }
  }
  }
  }
