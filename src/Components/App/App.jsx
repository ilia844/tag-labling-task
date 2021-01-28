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
            isResized
        })
    }

    addNewTag = (noteText, relativeX, relativeY) => {
        const notes = this.state.notesList.slice();
        notes.map((note) => note.active = false);

        const newNote = {
            point: {
                x: relativeX,
                y: relativeY,
            },
            note: noteText,
            active: true,
        }
        notes.push(newNote);

        this.setState({
           notesList: notes,
        });
    }

    render() {
        return (
            <div className='app-container'>

                <Header
                    loadNewImage={this.loadNewImage}
                />

                <main className="main-section">
                    <div className="wrapper">
                        <div className="work-area">

                            <LeftMenu />

                            <InteractiveImage
                                image={this.state.image ? this.state.image.preview : porsheImg}
                                notesList={this.state.notesList}
                                setResizeFlag={this.setResizeFlag}
                                addNewTag={this.addNewTag}
                            />

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;