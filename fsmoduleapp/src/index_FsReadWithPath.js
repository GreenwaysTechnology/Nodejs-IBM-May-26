const fs = require('node:fs/promises')
const path = require('node:path')

async function readTextFile() {
    //const filePath = './src/assets/info.txt'
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    try {
        const data = await fs.readFile(filePath, options)
        console.log(data)
    }
    catch (err) {
        console.log(Error)
    }
}

function main() {
    readTextFile()
}
main()
