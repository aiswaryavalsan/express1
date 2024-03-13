const express=require('express');
const dirname=require('../util/path')
const path=require('path');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(dirname,'views','shop.html'));
})
 module.exports=router;
