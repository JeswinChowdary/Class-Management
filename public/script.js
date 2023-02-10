function addText(title, link) {
    const textContainer = document.getElementById('text-c');
    textContainer.innerHTML += `
    <a class="notes" href="${link}">${title}</a>
    `;
}

fetch('/api/get-text').then(res => res.json()).then(res => {
    res.textDataArr.reverse().forEach(note => {
        addText(note.title, note.link);
    })
})