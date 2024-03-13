const express=require('express')
const path=require('path');

const bodyParser=require('body-parser')
const app=express();
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const contactusrouter=require('./routes/contactus')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(shopRouter);
app.use("/admin",adminRouter);
app.use("/contactus",contactusrouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(4000);