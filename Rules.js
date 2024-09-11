class Rules {
    constructor(moves) {
        this.moves = moves;
        //this.winnewMatrix = this.generateWinnewMatrix();
        this.winningCombinations = {};
        this.initWinningCombinations();
    }

    initWinningCombinations() {
        this.winningCombinations = {
            'Rock': ['Scissors', 'Lizard'],
            'Paper': ['Rock', 'Spock'],
            'Scissors': ['Paper', 'Lizard'],
            'Lizard': ['Paper', 'Spock'],
            'Spock': ['Scissors', 'Rock'],
        };

        for (const move of this.moves) {
            if (!this.winningCombinations[move]) {
                this.winningCombinations[move] = [];
            }
        }
    }

    getWinningMoves(move) {
        return this.winningCombinations[move] || [];
    }

    /*generateWinnewMatrix() {
        const size = this.moves.length;
        const matrix = Array.from({ length: size }, () => Array(size).fill('Draw'));

        for (let i = 0; i < size; i++) {
            for (let j = 1; j <= size / 2; j++) {
                const winnewMatrix = (i + j) % size;
                const loserIndex = (i - j + size) % size;

                matrix[i][winnewMatrix] = 'Win';
                matrix[j][loserIndex] = 'Lose';
            }
        }
        return matrix;
    }*/

    getResult(userMove, computerMove) {
        if (userMove === computerMove) {
            return 'Draw';
        } else if (this.winningCombinations[userMove].includes(computerMove)) {
            return 'Win';
        } else {
            return 'Lose';
        }

        /*const index1 = this.moves.indexOf(move1);
        const index2 = this.moves.indexOf(move2);
        return this.winnewMatrix[index1][index2];*/
    }
}

module.exports = Rules;