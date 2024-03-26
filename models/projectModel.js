
const mongoose =require("mongoose")
const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true,"Name required"]
    },
    
    url:{
        type:String,
        required : [true,"Url required"]
    },
    
    urlGit:{
        type:String,
        required : [true,"urlGit required"]
    },
    image:{
        type:String,
        default : "pic.jpeg"
    }
    
   
})
const projectModel = mongoose.model('projects', projectSchema);
 module.exports = projectModel;