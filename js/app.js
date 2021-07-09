'use strict';
let username = prompt("what's your name ?")

let feeling = prompt("How you doin'?")

alert("Welcome, " + username)
alert("I want to play a game")

let score = 0
////// 
function q1() {
    

let club = prompt("is juventus my favorite club ?")
club = club.toUpperCase()
if (club === 'YES' || club === 'Y') {
    alert("Wrong answer");
}
else if (club === 'NO' || club === 'N') {
    alert("Correct");
    score++;
}
else {
    alert("try again")
}
} q1();
//////
  function q2() {
      
  
let study = prompt("Am I currently studying programming?")
study = study.toUpperCase()
if (study === 'YES' || study === 'Y') {
    alert("Correct");
    score++;

}
else if (study === 'NO' || study === 'N') {
    alert("Wrong answer");
}
else {
    alert("try again")
}
} q2();
  //////////

   function q3() {
       
   
let car = prompt("Is my favorite car Toyota ?")
car = car.toUpperCase()
if (car === 'YES' || car === 'Y') {
    alert("Wrong answer");
}
else if (car === 'NO' || car === 'N') {
    alert("Correct");
    score++;
}
else {
    alert("try again")
}

   } q3();
   ////////////////////////////
   function q4() {
    
   
let food = prompt("Is my favorite food Molokhia ?")

switch (food.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Correct")
        score++;
        break;

    case 'no':
    case 'n':
        alert("Wrong answer")
        break;
    default:
        alert("try again")
        break;
}


   } q4();

 function q5() {
     
 
let sport = prompt("Is baseball my favorite sport ?")

switch (sport.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Wrong answer")
        break;

    case 'no':
    case 'n':
        alert("Correct")
        score++;
        break;
    default:
        alert("try again")
        break;
}

 } q5();

  
function q6() {
    

for(let i=4;i>-1;i--)
{
    let num=prompt("Guess a number between 1 & 10")
    if(num === '7')
    {
        alert("Correct")
        score++
        break;
    }
    else if(num < '7')
    {
        alert("Too low. You have " + i + " attempts")
    }
    else
    {
        alert("Too high. You have " + 1 + " attempts")
    }
    
}
alert("The correct answer is 7")

} q6();


function q7() {
    

let arr=["apple","banana","orange","pear"]
for(let i=6;i>-1;i--)
{
    let fruit=prompt("Which fruit do you think is my favorite (apple, banana, orange or pear) ?")
    fruit=fruit.toLowerCase();
    if(fruit == arr[0] || fruit == arr[1] || fruit == arr[2] || fruit == arr[3])
    {
        alert("Correct")
        score++
        break;
    }
    else if(fruit != arr[i])
    {
        alert("Try again")
    }
    else
    {
        alert("You didn't answer anything")
    }
}
alert("the correct answers are: apple, orange, pear & banana")

} q7();

alert(`Your score is ${score}/7`)


alert("Thank you for playing");
