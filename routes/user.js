const express = require('express');
const router = express.Router();
const {requireSignin,authMiddleware,adminMiddleware} = require('../controlllers/auth')
const {read} = require('../controlllers/user')


router.get("/profile",requireSignin,adminMiddleware,read);

module.exports = router;