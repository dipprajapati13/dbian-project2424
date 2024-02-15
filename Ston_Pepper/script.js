var round = parseInt(prompt("Enter round od game =>")); 
for(i=1;i<=round;i++){
  var score = [];
  score[i] = playRound(getcoustomer(),getcom());
  console.log(score[i]);
}



 function getcoustomer(){
   let answer;
   var x = prompt("Please enter your ans with type=> s=scissors,r=roak,p=pepper"); 
   switch (x){
    case "s":
    answer = "scissors";
    break;
    case "r":
    answer = "rock";
    break;
    case "p":
    answer = "pepper";
    break;
    default:
    answer = "pliz enter velid answer";   
  }
  return answer;
 }


function getcom(){
  let com;
  var x = Math.floor(Math.random() * 3) + 1;
  switch (x){
    case 2:
    com = "scissors";
    break;
    case 3:
    com = "rock";
    break;
    case 1:
    com = "pepper";
    break;
  }
  return com
  }

  function playRound(playerSelection, computerSelection) {
    if(playerSelection==="scissors" && computerSelection==="rock"){
   return "scissors bites to rock so computer is win";
  }
  else if(playerSelection==="roak" && computerSelection==="pepper"){
  return "roak bites pepper so computer is win";
  }
  else if(playerSelection==="pepper" && computerSelection==="scissors"){
    return "pepper bites scissors so computer is win";
  }
  else if(playerSelection===computerSelection){
    return  "the game is tai";
  }
  else{
    return `${playerSelection} is bites ${computerSelection} so you win!`;
  }
}
// var score = ;
// console.log(score);   
