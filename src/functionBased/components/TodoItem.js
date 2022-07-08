import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';
/* eslint-disable*/
const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing({
      editing: true,
    });
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editingMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editingMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const { id, title, completed } = props.todo;
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button type="button" onClick={() => props.deleteItem(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editingMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.defaultProps = {
  id: '',
  title: '',
  completed: false,
  todo: {},
  handleChangeProps: () => {},
  deleteItem: () => {},
  setUpdate: () => {},
};

TodoItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,

  handleChangeProps: PropTypes.func,
  deleteItem: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoItem;
