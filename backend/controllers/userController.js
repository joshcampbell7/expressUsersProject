const user = require('../models/userModel')
const mongoose = require('mongoose')






//get all users
const getAllUsers = async(req,res) =>{
    try{
        const users = await user.find({})
        res.status(200).json(users)
        // res.status(200).render('users',{users})
    }
    catch(error){
        res.status(400).json({error : error.messsage})
    }
}

//get user by ID

const getUserByID = async(req,res) =>{
    try{
        const {userID} = req.params
        const foundUser = await user.findOne({userID:userID})

        if(!foundUser){
            return res.status(404).json({message:"user does not exist"})
        }
        res.status(200).json(foundUser)

    }
    catch(error){
        console.log(error.message)
    }
}

const addNewUserForm = (req,res) =>{
    try{
        res.render('addNewUser')
    }
    catch(error){
        res.status(400).json({error : error.messsage})
    }
}

//Add a new user
const addNewUser = async(req,res) =>{
    const {name,age,team} = req.body

    try{
        let userID =  (Math.random() + 1).toString(36).substring(7);
        const newUser = await user.create({userID,name,age,team})
        res.status(200).json(newUser)
        console.log("New workout added")
    }
    catch(error){
        res.status(400).json({error : error.messsage})
    }
}



module.exports = {
    getAllUsers,
    addNewUser,
    getUserByID,
    addNewUserForm
}