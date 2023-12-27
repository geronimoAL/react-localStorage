"use client"
import React, { useState } from 'react'
function CreadorTarea () {
  const [tarea, setTarea] = useState("")
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    localStorage.setItem("task",tarea)
    setTarea("")
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="tarea"
            placeholder="Ingresa una nueva tarea"
            value={tarea}
            onChange={(e) => {
              setTarea(e.target.value);
            }}
          />
          <button> Guardar tarea</button>
        </form>
      </>
    );

}
export default CreadorTarea;