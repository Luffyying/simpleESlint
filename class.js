let Events = require("events")

class TestClass extends Events {
    constructor(){
        super()
    }
    mybind(){
        this.on('test',function(e){
            console.log('triggered')
            console.log(e)
        })
    }
}
const a = new TestClass()
a.mybind()
a.emit('test',1)

// var eventEmitter = new Events.EventEmitter()
// eventEmitter.on('some_event',function(){
//     console.log('some_event 事件触发')
// })
// setTimeout(function(){
//     eventEmitter.emit('some_event')
// },1000)
