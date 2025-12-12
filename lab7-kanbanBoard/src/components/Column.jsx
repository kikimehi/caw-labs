import TaskCard from "./TaskCard";

export default function Column({ id, title, tasks, moveTask, deleteTask }) {
  return (
    <div id={id} className="column">
      <h2>{title}</h2>

      {tasks.length === 0 && <p className="empty">No tasks</p>}

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} moveTask={moveTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
