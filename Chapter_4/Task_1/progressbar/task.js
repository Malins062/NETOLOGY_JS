const form = document.getElementById('form');

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const progressBar = document.getElementById('progress');
    // console.log(progressBar, form.querySelector('#file').files[0]);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('onprogress', (e) => {
        if (e.lengthComputable) {
            progressBar.max = e.total;
            progressBar.value = e.loaded;
        }        
        console.log(e.loaded, e.total);
        progress.setValue(e.loaded);        
    })

    xhr.upload.addEventListener('onloadstart', (e) => {
        console.log(e.loaded, e.total);
        progressBar.value = 0;
    });

    xhr.upload.addEventListener('onloadend', (e) => {
        console.log(e.loaded, e.total);
        progressBar.value = e.loaded;
    });

    const dataToSend = new FormData(form);
    dataToSend.append('file', form.querySelector('#file').files[0]);

    xhr.open('POST', form.getAttribute('action'), true);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(dataToSend);
})




