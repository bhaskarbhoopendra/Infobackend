const express = require('express');
const router = express.Router();
const {create,list,read,remove} = require('../controlllers/category')
 
// Validators
const {categoryCreateValidator} = require('../validators/category');
const {runvalidation} = require('../validators/index');
const {requireSignin,authMiddleware,adminMiddleware} = require('../controlllers/auth')

router.post("/category",categoryCreateValidator,runvalidation,requireSignin,adminMiddleware,create);
router.get('/categories',list);
router.get('/category/:slug',read);
router.delete('/category/:slug',requireSignin,adminMiddleware,remove);

module.exports = router;