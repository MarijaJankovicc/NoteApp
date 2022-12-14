import { React, useState, useContext } from 'react';
import { format } from 'date-fns';
import { nanoid } from 'nanoid';
import NoteList from './NoteList';
import Search from './Search';
import Header from './Header';
import { UserContext } from '../UserProvider';

const NoteApp=() => {

  const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes-app-data')) || []);
  const [ darkMode, setDarkMode ] = useState(false);
  const [ searchText, setSearchText ] = useState('');
  const [ valueStart, setValueStart ] = useState(null);
  const [ valueEnd, setValueEnd ] = useState(null);

  const {user} = useContext(UserContext);

  const setItemToLocalStorage = (newNotes) => {
    localStorage.setItem(
      'notes-app-data',
      JSON.stringify(newNotes)
    );
  };

  const addNote = (title, text, color) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: format(new Date(), 'MM/dd/yyyy'),
      color: color
    };

    const newNotes = [ ...notes, newNote ];
    setNotes(newNotes);
    setItemToLocalStorage(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setItemToLocalStorage(newNotes);
  };

  const deleteAll = () => {
    setNotes([]);
    setItemToLocalStorage([]);
  };

  const editNote = (id, title, text, date, color) => {

    console.log(id, title, text, date, color);

    const editedNote = notes.map(note => {
      if (note.id === id) {
        return {id: id, title: title, text: text, date: date, color: color};
      }
      return note;
    });

    localStorage.setItem('notes-app-data', JSON.stringify(editedNote));
  };

  const sort = (e) => {
    const sortDirection = e.target.value;
    const sortedNotes = [...notes];

    if (sortDirection === 'descending') {
      setNotes(
        sortedNotes.slice().sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        }));
    } else if (sortDirection === 'ascending') {
      setNotes(
        sortedNotes.slice().sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        }));
    }
  };

  const startDateChange = (newValueStart) => {
    setValueStart(newValueStart);
  };

  const endDateChange = (newValueEnd) => {
    setValueEnd(newValueEnd);
  };

  const dateFilter = (newValueStart, newValueEnd) => {
    const filteredNotes = notes.filter((note) => (new Date(note.date) >= newValueStart) && (new Date(note.date) <= newValueEnd));
    setNotes(filteredNotes);
  };

  const resetFilter = () => {
    setValueStart(null);
    setValueEnd(null);
    setNotes(JSON.parse(localStorage.getItem('notes-app-data')));
  };

  if (Object.keys(user).length === 0) {
    return;
  }

  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
          <Header handleToggleDarkMode={setDarkMode} handleSort={sort} valueStart={valueStart}
            valueEnd={valueEnd} handleStartDate={startDateChange} handleEndDate={endDateChange} handleDateFilter={dateFilter}
            handleResetFilter={resetFilter} handleDeleteAll={deleteAll}/>
          <Search handleSearchNote={setSearchText}/>
          <NoteList notes={notes?.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText))}
            handleAddNote={addNote} handleEditNote={editNote} handleDeleteNote={deleteNote}/>
        </div>
      </div>
    </>
  );
};

export default NoteApp;
