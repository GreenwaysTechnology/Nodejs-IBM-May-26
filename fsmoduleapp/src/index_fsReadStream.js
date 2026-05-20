const fs = require('node:fs')
const path = require('node:path')

function readTextFile() {
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    const inputStream = fs.createReadStream(filePath, options)
    //attach events and listeners

    let data = ''
    inputStream.on('data', (chunk) => {
        console.log('chunk event')
        data += chunk
    })
    inputStream.on('end', () => {
        console.log('end event')
        console.log(data)

    })
    inputStream.on('close', () => {
        console.log('close event')

    })
    inputStream.on('error', (err) => {
        console.log('error event')

    })
}


function main() {
    readTextFile()
}
main()
