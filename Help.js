const Table = require("cli-table");

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
        /*
                console.log("\nWinning combinations:");
                console.log("-------------------------------------");
                console.log("| Your Move    |  Wins Against      |");
                console.log("-------------------------------------");
        
                moves.forEach(move => {
                    const winsAgainst = rules.getWinningMoves(move);
                    console.log(`| ${move.padEnd(12)} | ${winsAgainst.join(', ' || 'None'.padEnd(30))}   |`);
                });
        
                console.log("-------------------------------------");*/
        Help.displayWinningTable(moves, rules);
    }

    static displayWinningTable(moves, rules) {
        const table = new Table({
            head: ['Your Move', ...moves],
            colWidths: [15, ...Array(moves.length).fill(15)],
        });


        /*const header = "  | " + moves.map(move => move.padEnd(10)).join(' | ') + " | ";
        console.log(header);
        console.log("-".repeat(header.length));*/

        moves.forEach(userMove => {
            const row = [userMove];
            moves.forEach(computerMove => {
                const result = rules.getResult(userMove, computerMove);
                row.push(result);
            });
            table.push(row);
            //console.log(row.join(' '))
        });
        console.log(table.toString());
    }
}

module.exports = Help;