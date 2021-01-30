import React from 'react';

import './App.scss';
import porsheImg from '../../img/Porshe.jpeg';
import Header from '../Header/Header';
import LeftMenu from '../LeftMenu/LeftMenu';
import InteractiveImage from '../InteractiveImage/InteractiveImage';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            notesList: [],
            isResized: false,
        }
    }

    loadNewImage = (img) => {
        this.setState({
            image: img,
            notesList: [],
        })
    }

    setResizeFlag = (isResized = true) => {
        this.setState({
            isResized,
        })
    }

    addNewTag = (noteText, relativeX, relativeY) => {
        const notes = this.state.notesList.slice();
        notes.map((note) => note.isActive = false);

        const newNote = {
            id: this.getHashCode(noteText),
            point: {
                x: relativeX,
                y: relativeY,
            },
            noteText: noteText,
            isActive: true,
        }
        notes.push(newNote);

        this.setState({
           notesList: notes,
        });
    }

    selectTag = (id) => {
        const notes = this.state.notesList.slice();
        notes.map((note) => note.isActive = false);
        notes.map((note) => note.isActive = (note.id === id))

        this.setState({
            notesList: notes,
        });
    }

    getHashCode = (noteText) => {
        let hash = 0;
        for (let i = 0; i < noteText.length; i++) {
            const chr = noteText.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }

        return hash;
    }

    render() {
        return (
            <div className="app-container">

                <Header
                    loadNewImage={this.loadNewImage}
                />

                <main className="main-section">
                    <div className="wrapper">
                        <div className="work-area">

                            <LeftMenu
                                notesList={this.state.notesList}
                                selectTag={this.selectTag}
                            />

                            <InteractiveImage
                                image={this.state.image ? this.state.image.preview : porsheImg}
                                notesList={this.state.notesList}
                                setResizeFlag={this.setResizeFlag}
                                addNewTag={this.addNewTag}
                                selectTag={this.selectTag}
                            />

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;