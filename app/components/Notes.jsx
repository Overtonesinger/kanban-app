import React from 'react';
import Editable from './Editable';
import Note from './Note';

export default ({
  notes,
  onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
  }) => (

  <ul className="notes">{notes.map(({id, editing, task}) =>
    <li key={id}>
      <Note className="note" onClick={onNoteClick.bind(null, id)}>
        <Editable
           editing={editing}
           value={task}
           onEdit={onEdit.bind(null, id)} />
        <button
          className="delete"
          onClick={onDelete.bind(null, id)}>x</button>
      </Note>
    </li>
  )}</ul>
)
