// get elements
const newNoteBtn = document.getElementById('new-note-btn');
const saveNoteBtn = document.getElementById('save-note-btn');
const deleteNoteBtn = document.getElementById('delete-note-btn');
const noteTextarea = document.getElementById('note-textarea');
const noteListUl = document.getElementById('note-list-ul');

// notes array
let notes = [];

// add event listeners
newNoteBtn.addEventListener('click', createNewNote);
saveNoteBtn.addEventListener('click', saveNote);
deleteNoteBtn.addEventListener('click', deleteNote);

// functions
function createNewNote() {
    noteTextarea.value = '';
    noteTextarea.focus();
}

function saveNote() {
    const noteText = noteTextarea.value.trim();
    if (noteText !== '') {
        const note = {
            text: noteText,
            id: Date.now()
        };
        notes.push(note);
        displayNotes();
        noteTextarea.value = '';
    }
}

function deleteNote() {
    const noteId = noteListUl.querySelector('li.selected').dataset.id;
    notes = notes.filter(note => note.id !== parseInt(noteId));
    displayNotes();
}

function displayNotes() {
    noteListUl.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note.text;
        li.dataset.id = note.id;
        li.addEventListener('click', () => {
            noteListUl.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
            li.classList.add('selected');
            noteTextarea.value = note.text;
        });
        noteListUl.appendChild(li);
    });
}