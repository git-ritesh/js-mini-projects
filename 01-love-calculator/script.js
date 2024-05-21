window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click",calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value; // gets the value of the your name input field
    let crushName = document.getElementById("crush-name").value;

    if( yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 101); // 0- .999999 * 101 --> 0 -  100.99999
        document.getElementById("result-message").innerText = yourName + " and "   + crushName + "'s chance of love: ";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
}