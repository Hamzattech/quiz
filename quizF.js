const submitAnswer = ()=>{
    var score = 0;
    var total = 10;
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;
    let cAnswer = document.getElementById("checkAnswer");
    let result = document.getElementById("result");
    let message = document.getElementById("message");
    let grade = document.getElementById("grade");


    for ( i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ""){
            alert("You missed question "+i);
           }
           
    }
    var answers = ["a","c","d","b","c","b","b","d","b","b"];
    for(i = 1; i<=total; i++){
        if (eval('q'+i) == answers[ i - 1]){
        score++
        }
   }
   cAnswer.style.display = "block";
   message.style.display = "block";
   message.innerHTML = `Score saved,click the above button to check your score.`;
    cAnswer.addEventListener('click',()=>{
        result.style.display = "block";
        result.innerHTML = `<h5>You scored ${score} out of ${total}</h5>`;
        grade.style.display = "block";
        if(score >= 7){
            grade.innerHTML = `<h5> Excellent </h5>`;
        }if(score === 6){
            grade.innerHTML = `<h5> Very Good </h5>`;
        }if(score === 5 ){
            grade.innerHTML = `<h5> Good </h5>`;
        }if(score === 4){
            grade.innerHTML = `<h5> Fair </h5>`;
        }if(score < 4  ){
            grade.innerHTML = `<h5> You can do better </h5>`;
        }
});

  
    return false;
} ;