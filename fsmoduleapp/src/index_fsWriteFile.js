const fs = require('node:fs')//callback style

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    const filePath = './src/assets/demo.txt'
    const options = {
        encoding: 'UTF-8'
    }
    const content = 'hello'
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err
        console.log(`File "${filePath} created`)
    })
    blockMe('end')
}
main()