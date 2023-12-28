import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreadorTarea from "./components/CreadorTarea";
import Tarea from "./interface/tarea";
import TablaTarea from "./components/TablaTarea";

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  function crearTarea(tareaNueva:string) {
  if(!tareas.find(tarea => tarea.name === tareaNueva)){
    setTareas([...tareas, {name:tareaNueva, done:false}])
  }
  }
  function cambiarValorDone(tarea:Tarea){
   setTareas(
   tareas.map(t=> (t.name==tarea.name) ? {...t,done: !t.done} : t )
  )
  }
  useEffect(()=>{
  let data= localStorage.getItem("tareas")
  if (data){
    setTareas(JSON.parse(data))
  }
  },[])
  useEffect(()=>{
  localStorage.setItem("tareas", JSON.stringify(tareas))
  },[tareas])

  return (
    <>
      <CreadorTarea crearTarea={crearTarea} />
      <TablaTarea tareas={tareas} cambiarValorDone={cambiarValorDone}/>
    </>
  );
}

export default App;
