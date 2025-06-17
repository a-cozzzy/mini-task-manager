import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* Table Header */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                  <span
                    className={`badge ${
                      task.status === "done"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className='text-center'>
                  <Task task={task} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className='text-center text-gray-500'>
                No tasks available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
