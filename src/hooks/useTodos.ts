import { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid'; 

interface Todo {
  id: string; 
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=10'
        );
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          id: nanoid(), 
          title,
          completed: false,
        }
      );
      setTodos((prevTodos) => [response.data, ...prevTodos]);
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo', error);
    }
  };

  return { todos, addTodo, deleteTodo };
};

export default useTodos;
