const User = require('../models/user')


exports.getall = async(req,res)=>{
    try{
        const user1 =await User.find()
        res.status(200).json({
            sucess:true,
            data:user1
        })}
        catch(e){
            res.status(400).json({
                sucess:false,
                error:e.message
            })
        }
};

exports.getbyid = async(req,res) =>{
    try {
        const userId = req.params.id
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            })}
        
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


exports.create = async(req,res)=>{
    try {
        const newuser = await User.create(req.body);
        res.status(200).json({
            success: true,
            data: newuser
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


exports.update = async(req,res)=>{
    try {
        const userId = req.params.id
        
        const user = await User.findByIdAndUpdate(userId,req.body);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            })}
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }

};


exports.delete = async(req,res) =>{
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            })}
       
        res.status(200).json({
            success: true,
            message:"sucessfully deleted"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};
