const fs = require('node:fs')//callback style

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    fs.readFile(filePath, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })
    blockMe('end')
}
main()