const express = require("express");
const app = express();

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !== "Pranjal" || password !== "pass"){
        res.status(400).json({msg: "Incorrect Inputs...."});
    }else{
        next();
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg: "Incorrect Inputs."});
    }else{
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    
    res.send("You are Healthy.");

});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res){

    res.send("Your Kidney is fine.");

});

app.listen(3000);