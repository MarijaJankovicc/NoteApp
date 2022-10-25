import { React, useState } from 'react';
import { CirclePicker } from 'react-color';
import PropTypes from 'prop-types';

const AddNote=({ handleAddNote }) => {

  const [ noteTitle, setNoteTitle ] = useState('');
  const [ noteText, setNoteText ] = useState('');
  const CHARACTER_LIMIT = 300;
  const [ color, setColor ] = useState('#fec971');

  const handleChangeText = (e) => {
    if (CHARACTER_LIMIT - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleChangeTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
      handleAddNote(noteTitle, noteText, color);
      setNoteTitle('');
      setNoteText('');
    }
  };

  return (
    <div className='note new' style={{backgroundColor: color}}>
      <input placeholder='Type to add title...' value={noteTitle} onChange={handleChangeTitle} style={{backgroundColor: color}}/>
      <hr/>
      <textarea rows='8' cols='10' placeholder='Type to add text...' value={noteText} onChange={handleChangeText} style={{backgroundColor: color}}></textarea>
      <div className='note-footer'>
        <small>{CHARACTER_LIMIT - noteText.length} Remaining</small>
        <button className='btn' onClick={handleSaveClick}>Save</button>
      </div>
      <div className='note-footer'>
        <CirclePicker className='circlePicker'
          colors={[ '#fec971', '#fe9b72', '#b693fd', '#00d4fe', '#e4ee91' ]}
          onChange={(e) => setColor(e.hex)}/>
      </div>
    </div>
  );
};

AddNote.propTypes = {
  handleAddNote: PropTypes.func
};

export default AddNote;