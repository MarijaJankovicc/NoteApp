import { Note } from './Note';
import { AddNote } from './AddNote';

export function NoteList({ notes, handleAddNote, handleDeleteNote }) {
    return (
      <div className="notes-list">
       {notes.map((note) => (
				<Note
                    key={note.id}
					id={note.id}
					title={note.title}
					text={note.text}
					date={note.date}
					color={note.color}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
      </div>
    );
}
  