
//Business Logic

function generateSequence() {
    event.preventDefault();
    const countTo = document.getElementById("number-passage").value;
    const countBy = document.getElementById("number").value;

    if (!countTo || !countBy) {
        alert("Please enter both values.");
        return;
    }


    let sequence = [];
    for (let i = parseInt(countBy); i <= parseInt(countTo); i += parseInt(countBy)) {
        sequence.push(i);
    }
    document.getElementById("total-count").innerText = sequence.join(', ');


}


//UI Logic


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", generateSequence);
});



