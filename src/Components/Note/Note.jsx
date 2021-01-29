import React from 'react';
import classNames from 'classnames';

import './Note.scss';


class Note extends React.Component {
    render() {
        const classes = classNames(
            'note-list-item',
            {active : this.props.isActive}
        )

        return (
            <li
                className={classes}
                onClick={this.props.selectTag}
            >
                {this.props.note}
            </li>
        );
    }
}

export default Note;