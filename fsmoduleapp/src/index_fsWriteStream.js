const fs = require('node:fs')
const path = require('node:path')

function write() {
    let filePath = path.join(__dirname, 'assets/todos.json')
    const config = {
        encoding: 'utf8',
        flag: 'w'
    };
    const outputStream = fs.createWriteStream(filePath, config)

    //data
    const todos = [{ text: 'learn Js', status: 'completed' }, { text: 'learn node', status: 'in Progress' }]
    let jsonTodos = JSON.stringify(todos)

    outputStream.write(jsonTodos)
    //attach events
    outputStream.close();

    outputStream.on('close', function () {
        console.log('file has been written ')
    })


}

function main() {
    write()
}
main()

