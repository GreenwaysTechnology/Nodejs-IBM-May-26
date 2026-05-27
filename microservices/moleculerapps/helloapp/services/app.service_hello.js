const { ServiceBroker } = require('moleculer')

//create serviceBroker 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'hello',
    actions: {
        //biz methods
        sayHello() {
            return "Hello Service!"
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log("Broker is ready!")
        //invoke services
        const res = await broker.call('hello.sayHello')
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()