import { useState } from "react";

//Todo list, lista de tareas

function App() {
  //Listado de tareas, valor inicial para array
  const [tasks, setTasks] = useState([]);
  //Tarea nueva, valor inicial para string
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    //validar que no te llegue vacío
    //trim() - poda - elimina espacios adelante y atras de un string
    if (newTask.trim() !== "") {
      console.log(newTask);
      //spread operator ... trae todo
      //Añado una tarea nueva a las ya existentes
      setTasks([...tasks, { text: newTask }]);
      //limpiar el input con el texto anterior
      setNewTask("");
    }
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ color: "red" }}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
