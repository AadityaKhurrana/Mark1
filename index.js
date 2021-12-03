var read=require('readline-sync');
var username=read.question("Enter user userName");

//QuestionBank
var QuestionBank=[
  {
    ques:"What is JS ?",
    ans:"JavaScript"
  },
  {
    ques:"What is Dom ?",
    ans:"Document object Modulation"
  },
  {
    ques:"Why we use InnerText ?",
    ans:"To Take Value"
  },
  {
    ques:"Is var a dataType",
    ans:"Yes"
  },
  {
    ques:"== or === used for",
    ans:"Comparision"
  },
  {
    ques:"Is Strict mode present in JS",
    ans:"Yes"
  },
  {
    ques:"What is array ?",
    ans:"Collection of same type of Data"
  },
  {
    ques:"Who runs neogcamp ?",
    ans:"Mr.Tanay pratap"
  },
  {
    ques:"Why NeogCamp ?",
    ans:"Best in the world"
  },
  {
    ques:"Are you joining NeogCamp ?",
    ans:"Yes"
  }
];

console.log("Hello "+username);
console.log("Welcome to Quiz");

function play(question,answer)
{
  var ans=read.question(question);
  if(ans==answer)
  {
    score++;
  }
  else
  {
    score--;
  }

console.log("Current Score is : ",score)
  console.log("------------------------")
}

var score=0;
for(var i=0;i<QuestionBank.length;i++)
{
    var x=i+1;
    console.log("Question "+x+" : ");
    play(QuestionBank[i].ques,QuestionBank[i].ans)
}
console.log("Total Score is : "+score);