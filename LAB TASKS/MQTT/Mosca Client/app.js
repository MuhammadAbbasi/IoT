var mqtt = require('mqtt')
var client = mqtt.connect('mqtt:192.168.1.116')
client.on('connect',function(){
    setInterval(function(){
        client.publish('abcd',"1");
        console.log("Message sent")
    },5000)
});