function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')

    login('ddd', 'adfa')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')
}
main()