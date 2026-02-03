import React, { useState } from "react";

const ToDoList = () => {


    const [homework, setHomework] = useState ("")

    const tasks = ['Llevar a Ramon al Veterinario', 'Comprar croquetas', 'Limpiar el arenero']

    function getHomework (e) {
        console.log(e.target.value)
        setHomework (e.target.value)
    }

    return (
        <div className="mb-3 m-5">
            <label htmlFor="inputHomework" className="form-label fs-2">To-do List</label>
            <p> { tasks.map } </p>
            <input type="text" value={homework} onChange={getHomework} className="form-control" id="inputHomework" placeholder="Add a task"/>
            <button className="mt-3">Agregar</button>
        </div>
    )
}

export default ToDoList