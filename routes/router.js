const router= require('express').Router();
var User = require('../models/crud');
router.post("/create",(req,res,next)=>{
    var newuser = new User({
        order:req.body.order,
        date:req.body.date,
        payment:req.body.payment,
        product:req.body.product,
        customer:req.body.customer,
        phone:req.body.phone,
        weight:req.body.weight,
    })
    newuser.save((err,user)=>{
   if(err){
    res.status(200).json({msg:user})
    res.status(500).json({errmsg:err})
   }
    })

})
router.get("/read",(req,res,next)=>{
    User.find({},(err,user)=>{
        if(err){
            res.status(500).json({errmsg:err});
      
        }else{  
            res.status(200).json({msg:user});
        }
    });

    })
    router.put("/update",(req,res,next)=>{
        User.findById(req.body._id,(err,user)=>{
        
                user.order=req.body.order;
                user.date=req.body.date;
                user.payment=req.body.payment;
                user.product=req.body.product;
                user.customer=req.body.customer;
                user.phone=req.body.phone;
                user.weight=req.body.weight;
          
          user.save((err,user)=>{
            if(err){
              
                res.status(500).json({errmsg:err})
            }else{
                res.status(200).json({msg:user})
            }
          })  
        })
      
        })
        router.delete("/delete/:id",(req,res,next)=>{
            User.findOneAndRemove({_id:req.params._id},(err,user)=>{
                if(err){
                    res.status(200).json({msg:user})
                res.status(500).json({errmsg:err})  
                }
            })
           
            })
module.exports =router;