import { useState, useEffect } from "react";
import axios from "axios";

const useTodos = () => {
  const [todos, setTodos] = useState<{ id: number; title: string; completed: boolean }[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    try {
      const newTodo = { id: Date.now(), title, completed: false }; 
      setTodos((prevTodos) => [newTodo, ...prevTodos]); 
      await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo); 
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); 
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  return { todos, addTodo, deleteTodo };
};

export default useTodos;
