const mongoose=require('mongoose');
const CustomerSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
});
const Customer=module.exports=mongoose.model('Customer', CustomerSchema);