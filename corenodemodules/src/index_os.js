//import os from 'node:os'
const os = require('node:os')

function main(){
    console.log('Platform : ', os.platform())
    console.log('Arch : ', os.arch())
    console.log('Type : ', os.type())
    console.log('Kernal Version : ', os.version())
    console.log('Machine Type : ', os.machine())

        //memory 
    console.log('Total Memory : ', (os.totalmem() / 1024 ** 3).toFixed(2), 'GB')

    //CPU
    const cpus = os.cpus()
    console.log(`Cores : ${cpus.length}`)
    console.log(`Model : ${cpus[0].model}`)
    console.log(`Speed : ${cpus[0].speed} MHz`)

}
main()