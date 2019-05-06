var mqtt = require('mqtt')
var client = mqtt.connect('mqtt:192.168.1.116')
client.on('connect',function(){
    client.subscribe('abcd');
})
console.log("Connected to Server")
client.on('connect',function(topic,message){
    context = message;
    console.log(context);
}
)