import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onAddTask, onUpdateTask, onDeleteTask, filter }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "today") {
      const today = new Date().toISOString().split("T")[0];
      return task.date === today;
    } else if (filter === "important") {
      return task.important;
    }
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onAddTask({
        title: newTaskTitle,
        completed: false,
        important: false,
        date: new Date().toISOString().split("T")[0],
      });
      setNewTaskTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add a task"
            className="flex-grow p-2 border rounded-l dark:bg-gray-800 dark:border-gray-700"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
      </form>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
