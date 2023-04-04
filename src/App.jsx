import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (taskTitle) => {
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const toggleTaskCompleted = (taskId) => {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          inCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTask(newTasks);
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={task} onComplete={toggleTaskCompleted} />
    </>
  );
}

export default App;
