if(window.location.href.includes('?')) {
    const alertMsg = window.location.href.split('?msg=')[1].replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ');
    alert(alertMsg);
    window.location.replace('/admin');
}

//Clicking Configuration with text for notes

const fileUploadText = document.getElementById('file-upload-text');
const uploadPromptText = document.getElementById('upload-prompt-text');
uploadPromptText.addEventListener('click', e => {
    fileUploadText.click();
})

//Clicking Configuration with text for audio

const fileUploadAudio = document.getElementById('file-upload-audio');
const uploadPromptAudio = document.getElementById('upload-prompt-audio');
uploadPromptAudio.addEventListener('click', e => {
    fileUploadAudio.click();
})