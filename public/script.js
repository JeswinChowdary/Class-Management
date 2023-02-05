function addNote(title, link) {
    const notesContainer = document.getElementById('notes-c');
    notesContainer.innerHTML += `
    <a class="notes" href="${link}">${title}</a>
    `;
}

fetch('/api/get-notes').then(res => res.json()).then(res => {
    res.notesDataArr.reverse().forEach(note => {
        addNote(note.title, note.link);
    })
})