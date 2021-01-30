import React from 'react';

import './LeftMenu.scss';
import Note from '../Note/Note';


class LeftMenu extends React.Component {
    renderNotes = (notes) => {
        return notes.map((note) => (
            <Note
                key={note.id}
                noteText={note.noteText}
                isActive={note.isActive}
                onSelectTag={ () => this.props.selectTag(note.id) }
            />
        ));
    }

    render() {
        return (
            <div className="left-menu">
                <div className="left-menu-header">Your notes</div>
                <ul className="notes-list">
                    {this.renderNotes(this.props.notesList)}
                </ul>
            </div>
        );
    }
}

export default LeftMenu;

