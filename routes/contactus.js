const express=require('express')
const router=express.Router();
const contactUsController=require('../controller/contactus')
router.get('/',contactUsController.getContactUs);
router.post('/success',contactUsController.postContactUs);
module.exports=router;