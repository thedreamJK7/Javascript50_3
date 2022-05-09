window.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.bg'),
        text = document.querySelector('.text h1');
    let load = 0;
    setTimeout(() => {
        let time = setInterval(blur, 20);
        function blur() {
            load++;
            if (load > 99) {
                clearInterval(time);
            }
            text.innerHTML = `${load}%`;
            bg.style.filter = `blur(${10-load*0.1}px)`
        }
    }, 2000);
})