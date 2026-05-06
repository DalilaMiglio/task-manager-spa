import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/taskService";

import type { Task } from "../types/task";

export default function Tasks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    if (!auth.currentUser) return;

    const data = await getTasks(auth.currentUser.uid);
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleAddTask() {
    if (!auth.currentUser) return;

    if (!title || !description) return;

    await createTask({
      title,
      description,
      completed: false,
      userId: auth.currentUser.uid,
      createdAt: Date.now(),
    });

    setTitle("");
    setDescription("");

    await loadTasks();
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

      <div>
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

        <button onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 10,
            }}
          >
            <h3>
              {task.completed ? "✅" : "⬜"} {task.title}
            </h3>

            <p>{task.description}</p>

            <button
              onClick={() => handleToggle(task)}
            >
              Toggle
            </button>

            <button
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}