function greet(callback) {
  //api to delegate to kernal via libuv
  setTimeout(callback,5000,"Hello,Async!")
}

function blockMe(message) {
    console.log(message)
}
function main() {
    blockMe('start')
    //turn hof as listener- wait for events from kernal
    greet(function (message) {
        console.log(message)
    })
    blockMe('end')
}
main()