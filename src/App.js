import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import useTasks from './hooks/useTasks';

function App() {
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks([
    { id: 1, title: 'Выучить React', completed: false },
    { id: 2, title: 'Создать To-Do App', completed: false },
  ]);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default App;

