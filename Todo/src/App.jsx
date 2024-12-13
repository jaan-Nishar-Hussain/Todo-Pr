import { useEffect, useState } from "react";
import { getTasks, getUser, updateTask, addTask } from "../src/api/mockApi";
import { Sidebar } from "./components/sidebar";
import { TaskList } from "./components/task-list";
import { Header } from "./components/header";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    getTasks().then(setTasks);
    getUser().then(setUser);
  }, []);

  const toggleTaskComplete = async (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    const updatedTask = await updateTask(taskId, {
      completed: !task.completed,
    });
    setTasks(tasks.map((t) => (t.id === taskId ? updatedTask : t)));
  };

  const toggleTaskImportant = async (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    const updatedTask = await updateTask(taskId, {
      important: !task.important,
    });
    setTasks(tasks.map((t) => (t.id === taskId ? updatedTask : t)));
  };

  const createTask = async (title) => {
    const newTask = await addTask(title);
    setTasks([...tasks, newTask]);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar user={user} pendingCount={pendingTasks.length} />
        <div className="flex-1 flex flex-col">
          <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <main className="flex-1 overflow-auto p-4">
            <TaskList
              pendingTasks={pendingTasks}
              completedTasks={completedTasks}
              onToggleComplete={toggleTaskComplete}
              onToggleImportant={toggleTaskImportant}
              onCreateTask={createTask}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
