const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.src.replace('sm', 'full'));
        modalImage.src = e.target.src.replace('sm', 'full');
        modal.showModal();
    }
    
}

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});