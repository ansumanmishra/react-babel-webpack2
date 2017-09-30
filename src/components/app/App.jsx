import React from 'react';

import Header from '../header/header.jsx';
import Content from '../content/content.jsx';
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
	render() {
		return(
			<div>
				<Header />
				<Content todoList={todoList} />
				<Footer />
			</div>
		);
	}
}