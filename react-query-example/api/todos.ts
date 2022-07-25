import { fetchJson } from "./index";

export const getTodos = () =>
    fetchJson("https://jsonplaceholder.typicode.com/todos/");

export const addTodo = (newTodo: any) =>
    fetchJson("https://jsonplaceholder.typicode.com/todos/", {
        method: "Post",
        body: JSON.stringify(newTodo),
    });
