import React from 'react';
import { Switch, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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
                <div className="left-menu-header">

                    <Switch
                        className="toggle"
                        checkedChildren="All"
                        unCheckedChildren="Latest"
                        defaultChecked
                    />

                    <div className="toolbar">
                        <Button
                            className={'toolbar-item'}
                            shape="circle"
                            size={'small'}
                            icon={<EditOutlined />}
                        />
                        <Button
                            shape="circle"
                            size={'small'}
                            icon={<DeleteOutlined />}
                        />
                    </div>

                </div>

                <ul className="notes-list">
                    {this.renderNotes(this.props.notesList)}
                </ul>
            </div>
        );
    }
}

export default LeftMenu;

