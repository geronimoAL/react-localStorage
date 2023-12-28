import React from 'react'
import Tarea from '../interface/tarea'
import TareaFila from './TareaFila'
interface Tareas{
    tareas:Tarea[]
    cambiarValorDone: (tarea: Tarea) => void;
}
function TablaTarea({tareas,cambiarValorDone}:Tareas) {
  return (
    <>
       <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <TareaFila tarea={tarea} key={tarea.name} cambiarValorDone={cambiarValorDone}/>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TablaTarea