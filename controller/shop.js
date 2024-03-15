const dirname=require('../util/path')
const path=require('path');
exports.getShopController=(req,res,next)=>{
    res.sendFile(path.join(dirname,'views','shop.html'));
}