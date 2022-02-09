const blockVideos = document.querySelectorAll('.js--popup-video'),
    popupVideoSecon = document.querySelector('.js--popup-secon'),
    iframeVideoSecon = document.querySelector('.js--popup-secon-video');

blockVideos.forEach(element => {
    element.addEventListener('click', () => {
        popupVideoSecon.classList.add('is-active');
        const scrVideo = element.getAttribute('data-id');
        iframeVideoSecon.setAttribute('src', scrVideo)
    })
})

popupVideoSecon.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--popup-secon')) {
        popupVideoSecon.classList.remove('is-active');
    }
})