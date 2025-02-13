import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; title: string; completed: boolean }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {todos.map((todo) => (
        <div className="w-1/4" key={todo.id}>
          <TodoItem todo={todo} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
