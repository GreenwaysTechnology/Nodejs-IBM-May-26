const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const broker = new ServiceBroker()

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api'
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