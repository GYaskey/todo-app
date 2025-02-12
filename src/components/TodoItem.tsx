import React from "react";

interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean };
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-md shadow-md">
      <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
