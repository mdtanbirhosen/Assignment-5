const historyBtn =document.getElementById('history-page-btn')
const donationBtn = document.getElementById('donation-page-btn');

donationBtn.addEventListener('click',function(){
    donationBtn.classList.add('bg-primary-color');
    historyBtn.classList.remove('bg-primary-color')
    document.getElementById('donation-page').classList.remove('hidden');
    document.getElementById('history-page').classList.add('hidden')
})
historyBtn.addEventListener('click',function(){
    donationBtn.classList.remove('bg-primary-color');
    historyBtn.classList.add('bg-primary-color')
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.remove('hidden');
})

historyBtn.addEventListener('click', function(){
   
})
donationBtn.addEventListener('click', function(){

})