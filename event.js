const EventEmmitor = require('events')


const customEmmitor = new EventEmmitor()

customEmmitor.on('response', () => {
    console.log('Data Received')
})

customEmmitor.on('response', () => {
    console.log('Data Received Again')
})

customEmmitor.emit('response')