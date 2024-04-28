window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-page').style.display = 'none';
        document.getElementById('click-page').style.display = 'flex';
    }, 5000); // 5 seconds loading page

    let clickCount = 0;
    document.getElementById('click-page').addEventListener('click', function() {
        clickCount++;
        if (clickCount === 3) {
            document.getElementById('click-page').style.display = 'none';
            const videoPage = document.getElementById('video-page');
            videoPage.style.display = 'flex';
            const video = document.getElementById('main-video');
            video.volume = 1.0; // Max volume
            video.play();
        }
    });
};
