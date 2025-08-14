'use strict';

function calcNewRate(winnerRate, loserRate) {
    if (
        !Number.isFinite(winnerRate) ||
        !Number.isFinite(loserRate) ||
        winnerRate < 0 ||
        loserRate < 0
    ) {
        console.log(
            `❌ Incorrect input: (${winnerRate}, ${loserRate}) - ratings must be valid non-negative numbers`
        );
        return NaN;
    }

    if (winnerRate === 0) {
        console.log(`✅ Winner's new rating: ${loserRate.toFixed(1)} points`);
        return Number(loserRate.toFixed(1));
    }

    let increase;
    const diff = winnerRate - loserRate;

    if (winnerRate >= loserRate) {
        if (diff >= 0 && diff <= 2) increase = 2;
        else if (diff > 2 && diff < 20) increase = 1;
        else increase = 0;
    } else {
        increase = (loserRate - winnerRate + 5) / 3;
    }

    const newRating = Number((winnerRate + increase).toFixed(1));
    console.log(`✅ Winner's new rating: ${newRating} points`);
    return newRating;
}

console.log(calcNewRate(14, 20));
console.log(calcNewRate(14, '20'));
