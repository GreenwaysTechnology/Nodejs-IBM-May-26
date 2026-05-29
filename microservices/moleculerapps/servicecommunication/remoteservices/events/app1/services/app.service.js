const { ServiceBroker } = require('moleculer')


const broker = new ServiceBroker({
    transporter: "TCP"
})

broker.createService({
    name: "orders",
    actions: {
        placeorder: {
            async handler(ctx) {
                const { orderId, name } = ctx.params
                ctx.emit('order.created', { id: orderId, name: name })
                return 'Order Placed'
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