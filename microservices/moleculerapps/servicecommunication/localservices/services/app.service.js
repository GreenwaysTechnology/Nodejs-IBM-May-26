const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'calculator',
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params
                return `From Calculator ${a + b}`
            }
        }
    }
})

broker.createService({
    name: "math",
    actions: {
        add: {
            //meta information
            params: {
                a: { type: "number", positive: true, integer: true, default: 0 },
                b: { type: "number", positive: true, integer: true, default: 0 }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //call service math-->calc 
                const response = ctx.call('calculator.add', { a, b })
                return response
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