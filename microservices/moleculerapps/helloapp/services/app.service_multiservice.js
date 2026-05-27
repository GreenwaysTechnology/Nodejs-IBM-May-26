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

broker.createService({
    name: 'hai',
    actions: {
        //biz methods
        sayHai() {
            return "Hai Service!"
        }
    }
})

async function main() {
    try {
        await broker.start()
        console.log("Broker is ready!")
        //invoke services
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        console.log(hello,hai)
    }
    catch (err) {
        console.log(err)
    }
}
main()