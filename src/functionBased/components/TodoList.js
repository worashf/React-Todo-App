/*eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.js';

const TodoList = (props) => {
  const { todos, setUpdate, handleChangeProps, deleteItem } = props;
  return (
    <ul>
      {todos.map &&
        todos.map((todo) => (
          <TodoItem
            setUpdate={setUpdate}
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteItem={deleteItem}
          />
        ))}
    </ul>
  );
};

export default TodoList;
