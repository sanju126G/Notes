const EventEmitter = require('events');

const emitter = new EventEmitter;

emitter.on('revisionEvent', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('revision event called')
    }
})

emitter.addListener('revisionEvent', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('revision event called')
    }
})

emitter.emit('revisionEvent')

console.log(emitter.listeners('revisionEvent'))
console.log(emitter.listenerCount('revisionEvent'))
console.log(emitter.getMaxListeners())
console.log(emitter.setMaxListeners(20))
console.log(emitter.getMaxListeners())