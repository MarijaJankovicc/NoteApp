import { useState } from 'react';
import { CirclePicker } from 'react-color'


export function AddNote({ handleAddNote }) {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 300;
    const [color, setColor] = useState("#e4ee91");
    

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText, color);
            setNoteText('');
        }     
    };


    return (
        <div className="note new" style={{backgroundColor: color}}>
            <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange} style={{backgroundColor: color}}></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="btn" onClick={handleSaveClick}>Save</button>
            </div>
           
            <div className="note-footer">      
                <CirclePicker
                    color={color}
                    colors={["#fec971", "#fe9b72", "#b693fd", "#00d4fe", "#e4ee91"]}
                    onChange={(e) => setColor(e.hex)}
                />
            </div>
        </div>
        
    );
}