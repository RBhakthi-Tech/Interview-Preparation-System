const aptitudeQuestions = [

{
question:"What is 20% of 250?",
options:["25","40","50","60"],
answer:"50"
},

{
question:"If 5x = 25, x = ?",
options:["3","4","5","6"],
answer:"5"
},

{
question:"Find the next number: 2,4,8,16,?",
options:["18","20","24","32"],
answer:"32"
},

{
question:"A train travels 60 km in 1 hour. Speed?",
options:["50","60","70","80"],
answer:"60"
},

{
question:"10 + 20 ÷ 5 = ?",
options:["6","14","18","20"],
answer:"14"
},

{
question:"What is 15% of 200?",
options:["25","30","35","40"],
answer:"30"
},

{
question:"Find square of 12",
options:["124","144","164","100"],
answer:"144"
},

{
question:"Simplify: 18/3",
options:["3","4","5","6"],
answer:"6"
},

{
question:"What is 7 × 8?",
options:["54","56","58","60"],
answer:"56"
},

{
question:"Find the missing term: 1,3,5,7,?",
options:["8","9","10","11"],
answer:"9"
}

];

const technicalQuestions = [

{
question:"Which keyword is used for inheritance in Java?",
options:["implement","extends","inherit","super"],
answer:"extends"
},

{
question:"Which language is used to query databases?",
options:["HTML","CSS","SQL","Java"],
answer:"SQL"
},

{
question:"What does DBMS stand for?",
options:[
"Database Management System",
"Data Base Main System",
"Data Management Software",
"Database Main Software"
],
answer:"Database Management System"
},

{
question:"Which SQL command is used to retrieve data?",
options:["GET","FETCH","SELECT","SHOW"],
answer:"SELECT"
},

{
question:"Which scheduling algorithm uses time slices?",
options:[
"FCFS",
"SJF",
"Round Robin",
"Priority"
],
answer:"Round Robin"
},

{
question:"Which layer handles routing?",
options:[
"Transport",
"Network",
"Session",
"Physical"
],
answer:"Network"
},

{
question:"Java is a?",
options:[
"Compiler",
"Interpreter",
"Programming Language",
"Database"
],
answer:"Programming Language"
},

{
question:"Primary Key must be?",
options:[
"Duplicate",
"Unique",
"Null",
"Optional"
],
answer:"Unique"
},

{
question:"Which SQL clause filters rows?",
options:[
"GROUP BY",
"ORDER BY",
"WHERE",
"HAVING"
],
answer:"WHERE"
},

{
question:"TCP stands for?",
options:[
"Transfer Control Protocol",
"Transmission Control Protocol",
"Transport Control Program",
"Transmission Communication Protocol"
],
answer:"Transmission Control Protocol"
}

];
aptitudeQuestions.sort(() => Math.random() - 0.5);

technicalQuestions.sort(() => Math.random() - 0.5);