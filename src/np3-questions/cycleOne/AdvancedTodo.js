import React, { useState } from 'react';

const todosData = [
  {
    id: 1,
    title: 'NeoG assignments',
    completed: false,
  },
  {
    id: 2,
    title: 'Pair programming session',
    completed: true,
  },
  {
    id: 3,
    title: 'Project submission',
    completed: false,
  },
  {
    id: 4,
    title: 'Coding practice',
    completed: true,
  },
];

export default function AdvancedTodo() {
  const [todos, setTodos] = useState(todosData);

  function filterTodos(status) {
    if (status === 'completed') {
      const filteredTodos = todosData.filter((todo) => todo.completed);
      setTodos(filteredTodos);
    } else if (status === 'incomplete') {
      const filteredTodos = todosData.filter((todo) => !todo.completed);
      setTodos(filteredTodos);
    } else setTodos(todosData);
  }

  return (
    <>
      <div>
        <button onClick={() => filterTodos('completed')}>
          Show Completed Todos
        </button>
        <button onClick={() => filterTodos('incomplete')}>
          Show Incomplete Todos
        </button>
        <button onClick={() => filterTodos(null)}>Show All Todos</button>
      </div>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title} -{' '}
          {todo.completed ? (
            <span style={{ color: 'green' }}>Done</span>
          ) : (
            <span style={{ color: 'red' }}>Pending</span>
          )}
        </div>
      ))}
    </>
  );
}
