const request = require('supertest')
const app = require('../src/app')
const TodoApp = require('../src/models/todo')

describe('Todo API TEST', () => {
    beforeEach(()=>{
        // Avant chaque test
        TodoApp.resetTasks()
    })
    beforeAll(() => {
        // Avant tout les tests
    })
    afterEach(()=> {
        // Après chaque test
    })
    afterAll(() => {
        // Après tout les tests
    })
    test("POST /api/tasks - Ajouter une tâche", async () => {
        const task = "Pensez à acheter du lait";
        const response = await request(app)
            .post('/api/tasks')
            .send({ title: task})
            .expect(201);        
        expect(response.body.title).toBe(task);
    })
    test("POST /api/tasks - Ajouter une tâche vide", async () => {
        const task = null;
        await request(app)
            .post('/api/tasks')
            .send({ title: task})
            .expect(400);        
    })
    test("GET /api/tasks - Lire les tâches", async () => {
        await request(app).post('/api/tasks').send({ title: "Test" });
        const response = await request(app).get('/api/tasks').expect(200)
        console.log(response.body)
        expect(response.body.length).toBe(1)
    })
    test("DELETE /api/tasks/:id - 404 si inexistant", async () => {
        await request(app).delete('/api/tasks/99999').expect(404)
    })
})