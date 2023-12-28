import React from 'react'



function ControlTareas({SetMostrarCompletados,mostrarCompletados,borrarTareas,isChecked}:any) {
const limpiarTareas = ()=>{
   if( window.confirm("Estas seguro que quieres hacer esto?")){
    borrarTareas()
   }
}
  return (
    <>
     <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => SetMostrarCompletados(!mostrarCompletados)}
        />
        <label>Mostrar tareas hechas</label>
        <button onClick={()=>limpiarTareas()}>
            Limpiar
        </button>
      </div>
    </>
  )
}

export default ControlTareas