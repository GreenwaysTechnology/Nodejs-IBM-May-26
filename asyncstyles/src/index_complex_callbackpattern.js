

function blockMe(message) {
    console.log(message)
}
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'Login success')
    } else {
        setTimeout(reject, 1000, 'Login is failed!')
    }
}

function main() {
    blockMe('start')
    //turn hof as listener- wait for events from kernal
    login('admin', 'admin', (status) => {
        console.log(status)
    }, (err) => {
        console.log(err)
    })
    blockMe('end')
}
main()