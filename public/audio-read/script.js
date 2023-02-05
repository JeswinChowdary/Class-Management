function addAudio(title, link) {
    const notesContainer = document.getElementById('notes-c');
    notesContainer.innerHTML += `
    <a class="notes" href="${link}">${title}</a>
    `;
}

fetch('/api/get-audio').then(res => res.json()).then(res => {
    res.audioDataArr.reverse().forEach(note => {
        addAudio(note.title, note.link);
    })
})