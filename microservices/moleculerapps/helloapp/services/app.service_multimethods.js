const { ServiceBroker } = require('moleculer')

//create serviceBroker 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'math',
    actions: {
        //biz methods
        add() {
            return 10 + 10
        },
        div() {
            return 10 - 2
        },
        multiply() {
            return 10 * 2
        }
    }
})



async function main() {
    try {
        await broker.start()
        console.log("Broker is ready!")
        //invoke services
        const add = await broker.call('math.add')
        const div = await broker.call('math.div')
        const mul = await broker.call('math.multiply')
        console.log(add, div ,mul)
    }
    catch (err) {
        console.log(err)
    }
}
main()