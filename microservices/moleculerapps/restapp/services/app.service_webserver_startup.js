const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'ApiGateWay',
    mixins:[ApiGateWay]
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