// const router= require('express').Router();
// var User = require('../models/crud');
// router.post("/create",(res,req,next)=>{
//     var newuser = new User({
//         order:req.body.order,
//         date:req.body.date,
//         payment:req.body.payment,
//         product:req.body.product,
//         customer:req.body.customer,
//         phone:req.body.phone,
//         weight:req.body.weight,
//     })
//     newuser.save((err,user)=>{
//    if(err){
//     res.status(200).json({msg:user})
//     res.status(500).json({errmsg:err})
//    }
//     })

// })
// router.get("/read",(req,res,next)=>{
//     User.find({},(err,user)=>{
//         if(err){
//             res.status(500).json({errmsg:err});
      
//         }else{
            
//             res.status(200).json({msg:user});
//         }
//     });

//     })
//     router.put("/update",(req,res,next)=>{
//         User.findById(req.body._id,(err,user)=>{
        
//                 user.order=req.body.order;
//                 user.date=req.body.date;
//                 user.payment=req.body.payment;
//                 user.product=req.body.product;
//                 user.customer=req.body.customer;
//                 user.phone=req.body.phone;
//                 user.weight=req.body.weight;
          
//           user.save((err,user)=>{
//             if(err){
              
//                 res.status(500).json({errmsg:err})
//             }else{
//                 res.status(200).json({msg:user})
//             }
//           })  
//         })
      
//         })
//         router.delete("/delete/:id",(req,res,next)=>{
//             User.findOneAndRemove({_id:req.params._id},(err,user)=>{
//                 if(err){
//                     res.status(200).json({msg:user})
//                 res.status(500).json({errmsg:err})  
//                 }
//             })
           
//             })
// module.exports =router;

var express = require('express');
var router = express.Router();
var User = require('../models/crud');

router.post('/create',(req, res, next)=>{
    
    var newuser = new User({
        order:req.body.order,
        date:req.body.date,
        payment:req.body.payment,
        product:req.body.product,
        customer:req.body.customer,
        phone:req.body.phone,
        weight:req.body.weight,
<<<<<<< HEAD
=======
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
>>>>>>> 5809e9248e9f51a370316d3ae86a5c95652cd1a0
    });
    newuser.save((err,user)=>{
           if(err)
            res.status(200).json({msg:"user"});
            res.status(500).json({errmsg:err});
           
            });

});
router.post('/login',(req,res)=>{
    
    User.find({order:req.body.order}).exec().then((result)=>{
        if(result.length<1){
         return res.json({success:false,message:'User not found'})
        }
        const user = result[0];
        bcrypt.compare(req.body.date,user.date,(err,ret)=>{
            if(ret){
                const payload={
                  userId:user._id
                }
                const token=jwt.sign(payload,"webBatch")
                return res.json({success:true,token:token,message:"login successfully"})
               
            }else{
                return res.json({success:false,message:"login failed"})
            }
        })
    }).catch(err=>{
        res.json({success:false,message:'Authentication failed'})
    })
});

router.get('/read',(req, res, next)=>{
    User.find({},(err,user)=>{
                if(err){
                    res.status(500).json({errmsg:err});
              
                }else{
                    
                    res.status(200).json({msg:user});
                }
           })
      });

router.put('/update',(req, res, next)=>{
    User.findById(req.body._id,(err,user)=>{
        if(err)
         res.status(500).json({errmsg:err})
        
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
                    }
                
                      res.status(200).json({msg:user})
                      

                });
    })

});

router.delete('/delete',(req, res, next)=>{
    User.findOneAndRemove({_id:req.params._id},(err,user)=>{
                        if(err){
                            res.status(200).json({msg:user});

                        res.status(500).json({errmsg:err});
                        }
                    });
})

module.exports = router;