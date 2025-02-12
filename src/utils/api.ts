import axios from "axios";

export const fetchTodos = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");

export const createTodo = (title: string) =>
  axios.post("https://jsonplaceholder.typicode.com/todos", {
    title,
    completed: false,
  });

export const deleteTodo = (id: number) =>
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
