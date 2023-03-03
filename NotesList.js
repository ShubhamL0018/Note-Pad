import Note from './Note';
import './style.css';
import AddNote from './AddNote';
import Search from './Search';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return(
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    test={note.id} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} 
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;
