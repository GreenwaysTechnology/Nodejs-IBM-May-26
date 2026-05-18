function greet(callback) {
    callback('Greet')
}

function blockMe(message) {
    console.log(message)
}
function main() {
    blockMe('start')
    //functional programming concept called - higher order function
    greet(function (message) {
        console.log(message)
    })
    blockMe('end')
}
main()