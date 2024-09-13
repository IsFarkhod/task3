//const { notEqual } = require('assert');
const Game = require('./Game');
const Help = require('./Help');
const HMACGenerator = require('./HMACGeneraotr');

const args = process.argv.slice(2);

if (args.length < 3 || args.length % 2 === 0) {
    console.error("Error");
    process.exit(1);
}

const uniqueMoves = [...new Set(args)];
console.log("Available now: ", uniqueMoves);
if (uniqueMoves.length !== args.length) {
    console.error("Error");
    process.exit(1);
}

const game = new Game(uniqueMoves);

process.stdin.on('data', (input) => {
    const choice = input.toString().trim();
    if (choice === '0') {
        console.log("Exiting...");
        process.exit(0);
    } else if (choice === '?') {
        Help.displayHelp(uniqueMoves, game.rules);
    } else {
        const index = parseInt(choice) - 1;
        if (!isNaN(index) && index >= 0 && index < uniqueMoves.length) {

            const secretKey = HMACGenerator.generateKey();
            const compMove = game.getComputerMove();
            const hmac = HMACGenerator.generateHMAC(secretKey, compMove);
            console.log(`HMAC : ${hmac}`);

            console.log("Available moves: ");
            uniqueMoves.forEach((move, index) => {
                console.log(`${index + 1} - ${move}`);
            });
            console.log("0 - Exit")
            console.log("? - Help")


            const userMove = uniqueMoves[index];
            game.play(userMove);
        } else {
            console.log("invalid choice.");
        }
    }
});