// for card 1
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function () {
        const noakhaliInput = inputFieldvalueId('noakhali-donate-input');
        const noakhaliBalance = textFieldVlueId('noakhali-balance');
        if(isNaN(noakhaliInput) || noakhaliInput <= 0){
            alert('Invalid Donation Amount');
            return;
        }
        const accountBalance = textFieldVlueId('account-balance');
        if(noakhaliInput > accountBalance){
            alert('Insufficient balance');
            return;
        }
        const noakhaliFinalBalance = noakhaliInput + noakhaliBalance;
        document.getElementById('noakhali-balance').innerText = noakhaliFinalBalance;
        const finalAccountBalance = accountBalance - noakhaliInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
        // history part of card 1
        const div = document.createElement('div');
        div.style.cssText = "border:1px solid #E8E8E8 ; border-radius: 16px; margin-bottom: 24px;";
        div.innerHTML = `
        <div class= "p-8">
        <h4 class="font-bold text-xl">${noakhaliInput} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</h4>
        <p class= "font-light text-base">Date:${dateTime()}(Bangladesh Standard Time)</p>
        </div>`
        document.getElementById('history-page').appendChild(div)

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
        const accountBalance = textFieldVlueId('account-balance');
        if(feniInput > accountBalance){
            alert('Insufficient balance');
            return;
        }
        document.getElementById('feni-balance').innerText = feniFinalBalance;
        const feniFinalBalance = feniInput + feniBalance;
        const finalAccountBalance = accountBalance - feniInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
         // history part of card 2
         const div = document.createElement('div');
         div.style.cssText = "border:1px solid #E8E8E8 ; border-radious:16px;";
         div.innerHTML = `
         <div class= "p-8">
         <h4 class="font-bold text-xl">${feniInput} Taka is Donated for Flood Relief in Feni, Bangladesh</h4>
         <p class= "font-light text-base">Date:${dateTime()}(Bangladesh Standard Time)</p>
         </div>`
         document.getElementById('history-page').appendChild(div)
 
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
        const accountBalance = textFieldVlueId('account-balance');
        if(quotaInput > accountBalance){
            alert('Insufficient balance');
            return;
        }
        const quotaFinalBalance = quotaInput + quotaBalance;
        document.getElementById('quota-balance').innerText = quotaFinalBalance;
        const finalAccountBalance = accountBalance - quotaInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
         // history part of card 3
         const div = document.createElement('div');
         div.style.cssText = "border:1px solid #E8E8E8 ; border-radious:16px;";
         div.innerHTML = `
         <div class= "p-8"><h4 class="font-bold text-xl">${quotaInput} Taka is Donated for Aid who Injured in the Quota Movement, Bangladesh</h4>
         <p class= "font-light text-base">Date:${dateTime()}(Bangladesh Standard Time)</p></div>
         `
         document.getElementById('history-page').appendChild(div);
 
    })