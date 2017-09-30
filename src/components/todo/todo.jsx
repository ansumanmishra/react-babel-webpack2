import React from 'react';

import TodoItem from './todoItem.jsx';
import './todo.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteTodo(itemId) {
    this.props.deleteTodo(itemId);
  }

  render() {
    this.todoList = this.props.todoList.map((item, i) => {
      return <TodoItem itemName={item.name} itemId={item.id} key={item.id} deleteTodo={this.deleteTodo.bind(this)} />;
    });

    return (
      <div>
        <ul>{this.todoList}</ul>
      </div>
    );
  }
}

export default Content;