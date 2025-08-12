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
 * Check input correctness
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {boolean} true - if input data is correct, false - if not
 */
function validateRatings(winnerRate, loserRate) {
    if (winnerRate < 0 || loserRate < 0) return false;
    // if (typeof winnerRate !== 'number' || typeof loserRate !== 'number')
    //     return false;
    if (!Number.isFinite(winnerRate) || !Number.isFinite(loserRate))
        return false;
    return true;
}

/**
 * Print result to console
 * @param {*} winnerRate - winner's rating
 * @param {*} loserRate - loser's rating
 * @returns {void} -
 */
function printResult(winnerRate, loserRate) {
    const result = calcNewRate(winnerRate, loserRate);
    console.log(result);
    if (Number.isNaN(result)) {
        console.log(`❌ Некоректні дані: ${winnerRate}, ${loserRate}`);
        return;
    }
    console.log(`✅ Новий рейтинг переможця: ${result} очок`);
    return;
}

/**
 * Calculate new winner's rating
 * @param {number} winnerRate - winner's rating
 * @param {number} loserRate - loser's rating
 * @returns {number} New rating or error message
 */
function calcNewRate(winnerRate, loserRate) {
    const error = validateRatings(winnerRate, loserRate);

    if (!error) {
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
    // console.log(newWinnerRate);
    return Number(newWinnerRate.toFixed(1));
}

printResult(13, 20);
