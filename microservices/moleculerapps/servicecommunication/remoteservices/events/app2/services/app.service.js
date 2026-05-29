const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP"
})

broker.createService({
    name: 'inventory',
    events: {
        'order.created': {
            handler(ctx) {
                console.log(ctx.params)
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