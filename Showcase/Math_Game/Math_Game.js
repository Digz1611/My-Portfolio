       // Define an immediately invoked function expression (IIFE) for the app
       const app = function () {
        // Object to hold game data
        const game = {};
        // Select elements from the DOM
        const val1 = document.querySelector(".val1");
        const val2 = document.querySelector(".val2");
        const output = document.querySelector(".output");
        const answer = document.querySelector("input");

        // Function to initialize the game
        function init() {
            document.querySelector("button").addEventListener("click", checker);
            loadQuestion();
        }

        // Function to generate a random value between min and max
        function ranValue(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Function to load a new question
        function loadQuestion() {
            game.val1 = ranValue(1, 100);
            game.val2 = ranValue(1, 100);
            game.answer = game.val1 + game.val2;
            val1.textContent = game.val1;
            val2.textContent = game.val2;
        }

        // Function to check the user's answer
        function checker() {
            let bg = answer.value == game.answer ? "green" : "red";
            output.innerHTML +=
                `<div style="color:${bg}">${game.val1} + ${game.val2} = ${game.answer} (${answer.value})</div>`;
            answer.value = "";
            loadQuestion();
        }

        // Return the init function to be called on DOMContentLoaded
        return {
            init: init
        };
    }();

    // Call the init function when the DOM is loaded
    document.addEventListener('DOMContentLoaded', app.init);