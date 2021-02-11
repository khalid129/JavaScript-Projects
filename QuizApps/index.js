const quizData = [
    {
        question : 'Top Programming languages in 2021',
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
        question : 'Which is most popular web browser',
        a: 'Internet Explorer',
        b: 'Opera',
        c: 'Chrome',
        d: 'Yahoo',
        answer: 'c'
    },
    {
        question : 'Best Language for Data Science',
        a: 'JavaScript',
        b: 'Kotlin',
        c: 'R Language',
        d: 'Python',
        answer: 'd'
    },
    {
        question : 'Which framework provide the corss platform mobile app',
        a: 'React Js',
        b: 'Redux',
        c: 'React Native',
        d: 'Kotlin',
        answer: 'c'
    },
    {
        question : '.Net-core Framework used for',
        a: 'Web Apps',
        b: 'Desktop app',
        c: 'Console app',
        d: 'Mobile app',
        answer: 'a'
    },
    {
        question : 'Which Operating system is Open source',
        a: 'Window',
        b: 'Linux',
        c: 'Mac OS',
        d: 'Android',
        answer: 'b'
    }
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; 

Quizload();

function Quizload(){

    let currentQuizQuestion = quizData[currentQuiz];
    questionEl.innerText = currentQuizQuestion.question;
    a_text.innerText = currentQuizQuestion.a;
    b_text.innerText = currentQuizQuestion.b;
    c_text.innerText = currentQuizQuestion.c;
    d_text.innerText = currentQuizQuestion.d;
}


submitBtn.addEventListener('click',()=>{
    
    if(currentQuiz<quizData.length){
    Quizload();
    currentQuiz++;
    }
    else{
        alert('Quiz HAs Been finished');
        currentQuiz =0;
        Quizload();
    }
})
