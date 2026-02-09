const { calculScore } = require('../utils/scoreCalculator.js');

describe('CalculScore is functionnal', ()=> {
    it('should return an error, if baseScore is not a number', () => {
        expect(() => calculScore('100', [], [])).toThrow('Veuillez entrer des nombres');
    })
    it('should return an error, if bonuses is not an array', () => {
        expect(() => calculScore(100, '100', [])).toThrow('Veuillez entrer des nombres');
    })
    it('should return an error, if penalities is not an array', () => {
        expect(() => calculScore(100, [], '100')).toThrow('Veuillez entrer des nombres');
    })
    it('should return the base score when no bonuses or penalities are given', () => {
        expect(() => calculScore(100)).toThrow('Veuillez entrer des nombres');
    })
})

describe('CalulScore can calcul', () => {
    it('should return the base score when no bonuses or penalities are given', () => {
        expect(calculScore(100, [], [])).toBe(100);
    })
    it('should return the base score plus the bonuses when no penalities are given', () => {
        expect(calculScore(100, [10, 20], [])).toBe(130);
    })
    it('should return the base score minus the penalities when no bonuses are given', () => {
        expect(calculScore(100, [], [10, 20])).toBe(70);
    })
    it('should return the base score plus the bonuses minus the penalities', () => {
        expect(calculScore(100, [10, 20], [10, 20])).toBe(100);
    })
})
