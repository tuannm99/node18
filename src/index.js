// const os = require('os')
//
// const cpus = os.cpus()
// console.log(os.arch())
// const async_hook = require('async_hooks')
// const localStorage = new async_hook.AsyncLocalStorage()
// localStorage.run('hihi', () => {})
// localStorage.disable()
// localStorage.getStore()
// localStorage.enterWith()
// localStorage.exit()

setImmediate(() => {
    console.log('❤❤❤ tuannm: [index.js][6][setImmediate]')
})

setTimeout(() => {
    console.log('❤❤❤ tuannm: [index.js][6][setTimeout]')
})

// setInterval(() => {
//     console.log('❤❤❤ tuannm: [index.js][14][setInterval]')
// }, 1000)

process.nextTick(() => {
    console.log('❤❤❤ tuannm: [index.js][5][nextTick]')
})
// console.log('❤❤❤ tuannm: [index.js][3][cpus]', cpus)
