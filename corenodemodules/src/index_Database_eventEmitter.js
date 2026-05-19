const EventEmitter = require('node:events')

class Database extends EventEmitter {
    constructor() {
        super()
        //register all database related events
        this.on('connect', ({ url }) => {
            console.log(`Connected to ${url}`)
        })
        this.on('data', ({ result }) => {
            console.log('Got Result', result)
        })
        this.on('error', ({ err }) => {
            console.log(`Got Err ${err}`)
        })
    }
    connect(url) {
        //simulate async operation
        setTimeout(() => {
            this.emit('connect', { url: url })
        }, 500)
    }
    query(sql) {
        try {
            setTimeout(() => {
                const result = [{ id: 1, name: 'a' }]
                this.emit('data', { result })
            }, 800)
        }
        catch (err) {
            this.emit('error', err)
        }
    }
}

function main() {
    let database = new Database()
    database.connect('postgres://localhost:3334/mydb')
    database.query('select *from users')
}
main()
