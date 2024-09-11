class Help {
    static displayHelp(moves, rules) {
        //console.table(rules.winnerMatrix, moves);
        console.log("Help menu: ");
        console.log("Available moves: ");
        moves.forEach((move, index) => {
            console.log(`${index + 1} - ${move}`);
        });
        console.log("0 - Exit");
        console.log("? - Help");

        console.log("\nWinning combinations:");
        console.log("-------------------------------------");
        console.log("| Your Move    |  Wins Against      |");
        console.log("-------------------------------------");

        moves.forEach(move => {
            const winsAgainst = rules.getWinningMoves(move);
            console.log(`| ${move.padEnd(12)} | ${winsAgainst.join(', ' || 'None'.padEnd(30))}   |`);
        });

        console.log("-------------------------------------");
    }
}

module.exports = Help;