function calculScore (baseScore, bonuses, penalities) {
    if (typeof baseScore !== 'number' || !Array.isArray(bonuses) || !Array.isArray(penalities)) {
        throw new Error('Veuillez entrer des nombres');
    }
    const totalBonus = bonuses.reduce((acc, cur) => acc + cur, 0);
    const totalPenalities = penalities.reduce((acc, cur) => acc + cur, 0);
    return Math.max(baseScore + totalBonus - totalPenalities, 0);
}

module.exports = { calculScore }