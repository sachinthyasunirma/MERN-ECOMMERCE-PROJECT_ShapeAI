const userModel  = require('../../model/user-model/user.model');
const jsonwebtoken = require('jsonwebtoken');

const{
    generateJwtToken
}=require('../../helper/common.index');


signUp = (req,res)=>{
    const{
        firstName,
        lastName,
        email,
        password,
    }=req.body
    userModel.findOne({
        email: email
    }).exec((error,admin)=>{
        if(error){
            return res.status(400).json({
                message:"please contact administration"
            })
        }
        if(admin){
            return res.json({
                success:false,
                message:"This Email already exits"
            })
        }
        const _admin = new userModel({
            firstName, lastName, email, password,
            role:"admin",
            userName: Math.random().toString()
        });
        _admin.save((error,data)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:false,
                    message:"bad authentication"
                })
            }
            if(data){
                const token = generateJwtToken(data._id, data.role);
                return res.status(200).json({
                    sucess:true,
                    message:"create account successfully",
                    data:{
                        data,
                        token:token
                    }
                })
            }
        })
    })
}

signIn = (req,res)=>{
    const{
        email,
        password
    }=req.body
    userModel.findOne({
        email:email
    }).exec((error,data)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:"please contact administration"
            })
        }
        if(data){
            const token = generateJwtToken(data._id, data.role)
            const isAuthentication = data.authenticate(password);
            if(isAuthentication){
                return res.status(200).json({
                    success:true,
                    data:{
                        data: {
                            user: {
                                fullname: data.fullname,
                                email: data.email
                            }
                        },
                        token:token
                    }  
                })
            }else{
                return res.json({
                            success:false,
                            message:"admin Login failed. Bad Authentication",

                })
            }
        }else{
            return res.json({
                success:false,
                message:"admin Email Does not exist."
            })
        }
    })
}
module.exports = {
    signUp,
    signIn
}