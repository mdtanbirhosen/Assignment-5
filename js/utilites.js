function inputFieldvalueId(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}
function textFieldVlueId(id) {
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;
}

// for date time in history
function dateTime(){
    const now = new Date();
    return now.toLocaleString('en-GB');
}
const p = document.createElement('p');
// modal section
function modalAmount(donateAmount) {
    p.innerText = `${donateAmount}`
    document.getElementById('modal-amount').appendChild(p);
}