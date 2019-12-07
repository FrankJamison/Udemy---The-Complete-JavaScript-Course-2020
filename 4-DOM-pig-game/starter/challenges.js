/*
PIG GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// Variable Declarations
var scores, roundScore, activePlayer, gamePlaying;

// Initialize game
initializeGame();

var lastDice;

// Roll die button event listener
document.querySelector('.btn-roll').addEventListener('click', function() {

    // If game is playing...
    if(gamePlaying) {
        // Random die roll
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // Display the result on the die
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // Update the round score when the roll is not a 1
        if(dice1 !== 1 && dice2 != 1) {

            // Add die roll to round score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            // Switch players
            switchPlayers();
        }
        

    //     // Player loses global score if they roll two 6's in a row
    //     if (dice === 6 && lastDice === 6) {

    //         // Set player score to 0
    //         scores[activePlayer] = 0;
            
    //         // Update the user interface
    //         document.querySelector('#score-' + activePlayer).textContent = '0';

    //         // Switch players
    //         switchPlayers();
    //     }

    //     // Else if the dice roll is not a 1, update the round score
    //     else if(dice !== 1) {

    //         // Add die roll to round score
    //         roundScore += dice;
    //         document.querySelector('#current-' + activePlayer).textContent = roundScore;

    //     // Else switch players
    //     } else {

    //         // Switch players
    //         switchPlayers();
    //     }

    //     // Set last dice to current value
    //     lastDice = dice;
    }

});

// Hold button event listener
document.querySelector('.btn-hold').addEventListener('click', function() {

    // If the game is playing...
    if(gamePlaying) {
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
        if (isNaN(input) || input < 1 ) {
            winningScore = 100;
        
        // Else set winning score to input value
        } else {
            winningScore = input;
        }

        // Check if the player has won the game
        if(scores[activePlayer] >= winningScore) {
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
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

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