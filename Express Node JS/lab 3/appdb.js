const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());


mongoose.connect("mongodb://localhost/LocalDB",{ useNewUrlParser: true })
.then(console.log("Mongo Is Connected"))
.catch(err =>{console.log(err)});

require('./models/Students');
const Student = mongoose.model('students');

app.post('/student',(req,res)=>{
    const newStudent = {
        id: req.body.id,
        name: req.body.name
    }
    new Student(newStudent)
    .save()
    .then(s=>{
        res.send("Student Is Added");
    })
    .catch(err=> console.log(err));
})

app.listen(3000,()=>{console.log('Server Running')});