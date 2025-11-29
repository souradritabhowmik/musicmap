// colorize modal background subtly if color provided
if(item.color){
modal.querySelector('.modal-content').style.borderTop = `6px solid ${item.color}`;
} else {
modal.querySelector('.modal-content').style.borderTop = '6px solid transparent';
}
modal.classList.add('show');
modal.setAttribute('aria-hidden','false');
}


function closeModal(){
modal.classList.remove('show');
modal.setAttribute('aria-hidden','true');
}


modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });


// initial render
renderGrid();

albumsData[0] = {
  cover: 'albums/01.jpg',
  name: 'Stratosphere',
  artist: 'Duster',
  color: '#ffb6d5'
};
