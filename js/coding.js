const codingQuestions = [

{
title:"Two Sum",
difficulty:"Easy",

problem:
"Given an array and target value, return indices of two numbers whose sum equals target.",

solution:
`function twoSum(nums,target){

for(let i=0;i<nums.length;i++){

for(let j=i+1;j<nums.length;j++){

if(nums[i]+nums[j]===target){

return [i,j];

}

}

}

}`
},

{
title:"Palindrome Number",
difficulty:"Easy",

problem:
"Determine whether an integer is a palindrome.",

solution:
`function isPalindrome(x){

return x.toString()===x.toString().split('').reverse().join('');

}`
},

{
title:"Valid Parentheses",
difficulty:"Medium",

problem:
"Determine if the input string has valid opening and closing brackets.",

solution:
`function isValid(str){

let stack=[];

let map={
')':'(',
'}':'{',
']':'['
};

for(let ch of str){

if(ch==='(' || ch==='{' || ch==='['){

stack.push(ch);

}else{

if(stack.pop()!=map[ch]){

return false;

}

}

}

return stack.length===0;

}`
},

{
title:"Reverse String",
difficulty:"Easy",

problem:
"Reverse a given string.",

solution:
`function reverseString(str){

return str.split('').reverse().join('');

}`
},

{
title:"Binary Search",
difficulty:"Medium",

problem:
"Search an element in a sorted array using binary search.",

solution:
`function binarySearch(arr,target){

let left=0;
let right=arr.length-1;

while(left<=right){

let mid=Math.floor((left+right)/2);

if(arr[mid]===target)
return mid;

if(arr[mid]<target)
left=mid+1;
else
right=mid-1;

}

return -1;

}`
}

];

let current = 0;

loadQuestion();

function loadQuestion()
{
    document.getElementById("difficulty")
    .innerHTML =
    "Difficulty: " +
    codingQuestions[current].difficulty;

    document.getElementById("title")
    .innerHTML =
    codingQuestions[current].title;

    document.getElementById("problem")
    .innerHTML =
    codingQuestions[current].problem;

    document.getElementById("solution")
    .textContent =
    codingQuestions[current].solution;

    document.getElementById("solutionBox")
    .style.display = "none";
}

function toggleSolution()
{
    let box =
    document.getElementById("solutionBox");

    if(box.style.display==="none")
    {
        box.style.display="block";
    }
    else
    {
        box.style.display="none";
    }
}

function nextQuestion()
{
    current++;

    if(current >= codingQuestions.length)
    {
        current = 0;
    }

    loadQuestion();
}

function previousQuestion()
{
    current--;

    if(current < 0)
    {
        current =
        codingQuestions.length - 1;
    }

    loadQuestion();
}