import React, { useState } from 'react'

function Todos({todos}) {

    const markAsCompleted = (id) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(async function(res) {
                alert("Todo marked as completed");
            })
    }

  return (
    <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => markAsCompleted(todo._id)} disabled={todo.completed} >{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
  )
}

export default Todos