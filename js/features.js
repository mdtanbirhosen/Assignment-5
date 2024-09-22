document.getElementById('donation-page-btn').addEventListener('click',function(){
    document.getElementById('donation-page').classList.remove('hidden');
    document.getElementById('history-page').classList.add('hidden')
})
document.getElementById('history-page-btn').addEventListener('click',function(){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.remove('hidden');
})