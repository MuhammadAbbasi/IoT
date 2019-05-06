var express = require("express");
var ALLOWED_IPS = ["127.0.0.1",
    "192.168.0.1"
];

var api = express.Router();

api.use((req,res,next)=>{
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed){
        res.status(401).send("Not Allowed!");
    }else {
        next();
    }
});

api.get("/users",function(req,res){/* ...*/});
api.post("/user",function(req,res){/* ...*/});
api.get("messages",function(req,res){
    /* ...*/
});


module.exports = api;