const express=require('express');
const mangoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const route=require('./routes/route');
mongoose.connect('mangodb://localhost:27010/node2');
mangoose.connection.on('connected',()=>{
    console.log("connected");
});
app.use(cors());
app.use(bodyparser.json());
//app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("This is response");
});
app.listen(5003,()=>{
    console.log("Server running");
}); 