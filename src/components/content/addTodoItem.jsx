import React from 'react';

class AddTodo extends React.Component {
	constructor() {
		super();
	}

	addTodo(e) {
		e.preventDefault();
		let todo = this.refs.todo.value;
		
	}

	render() {
		return(
			<div>
				<form onSubmit={this.addTodo.bind(this)} >
					<input type="text" name="todo" ref="todo" />
					<button type="submit" className="btn btn-default">ADD</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;