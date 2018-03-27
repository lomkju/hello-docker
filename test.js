
const child_process = require('child_process')

let command = `host myip.opendns.com resolver1.opendns.com | grep "myip.opendns.com has" | awk '{print $4}'`
let data = child_process.execSync(command)
console.log(data.toString('ascii'));
