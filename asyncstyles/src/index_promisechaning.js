
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        // user=null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User is not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login is failed')
        }
    })

}
const showDashboard = status => {
    console.log('showDashboard is called')

    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'welcome to dashboard')
        } else {
            setTimeout(reject, 1000, 'Try Again')
        }
    })
}
function main() {
    // getUser((user) => {
    //     login(user, (status) => {
    //         showDashboard(status, (page) => {
    //             console.log(page)
    //         }, (err) => {
    //             console.log(err)
    //         })

    //     }, (err) => { console.log(err) })
    // }, (err) => {
    //     console.log(err)
    // })

    getUser()
        .then(user => {
            return login(user)
        })
        .then(status => {
            return showDashboard(status)
        })
        .then(page => console.log(page))
        .catch(err => console.log(err))
}
main()