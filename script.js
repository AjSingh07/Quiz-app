const questions = [{
    'ques': 'What is the capital of India ?',
    'a': 'Uttar Pradesh',
    'b': 'Delhi',
    'c': 'Madhya Pradesh',
    'd': 'Bihar',
    'correct': 'b'
},
{
    'ques': 'What is the national currency of India ?',
    'a': 'Rupee',
    'b': 'Euro',
    'c': 'Dollar',
    'd': 'Den',
    'correct': 'a'
},
{
    'ques': 'What is the national bird of India ?',
    'a': 'Pigeon',
    'b': 'Peacock',
    'c': 'Parrot',
    'd': 'Crow',
    'correct': 'b'
},
{
    'ques': 'What is the animal of India ?',
    'a': 'Tiger',
    'b': 'Dog',
    'c': 'Lion',
    'd': 'Chitah',
    'correct': 'a'
},
{
    'ques': 'What is the full from of GST ?',
    'a': 'Goods and Services Tax',
    'b': 'Gain Service Tax',
    'c': 'Goods Serve Tax',
    'd': 'Goods and Sell Tax',
    'correct': 'a'
}
]
let index = 0;
let quesBox = document.getElementById("quesBox");
let options = document.querySelectorAll(".option");

let reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

let total = questions.length;
let loadQuestions = () => {
    
    if(index>=total){
        
         endQuiz();
    }
    else{
        let data = questions[index];
        quesBox.innerHTML = `${index + 1}) ${data.ques}`;
        options[0].nextElementSibling.innerHTML = data.a;
        options[1].nextElementSibling.innerHTML = data.b;
        options[2].nextElementSibling.innerHTML = data.c;
        options[3].nextElementSibling.innerHTML = data.d;
        reset();
    }
   
   
}
loadQuestions();
let right = 0;
let wrong = 0;

const submitQuiz = () => {
    let ans = getAnswer();
    let data = questions[index];
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    if(index==total-1){
        document.getElementById("submit").innerHTML = "Submit";
    }
    loadQuestions();
    return;
}
let True;
let getAnswer = () => {
    options.forEach(
        (input) => {
            if (input.checked) {
             True= input.value;
            }

        }
    )
    return True;
}
getAnswer();
let endQuiz=()=>{
    document.getElementsByClassName("quiz")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">Thank you for playing the Quiz <br> You've scored ${right} / ${total} </h3>
    </div>
`}