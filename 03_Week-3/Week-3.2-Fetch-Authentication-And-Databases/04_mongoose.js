const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.3zfxy.mongodb.net/userappnew");

const User = mongoose.model('Users', {name: String, email: String, password: String});


app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("User already exists");
    }

    const user = new User({
        name: name, 
        email: username, 
        password: password
    });
    
    await user.save();
    res.json({
        "msg": "User created successfully"
    })
  })

app.listen(3000);