const EventEmitter = require('node:events')

function main() {
    //create object of EventEmitter
    const eventEmitter = new EventEmitter()

    //bind event and listner
    eventEmitter.once('greet', (evt) => {
        console.log(evt)
    })

    //emit event by sending data
    eventEmitter.emit('greet', 'Hello!')
    eventEmitter.emit('greet', 'How are you!')

}
main()
