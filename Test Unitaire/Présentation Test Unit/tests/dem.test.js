const { addition, soustraction } = require('../utils/calcul.js')

describe('Calcul Function', () => {
  it('should return 2 when adding 1 and 1', () => {
    expect(addition(1, 1)).toBe(2)
  })
  it('should return 3 when adding 1 and 2', () => {
    expect(addition(1, 2)).toBe(3)
  })
  it('should return 1 when removing 2 to 3', () => {
    expect(soustraction(3, 2)).toBe(1)
    expect(soustraction(2, 3)).toEqual(-1)
  })
  it('should return the good object', () => {
    const obj = {one: 1}
    obj['two'] = 2
    expect(obj).not.toBe({one: 1, two: 2})
    expect(obj).toEqual({one: 1, two: 2})
    expect(obj).toMatchObject({one: 1, two: 2})
    expect(obj).toEqual(expect.objectContaining({one: expect.any(Number), two: expect.any(Number)}))
  })
  it('should return the good object', () => {
    let n;
    expect(n).toBe(undefined)
    expect(n).toBeUndefined()
    n = null
    expect(n).toBe(null)
    expect(n).toBeNull()
    expect(n).not.toBeUndefined()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
  })
  it('should return around 52', () => {
    expect(addition(48,52)).toBeGreaterThan(52)
    expect(addition(52,0)).toBeGreaterThanOrEqual(52)
    expect(soustraction(52,48)).toBeLessThan(52)
    expect(soustraction(52,48)).toBeLessThanOrEqual(52)
  })
  it('should return 0.3 when adding 0.2 and 0.1', () => {
    expect(addition(0.2, 0.1)).toBeCloseTo(0.3)
  })
})

describe('String Function', () => {
  it('should return "Hello World" when concatenating "Hello" and "World"', () => {
    expect('Hello World').toBe('Hello World')
  })
  it('Should match with L', () => {
    expect('Hello L World').toMatch(/L/)
  }) 
  it('Should match with stop', () => {
    expect('Anna say hello to christophe').toMatch(/stop/)
  }) 
})

describe('Array Function', () => {
    it('should return [1, 2, 3] when adding 1, 2, 3', () => {
        expect([1, 2, 3]).toEqual([1, 2, 3])
    })
    it('should return [1, 2, 3] when removing 3 from [1, 2, 3]', () => {
        expect([1, 2, 3]).not.toEqual([1, 2])
    })
    const arr = [
        "milka",
        "coca",
        "fanta"
    ]
    it('should return ["milka", "coca", "fanta"] when adding "milka", "coca", "fanta"', () => {
        expect(arr).toEqual(["milka", "coca", "fanta"])
    })
    it('Should have coca in the array', () => {
        expect(arr).toContain("milka", "fanta", "coca")
    })
    it('Should not have pepsi in the array', () => {
        expect(arr).not.toContain("pepsi")
    })
    const todo = [
        {
            id: 1,
            title: "Buy milk",
            completed: false
        },
        {
            id: 2,
            title: "Buy bread",
            completed: false
        },
        {
            id: 3,
            title: "Buy eggs",
            completed: false
        }
    ]
    it('Should have the same pattern', () => {
        expect(todo).toEqual(
            expect.arrayOf(
                expect.objectContaining({
                    id: expect.any(Number),
                    title: expect.any(String),
                    completed: expect.any(Boolean)
        })))
    })
})

function generateError(){
    throw new Error("This is an error")
}
describe('Error Function', () => {
    it('should throw an error', () => {
        expect(generateError).toThrow()
        expect(generateError).toThrow("This is an error")
        expect(generateError).toThrow(/error/)
    })
})