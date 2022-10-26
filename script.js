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

///fighter class is parent to Hero and Monster
//Fighter contains everything that both Hero and Monster have - method, properties

class Fighter{
  constructor(name){
    this.name = name
    this.healthPoints = 15
  }
  //hero and mnster will both have attack method
  attack(targetObj){
    let attackPoints = randomNum(1,6);
    targetObj.healthPoints = targetObj.healthPoints - attackPoints;
    return `${this.name} attacked ${targetobj.name}! ${this.name} did ${attackPoints} damage. ${targetObj.name}
    has ${targetObj.healthPoints} health points left`
  }
}

class Monster extends Fighter{
  constructor(name, superPowers){
    super(name);
    this.superPowers = superPowers;
  }
}

let logicalBeast = new Monster("logicalBeast", "shoot with brain")

class Hero extends Fighter{
  constructor(name, weapon){
    super(name);
    this.weapon = weapon
  }
}
let knight= new Hero("Knight", "sword");

if (!zeroOrone) {
  Hero.attack(monster);
  if (monster.healthPoints > 0) {
    monster.attack(hero);
  }
}

else {
  monster.attack(hero)
  if(hero.healthPoints >0){
    hero.attack(monster)
  }
}



//function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
//let playerAttackPoints = randomNum(1, 6);
//monsterHealth = monsterHealth - playerAttackPoints;
//alert(`${playerName} has viciously attacked ${monsterName}. 
//The attack left ${playerAttackPoints} of damage resulting in ${monsterHealth} health points.`)
//}



//function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
  //let monsterAttackPoints = randomNum(1, 6);

  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
 // playerHealth = playerHealth - monsterAttackPoints;

  //use an alert with string template literals to tell the player: 

  //alert(`Monster attacked player and did ${monsterAttackPoints} of damage! ${playerName} has ${playerHealth} health left!`)
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
//}

/*function playRound() {
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
}*/

function playGame(hero, monster) {
  //beginning game message
  alert(
    `Hello, ${hero.Name}! You are fighting ${monster.Name}! 
    Your health is at ${hero.Health}, ${monster.Name}'s health is at ${monster.Health}`
  );

 let roundNumber = 0;

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while( (monster.healthPoints > 0)  && (hero.healthPoints > 0) ){
    roundNumber++;
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`This is round number ${roundNumber}, ${hero.name} has ${hero.healthPoints} health and ${monsterName} has ${monster.healthPoints}`);
   //call playRound inside the while loop
   playRound();
    
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if (hero.healthPoints < 0) {
    alert(`${hero.name} WINS! Sorry, you lose!`);
  } else if (monster.name < 0) {
    alert(`${hero.Name} WINS! Congratulations, you won!`)
  }
}

//call playGame to start game.
playGame();
