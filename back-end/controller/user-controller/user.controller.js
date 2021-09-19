const userModel  = require('../../model/user-model/user.model');
const jsonwebtoken = require('jsonwebtoken');

generateJwtToken = (_id) => {
    return jsonwebtoken.sign({
        id: _id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    });
}

signUp = (req,res)=>{
    const{
        firstName,
        lastName,
        email,
        password,
    }=req.body
    userModel.findOne({
        email: email
    }).exec((error,user)=>{
        if(error){
            return res.status(400).json({
                message:"please contact administration"
            })
        }
        if(user){
            return res.json({
                success:false,
                message:"This Email already exits"
            })
        }
        const _user = new userModel({
            firstName, lastName, email, password,
            userName: Math.random().toString()
        });
        _user.save((error,data)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:false,
                    message:"bad authentication"
                })
            }
            if(data){
                const token = generateJwtToken(data._id);
                return res.status(200).json({
                    sucess:true,
                    message:"crate account successfully",
                    data:{
                        data,
                        token:token
                    }
                })
            }
        })
    })
}
module.exports = {
    signUp,
}