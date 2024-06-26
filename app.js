// 引入配置文件
const config=require('./config')
console.log(config);

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('OK')
})

app.listen(config.app.port,()=>{
    console.log(`Runing at http://localhost:${config.app.port}`);
})