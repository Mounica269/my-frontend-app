import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input.trim());
      setInput('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;