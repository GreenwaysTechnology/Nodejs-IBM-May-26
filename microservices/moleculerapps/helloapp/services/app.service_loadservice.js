const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//load services
broker.loadService('./services/greeter.service')

async function main() {
    try {
        await broker.start()
        console.log("Broker is ready!")
        //invoke services
        const res = await broker.call('greeter.sayGreet')
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()