import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

import './App.css';
/* eslint-disable*/
const TodoContainer = () => {
  const [todos, setTodos] = useState(() => {
    const rawData = window.localStorage.getItem('todos');
    const data = JSON.parse(rawData);
    return data || [];
  });

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteItem = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    window.localStorage.setItem('todos', temp);
  }, [todos]);
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItemProps={addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};
export default TodoContainer;
