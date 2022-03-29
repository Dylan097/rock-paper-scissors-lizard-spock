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
    if (selection === 'rock') {
        rock(cpu);
        playerChoice.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    } else if (selection === 'paper') {
        paper(cpu);
        playerChoice.innerHTML = `<i class="fa-solid fa-hand"></i>`
    } else if (selection === 'scissors') {
        scissors(cpu);
        playerChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`
    } else if (selection === 'lizard') {
        lizard(cpu);
        playerChoice.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`
    } else if (selection === 'spock') {
        spock(cpu);
        playerChoice.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`
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
    let cpuSelection = document.getElementById('computer-choice');
    if (computer === 'lizard' || computer === 'scissors') {
        increasePlayerScore();
        if (computer === 'lizard') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`
        }
    } else if (computer === 'rock') {
        alert("It's a draw!");
        cpuSelection.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    } else {
        increaseComputerScore();
        if (computer === 'paper') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        }
    }
}

/**
 * Paper beats rock and Spock
 */
function paper(computer) {
    let cpuSelection = document.getElementById('computer-choice');
    if (computer === 'rock' || computer === 'spock') {
        increasePlayerScore();
        if (computer === 'rock') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        }
    } else if (computer === 'paper') {
        cpuSelection.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        alert("It's a draw!");
    } else {
        increaseComputerScore();
        if (computer === 'scissors') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`;
        }
    }
}

/**
 * Scissors beats paper and lizard
 */
function scissors(computer) {
    let cpuSelection = document.getElementById('computer-choice');
    if (computer === 'paper' || computer === 'lizard') {
        increasePlayerScore();
        if (computer === 'paper') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`;
        }
    } else if (computer === 'scissors') {
        cpuSelection.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        alert("It's a draw!");
    } else {
        increaseComputerScore();
        if (computer === 'rock') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        }
    }
}

/**
 * Lizard beats Spock and paper
 */
function lizard(computer) {
    let cpuSelection = document.getElementById('computer-choice');
    if (computer === 'paper' || computer === 'spock') {
        increasePlayerScore();
        if (computer === 'paper') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        }
    } else if (computer === 'lizard') {
        cpuSelection.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`;
        alert("It's a draw!");
    } else {
        increaseComputerScore();
        if (computer === 'rock') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        }
    }
}

/**
 * Spock beats scissors and rock
 */
function spock(computer) {
    let cpuSelection = document.getElementById('computer-choice');
    if (computer === 'scissors' || computer === 'rock') {
        increasePlayerScore();
        if (computer === 'rock') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        }
    } else if (computer === 'spock') {
        cpuSelection.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        alert("It's a draw!");
    } else {
        increaseComputerScore();
        if (computer === 'paper') {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        } else {
            cpuSelection.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`;
        }
    }
}