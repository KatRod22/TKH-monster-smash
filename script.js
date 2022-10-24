//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
  let playerName = prompt("Enter a name");

  //declare a variable named playerHealth and set it equal to the number value 15
  let playerHealth = 15;

  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
  let monsterName = "la llorona"
  //declare a variable named monsterHealth and set it equal to the number value 15
  let monsterHealth = 15


//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
let playerAttackPoints = randomNum(1, 6);
monsterHealth = monsterHealth - playerAttackPoints;
alert(`${playerName} has viciously attacked ${monsterName}. 
The attack left ${playerAttackPoints} of damage resulting in ${monsterHealth} health points.`)
}



function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
  let monsterAttackPoints = randomNum(1, 6);

  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
  playerHealth = playerHealth - monsterAttackPoints;

  //use an alert with string template literals to tell the player: 

  alert(`Monster attacked player and did ${monsterAttackPoints} of damage! ${playerName} has ${playerHealth} health left!`)
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
}

function playRound() {
  //use randomNum to return either 0 or 1
  randomNum(0,2)
  
  if ( randomNum(0, 2) === 0) {
    playerAttack();
    if (monsterHealth > 0) {
      monsterAttack();
    }
  } else if (randomNum(0, 2) === 1) {
    monsterAttack();
    if (playerHealth > 0) {
      playerAttack();
    } 
  }
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! 
    Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0;

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while( (monsterHealth > 0)  && (playerHealth > 0) ){
    roundNumber++;
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`This is round number ${roundNumber}, ${playerName} has ${playerHealth} health and ${monsterName} has ${monsterHealth}`);
   //call playRound inside the while loop
   playRound();
    
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if (playerHealth < 0) {
    alert(`${monsterName} WINS! Sorry, you lose!`);
  } else if (monsterHealth < 0) {
    alert(`${playerName} WINS! Congratulations, you won!`)
  }
}

//call playGame to start game.
playGame();
