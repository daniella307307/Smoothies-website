const User = require('../models/User')

const register = async(req, res)=>{
    const {name, username, email, password, confirmPassword} = req.body;
    const UserExists = await User.findOne(email)
    if (UserExists){
       res.status(400).json({message: "User found in the database"})
    }

}