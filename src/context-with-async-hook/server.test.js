const request = require('supertest')
const app = require('./index')

describe('Context Middleware', () => {
    it('should assign a unique contextId for each request', async () => {
        const server = app.listen(0)

        const requestTries = [
            request(server).get('/'),
            request(server).get('/'),
            request(server).get('/'),
            request(server).get('/'),
            request(server).get('/')
        ]

        try {
            const responses = await Promise.all(requestTries)

            const contextIds = responses.map((res) => res.text.split(': ')[1])
            console.log('❤❤❤ tuannm: [server.test.js][15][contextIds]', contextIds)
            const uniqueContextIds = new Set(contextIds)

            expect(uniqueContextIds.size).toBe(requestTries.length)
        } finally {
            server.close()
        }
    })
})
