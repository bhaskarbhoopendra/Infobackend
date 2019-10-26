const express = require('express');
const router = express.Router();
const {create,list,read,remove} = require('../controlllers/tags')
 
// Validators
const {tagsCreateValidator} = require('../validators/tags');
const {runvalidation} = require('../validators/index');
const {requireSignin,authMiddleware,adminMiddleware} = require('../controlllers/auth')

router.post("/tag",tagsCreateValidator,runvalidation,requireSignin,adminMiddleware,create);
router.get('/tags',list);
router.get('/tag/:slug',read);
router.delete('/tag/:slug',requireSignin,adminMiddleware,remove);

module.exports = router;