import { useState, useEffect } from 'react';
import Taskform from './Components/Taskform';
import Tasklist from './Components/Tasklist';
import Progresstracker from './Components/Progresstracker';
import './Style.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;   //  THEME APPLY 
  };

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
        <p>Organize your day efficiently</p>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <Taskform addTask={addTask} />
      <Tasklist
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Progresstracker tasks={tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}
