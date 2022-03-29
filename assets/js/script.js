// Listener for clicking on the rules button

document.addEventListener('DOMContentLoaded', function () {
    let play = document.getElementById('play');
    play.addEventListener('click', checkSelection);
})

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
    let selected = document.getElementsByClassName('selected');
    checkWinner(selected[0].id);
}

/**
 * Checks who won, the player or the computer, or if it was a draw
 */
function checkWinner(selection) {
    let cpuSelect = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5);
    let cpu = cpuSelect[randomNumber];
    let playerChoice = document.getElementById('player-choice');
    let cpuSelection = document.getElementById('computer-choice');
    let rockIcon = `<i class="fa-solid fa-hand-back-fist"></i>`;
    let paperIcon = `<i class="fa-solid fa-hand"></i>`;
    let scissorsIcon = `<i class="fa-solid fa-hand-scissors"></i>`;
    let lizardIcon = `<i class="fa-solid fa-hand-scissors"></i>`;
    let spockIcon = `<i class="fa-solid fa-hand-scissors"></i>`;
    if (cpu === 'rock') {
        cpuSelection.innerHTML = rockIcon;
    } else if (cpu === 'paper') {
        cpuSelection.innerHTML = paperIcon;
    } else if (cpu === 'scissors') {
        cpuSelection.innerHTML = scissorsIcon;
    } else if (cpu === 'lizard') {
        cpuSelection.innerHTML = lizardIcon;
    } else if (cpu === 'spock') {
        cpuSelection.innerHTML = spockIcon;
    }
    if (selection === 'rock') {
        rock(cpu);
        playerChoice.innerHTML = rockIcon;
    } else if (selection === 'paper') {
        paper(cpu);
        playerChoice.innerHTML = paperIcon;
    } else if (selection === 'scissors') {
        scissors(cpu);
        playerChoice.innerHTML = scissorsIcon;
    } else if (selection === 'lizard') {
        lizard(cpu);
        playerChoice.innerHTML = lizardIcon;
    } else if (selection === 'spock') {
        spock(cpu);
        playerChoice.innerHTML = spockIcon;
    } else {
        alert('Unidentified selection! Please try again');
    }
}

/**
 * Increases the players score if they won
 */
function increasePlayerScore() {
    let oldScore = parseInt(document.getElementById('player').innerText);
    document.getElementById('player').innerHTML = ++oldScore;
}

/**
 * Increases the computer score if they won
 */
function increaseComputerScore() {
    let oldScore = parseInt(document.getElementById('computer').innerText);
    document.getElementById('computer').innerHTML = ++oldScore;
}

// Option that was selected
/**
 * Rock beats lizard and scissors
 */
function rock(computer) {
    if (computer === 'lizard' || computer === 'scissors') {
        increasePlayerScore();
    } else if (computer === 'rock') {
        alert("It's a draw!");
    } else {
        increaseComputerScore();
    }
}

/**
 * Paper beats rock and Spock
 */
function paper(computer) {
    if (computer === 'rock' || computer === 'spock') {
        increasePlayerScore();
    } else if (computer === 'paper') {
        alert("It's a draw!");
    } else {
        increaseComputerScore();
    }
}

/**
 * Scissors beats paper and lizard
 */
function scissors(computer) {
    if (computer === 'paper' || computer === 'lizard') {
        increasePlayerScore();
    } else if (computer === 'scissors') {
        alert("It's a draw!");
    } else {
        increaseComputerScore();
    }
}

/**
 * Lizard beats Spock and paper
 */
function lizard(computer) {
    if (computer === 'paper' || computer === 'spock') {
        increasePlayerScore();
    } else if (computer === 'lizard') {
        alert("It's a draw!");
    } else {
        increaseComputerScore();
    }
}

/**
 * Spock beats scissors and rock
 */
function spock(computer) {
    if (computer === 'scissors' || computer === 'rock') {
        increasePlayerScore();
    } else if (computer === 'spock') {
        alert("It's a draw!");
    } else {
        increaseComputerScore();
    }
}