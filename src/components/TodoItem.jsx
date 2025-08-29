import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          className="todo-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="btn-save">Save</button>
            <button onClick={handleCancel} className="btn-cancel">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
            <button onClick={() => onDelete(todo.id)} className="btn-delete">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;