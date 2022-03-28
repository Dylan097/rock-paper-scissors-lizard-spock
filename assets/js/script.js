// Listener for clicking on the rules button

document.getElementById('rules-button').addEventListener('click', function () {
    let rules = document.getElementById('rules');
    rules.style.display = 'block';
})

// Listener for clicking on the 'x' button when rules is open

document.getElementById('close').addEventListener('click', function () {
    let rules = document.getElementById('rules')
    rules.style.display = 'none';
})

let options = document.getElementsByClassName('box');

// Adding the selected class to the option selected, and removing it from the last one

function selected() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains('selected')) {
            options[i].classList.remove('selected');
        }
    }
    this.classList.add('selected');
}

// Looping through each box class and adding an event listener to them

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', selected);
}