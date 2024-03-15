const path=require('path');
const dirname=require('../util/path')
exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(dirname,'views','contactus.html'));
}
exports.postContactUs=(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(dirname,'views','success.html'));
}