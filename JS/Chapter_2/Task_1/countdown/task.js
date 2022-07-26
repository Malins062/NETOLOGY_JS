const timer = document.getElementById('timer');

setTimeout(function tick() {
    var seconds = -1;
    if (isNaN(Number(timer.textContent))) {
        const a = timer.textContent.split(':'); 
        // console.log(a);
        seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);     
        seconds--;
    } else {
        seconds = Number(timer.textContent) - 1;
    }
        
    if (seconds == -1) {
        alert('Вы победили в конкурсе!');
        document.getElementById('file_download').click();
        return;
    } else {
        var newTime = new Date(null);
        newTime.setSeconds(seconds);         
        // console.log(newTime);
        timer.textContent = newTime.toISOString().substr(11, 8);

        setTimeout(tick, 1000);
    }
}, 1000)