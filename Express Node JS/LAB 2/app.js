// npm init
// npm i express
// npm i --save nodemon

const express = require('express');
const app = express();

const BODYPARSE = require('body-parser');
app.use(express.json());

const students = [
    {id:01,name:"Ali"},
    {id:02,name:"Ahmed"},
    {id:03,name:"Zain"}
]
app.get('/',(req,res)=>{
    res.send(students);
})
app.get('',(req,res)=>{
    res.send(students);
})

app.get('/student/:id',(req,res)=>{
    // If ID available:
    const student = students.find(s => s.id === parseInt(req.params.id));
    
    // If ID not available:
    if(!student){
        res.status(404).send("Your ID is invalid")
        return;
    }

    res.send(student);
});

app.post('/student/',(req,res)=>{
    // if(req.body.name.length < 3){
    //     res.status(400).send("Invalid Data (length less than 3)")
    //     return;
    // }
    const student = {
        id: students.length + 1,
        name: req.body.name

    }

    students.push(student);
    res.send(student);

});

app.put('/student/:id',(req,res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    student.name = req.body.name;
    res.send(student);
});

app.delete("/student/:id",(req,res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    const index= students.indexOf(student);
    students.splice(index,1);
    res.send(student);
});

// app.get('/students/:name',(req,res)=>{
//     // If ID available:
//     const student = students.find(s => s.name === req.params.name);
    
//     // If ID not available:
//     if(!student){
//         res.status(404).send("Your name is invalid")
//         return;
//     }

//     res.send(student);
// });

app.listen(3000,()=>{   //arrow function
    console.log("The Server is running on port 3000");
})

// app.listen(3000,function(){


// });
