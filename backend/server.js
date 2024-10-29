const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors({
        origin:['http://localhost:4321'],
        credentials:true
    })
)

app.get('/',(req,res)=>{
    res.send("<h1 style='color:red'> Good news! </h1>")
})


app.post('/products',(req,res)=>{
    const products =[{id:1, name:'Laptop'},{id:2,name:"CCTV"},{id:3,name:"Camera"}];
    return res.json(products);
})


app.listen(3000,()=>{
    console.log('server is listening at : http://localhost:3000')
})