import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoItemProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('please enter title');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
