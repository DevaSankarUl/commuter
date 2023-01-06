const express = require('express')
const services = require('../controllers/adminController')
const router = express.Router()

router.post('/adminLog',services.adminLogin)
router.get('/userInfo',services.userInfo)
router.put('/block/:id',services.blockUser)
router.put('/unblock/:id',services.unblockUser)
module.exports = router