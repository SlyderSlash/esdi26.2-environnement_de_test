/*code Exemple

// Dépendance
const app = require('../src/app')
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoDBContainer } = require('@testcontainers/mongodb')

describe('User API', () => {
    // Augmentation du TimeOut, utile pour les opérations asynchrones et le pull image
    jest.setTimeout(60000);
    let container, db
    beforeAll(async () => {
        // Création du container et démarage de celui-ci
        container = await new MongoDBContainer("mongo:8.2.5").start()
        // Création d'une connection à la base de données du container
        db = mongoose.createConnection(container.getConnectionString(), {
            directConnection: true
        })
    })
    afterAll(async () => {
        await db.close()
    })

    it('Should create a user', async() => {
        const collection = db.collection("testy")
        await collection.insertOne({test : 1})

        const result = await collection.findOne({test : 1})
        expect(result.test).toEqual(1)
    })
    // Test Unitaire ci-dessus
    // Test Fonctionnel ci-dessous
    it('Should create a user', async () => {
        const name = 'MaeldelaPluie'
        const response = await request(app)
        .post('/users')
        .send({ name })
        .expect(200)

    expect(response.body.name).toBe(name)
    })
})
*/