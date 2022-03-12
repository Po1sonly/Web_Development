var nums = [];

var num1 = nums.push(parseInt(prompt("Give me a number")));
var num2 = nums.push(parseInt(prompt("Give me another number"))); 
var num3 = nums.push(parseInt(prompt("Give me one more number")));

var sum = 0;

function sumNums(nums) {
    for (var i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    document.write("The sum of your numbers is " + sum + ".");
}

sumNums(nums);


