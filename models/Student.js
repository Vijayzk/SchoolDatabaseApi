import mongoose, { mongo } from "mongoose";

//Defining Schema

const studentSchema = new mongoose.Schema({
    name:{type:String , required:true , trim:true},
    age:{type:Number ,required:true},
    fees:{type:mongoose.Decimal128 , required:true , validate:(value)=> value>=5000.5}
})


//Model
const StudentModel = mongoose.model("student" , studentSchema)

export default StudentModel