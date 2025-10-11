const menuBtn = document.getElementById('menu');
const menu = document.querySelector('nav');
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('dialog');
const closeButton = modal.querySelector('.close-viewer');

menuBtn.addEventListener('click', toggleMenu);
galleryImages.forEach(img => {
    img.addEventListener('click', openGalleryImage);
});
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})
closeButton.addEventListener('click', () => {
    modal.close();
});

function toggleMenu() {
    menu.classList.toggle('hide');
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
        menuBtn.classList.add('hide');
    } else {
        menu.classList.add('hide');
        menuBtn.classList.remove('hide');
    }
}


function openGalleryImage(){
    const dialog = document.querySelector('dialog');
    const src = this.src.split('-')[0] + '-full.jpeg';
    dialog.querySelector('img').src = src;
    dialog.querySelector('img').alt = this.alt;
    const closeBtn = dialog.querySelector('.close-viewer');

    dialog.showModal();
}

handleResize();
window.addEventListener('resize', handleResize);


