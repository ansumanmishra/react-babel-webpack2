import React from 'react';

class TodoItem extends React.Component {
	render() {
		return(
			<div>
				{this.props.itemName}
			</div>
		);
	}
}

export default TodoItem;