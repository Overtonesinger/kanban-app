import React from 'react';
import uuid from 'uuid';
var ExecutionEnvironment = require('exenv');
import Base from './BaseComponent';  // this._bind() ....... the "mass-binder"
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';


class App extends Base {
//	constructor(props) {
//		super(props);
		// this._bind('_handleClick', '_handleFoo');    //can NOW be used - instead of:
		// this. _handleClick = this. _handleClick.bind(this);
		// this. _handleFoo = this. _handleFoo.bind(this);
//	}

	//----render
	render() {
		const {notes} = this.props;

		return (
			<div>
				<button className="add-note" onClick={this.addNote}>+</button>
				<Notes
					notes={notes}
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote}
					/>
			</div>
		);
	}
	/* ------------wrong syntax-highlight STOPPER!------------- */

	//----add a note
	addNote = () => {
		this.props.NoteActions.create({
			id: uuid.v4(),
			task: 'New task'
		});
	}

	//----delete a note
	deleteNote = (id, e) => {
		e.stopPropagation();  // Avoid bubbling to edit
		this.props.NoteActions.delete(id);
	}

	//----begin editing
	activateNoteEdit = (id) => {
		this.props.NoteActions.update({id, editing: true});
	}

	editNote = (id, task) => {
		const {NoteActions} = this.props;
		NoteActions.update({id, task, editing: false});
	}

}


export default connect(({notes}) => ({
	notes
}), {
	NoteActions
})(App)
