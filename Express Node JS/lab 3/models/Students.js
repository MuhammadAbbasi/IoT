const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaStudent = new Schema({
    id:{
        type:Number,
        required=true
    },
    name:{
        type: string,
        required = true
    }
})
mongoose.model('students',SchemaStudent);