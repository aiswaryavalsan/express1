const express=require('express');
const shopController=require('../controller/shop')
const router=express.Router();
router.get('/',shopController.getShopController)
 module.exports=router;
