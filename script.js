let questions=document.getElementById("qst")
let answers=document.getElementById("ans")
let score=0
qstions=[
    "What is the Full form of HTML?",
    "What is the Full form of CSS?",
    "Who is the Creator of JavaScript?",
    "Who is the Creator of C++?",
    "Who is the Creator of Python?"
]
ans1=[
    q1_ans={
        option1:"Hyper Text Markup Language",
        option2:"Hyper Text Mark Language",
        option3:"Home Tool Markup Language",
        option4:"HyperLinks and Text Markup Language",
      
    },
    
    q2_ans={
        option1:"Colorful Style Sheets",
        option2:"Creative Style Sheets",
        option3:"Cascading Style Sheets",
        option4:"Computer Style Sheets",
        
     },
    q3_ans={
        option1:"James Gosling",
        option2:"Brendon Vich",
        option3:"Brendon Eich",
        option4:"Paul Albert",
        
    },
    q4_ans={
        option1:"Guiddo Van Rossum",
        option2:"Kim Uno",
        option3:"Bjarne Stroustrup",
        option4:"Bjarne Stroustrop",
       
    },
    q5_ans={
        option1:"Guiddo Ven Rossum",
        option2:"Kim Uno",
        option3:"Guiddo Van Rossum",
        option4:"James Gosling",

       
    },
]
questions.innerHTML='<h3 class="head">'+qstions[0]+'</h3>'
answers.innerHTML='<input type="radio" id="myvalue" name="option" class="check">'+ans1[0].option1+''+
'<br><input type="radio" name="option"  class="check">'+ans1[0].option2+''+
'<br><input type="radio" name="option"  class="check">'+ans1[0].option3+''+
'<br><input type="radio" name="option"  class="check">'+ans1[0].option4+''
let i=1
let x
function myfunction(){
    console.log("hi")
    for(;i<qstions.length;){
        console.log(i)
        questions.innerHTML='<h3 class="head">'+qstions[i]+'</h3>'
answers.innerHTML='<input type="radio" name="option"  class="check" required="required">'+ans1[i].option1+''+
'<br><input type="radio" name="option"  class="check" >'+ans1[i].option2+''+
'<br><input type="radio" name="option" id="myvalue"  class="check" >'+ans1[i].option3+''+
'<br><input type="radio" name="option"  class="check" >'+ans1[i].option4+''
x=document.getElementById("ans").checked
    i=i+1
        break;
    }
   
}

function checkscore(){
    if(document.getElementById("myvalue").checked){
       alert("You are right")
    }
    
    else{
        alert("You are wrong")
    }
   
}