import Tarea from "../interface/tarea";
interface Tareas{
    tarea:Tarea,
    cambiarValorDone: (tarea: Tarea) => void;
}
function TareaFila({tarea,cambiarValorDone}:Tareas) {
  return (
    <>
      <tr key={tarea.name}>
        <td>{tarea.name}</td>
        <td>
        <input type="checkbox" checked={tarea.done}
         onChange={()=> cambiarValorDone(tarea)} />
         </td>
      </tr>
    </>
  );
}

export default TareaFila;
