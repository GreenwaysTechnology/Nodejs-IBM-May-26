function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, 'Login is success')
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 5000, 'Login is failed')
        })
    }
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))

    login('ddd', 'adfa')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')
}
main()