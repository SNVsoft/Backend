
const express =require('express');
 require ("dotenv").config();
// const app = express();
const User = require('./models/userModel')
// const port = process.env.port ||8080;
const cors = require('cors');
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser')
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type", "x-requested-with");
//     next();
//   })
app.get('/',(req,res)=>{
    res.send("welcome to snv ")
})
const authRoute = require('./routes/auth.route');
const route =require('./routes/router')
const adminRoute = require('./routes/adminRoute');
const mongoose = require('mongoose');

const paymentRoute = require('./routes/paymentRoute');

mongoose.connect('mongodb://localhost:27017/ums'),
// const express =require('express');
require("dotenv").config();
const app = express();
const port = process.env.port || 8080;
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser')
// // app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "*");
// //     res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
// //     res.setHeader("Access-Control-Allow-Headers", "Content-Type", "x-requested-with");
// //     next();
// //   })
// app.get('/',(req,res)=>{
//     res.send("welcome my")
// })
// const authRoute = require('./routes/auth.route');
// const route =require('./routes/router')

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/joprodex',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     family: 4,
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));
// app.use(bodyParser.urlencoded({ extended: false }))
// const paymentRoute = require('./models/paymentController');
// app.use(bodyParser.json());
// app.use('/auth',authRoute);
// app.use('/route',route)
// app.use(cors());

// app.listen(port,()=>{
//     console.log("server connected",port);
// })
// var express = require('express');
// require("dotenv").config();
// var port = process.env.PORT || 8080;
// var app = express();
// var appRoutes = require('./routes/router');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser')
// const cors = require('cors');
// const bcrypt = require('bcrypt');

app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type", "x-requested-with");
        next();
      })
    app.get('/',(req,res)=>{
        res.send("welcome to")
    })
const authRoute = require('./routes/auth.route');
const route =require('./routes/router');
mongoose.connect('mongodb://localhost:27017/joprodex',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})

.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/auth',authRoute);
app.use('/route',route);
app.use('/',paymentRoute);



//for user routes

app.use('/admin',adminRoute);
const paymentRoute = require('./models/paymentController');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', appRoutes);
app.use('/route',route);
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello')
})
// app.post('/snv',(req,res,next)=>{
//     const newuser = new User({
//         name:req.body.name,
//         email:req.body.email,
//         subject:req.body.subject,
//         message:req.body.message
    
//     })
//     newuser.save()
//     .then(()=>{
//      res.json({success:true,message:'MESSAGE SUCCESSFULLY'})
//     })
//     .catch((err)=>{
       
//         res.json({success:false,message:'MESSEGE SENDING FAILED'})
//        })
    

    app.post('/ums',(req,res,next)=>{
       const ums = new User ({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:req.body.password
       })
       ums.save()
    .then(()=>{
     res.json({success:true,message:'USER LOGIN SUCCESSFULLY'})
    })
    .catch((err)=>{
       
        res.json({success:false,message:'USER LOGIN FAILED'})
        })
    })

    // app.post('/application',(req,res,next)=>{
    
    // const myuser = new applyusers({
    //     position:req.body.position,
    //     first_Name:req.body.first_Name,
    //     last_Name:req.body.last_Name,
    //     contry:req.body.contry,
    //     teliphone:req.body.teliphone,
    //     email:req.body.email,
    //     gender:req.body.gender,
    //     address:req.body.address,
    //     education:req.body.education,
    
    // })
    // myuser.save()
    // .then(()=>{
    //  res.json({success:true,message:'APPLICATION FORM APPLY SUCCESSFULLY'})
    // })
    // .catch((err)=>{
       
    //     res.json({success:false,message:'APPLICATION FORM SENDING FAILED'})
    //     })
    // })


app.listen(port,()=>{
    console.log('just i created server')
});

