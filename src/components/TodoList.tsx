import type { Task } from "../types/task";

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggle: (
    id: string,
    completed: boolean
  ) => void;
}

export default function TodoList({
  tasks,
  onDelete,
  onToggle,
}: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              onToggle(
                task.id,
                !task.completed
              )
            }
          />

          <button
            onClick={() =>
              onDelete(task.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}