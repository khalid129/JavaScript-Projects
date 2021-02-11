const quizData = [
    {
        question : 'Top Programming languages in 2021 ?',
        a: 'JavaScript',
        b: 'Python',
        c: 'C#',
        d: 'C++',
        answer: 'a'
    },
    {
        question : 'HTML Stand for',
        a: 'High Tech Multi Language',
        b: 'Hyper Text Markup Language',
        c: 'Hyper Test Making Language',
        d: 'High Texture Marging Langua',
        answer: 'b'
    },
    {
        question : 'Which is most popular web browser ?',
        a: 'Internet Explorer',
        b: 'Opera',
        c: 'Chrome',
        d: 'Yahoo',
        answer: 'c'
    },
    {
        question : 'Best Language for Data Science ?',
        a: 'JavaScript',
        b: 'Kotlin',
        c: 'R Language',
        d: 'Python',
        answer: 'd'
    },
    {
        question : 'Which framework provide the corss platform mobile app ?',
        a: 'React Js',
        b: 'Redux',
        c: 'React Native',
        d: 'Kotlin',
        answer: 'c'
    },
    {
        question : '.Net-core Framework used for ?',
        a: 'Web Apps',
        b: 'Desktop app',
        c: 'Console app',
        d: 'Mobile app',
        answer: 'a'
    },
    {
        question : 'Which Operating system is Open source ?',
        a: 'Window',
        b: 'Linux',
        c: 'Mac OS',
        d: 'Android',
        answer: 'b'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; 
let score = 0;
let smile = undefined;
Quizload();

function Quizload(){
    let currentQuizQuestion = quizData[currentQuiz];
    questionEl.innerText = currentQuizQuestion.question;
    a_text.innerText = currentQuizQuestion.a;
    b_text.innerText = currentQuizQuestion.b;
    c_text.innerText = currentQuizQuestion.c;
    d_text.innerText = currentQuizQuestion.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    })
    return answer;
}

function deseclectedAnswer(){
    answerEls.forEach((answerEl)=>{
            answerEl.checked=false;
    })
}

submitBtn.addEventListener('click',()=>{
    
    const answer = getSelected();
    deseclectedAnswer();

    if(answer){
        if (answer === quizData[currentQuiz].answer){
            score++;
        }
    currentQuiz++;

    if(currentQuiz<quizData.length){
        Quizload();
    }
    // else if(currentQuiz<=quizData.length){
    //     // quiz.innerHTML = `<h2>You Answered corecctly at ${score}/${quizData.length} </h2>`
    //     if (score>0 && score<4){
    //         alert("You have been faild 😢 Your Score is "+score+" Try Again" );
    //     }
    //     else if(score>3 && score<=7){
    //         alert("You have been Passed 😃 Your Score is "+score )
    //     }
    //     currentQuiz =0;
    //     Quizload();
    // }
    else{
        if(score>0 && score<4){
             smile = '😢';
        }
        else if(score>3 && score <=7){
             smile = '😃';
        }
        quiz.innerHTML = `<h2>You Answered corecctly at ${score}/${quizData.length} Questions  
        ${smile}</h2><button onClick = "location.reload()">Reload</button>`
    }
}
    else{
        alert("Please Select an Answer");
    }
})
