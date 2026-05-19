const fs = require('node:fs')
const path = require('node:path')

function readTextFile() {
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    console.log('start')
    const data = fs.readFileSync(filePath,options)
    console.log(data)
    console.log('end')
}

function main() {
    readTextFile()
}
main()