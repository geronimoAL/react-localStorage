import React from 'react'
import Tarea from '../interface/tarea'
import TareaFila from './TareaFila'
interface Tareas{
    tareas:Tarea[]
    cambiarValorDone: (tarea: Tarea) => void;
    showCompleted:boolean
}
function TablaTarea({tareas,cambiarValorDone,showCompleted}:Tareas) {
 console.log(showCompleted)
 const tareaTablaFila=(valorDone:boolean)=>{

  return (
    tareas
    .filter(tarea=> tarea.done === valorDone)
    .map((tarea) => (
      <TareaFila tarea={tarea} key={tarea.name} cambiarValorDone={cambiarValorDone}/>
    ))
  )

 }

  return (
    <>
       <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
          tareaTablaFila(showCompleted)
          }
        </tbody>
      </table>
    </>
  )
}

export default TablaTarea