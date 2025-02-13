import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodos";

const Home: React.FC = () => {
  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <div className="container m-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default Home;
