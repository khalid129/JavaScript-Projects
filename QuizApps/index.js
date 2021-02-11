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

const currentQuiz = 0;

const question = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

function Quizload(){
    const quizQuestion = quizData[currentQuiz];
    question.innerHTML = quizQuestion.question;
    a_text.innerHTML = quizQuestion.a;
    b_text.innerHTML = quizQuestion.b;
    c_text.innerHTML = quizQuestion.c;
    d_text.innerHTML = quizQuestion.d;
    currentQuiz++;
}

function Quizrun(){
    if(currentQuiz==0){
   for (var i =0 ; i<quizData.length; i++){
       Quizload();
   }}
   else{
       alert('Your Quiz has finished');
   }
}