import React from 'react';
import uuid from 'uuid';
import BaseComponent from './BaseComponent';
import Notes from './Notes';

export default class App extends BaseComponent {
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

  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>

        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    )
  }
  /* ------------wrong syntax-highlight STOPPER!------------- */


  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'Novej task'
      }])
    });
  }

deleteNote = (id, e) => {
    e.stopPropagation();  // Avoid bubbling to edit

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
}
