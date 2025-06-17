import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

//for getting alll tasks
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
  const todos: ITask[] = await res.json();
  return todos;
};

//adding new task
export const addTodo = async (
  todo: Omit<ITask, 'id' | 'createdAt'>
): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  const newTodo: ITask = await res.json();
  return newTodo;
};


//update existing task
export const editTodo = async (
  todo: Partial<ITask> & { id: string }
): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  const updatedTodo: ITask = await res.json();
  return updatedTodo;
};

//delete task
export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  });
};