'use strict';

/**
 * Calculate rating increase if the winner's rating is higher than the loser's rating
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {number} increase of rating
 */
function calcWinAgainstWeakerOrEqual(winnerRate, loserRate) {
    const diff = winnerRate - loserRate;
    if (diff >= 0 && diff <= 2) return 2;
    if (diff > 2 && diff < 20) return 1;
    return 0;
}

/**
 * Calculate rating increase if the winner's rating is lower than the loser's rating
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {number} increase of rating
 * */
function calcWinAgainstStronger(winnerRate, loserRate) {
    return (loserRate - winnerRate + 5) / 3;
}

/**
 * Check input data correctness
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {boolean} true - if input data is valid, false - if not valid
 */
function validateRatings(winnerRate, loserRate) {
    if (
        winnerRate < 0 ||
        loserRate < 0 ||
        !Number.isFinite(winnerRate) ||
        !Number.isFinite(loserRate)
    ) {
        return false;
    }
    return true;
}

/**
 * Print result to console
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {void}
 */
function printResult(winnerRate, loserRate) {
    const result = calcNewRate(winnerRate, loserRate);
    if (Number.isNaN(result)) {
        console.log(
            `❌ Entered data is incorrect: (${winnerRate}, ${loserRate}), rating should be a valid number, try again`
        );
        return;
    }
    console.log(`✅ New winner's rating: ${result} points`);
}

/**
 * Calculate new winner's rating
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {number} New rating rounded to 1 decimal or NaN if input data is invalid
 */
function calcNewRate(winnerRate, loserRate) {
    const isDataValid = validateRatings(winnerRate, loserRate);

    if (!isDataValid) {
        return NaN;
    }

    if (winnerRate === 0) {
        return Number(loserRate.toFixed(1));
    }

    const increase =
        winnerRate >= loserRate
            ? calcWinAgainstWeakerOrEqual(winnerRate, loserRate)
            : calcWinAgainstStronger(winnerRate, loserRate);

    const newWinnerRate = winnerRate + increase;
    return Number(newWinnerRate.toFixed(1));
}

printResult(14, 20);
printResult(14, '20');
