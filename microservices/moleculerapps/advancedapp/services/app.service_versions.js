const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()


//child service which inherits parent services - hello,hai
broker.createService({
    name: "product",
    version:1,
    actions: {
        list: {
            handler() {
                return ['p1', 'p2']
            }
        }
    }
})

broker.createService({
    name: "product",
    version:2,
    actions: {
        list: {
            handler() {
                return ['c1', 'c2']
            }
        }
    }
})
async function main() {
    try {
        await broker.start()
        //will start interactive commandline tool
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
