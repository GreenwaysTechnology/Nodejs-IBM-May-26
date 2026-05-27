const { ServiceBroker } = require('moleculer')

//create serviceBroker 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'hello',
    actions: {
        sayHello: {
            // meta data 
            handler(ctx) {
                return `Hello ${ctx.params.name}`
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log("Broker is ready!")
        //invoke services
        const res = await broker.call('hello.sayHello', { name: 'Subramanian' })
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()