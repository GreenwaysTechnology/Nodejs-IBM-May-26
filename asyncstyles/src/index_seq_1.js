function greet() {
    console.log('greet')
}

function blockMe(message) {
    console.log(message)
}
function main() {
    blockMe('start')
    greet()
    blockMe('end')
}
main()