import DeleteButton from './DeleteButton';

interface TodoItemProps {
  todo: { id: string; title: string; completed: boolean }; 
  onDelete: (id: string) => void; 
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex justify-between items-center min-h-[150px]">
      <span
        className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-900"} line-clamp-2`}
      >
        {todo.title}
      </span>
      <DeleteButton onDelete={() => onDelete(todo.id)} />
    </div>
  );
};

export default TodoItem;
