import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/taskService";
import type { Task } from "../types/task";

export default function Tasks() {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [message, setMessage] = useState("");

  async function loadTasks() {
    if (!user) return;

    const data = await getTasks(user.uid);
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, [user]);

  async function handleAddTask() {
    if (!user) {
      setMessage("No hay usuario logueado.");
      return;
    }

    if (!title.trim()) {
      setMessage("El título es obligatorio.");
      return;
    }

    try {
      await createTask({
        title,
        description,
        completed: false,
        userId: user.uid,
        createdAt: Date.now(),
      });

      setTitle("");
      setDescription("");
      setMessage("Tarea creada correctamente.");

      await loadTasks();
    } catch (error) {
      console.error(error);
      setMessage("Error creando tarea. Revisa Firestore Rules.");
    }
  }

  async function handleToggle(task: Task) {
    await updateTask(task.id, {
      completed: !task.completed,
    });

    await loadTasks();
  }

  async function handleDelete(id: string) {
    await deleteTask(id);
    await loadTasks();
  }

  return (
    <main className="container">
      <h1>Tasks</h1>

      {message && <p>{message}</p>}

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <hr />

      <h2>Lista de tareas</h2>

      {tasks.length === 0 ? (
        <p>No hay tareas todavía.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card">
            <h3>{task.completed ? "✅" : "⬜"} {task.title}</h3>
            <p>{task.description}</p>

            <button onClick={() => handleToggle(task)}>
              Completar
            </button>

            <button onClick={() => handleDelete(task.id)}>
              Eliminar
            </button>
          </div>
        ))
      )}
    </main>
  );
}