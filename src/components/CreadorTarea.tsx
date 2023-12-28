"use client"
import React, { useState } from 'react'
interface CreadorTareaProps {
  crearTarea: (tarea: string) => void;
}
function CreadorTarea ({crearTarea}:CreadorTareaProps) {
  const [tarea, setTarea] = useState("")
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    crearTarea(tarea)
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