import React from 'react';
import uuid from 'uuid';
var ExecutionEnvironment = require('exenv');
import Base from './BaseComponent';  // this._bind() ....... the "mass-binder"
import Notes from './Notes';

export default class App extends Base {
  constructor(props) {
    super(props);
    // this._bind('_handleClick', '_handleFoo');    //can NOW be used - instead of:
      // this. _handleClick = this. _handleClick.bind(this);
      // this. _handleFoo = this. _handleFoo.bind(this);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Learn ES6'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  //----render
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes}
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
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'Novej task'
      }])
    });
  }

  //----delete a note
  deleteNote = (id, e) => {
    e.stopPropagation();  // Avoid bubbling to edit

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  //----begin editing
  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id)
        {
          note.editing = true;
        }
        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id)
        {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  }

/*
  //----debug methods...
  componentWillMount() {
    if (ExecutionEnvironment.canUseViewport) {
      console.log('componentWillMount() Triggered on CLIENT.');
    }
    else console.log('componentWillMount() now triggered on server-side.');
  }

  //----debug
  componentDidMount() {
    if (ExecutionEnvironment.canUseViewport) {
      console.log('componentDidMount() Triggered on CLIENT.');
    }
    else console.log('componentDidMount() now triggered on server-side.');
  }
*/
}
