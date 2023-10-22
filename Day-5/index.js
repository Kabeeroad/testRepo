
        // Variables
        var player1Score = 0;
        var player2Score = 0;
        var targetScore = 50; // You can adjust this to set the winning score.

        // Function to roll the dice
        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        // Function to update the scores and check for a winner
        function updateScores(player1Roll, player2Roll) {
            player1Score += player1Roll;
            player2Score += player2Roll;

            document.getElementById("player1Score").textContent = player1Score;
            document.getElementById("player2Score").textContent = player2Score;

            if (player1Score >= targetScore) {
                alert("Player 1 wins!");
                resetGame();
            } else if (player2Score >= targetScore) {
                alert("Player 2 wins!");
                resetGame();
            }
        }

        // Function to reset the game
        function resetGame() {
            player1Score = 0;
            player2Score = 0;
            document.getElementById("player1Score").textContent = 0;
            document.getElementById("player2Score").textContent = 0;
        }

        // Event listener for the roll button
        document.getElementById("rollButton").addEventListener("click", function() {
            var player1Roll = rollDice();
            var player2Roll = rollDice();

            alert("Player 1 rolled a " + player1Roll + "\nPlayer 2 rolled a " + player2Roll);

            updateScores(player1Roll, player2Roll);
        });
    