const express = require('express')
const router = express.Router( )   
const  {SignupDriver, loginDriver} = require('../controllers/DriverController')

//login
router.post('/login',loginDriver)
//signup    
router.post('/signupDriver',SignupDriver)




module.exports = router