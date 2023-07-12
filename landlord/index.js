const express=require('express')
const path =require('node:path/posix')


const app=express()


app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname+'/register.html'))
})


app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/login.html'))
})


app.listen(5000,()=>{
    console.log('server running')
})