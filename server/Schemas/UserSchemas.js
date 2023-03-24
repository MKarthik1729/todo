const mongoose = require("mongoose");

const Schema = mongoose.Schema;
/*
{
    "user" : "karthik",
    "email":"karthik.m20@iiits.in",
    "password":"1234",
    "todo":[{
        "title":"First work",
        "description":"random work",
        "isDone":false
    },
    {
        "title":"second work",
        "description":"random work",
        "isDone":false
    }]
}
*/

let NewUser = new Schema({
  user:{type: String,required:true},
  email:{type: String,required:true}, 
  password:{type: String,required:true},
  todo:[{
    title:{type: String,required:true},
    description:{type: String,required:true},
    isDone:{type:Boolean}
  }] 
});

const model = mongoose.model("Users", NewUser);
module.exports = model;