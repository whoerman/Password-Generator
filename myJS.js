
let answerFirst = true;
let answerSecond = true;
let answerThird = true;


function f1() {
    if (document.getElementById("DefaultCheck1").checked) {
        let answerFirst = true;
    } else {
        let answerFirst = false;
    }
    if (document.getElementById("DefaultCheck2").checked) {
        let answerSecond = true;
    } else {
        let answersecond = false;
    }

    if (document.getElementById("DefaultCheck3").checked) {
        let answerThird = true;
     } else {
        let answerThird = false;
    } 

    alert(answerFirst + answerSecond + answerThird);
