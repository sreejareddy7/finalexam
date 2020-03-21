const express=require('express');
const router=express.Router();
const Customer=require('../models/customer');
router.get('/customer',(req,res,next)=>
{
   res.send("Get response...");
   Customer.find(function(err,customer){
 res.json(customer);
   });
});
router.post('/customer',(req,res,next)=>
{
   let newCustomer= new Customer({
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       address:req.body.address,
       city:req.body.city,
       state:req.body.state
   });
   newCustomer.save((err,customer)=>{
      if(err){
          res.send("oopps...there is some error");
      }
      else{
          res.send("successfully added");
      }
   });
});
router.delete('/customer/:id',(req,res,next)=>
{
  Customer.remove({_id:req.params_id},function(err,res){
   if(err){
       res.send("oops..there is some issue in deleting");
   }
   else{
       res.send("deleted successfully");
   }
  });
  });


module.exports=router;