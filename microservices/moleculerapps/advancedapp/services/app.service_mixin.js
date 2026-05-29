const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//parent service
const helloService = {
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello'
        }
    }
}
const haiService = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai'
        }
    }
}
//child service which inherits parent services - hello,hai
broker.createService({
    name: "welcome",
    mixins: [helloService, haiService],
    actions: {
        sayWelcome() {
            return 'Welcome'
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
