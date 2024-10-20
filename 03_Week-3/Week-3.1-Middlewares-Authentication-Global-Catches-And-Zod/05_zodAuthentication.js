const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid"
        })
    }else{
        res.send({response});
    }
});


function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        msg: "Your inputs are invalid"
    }
    return;
})

app.listen(3000);
