function calculateLoan(){
    const loanAmount=parseFloat(document.getElementById("loanAmount").value)
    const interestRate=parseFloat(document.getElementById("interestRate").value)
    const loanTerm=parseFloat(document.getElementById("loanTerm").value)

    if(isNaN(loanAmount)||isNaN(interestRate)||isNaN(loanTerm)){
        showError('Please enter valid number for all fields')
        return;
    }
    const monthlyInterest= interestRate /100/12;
    const totalPayment =loanTerm;
    const monthlyPayment=(loanAmount*monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayment));
    const totalInterest=(monthlyPayment*totalPayment)-loanAmount;

    displayResult(monthlyPayment,totalInterest)
}

function displayResult(monthlyPayment,totalInterest){
    const resultDiv=document.getElementById("result");
    resultDiv.innerHTML=`
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>

    `;
}

function showError(message){
    const resultDiv=document.getElementById("result");
    resultDiv.innerHTML=`
    <p class="error">${message}</p>
    `
}

document.getElementById('calculateBtn').addEventListener("click",calculateLoan)