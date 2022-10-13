import { MdDeleteForever } from 'react-icons/md';

export function Note({ id, text, date, handleDeleteNote, color }) {
    return (
      <div className="note" style={{backgroundColor: color}}>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
        </div>
      </div>
    );
}
  