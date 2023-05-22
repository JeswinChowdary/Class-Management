function addReminder(content) {
    const remindersContainer = document.getElementById('reminders-c');
    remindersContainer.innerHTML += `
    <section class="reminders">
        <p class="content">${content}</p>
    </section>
    `;
}

fetch('/api/get-reminders').then(res => res.json()).then(res => {
    res.remindersArray.reverse().forEach(reminder => {
        addReminder(reminder.content);
    }); 
})