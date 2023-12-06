
function result() {
    var score = 0;
    for (var i = 1; i <= 10; i++) {
        if (document.getElementById('correct' + i).checked) {
            score++;
            document.getElementById("correct" + i).style.color = "green";
        }
    }
    alert('Az eredményed: ' + score + '/10')
}

function reset() {
    document.getElementById("kviz").reset();
}

