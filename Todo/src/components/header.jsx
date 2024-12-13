import { Search, ViewIcon as ViewGrid, Moon, Sun } from "lucide-react";

export function Header({ isDark, toggleDarkMode }) {
  return (
    <header className="h-16 px-4 border-b flex items-center justify-between bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <ViewGrid className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
    </header>
  );
}
