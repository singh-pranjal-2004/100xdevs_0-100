// npm init -y
// npm install express
// npm install body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('Hello World!');
})

app.get('/route-handler', (req, res)=>{
    res.json({
        name: "Pranjal",
        age: 20,
    });
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})