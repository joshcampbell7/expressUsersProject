const express = require('express')
const {
    getAllUsers,
    addNewUser,
    getUserByID,
    addNewUserForm
} = require('../controllers/userController')

const router = express.Router()


//get all users
router.get('/',getAllUsers)
//add new user
router.post('/',addNewUser)

//user form
router.get('/newuser',addNewUserForm)

//get by ID
router.get('/:userID',getUserByID)






module.exports = router