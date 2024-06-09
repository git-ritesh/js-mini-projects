let val = +document.getElementById("number").innerText;
// Decreases value
function decreaseVal() {
    if(val > 0) val--;
    updateVal();
}
// Increases value
function increaseVal() {
    val++;
    if(val > 999) {
        resetVal();
    }
    updateVal();
}
// Resets value to 0
function resetVal() {
    val = 0;
    updateVal();
}
// Updates value in the webpage
function updateVal() {
    document.getElementById("number").innerText = val;
}
