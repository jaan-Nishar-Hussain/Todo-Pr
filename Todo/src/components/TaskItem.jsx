import React from 'react';

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const handleToggleComplete = () => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  const handleToggleImportant = () => {
    onUpdateTask({ ...task, important: !task.important });
  };

  const handleDateChange = (e) => {
    onUpdateTask({ ...task, date: e.target.value });
  };

  return (
    <li className="flex items-center justify-between p-2 border-b dark:border-gray-700">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
      </div>
      <div className="flex items-center">
        <input
          type="date"
          value={task.date}
          onChange={handleDateChange}
          className="mr-2 p-1 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <button onClick={handleToggleImportant} className="mr-2">
          {task.important ? '⭐' : '☆'}
        </button>
        <button onClick={() => onDeleteTask(task.id)} className="text-red-500 hover:text-red-700">
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

