import React, { useEffect, useState } from "react";

const ToDoList = () => {

    function addTask () {
        setTasks([...tasks, input])
        
    }

    function deleteTask () {
        console.log("Delete Task" )
    }

    const[input, setInput] = useState("")

    const [tasks, setTasks] = useState (['Tarea 01', 'Tarea 02', 'Tarea 03'])

    useEffect ( () => {
        console.log("Tasks cambio")
    }, [tasks])

    function oprimioEnter (e) {
        if (e.keyCode == 13 || e.key === "Enter") {
            addTask()
            setInput("")
        }
    }


    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card shadow-sm">
                            <div className="p-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    
                                    <h1 className="h3 mb-0">To-Do List</h1>

                                </div>

                            <div className="input-group mb-3">

                                <input className="form-control" type="text" placeholder="Nueva tarea" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={oprimioEnter} />
                                
                            </div>

                            <ul className="list-group">
                                {tasks.map((tarea, index) => (
                                <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                                    
                                    <span className="d-flex align-items-center gap-2"> <span className="badge text-bg-light border">{index + 1}</span> { tarea }</span> <button type="button" className="btn btn-sm" onClick={deleteTask}>❌</button>

                                </li>
                                ))}
                            </ul>

                            </div>

                            <div className="card-footer bg-body-tertiary d-flex justify-content-between">

                                <span className="text-secondary small"> Enter para agregar </span>
                                <span className="text-secondary small"> Total: <strong>{ tasks.length }</strong> </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList