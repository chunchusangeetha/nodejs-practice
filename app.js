const os = require('os')

console.log(os.platform())
console.log(os.release())
console.log('Free memory: ', os.freemem())
console.log('Total memory: ', os.totalmem())
console.log('Home dir: ', os.homedir())
console.log('Uptime: ', os.uptime())