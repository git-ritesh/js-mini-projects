window.onload = function() {
    const button = document.getElementById("btn-calculate");
    button.addEventListener("click",calculateBMI);
}

function calculateBMI() {
    const heightInput = (document.getElementById("height").value); // gets the value of the height input field
    const weightInput = (document.getElementById("weight").value);
    let height = parseFloat(heightInput) / 100;
    let weight = parseFloat(weightInput);
    let bmiCategory;
    
    if( height && weight ) {
        let color;
        const bmiValue = (weight / (height ** 2));
        document.getElementById("result").innerText = `Your BMI is ${bmiValue.toFixed(2)}`;
        // prints BMI category
        if(bmiValue < 19.1) {
            bmiCategory = "Underweight";
            color = "red";
            
        } else if (bmiValue > 27) {
            bmiCategory = "Overweight";
            color = "red";
            
        } else {
            bmiCategory = "Normal";
            color = "green";
        }
        document.body.style.backgroundColor = color;
        document.getElementById("bmi-category").innerHTML = `You are <span class="${color}">${bmiCategory}</span>` ;
    } else {
        document.getElementById("result").innerText = `Please input a Valid Number`;
    }
}