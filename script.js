function btnPlay() {
    let btn = document.querySelector('.video-block-btn');
    btn.addEventListener("mouseover", () => {
        btn.style.visibility = 'hidden'
    })
}

btnPlay();