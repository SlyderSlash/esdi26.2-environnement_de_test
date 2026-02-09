const { callAPI, logIn } = require('../utils/api.js');

global.fetch = jest.fn();
const localStorageMock = (()=> {
    let store = {};
    return {
        getItem: jest.fn((key) => store[key]),
        setItem: jest.fn((key, value) => {
            if(Object.keys(store).length >= 1000){
                throw new DOMException('Erreur de quota dépassé', 'QuotaExceededError')
            }
            store[key] = value
        }),
        clear: jest.fn(() => store = {})
    }
})()
global.localStorage = localStorageMock;

describe('callAPI', () => {
    it('should return the data when the API call is successful', async () => {
        const mockData = { title: 'Test', id: 123, userId: 456 };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });
        const data = await callAPI('https://api.example.com/data');
        expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
        expect(data).toEqual(mockData);
    })
})

describe('logIn', () => {
    beforeEach(() => {
        localStorage.clear()
        jest.clearAllMocks()
    })
    it('should return the data when the API call is successful', async () => {
        const username = 'GGKillerdu98';
        const password = 'Valorent';
        const mockData = { token: '123456', username };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });
        const data = await logIn(username, password);
        expect(fetch).toHaveBeenCalledWith('https://api.example.com/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('token', mockData.token);
        expect(localStorage.getItem('token')).toBe(mockData.token);
        expect(data).toEqual(mockData);
    })
    it('Quota error', async () => {
        for(let i = 0; i<1000; i++){
            localStorage.setItem(`key_${i}`, 'valeur')
        }
        const username = 'GGKillerdu98';
        const password = 'Valorent';
        const mockData = { token: '123456', username };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });
        await expect(logIn(username, password)).rejects.toThrow()
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });
        await expect(logIn(username, password)).rejects.toThrow(DOMException)
    })
})