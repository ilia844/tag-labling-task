import React from 'react';

import './App.scss';
import porsheImg from '../../img/Porshe.jpeg';
import Header from '../Header/Header';
import LeftMenu from '../LeftMenu/LeftMenu';
import InteractiveImage from '../InteractiveImage/InteractiveImage';
import Modal from '../Modal/Modal';

import uploadImage from '../../utils/uploadImage';
import { saveNotesToStorage, loadImageFromStorage, loadNotesFromStorage } from '../../utils/localStorageWorker';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.getProgressFromStorage();
        this.state = {
            image: null,
            notesList: [],
            isResized: false,
            modal: {
                tagId: null,
                noteText: '',
                isOpen: false,
            },
        }
    }

    getProgressFromStorage = async () => {
        const image = await loadImageFromStorage();
        const notesList = await loadNotesFromStorage();

        this.setState({
            image,
            notesList,
        });
    }

    loadNewImage = async (image) => {
        this.setState({
            image: await uploadImage(image),
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
        saveNotesToStorage(notes);

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

    deleteTag = () => {
        const notes = this.state.notesList.slice();

        if (notes.length > 0) {
            const noteIndex = notes.findIndex((note) => note.isActive);

            if (noteIndex >= 0) {
                notes.splice(noteIndex, 1);
                saveNotesToStorage(notes);

                this.setState({
                    notesList: notes,
                })
            }
        }
    }

    editTag = () => {
        const notes = this.state.notesList.slice();

        if (notes.length > 0) {
            const note = notes.find((note) => note.isActive);

            if (note) {
                this.setState({
                    modal: {
                        tagId: note.id,
                        noteText: note.noteText,
                        isOpen: true,
                    },
                })
            }
        }
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

    onSubmitEditing = (newNoteText) => {
        const notes = this.state.notesList;

        if ((newNoteText !== '') && (notes.every((note) => note.noteText !== newNoteText)))
        {
            const editingNoteIndex = notes.findIndex((note) => note.id === this.state.modal.tagId);
            const editingNote = notes[editingNoteIndex];

            editingNote.noteText = newNoteText;
            notes.splice(editingNoteIndex, 1, editingNote);
            saveNotesToStorage(notes);

            this.setState({
                notesList: notes,
                modal: {
                    tagId: null,
                    noteText: '',
                    isOpen: false,
                },
            });
        } else {
            this.onCancelEditing();
        }
    }

    onCancelEditing = () => {
        this.setState({
            modal: {
                tagId: null,
                noteText: '',
                isOpen: false,
            },
        })
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
                                deleteTag={this.deleteTag}
                                editTag={this.editTag}
                            />

                            <InteractiveImage
                                image={this.state.image ? this.state.image : porsheImg}
                                notesList={this.state.notesList}
                                setResizeFlag={this.setResizeFlag}
                                addNewTag={this.addNewTag}
                                selectTag={this.selectTag}
                            />

                            <Modal
                                title={'Enter your note below'}
                                isOpen={this.state.modal.isOpen}
                                onSubmit={this.onSubmitEditing}
                                onCancel={this.onCancelEditing}
                                defaultNote={this.state.modal.noteText}
                            />

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;