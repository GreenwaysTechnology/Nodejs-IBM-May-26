const fs = require('node:fs')//callback style
const fsPromise = require('node:fs/promises')

function blockMe(message) {
    console.log(message)
}
//callback based
function readTextFile(resolve, reject) {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    fs.readFile(filePath, options, (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
}
//Custom Promise based
function readFileCustomPromise() {
    return new Promise((resolve, reject) => {
        const filePath = './src/assets/info.txt'
        const options = {
            encoding: 'UTF-8'
        }
        fs.readFile(filePath, options, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
function readFileUsingBuiltinPromise() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    return fsPromise.readFile(filePath,options)
}

async function main() {
    // blockMe('start')
    // readTextFile(data => {
    //     console.log('data=>', data)
    // }, err => {
    //     console.log(err)
    // })


    //readFileCustomPromise().then(data => console.log(data)).catch(err => console.log(err))
    try {
        //const data = await readFileCustomPromise()
        //console.log(data)
        const data = await readFileUsingBuiltinPromise()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
    // blockMe('end')
}
main()