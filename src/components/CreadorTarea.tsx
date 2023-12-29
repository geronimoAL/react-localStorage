import React, { useState } from "react";
interface CreadorTareaProps {
  crearTarea: (tarea: string) => void;
}
function CreadorTarea({ crearTarea }: CreadorTareaProps) {
  const [tarea, setTarea] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    crearTarea(tarea);
    setTarea("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-9">
          <input
            type="text"
            name="tarea"
            placeholder="Ingresa una nueva tarea"
            value={tarea}
            onChange={(e) => {
              setTarea(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary"> Guardar tarea</button>
        </div>
      </form>
    </>
  );
}
export default CreadorTarea;
