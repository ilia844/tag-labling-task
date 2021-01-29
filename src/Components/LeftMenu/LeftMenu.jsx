import React from 'react';

import './LeftMenu.scss';
import Note from '../Note/Note';

class LeftMenu extends React.Component {
    renderNotes = (notes) => {
        return notes.map((note) => (
            <Note
                key={note.id}
                note={note.note}
                isActive={note.active}
                selectTag={ () => this.props.selectTag(note.id) }
            />
        ));
    }

    render() {
        return (
            <div className="left-menu">
                <div className="left-menu-header">Left menu header</div>
                <ul className="notes-list kletka">
                    {this.renderNotes(this.props.notesList)}
                </ul>
            </div>
        );
    }
}

export default LeftMenu;

