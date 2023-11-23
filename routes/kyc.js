const user = require('../models/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const securePassword = async(password)=>{
    try {
        const passwordHash = await bcrypt.hash(password,10);
        return passwordHash;

    } catch(error){
        console.log(error.message);
    }


    loadRegister= async(req,res)=>{

    try { 
        res.render('registration');

    } catch (error) {
        console.log(error.message);

    }
}
}
const insertUser = async(req,res)=>{

    try {
        const spassword = await user.securePassword(req.body.password);
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mno,
            password:req.body.spassword,
            is_admin:0

        });

        const userData = await user.save();

        if(userData){
            sendVerifymail(req.body.name, req.body.email,userData._id);
            res.render('registration',{message:"your registration has been successfully,please verify your mail",});
        }
        else{
            res.render('registration',{message:"your registration has been faile."});
        }
    }  catch (error) {
        console.log(error.message);
    }   
} 
const sendVerifymail = async(name, email, user_id)=>{
    try {
        const transporter = nodemailer.createTransport({
            host:'snv.gmail.com',
            port:5000,
            secure:false,
            requireTLS:true,
            auth:{
                user:'snvsolutions@gmail.com',
                pass:''
            }
        });
        const mailOptions = {
                
                from: 'snvsolutions@gmail.com',
                to:email,
                subject:'for varification mail',
                html:'<p>hii '+name+'please click here to <a href=""'
            
        }
        transporter.sendMail(mailOptions, function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log("Email has been sent:- ",info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}         
loadRegister = async(req,res)=>{
    try {
        res.render('registrstion');
    } catch(error) {
        console.log(error.message);

    }
}
const verifyMail = async(req,res)=>{
    try {
        const updateInfo = await user.updateOne({_id:req.query.id},{$set:{is_verified }});
        console.log(updateInfo);
        res.render("email-verified");
    } catch (error){
        console.log(error.message);
    }
}
        
module.exports = {
    loadRegister,
    insertUser,
    verifyMail
}
