const express = require('express')
const router = express.Router( )   
const  {SignupUser,loginUser} = require('../controllers/userController')

//login
router.post('/login',loginUser)
//signup    
router.post('/signup',SignupUser.register )
router.post('/activation',SignupUser.activateEmail)



module.exports = router