const form = document.getElementById('form');

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const progressBar = document.getElementById('progress');
    // console.log(progressBar, form.querySelector('#file').files[0]);

    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
            progressBar.max = e.total;
            progressBar.value = e.loaded;
            // console.log(e.loaded, e.total);
        }        
    }

    xhr.upload.onloadstart = function (e) {
        // console.log(e.loaded, e.total);
        progressBar.value = 0;
    }

    xhr.upload.onloadend = function (e) {
        // console.log(e.loaded, e.total);
        progressBar.value = e.loaded;
    }

    const dataToSend = new FormData(form);

    xhr.open('POST', form.getAttribute('action'), true);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(dataToSend);
})




