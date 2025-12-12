export default function TaskCard({ task, moveTask, deleteTask }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Due Date: {task.date }</p>
      <p>{task.description}</p>
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {task.status !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>To Do</button>
        )}
        {task.status !== "inprogress" && (
          <button onClick={() => moveTask(task.id, "inprogress")}>
            In Progress
          </button>
        )}
        {task.status !== "done" && (
          <button onClick={() => moveTask(task.id, "done")} style={{ background: "#10b981" }}>Done</button>
        )}

        <button onClick={() => deleteTask(task.id)} style={{ background: "#ef4444" }}>Delete</button>
      </div>
    </div>
  );
}
