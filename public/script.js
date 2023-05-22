function displayNote(title, link) {
    const textContainer = document.getElementById('notes-c');
    textContainer.innerHTML += `
    <a class="notes" href="${link}">${title}</a>
    `;
}

fetch('/api/get-notes').then(res => res.json()).then(res => {
    res.notesDataArr.reverse().forEach(note => {
        displayNote(note.title, note.link);
    });
    // startSEOTweaks();
})

// function startSEOTweaks() {
//     const notes = document.querySelectorAll('.notes');
    
//     notes.forEach(note => {
//         note.addEventListener('click', () => {
//             window.open('https://bascrily.blogspot.com', '_blank');
//             note.target = '_self'
//         });
//    })
// }