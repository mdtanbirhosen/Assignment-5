// for card 1
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function () {
        const noakhaliInput = inputFieldvalueId('noakhali-donate-input');
        const noakhaliBalance = textFieldVlueId('noakhali-balance');
        if(isNaN(noakhaliInput) || noakhaliInput <= 0){
            alert('Invalid Donation Amount');
            return;
        }
        const noakhaliFinalBalance = noakhaliInput + noakhaliBalance;
        document.getElementById('noakhali-balance').innerText = noakhaliFinalBalance;
        const accountBalance = textFieldVlueId('account-balance');
        const finalAccountBalance = accountBalance - noakhaliInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
    })
// for card 2
document.getElementById('feni-donate-btn')
    .addEventListener('click', function () {
        const feniInput = inputFieldvalueId('feni-donate-input');
        const feniBalance = textFieldVlueId('feni-balance');
        if(isNaN(feniInput) || feniInput <= 0){
            alert('Invalid Donation Amount');
            return;
        }
        const feniFinalBalance = feniInput + feniBalance;
        document.getElementById('feni-balance').innerText = feniFinalBalance;
        const accountBalance = textFieldVlueId('account-balance');
        const finalAccountBalance = accountBalance - feniInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
})
// for card 3
document.getElementById('quota-donate-btn')
    .addEventListener('click', function () {
        const quotaInput = inputFieldvalueId('quota-donate-input');
        const quotaBalance = textFieldVlueId('quota-balance');
        if(isNaN(quotaInput) || quotaInput <= 0){
            alert('Invalid Donation Amount');
            return;
        }
        const quotaFinalBalance = quotaInput + quotaBalance;
        document.getElementById('quota-balance').innerText = quotaFinalBalance;
        const accountBalance = textFieldVlueId('account-balance');
        const finalAccountBalance = accountBalance - quotaInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
 })