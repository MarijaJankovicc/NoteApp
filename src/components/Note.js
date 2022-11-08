import { React, useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types';

const Note=({ id, text, date, title, color, handleDeleteNote, handleEditNote }) => {

  const [ isEditable, setIsEditable ] = useState(false);
  const [ editTitle, setEditTitle ] = useState(title);
  const [ editText, setEditText ] = useState(text);

  return (
    <div>
      {isEditable ?
        (
          <div className='note' style={{backgroundColor: color}}>
            <div className='note-header'>
              <input defaultValue={editTitle} style={{backgroundColor: color}} onChange={(e) => {
                setEditTitle(e.target.value);
              }}/>
              <MdEdit onClick={() => handleEditNote(id, editTitle, editText, date, color) || setIsEditable(!isEditable)} className='edit-icon' size='1.3em'/>
            </div>
            <input defaultValue={editText} style={{backgroundColor: color}} onChange={(e) => {
              setEditText(e.target.value);
            }}/>
            <div className='note-footer'>
              <small>{date}</small>
              <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
            </div>
          </div>) :
        (
          <div className='note' style={{backgroundColor: color}}>
            <div className='note-header'>
              <span>{title}</span>
              <MdEdit onClick={() => setIsEditable(!isEditable)} className='edit-icon' size='1.3em'/>
            </div>
            <span>{text}</span>
            <div className='note-footer'>
              <small>{date}</small>
              <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
            </div>
          </div>)
      }
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  handleDeleteNote: PropTypes.func,
  handleEditNote: PropTypes.func
};
export default Note;