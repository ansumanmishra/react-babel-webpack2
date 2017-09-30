import React from 'react';
import _ from 'lodash';

class AddTodo extends React.Component {
	constructor() {
		super();
	}

	addTodo(e) {
		e.preventDefault();
		let todo = {
			name: this.refs.todo.value,
			id: _.random(100, 1000)
		};
		this.refs.todo.value = '';
		this.props.addNewTodo(todo);
	}

	render() {
		return(
			<div>
				<form onSubmit={this.addTodo.bind(this)} >
					<input type="text" name="todo" ref="todo" placeholder="add your text..."/> <button type="submit" className="btn btn-primary">ADD</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;