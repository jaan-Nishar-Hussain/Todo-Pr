const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const mockUser: User = {
//   name: "ABCD",
//   avatar: "/placeholder.svg?height=200&width=200",
// };

const mockTasks = [
  { id: "1", title: "Buy groceries", completed: false, important: false },
  {
    id: "2",
    title: "Finish project report",
    completed: false,
    important: true,
  },
  { id: "3", title: "Call the bank", completed: false, important: false },
  {
    id: "4",
    title: "Schedule dentist appointment",
    completed: false,
    important: false,
  },
  { id: "5", title: "Plan weekend trip", completed: false, important: false },
  { id: "6", title: "Read a book", completed: true, important: false },
  { id: "7", title: "Clean the house", completed: true, important: false },
  { id: "8", title: "Prepare presentation", completed: true, important: false },
  { id: "9", title: "Update blog", completed: true, important: false },
];

export async function getTasks() {
  await delay(500);
  return mockTasks;
}

export async function getUser() {
  await delay(500);
  return mockUser;
}

export async function updateTask() {
  await delay(200);
  const task = mockTasks.find((t) => t.id === taskId);
  if (!task) throw new Error("Task not found");
  Object.assign(task, updates);
  return task;
}

export async function addTask(title) {
  await delay(200);
  const newTask = {
    id: String(mockTasks.length + 1),
    title,
    completed: false,
    important: false,
  };
  mockTasks.push(newTask);
  return newTask;
}
