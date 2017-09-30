import React from 'react';
import _ from 'lodash';

class AddTodo extends React.Component {
	constructor() {
		super();
	}

	addTodo(e) {
		e.preventDefault();

		var name = this.refs.todo.value;

		if(!name) {
			return;
		}

		let todo = {
			name: name,
			id: _.random(100, 1000)
		};
		this.refs.todo.value = '';
		this.props.addNewTodo(todo);
	}

	render() {
		return(
			<div>
				<form onSubmit={this.addTodo.bind(this)} >
					<div className="form-group">
						<input type="text" className="form-control" name="todo" ref="todo" placeholder="add your text..."/> <br />
						<button type="submit" className="btn btn-primary">ADD NOTE</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddTodo;