
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST">Product:<input type="text" name="product"/><br/>Size:<input type="number" name="size"/><button type="submit">Add Product</button></form>')
    
})
app.post('/product',(req,res,next)=>{
   
    console.log(JSON.stringify(req.body));
    res.redirect('/');
   
})
app.use('/',(req,res,next)=>{
    res.send('<h1>welcome to Express</h1>')
})
app.listen(4000);