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
/**
 * Shows the player what they selected
 */
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


/**
 * Checks what the player selected
 */
function checkSelection() {

}

/**
 * Checks who won, the player or the computer, or if it was a draw
 */
function checkWinner() {

}

/**
 * Increases the players score if they won
 */
function increasePlayerScore() {

}

/**
 * Increases the computer score if they won
 */
function increaseComputerScore() {

}

// Option that was selected
/**
 * Rock beats lizard and scissors
 */
function rock() {

}

/**
 * Paper beats rock and Spock
 */
function paper() {

}

/**
 * Scissors beats paper and lizard
 */
function scissors() {

}

/**
 * Lizard beats Spock and paper
 */
function lizard() {

}

/**
 * Spock beats scissors and rock
 */
function spock() {

}