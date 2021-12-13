import React, { useState, useEffect } from 'react';

export default function Count() {
    const [todo, setTodo] =  useState('')
    const [todolist, setTodolist] =  useState(['task 1', 'task 2'])
    const [lastitem, setLastitem] = useState (0)
    useEffect(() => {
        localStorage.setItem("todos", todolist)
        setLastitem(todolist.length - 1)
    }, [todolist])

    return (
        <div>
            <h1>To do :</h1>
            { todolist.map((item, index) => {
                return (
                    <p style={{color: index === lastitem ? "red" : ""}} key={index}>{item}</p>
                )
            })}
            <input type="text" onChange={event => setTodo(event.target.value)} value={todo}/>
            <button onClick={() => (setTodolist(todolist => [...todolist, todo]), setTodo(''))}>Add Todo</button>
        </div>
    )
}