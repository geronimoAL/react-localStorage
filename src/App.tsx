import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreadorTarea from "./components/CreadorTarea";
function App() {
  const [tareas, setTareas] = useState([
    { name: "mi primer tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercer tarea", done: false },
  ]);
  function crearTarea(tareaNueva:string) {
  if(!tareas.find(tarea => tarea.name === tareaNueva)){
    setTareas([...tareas, {name:tareaNueva, done:false}])
  }
  }
  return (
    <>
      <CreadorTarea crearTarea={crearTarea} />
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.name}>
              <td>{tarea.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
