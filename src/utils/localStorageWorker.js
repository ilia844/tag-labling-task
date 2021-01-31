import checkAccessibility from './checkAccessibility';

async function saveNotesToStorage(notesList) {
    const strNotesList = JSON.stringify(notesList);

    window.localStorage.setItem('notesList', strNotesList);
}

async function loadImageFromStorage() {
    if (!window.localStorage.getItem('image')) return null;
    if (!checkAccessibility(window.localStorage.getItem('image'))) return null;

    return window.localStorage.getItem('image');
}

async function loadNotesFromStorage() {
    if (!window.localStorage.getItem('notesList')) return [];

    const notesList = JSON.parse(window.localStorage.getItem('notesList'));
    if (!Array.isArray(notesList)) return [];

    return notesList;
}


export { saveNotesToStorage, loadImageFromStorage, loadNotesFromStorage };