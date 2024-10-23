const express = require('express');
const cors = require("cors");
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("hello world");
})

app.post('/todo', async (req, res)=>{
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            message: "You have sent the wrong inputs"
        })
        return;
    }

    // else -> mongodb put code

    await todo.create({
        title: parsePayLoad.data.title,
        description: parsePayLoad.data.description,
        completed: false
    })

    res.json({
        message: "Todo created"
    })
})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    });
})

app.put('/completed', async(req, res)=>{
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            message: "You have sent the wrong inputs"
        })
        return;
    }

    // else -> mongodb update code

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
})


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})