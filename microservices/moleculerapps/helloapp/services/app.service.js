const { ServiceBroker } = require('moleculer')

//create serviceBroker 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'math',
    actions: {
        multiply: {
            params: {
                a: 'number',
                b: {
                    type: "number", positive: true, integer: true
                }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a * b
            }
        }
    }
})



async function main() {
    try {
        await broker.start()
        console.log("Broker is ready!")
        const mul = await broker.call('math.multiply', { a: 10, b: 20 })
        console.log(mul)
    }
    catch (err) {
        console.log(err)
    }
}
main()