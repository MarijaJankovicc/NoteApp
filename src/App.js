import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import {NoteList} from "./components/NoteList";
import {Search} from "./components/Search"
import {Header} from "./components/Header"

const App=() => {

  // const [notes, setNotes] = useState(
  //   !localStorage.getItem("notes-app-data")
  //   ? [
  //   {
  //     id: nanoid(),
  //     text: "Note 1",
  //     date: "2/24/2022"
  //   },
  //   {
  //     id: nanoid(),
  //     text: "Note 2",
  //     date: "2/24/2022"
  //   },
  //   {
  //     id: nanoid(),
  //     text: "Note 3",
  //     date: "2/24/2022"
  //   },
  //   {
  //     id: nanoid(),
  //     text: "Note 4",
  //     date: "2/24/2022"
  //   }]: JSON.parse(localStorage.getItem("notes-app-data")));

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes-app-data")));

  const [darkMode, setDarkMode] = useState(false);
  
  const [searchText, setSearchText] = useState('');

  
	useEffect(() => {
		localStorage.setItem(
			'notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (title, text, color) => {
     const date = new Date();
     const newNote = {
        id: nanoid(),
        title: title,
        text: text,
        date: date.toLocaleDateString(),
        color: color
     }
     const newNotes = [...notes, newNote];
     setNotes(newNotes);
  };

  const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
  };


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText))} 
                  handleAddNote={addNote} 
                  handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
