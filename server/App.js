const express = require('express')
const BodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
// const Database = require('./connections/MongoDB')


const Trail = require('./Schemas/trailschema')
const NewUser = require('./Schemas/UserSchemas')
mongoose.connect(
    // `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    'mongodb+srv://karthik:12345677@cluster0.qttfhba.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });


const app = express()
const PORT = 4000

app.use(
	cors({
		origin: ["http://localhost:3000"],
	})
);

// app.use(cors(corsOptions))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

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

    // const filter = { user: req.body.user, todo: { $elemMatch: { title : req.body.title } } }

    // const result = await NewUser.updateOne(filter, update);
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
    // console.log(result.todo)
    res.send(result.todo)
})


app.post('/trail',(req,res)=>{
    // Database();
    console.log(req.body);
    const Product = new Trail(req.body)
    Product.save()
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    res.send('Recieved successfully')
})

app.listen(PORT,()=>{
    console.log(`App listening Properly tp port  :  ${PORT}`)
})