import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { id, title, completed } = this.props.todo;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteItem(id)}>delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}
export default TodoItem;
