import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable*/
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            setUpdate={this.props.setUpdate}
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
