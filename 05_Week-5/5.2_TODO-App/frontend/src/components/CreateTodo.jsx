import React, { useState } from 'react'

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} ></input>
        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }} ></input>

        <button onClick={()=>{
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            completed: true
                          }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        .then(async function(res){
                            const json = await res.json();
                            alert("Todo added");
                        })

                }} >Add a todo</button>
    </div>
  )
}

export default CreateTodo