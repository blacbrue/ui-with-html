function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

document.querySelector('.bg-desktop').addEventListener('wheel', preventScroll);