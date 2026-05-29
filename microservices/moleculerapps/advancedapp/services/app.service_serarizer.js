const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker({
    serializer:"JSON"
})


//child service which inherits parent services - hello,hai

broker.createService({
    name: "products",
    actions: {
        //here we write biz logic
        findAll(ctx) {
            return ctx.call('inventory.findAll')
        }
    }
})
broker.createService({
    name: "inventory",
    actions: {
        findAll() {
            return [{
                id: 1,
                name: 'Iphone',
                qty: 100,
                price: 1000
            }]
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
