import Tarea from "../interface/tarea";
import TareaFila from "./TareaFila";
interface Tareas {
  tareas: Tarea[];
  cambiarValorDone: (tarea: Tarea) => void;
  showCompleted: boolean;
}
function TablaTarea({ tareas, cambiarValorDone, showCompleted }: Tareas) {
  const tareaTablaFila = (valorDone: boolean) => {
    return tareas
      .filter((tarea) => tarea.done === valorDone)
      .map((tarea) => (
        <TareaFila
          tarea={tarea}
          key={tarea.name}
          cambiarValorDone={cambiarValorDone}
        />
      ));
  };

  return (
    <>
      <table className="table mt-3">
        <thead className="table-dark">
          <tr>
            <th scope="col">Tareas</th>
            <th scope="col">{showCompleted ? "Desmarcar" : "Marcar"}</th>
          </tr>
        </thead>
        <tbody>{tareaTablaFila(showCompleted)}</tbody>
      </table>
    </>
  );
}

export default TablaTarea;
