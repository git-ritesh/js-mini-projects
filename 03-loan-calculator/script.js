window.onload = function () {
  const btn = document.getElementById("btn-calculate");
  const reset = document.getElementById("btn-reset");
  btn.addEventListener("click", calculateEMI);
  reset.addEventListener("click", clearForm);
};

function calculateEMI() {
    // gets input value from the user
    const principal = +(document.getElementById("loan-amount").value);
    const rate = +(document.getElementById("interest-rate").value);
    const time = +(document.getElementById("tenure").value);
    // calculates the interest, installments & amount values
    const totalInterest = principal / 100 * rate * time ;
    const totalAmount = principal + totalInterest;
    const monthlyInstallment = totalAmount / (time * 12) ;
    // inserts values into HTML
    document.getElementById("installment-amount").innerText = monthlyInstallment.toFixed(2);
    document.getElementById("principal").innerText = principal;
    document.getElementById("total-interest").innerText = totalInterest.toFixed(2);
    document.getElementById("total-amount").innerText = totalAmount.toFixed(2);
}
// clears form by refreshing the page
function clearForm() {
    location.reload();
}