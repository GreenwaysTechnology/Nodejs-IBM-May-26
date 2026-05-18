function getPromiseSuccess() {
    return Promise.resolve('Hello')
}

function blockMe(message) {
    console.log(message)
}
function main() {
    blockMe('start')
    getPromiseSuccess().then(value=>console.log(value))
    blockMe('end')
}
main()