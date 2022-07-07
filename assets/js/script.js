
var optionsEl = document.getElementById("options");
var startButtonEl = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");

var option1El = document.getElementById("op1");
var option2El = document.getElementById("op2");
var option3El = document.getElementById("op3");
var option4El = document.getElementById("op4");
var nextButtonEl = document.getElementById("next");
var timerEl = document.getElementById("timer");

var buttonClicked = 0;


var count = 0;
var showQ = 0;

var sec = 59;

// var test = document.getElementById("op1");
// console.log(test.innerHTML);


// option1El.addEventListener("click" , buttonClick);
// option2El.addEventListener("click" , buttonClick);
// option3El.addEventListener("click" , buttonClick);
// option4El.addEventListener("click" , buttonClick);

nextButtonEl.addEventListener("click",buttonClick);


function buttonClick(event){
    buttonClicked = 1;
    console.log(event.target);
    console.log(buttonClicked);
    showQuestions();
}



// function showQuestions(){

//     for ( var i = 0; i < questions.length; i++ ) (function(i){
//         nextButtonEl.addEventListener("click", function() {
//             questionsEl.textContent = questions[i].q;
//             option1El.innerHTML = questions[i].options[0];
//             option2El.innerHTML = questions[i].options[1];
//             option3El.innerHTML = questions[i].options[2];
//             option4El.innerHTML = questions[i].options[3];

//             console.log(i);
//     })
//   })(i);

// }


while(sec== 0){
  questionsEl.textContent = questions[5].q;
}





function showQuestions(){




 
    questionsEl.textContent = questions[count].q;
    option1El.innerHTML = questions[count].options[0];
    option2El.innerHTML = questions[count].options[1];
    option3El.innerHTML = questions[count].options[2];
    option4El.innerHTML = questions[count].options[3];


    console.log(option1El.innerHTML);
    console.log(questions[count].a);

// option1El.addEventListener("click" , function(){

//   if(document.getElementById('op1').click == true){

//     console.log("making progress!");
//   }
// });

// function op1Clicked() {
//   console.log("button clicked 1");
//   var storeOp1 = document.getElementById('op1')
//   localStorage.setItem("answer" , JSON.stringify('option1El.innerHTML'));

// }

// option1El.addEventListener("click", op1Clicked);

option1El.addEventListener("click" , function(){


  console.log(option1El.innerHTML);
  console.log(questions[count-1].a);

  if (option1El.innerHTML == questions[count-1].a ){

    option1El.style.backgroundColor = "green";

    
  } else {
    option1El.style.backgroundColor = "red";
   
  }

});



  //   if (option1El.innerHTML == questions[count].a ){



  //     option1El.style.backgroundColor = "green";

      
  //   } else {
  //     option1El.style.backgroundColor = "red";
     
  //   }

  //   localStorage.setItem()
  // //  option1El.removeEventListener();
  // });


  option2El.addEventListener("click" , function(){


    console.log(option2El.innerHTML);
    console.log(questions[count-1].a);

    if (option2El.innerHTML == questions[count-1].a ){

      option2El.style.backgroundColor = "green";

      
    } else {
      option2El.style.backgroundColor = "red";
     
    }

  });


  option3El.addEventListener("click" , function(){


    console.log(option3El.innerHTML);
    console.log(questions[count].a);

    if (option3El.innerHTML == questions[count-1].a ){

      option3El.style.backgroundColor = "green";

      
    } else {
      option3El.style.backgroundColor = "red";
     
    }

  });


  option4El.addEventListener("click" , function(){

    if (option4El.innerHTML == questions[count].a && buttonClicked == 1){

      option4El.style.backgroundColor = "green";

      
    } else {
      option4El.style.backgroundColor = "red";
     
    }

  });






    // if(buttonClicked == 1){

    //     showQuestions();
       count = count + 1;
    //     console.log("clicked");
    // }








    nextButtonEl.addEventListener("click", function(){
      option1El.style.backgroundColor = "blueviolet";
      // option1El.addEventListener("mouseenter", function(){
      //   option1El.style.backgroundColor = "hotpink";
      // })
      option2El.style.backgroundColor = "blueviolet";
      option3El.style.backgroundColor = "blueviolet";
      option4El.style.backgroundColor = "blueviolet";


     
    })


console.log("question number:" + count);




  

  

}




function timer(){
    //var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}




function hideStart(){
    
    startButtonEl.style.display = "none";
    questionsEl.style.display = "block";
   // showQ =+ 1;
   console.log("on click");
    
    
   showQuestions();


}




startButtonEl.addEventListener("click", function(){

console.log("wtf");
timer();
hideStart();


});

















var questions = [
    {
    id: 1,
    q: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    id: 2,
    q: "What does CSS stand for?",
    a: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    id: 3,
    q: "What does PHP stand for?",
    a: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    id: 4,
    q: "What does SQL stand for?",
    a: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    id: 5,
    q: "What does XML stand for?",
    a: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },

  {
    id: 6,
    q: "THE END",
    a: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },

];


var confused = document.getElementById("op1");

console.log(confused);





if(questions[0].id == 1 && buttonClicked == document.getElementById("op1")){

console.log("it worked!");

} else {
    console.log("broke af");
}
