var answers = ["A", "B", "C","B","A","C"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var option = document.getElementsByName(radioName);
    for (var y = 0; y < option.length; y++)
        if (option[y].checked) return option[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
    if (getScore() > 2) {
        console.log("Bravo");
    }
}