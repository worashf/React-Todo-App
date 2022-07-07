import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList.js';
import Header from './Header.js';
import InputTodo from './InputTodo.js';
import './App.css';
/*eslint-disable */
const TodoContainer = () => {
  const getInitialTodos = () => {
    const rawData = window.localStorage.getItem('todos');
    const data = JSON.parse(rawData);
    return data || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());

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
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteItem = (id) => {
    setTodos({
      todos: [...todos.filter((todo) => todo.id !== id)],
    });
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
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
