import React from 'react';
import classNames from 'classnames';

import './Note.scss';


const Note = ({
    onSelectTag, noteText, isActive
}) => {

    const classes = classNames(
        'note-list-item',
        {active : isActive}
    );

    return (
        <li
            className={classes}
            onClick={onSelectTag}
        >
            {noteText}
        </li>
    );
}

export default Note;