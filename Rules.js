class Rules {
    constructor(moves) {
        this.moves = moves;
        this.winnewMatrix = this.generateWinnewMatrix();
        this.winningCombinations = {
            'Rock': ['Scissors', 'Lizard'],
            'Papers': ['Rock', 'Spock'],
            'Scissors': ['Paper', 'Lizzard'],
            'Lizard': ['Spock', 'Paper'],
            'Spock': ['Scissors', 'Rock'],
        }
    }

    getWinningMoves(move) {
        return this.winningCombinations[move] || [];
    }

    generateWinnewMatrix() {
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
    }

    getResult(move1, move2) {
        const index1 = this.moves.indexOf(move1);
        const index2 = this.moves.indexOf(move2);
        return this.winnewMatrix[index1][index2];
    }
}

module.exports = Rules;