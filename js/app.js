'use strict';
let username = prompt("what's your name ?")
console.log(username)

let feeling = prompt("How you doin'?")
console.log(feeling)

alert("Welcome, " + username)
alert("I want to play a game")

let score = 0

let club = prompt("is juventus my favorite club ?")
console.log('before: ', club)
club = club.toUpperCase()
if (club === 'YES' || club === 'Y') {
    console.log('favorite club: ', club)
    alert("Wrong answer");
}
else if (club === 'NO' || club === 'N') {
    console.log('favorite club: ', club)
    alert("Correct");
    score++;
}
else {
    alert("try again")
}
console.log('after: ', club)


let study = prompt("Am I currently studying programming?")
console.log('before: ', study)
study = study.toUpperCase()
if (study === 'YES' || study === 'Y') {
    console.log(study)
    alert("Correct");
    score++;

}
else if (study === 'NO' || study === 'N') {
    console.log(study)
    alert("Wrong answer");
}
else {
    alert("try again")
}
console.log('after: ', study)

let car = prompt("Is my favorite car Toyota ?")
console.log('before: ', car)
car = car.toUpperCase()
if (car === 'YES' || car === 'Y') {
    console.log(car)
    alert("Wrong answer");
}
else if (car === 'NO' || car === 'N') {
    console.log(car)
    alert("Correct");
    score++;
}
else {
    alert("try again")
}
console.log('after: ', car)


let food = prompt("Is my favorite food Molokhia ?")

switch (food.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Correct")
        console.log("Favorite food", food)
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
console.log(food)

let sport = prompt("Is baseball my favorite sport ?")

switch (sport.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Wrong answer")
        console.log("Favorite food", sport)
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
console.log(sport)


for(let i=4;i>-1;i--)
{
    let num=prompt("Guess a number between 1 & 10")
    if(num === '7')
    {
        console.log(num)
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


let arr=["apple","banana","orange","pear"]
for(let i=6;i>-1;i--)
{
    let fruit=prompt("Guess which fruit is my favorite")
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

alert(`Your score is ${score}/7`)

console.log(score / 7)

alert("Thank you for playing");
