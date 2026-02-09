import React, { useState } from "react";

const ToDoList = () => {

    function addTask () {
        setTasks([...tasks, input])
        
    }

    const[input, setInput] = useState("")

    const [tasks, setTasks] = useState (['Tarea 01', 'Tarea 02', 'Tarea 03'])

    function oprimioEnter (e) {
        if (e.keyCode == 13) {
            addTask()
            setInput("")
        }
    }


    return (
        <>
            <h1>To-Do List</h1>
            <div>{tasks.map((tarea, index) => <p key={index}> {tarea} </p>)}</div>

            <input className="form-control my-3" type="text" onKeyDown={oprimioEnter} placeholder="Nueva Tarea" value={input} onChange={ (e) => {
             console.log(e.target.value)
             setInput(e.target.value)
            }} ></input>

            <p>Total de tareas: {tasks.length}</p>
        </>
    )
}

export default ToDoList