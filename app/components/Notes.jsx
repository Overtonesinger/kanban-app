import React from 'react';
import Note from './Note';

export default ({notes, onDelete=() => {}}) => (
  <ul displayName="notesList">{notes.map(({id, task}) =>
    <li key={id}>
      <Note onDelete={onDelete.bind(null, id)} task={task} />
    </li>
  )}</ul>
);
