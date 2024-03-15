const path=require('path');
const dirname=require('../util/path')
exports.getAddProduct=(req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST">Product:<input type="text" name="product"/><br/>Size:<input type="number" name="size"/><button type="submit">Add Product</button></form>')
    res.sendFile(path.join(dirname,'views','add-product.html'))
}
exports.postAddProduct=(req,res,next)=>{
   
    console.log(JSON.stringify(req.body));
    res.redirect('/');
   
}