import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: {
    title: string;
    description: string;
  }) => void;
}

export default function TodoForm({
  onSubmit,
}: Props) {
  const { register, handleSubmit, reset } =
    useForm();

  const submit = (data: any) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        {...register("title")}
        placeholder="Title"
        required
      />

      <textarea
        {...register("description")}
        placeholder="Description"
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}