const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.3zfxy.mongodb.net/5_2_Todo_App');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model("todo", todoSchema);

module.exports = {
    todo: todo
}
