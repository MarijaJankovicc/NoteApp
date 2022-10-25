import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';

const Note=({ id, text, date, title, color, handleDeleteNote }) => {
  return (
    <div className='note' style={{backgroundColor: color}}>
      <span>{title}</span>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
      </div>
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  handleDeleteNote: PropTypes.func
};
export default Note;