import React from 'react';

class TodoItem extends React.Component {
	constructor() {
		super();
	}

	deleteTodo(e) {
		e.preventDefault();

		var itemId = e.target.id;
		this.props.deleteTodo(itemId);
	}

	closeTodoItem(e) {
		e.preventDefault();
		console.log(e.target)
		document.getElementById(e.target.id).innerHTML = '<del>' + e.target.innerText +'</del>';
	}

	render() {
		return(
			<li>
				<a href="" id={this.props.itemId} onClick= {this.closeTodoItem.bind(this)}>{this.props.itemName}</a> <a href="" id={this.props.itemId} onClick={this.deleteTodo.bind(this)}>X</a>
			</li>
		);
	}
}

export default TodoItem;