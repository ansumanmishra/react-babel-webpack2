import React from 'react';
import _ from 'lodash';

import Header from '../header/header.jsx';
import Todo from '../todo/todo.jsx';
import AddTodo from '../todo/addTodoItem.jsx';
import Footer from '../footer/footer.jsx';

var todoList = [
	{
		'id': 1,
		'name': 'Resolve defects'
	},
	{
		'id': 2,
		'name': 'Testing'
	},
	{
		'id': 3,
		'name': 'Regression testing'
	}
];

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			todoList: todoList
		}
	}

	addNewTodo(todo) {
		todoList.push(todo);

		this.setState({
			todoList: todoList
		});
	}

	deleteTodo(itemId) {
		_.remove(todoList, {id: parseInt(itemId)});

		this.setState({
			todoList: todoList
		})
	}

	render() {
		return(
			<div>
				<Header />
				<div className="container">
					<AddTodo addNewTodo={this.addNewTodo.bind(this)} />
					<span>{this.state.todoList.name}</span>
					<Todo todoList={this.state.todoList} deleteTodo={this.deleteTodo.bind(this)}/>
				</div>
				<Footer />
			</div>
		);
	}
}