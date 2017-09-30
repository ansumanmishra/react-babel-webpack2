import React from 'react';

import TodoItem from './todoItem.jsx';
import AddTodo from './addTodoItem.jsx';

class Content extends React.Component {
  constructor(props) {
    super(props);

    // One way of looping the data
    this.todoList = this.props.todoList.map((item, i) => {
      return <TodoItem itemName={item.name} key={i}/>;
    });
  }

  render() {
    return(
      <div>
        <AddTodo />
        <ul>{this.todoList}</ul>
      </div>
    )
  }
}

export default Content;