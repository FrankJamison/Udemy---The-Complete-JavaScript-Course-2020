/*
ONE DIE PIG GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they wish. Each result gets added to their ROUND score
- BUT, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that their ROUND score gets added to their GLOBAL score. After that, it's the next player's turn
- The first player to reach the agreed upon points on the GLOBAL score wins the game.

*/

/*
TWO DIE PIG GAME VARIATION:

- The game has 2 players, playing in rounds
- In each turn, a player rolls their dice as many times as they wish. The result gets added to their ROUND score
- BUT, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn
- A player looses his ENTIRE score when they rolls two 1's.
- The player can choose to 'Hold', which means that their ROUND score gets added to their GLOBAL score. After that, it's the next player's turn
- The first player to reach the agreed upon points on the GLOBAL score wins the game.

*/

// Variable Declarations
var scores, roundScore, activePlayer, gamePlaying, gameVersion, dice1, dice2;

// Initialize game
initializeGame();

// Game version selector event listener
document.querySelector('.version').addEventListener('change', function () {
    initializeGame();
});

// Roll die button event listener
document.querySelector('.btn-roll').addEventListener('click', function () {

    // If game is playing...
    if (gamePlaying) {

        // Random die1 roll
        dice1 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-1').src = 'images/dice-' + dice1 + '.png';

        // Randon die2 roll
        if (gameVersion === '2') {
            dice2 = Math.floor(Math.random() * 6) + 1;
            document.getElementById('dice-2').style.display = 'block';
            document.getElementById('dice-2').src = 'images/dice-' + dice2 + '.png';
        }

        // Player loses global score if they roll two 1's
        if (dice1 === 1 && dice2 === 1) {
            // Set player score to 0
            scores[activePlayer] = 0;

            // Update the user interface
            document.querySelector('#score-' + activePlayer).textContent = '0';

            // Switch players
            switchPlayers();
        }

        // Update the round score when the roll is not a 1
        else if (dice1 !== 1 && dice2 != 1) {

            // Add die roll to round score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            // Switch players
            switchPlayers();
        }
    }
});

// Hold button event listener
document.querySelector('.btn-hold').addEventListener('click', function () {

    // If the game is playing...
    if (gamePlaying) {

        // Add round score to global score
        scores[activePlayer] += roundScore;

        // Update the user interface
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Get input from user
        var input = parseInt(document.querySelector('.final-score').value);
        console.log(input);

        // Decalre winning score variable
        var winningScore;

        // If input is invalid, set winning score to 100
        if (isNaN(input) || input < 1) {
            winningScore = 100;

            // Else set winning score to input value
        } else {
            winningScore = input;
        }

        // Check if the player has won the game
        if (scores[activePlayer] >= winningScore) {
            // Display victory text
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            // Update player classes
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // Hide dice images
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            gamePlaying = false;
        } else {

            // Switch players
            switchPlayers();
        }
    }
});

// New game button event handler
document.querySelector('.btn-new').addEventListener('click', initializeGame);

function initializeGame() {

    // Variable Initialization
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    dice1 = 0;
    dice2 = 0;
    gamePlaying = true;
    gameVersion = getGameVersion();

    // Hide dice images
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // Set all scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Set player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Remove winner class from players
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Remove active class from players
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // Add active class to player 0
    document.querySelector('.player-0-panel').classList.add('active');
}

function switchPlayers() {

    // Switch players
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Set scores to 0
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Toggle the active class on the players
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Hide dice images
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function getGameVersion() {
    return document.querySelector('.version').value;
}