const express = require("express");

const app = express.Router();
const Trail = require('../Schemas/trailschema')
const NewUser = require('../Schemas/UserSchemas');
//register
app.post('/register',(req,res)=>{
    console.log(req.body);
    const User = new NewUser(req.body)
    User.save()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    res.send({...req.body,status:'successfull'})
})

//login
app.post('/login',async(req,res)=>{
    const found =await NewUser.findOne(req.body)
    console.log({user:found})
    if(found !== null){
    res.send({user:found.user,
    todo:found.todo
    })
    }
    else res.send('')
})

app.post('/addtask',async(req,res)=>{

    const filter = {user:req.body.user}
    const update = {
        $push:{
            todo : [req.body.todo]
        }
    }
    const result = await NewUser.updateOne(filter, update);
    console.log(result)
    res.send(result)
})

app.post('/changeStatus',async(req,res)=>{
    const result = await NewUser.aggregate([
        {$match: {user: req.body.user}},
        {$unwind: "$todo"},
        {$replaceRoot: {newRoot: "$todo"}},
        {$match: {title: req.body.title}},
        {$set:{
            isDone:req.body.status
        }}
       ]);
    console.log(result)
       res.send(result)
})

app.post('/alltasks',async(req,res)=>{

    const result = await NewUser.findOne({
        user:req.body.user
    })
    .catch(err=>console.log(err))   
    res.send(result.todo)
})


app.post('/trail',(req,res)=>{
    console.log(req.body);
    const Product = new Trail(req.body)
    Product.save()
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    res.send('Recieved successfully')
})

module.exports = app;