var firstName = prompt("Tell me your name");
var num1 = parseInt(prompt("Give me a number")); 
var num2 = parseInt(prompt("Give me another number"));


function day(firstName){
    document.write("You are going to have a wonderful day " + firstName + ". ");
}

day(firstName);

function numbers(num1, num2){
    var sum = num1 + num2;
    document.write("By the way, the sum of your numbers is " + sum + ".");
}

numbers(num1, num2); 