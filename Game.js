const HMACGenerator = require('./HMACGeneraotr');
const Rules = require('./Rules');

class Game {
    constructor(moves) {
        this.moves = moves;
        this.rules = new Rules(moves);
        //this.key = HMACGenerator.generateKey();
    }

    getComputerMove() {
        return this.moves[Math.floor(Math.random() * this.moves.length)];
    }

    play(userMove) {
        //const key = HMACGenerator.generateKey();
        const computerMove = this.getComputerMove();
        //const hmac = HMACGenerator.generateHMAC(key, computerMove);

        // console.log(`Computer HMAC: ${hmac}`);
        console.log(`Computer Move: ${computerMove}`);
        console.log(`Your Move: ${userMove}`);

        const result = this.rules.getResult(userMove, computerMove);
        console.log(result === 'Win' ? 'You Win!' : result === 'Lose' ? 'You lose!' : 'Draw!')

        //console.log(`HMAC key: ${key.toString('hex')}`);
    }
}

module.exports = Game;