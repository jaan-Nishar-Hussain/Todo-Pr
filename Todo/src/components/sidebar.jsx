import { ListTodo, Calendar, Star, Map, Users, Plus } from "lucide-react";

// interface SidebarProps {
//   user: User | null
//   pendingCount: number
// }

export function Sidebar({ user, pendingCount }) {
  return (
    <aside className="w-64 border-r bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <img
            src={user?.avatar}
            alt="User avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold dark:text-white">Hey, {user?.name}</h2>
          </div>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <ListTodo className="w-5 h-5" />
              <span>All Tasks</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 text-gray-700 dark:text-gray-200 bg-green-50 dark:bg-green-900/20 rounded-lg"
            >
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-500" />
              <span className="text-green-600 dark:text-green-500">Today</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Star className="w-5 h-5" />
              <span>Important</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Map className="w-5 h-5" />
              <span>Planned</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Users className="w-5 h-5" />
              <span>Assigned to me</span>
            </a>
          </li>
        </ul>
        <button className="mt-6 flex items-center gap-3 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg w-full">
          <Plus className="w-5 h-5" />
          <span>Add list</span>
        </button>
      </nav>
      <div className="p-4">
        <div className="text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center mb-2">
          <span>Today Tasks</span>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {pendingCount}
          </span>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
            <div
              style={{ width: `${(pendingCount / (pendingCount + 4)) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
