
// we connected button and btn  with first code  => button in backend, btn in userinterface
let button = document.getElementById('btn');

// when the click  to the button;
button.addEventListener('click', function(){
    // we will take the string and and will get the value with word variable
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1> ${count}</h1>`
});