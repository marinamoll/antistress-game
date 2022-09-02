const guri = document.querySelector('.guri');

const pulo = () => {
    guri.classList.add('pulo');

    setTimeout(() =>{
        guri.classList.remove('pulo');
    }, 800)
}

document.addEventListener('keydown', pulo);
