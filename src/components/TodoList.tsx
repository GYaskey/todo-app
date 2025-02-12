import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; title: string; completed: boolean }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
