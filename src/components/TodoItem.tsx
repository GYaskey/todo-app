interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean };
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex justify-between items-center min-h-[150px]">
      <span
        className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-900"} line-clamp-2`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
