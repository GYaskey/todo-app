import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; title: string; completed: boolean }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div className="grid grid-cols-5 gap-5 justify-center m-auto">
      {todos.map((todo) => (
        <div className="w-full" key={todo.id}>
          <TodoItem todo={todo} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
