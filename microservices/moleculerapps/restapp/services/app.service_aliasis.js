const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const broker = new ServiceBroker()


//http://localhost:3000/api/servicename/methodname

broker.createService({
    name: 'greeter',
    actions: {
        sayGreet() {
            return 'Greet Microservices'
        },
        sayHello() {
            return 'Hello Microservices'
        },
        sayHai() {
            return 'Hai Microservices'
        }
    }
})


//webserver service
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                    // /api/hello
                    'hello': "greeter.sayHello",
                    'hai': "greeter.sayHai",
                    'greet': 'greeter.sayGreet'
                }
            }
        ]
    }
})


async function main() {
    try {
        await broker.start()

    }
    catch (err) {
        console.log(err)
    }
}
main()