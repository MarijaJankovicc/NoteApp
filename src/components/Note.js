import { MdDeleteForever } from 'react-icons/md';

export function Note({ id, text, date, title, color, handleDeleteNote }) {
    return (
      <div className="note" style={{backgroundColor: color}}>
        <span>{title}</span>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
        </div>
      </div>
    );
}
  