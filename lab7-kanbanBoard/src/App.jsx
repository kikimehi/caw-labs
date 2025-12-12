import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Column from "./components/Column";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  }

  const addTask = (title, date , description) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      date ,
      description,
      status: "todo",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const moveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <>
      <h1>Kanban Board</h1>
      <TaskForm addTask={addTask} />

      <div className="board">
        <Column id ="todo-column"
          title="To Do"
          status="todo"
          tasks={tasks.filter((t) => t.status === "todo")}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
        <Column id ="inprogress-column"
          title="In Progress"
          status="inprogress"
          tasks={tasks.filter((t) => t.status === "inprogress")}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
        <Column id ="done-column"
          title="Done"
          status="done"
          tasks={tasks.filter((t) => t.status === "done")}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}
