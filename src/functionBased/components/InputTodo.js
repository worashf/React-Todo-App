import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addTodoItemProps } = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoItemProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={handleChange}
        className="input-text"
      />
      <button className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
