// for card 1
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function () {
        const noakhaliInput = inputFieldvalueId('noakhali-donate-input');
        const noakhaliBalance = textFieldVlueId('noakhali-balance');
        const accountBalance = textFieldVlueId('account-balance');
        if(isNaN(noakhaliInput) || noakhaliInput <= 0){
            alert('Invalid Donation Amount');
            return;
        }
        else if(noakhaliInput > accountBalance){
            alert('Insufficient balance');
            return;
        }
        // cheak is there any string or not
        const input = document.getElementById('noakhali-donate-input').value;
        if (stringCheaker(input) === true) {
            alert("Invalid Donation Amount")
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
        // modal section starts
        modalAmount(noakhaliInput)
        document.getElementById('modal').classList.remove('invisible')
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
        // cheak is there any string or not
        const input = document.getElementById('feni-donate-input').value;
        if (stringCheaker(input) === true) {
            alert("Invalid Donation Amount")
            return;
        }
        const feniFinalBalance = feniInput + feniBalance;
        document.getElementById('feni-balance').innerText = feniFinalBalance;
        const finalAccountBalance = accountBalance - feniInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
         // history part of card 2
         const div = document.createElement('div');
         div.style.cssText = "border:1px solid #E8E8E8 ; border-radius: 16px; margin-bottom: 24px;";
         div.innerHTML = `
         <div class= "p-8">
         <h4 class="font-bold text-xl">${feniInput} Taka is Donated for Flood Relief in Feni, Bangladesh</h4>
         <p class= "font-light text-base">Date:${dateTime()}(Bangladesh Standard Time)</p>
         </div>`
         document.getElementById('history-page').appendChild(div)
         // modal section starts
        modalAmount(feniInput)
        document.getElementById('modal').classList.remove('invisible')
 
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
        // cheak is there any string or not
        const input = document.getElementById('quota-donate-input').value;
        if (stringCheaker(input) === true) {
            alert("Invalid Donation Amount")
            return;
        }
        const quotaFinalBalance = quotaInput + quotaBalance;
        document.getElementById('quota-balance').innerText = quotaFinalBalance;
        const finalAccountBalance = accountBalance - quotaInput;
        document.getElementById('account-balance').innerText = finalAccountBalance
         // history part of card 3
         const div = document.createElement('div');
         div.style.cssText = "border:1px solid #E8E8E8 ; border-radius: 16px; margin-bottom: 24px;";
         div.innerHTML = `
         <div class= "p-8"><h4 class="font-bold text-xl">${quotaInput} Taka is Donated for Aid who Injured in the Quota Movement, Bangladesh</h4>
         <p class= "font-light text-base">Date:${dateTime()}(Bangladesh Standard Time)</p></div>
         `
         document.getElementById('history-page').appendChild(div);
         // modal section starts
        modalAmount(quotaInput)
        document.getElementById('modal').classList.remove('invisible')
 
    })



// to jump blog file
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = './blog.html'
})