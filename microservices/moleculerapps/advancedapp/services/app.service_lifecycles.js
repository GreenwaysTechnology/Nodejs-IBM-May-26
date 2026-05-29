const { ServiceBroker } = require('moleculer')

//create serviceBroker 
const broker = new ServiceBroker({
    created(broker) {
        console.log('broker created')
    },
    started(broker) {
        console.log('broker started')
    },

    stopped(broker) {
        console.log('broker is stopped')
    }
})

//create service 
broker.createService({
    name: 'hello',
    actions: {
        //biz methods
        sayHello() {
            return "Hello Service!"
        }
    },
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service is stopped')
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