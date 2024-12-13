import { useState } from "react";
import { Bell, RotateCcw, Calendar, Star, ChevronDown } from "lucide-react";

// interface TaskListProps {
//   pendingTasks: Task[]
//   completedTasks: Task[]
//   onToggleComplete: (taskId: string) => void
//   onToggleImportant: (taskId: string) => void
//   onCreateTask: (title: string) => void
// }

export function TaskList({
  pendingTasks,
  completedTasks,
  onToggleComplete,
  onToggleImportant,
  onCreateTask,
}) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onCreateTask(newTaskTitle.trim());
      setNewTaskTitle("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <span>To Do</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
          <input
            type="text"
            placeholder="Add A Task"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none dark:text-white"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <RotateCcw className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              ADD TASK
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-2">
        {pendingTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="w-5 h-5 border-2 border-gray-300 rounded-sm checked:bg-green-500 cursor-pointer"
            />
            <span
              className={`flex-1 ${
                task.completed
                  ? "line-through text-gray-500"
                  : "dark:text-white"
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => onToggleImportant(task.id)}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${
                task.important ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              <Star className="w-5 h-5" />
            </button>
          </div>
        ))}

        {completedTasks.length > 0 && (
          <>
            <h3 className="text-gray-500 dark:text-gray-400 mt-8 mb-4">
              Completed
            </h3>
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleComplete(task.id)}
                  className="w-5 h-5 border-2 border-gray-300 rounded-sm checked:bg-green-500 cursor-pointer"
                />
                <span
                  className={`flex-1 ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "dark:text-white"
                  }`}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => onToggleImportant(task.id)}
                  className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    task.important ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  <Star className="w-5 h-5" />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
