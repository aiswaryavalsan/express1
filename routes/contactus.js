const express=require('express')
const router=express.Router();
const path=require('path');
const dirname=require('../util/path')
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(dirname,'views','contactus.html'));
});
router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(dirname,'views','success.html'));
});
module.exports=router;