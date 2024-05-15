const express = require('express')
const {v4: uuidV4} = require('uuid')
const Context = require('./lib')

const app = express()
const port = 3000

const injectContext = function (req, _res, next) {
    const contextId = uuidV4()
    console.log(`LOGGED ${contextId}`)
    Context.init({contextId})
    next()
}

app.use(injectContext)

// business logic need to use context
const testAsync = async () => {
    const contextId = Context.getContext('contextId')
    return new Promise((resolve, reject) => {
        if (contextId) {
            resolve(contextId)
        } else {
            reject(new Error('Context ID not found'))
        }
    })
}

app.get('/', async (req, res) => {
    const contextId = await testAsync()
    res.send(`Hello World! Context ID: ${contextId}`)
})

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
} else {
    module.exports = app
}
