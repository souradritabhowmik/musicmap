
--- `script.js`  updated ---

```javascript
// 100 slots placeholder albumsData
const albumsData = Array.from({length: 100}, (_, i) => ({
  cover: `albums/koinoyokan.jpg`,
  name: ` Koi No Yokan `,
  artist: ` DEFTONES `,
  color: '#ffb6d5'  // soft pink default
}));

// DOM refs
const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalCover = document.getElementById('modal-cover');
const modalTitle = document.getElementById('modal-title');
const modalArtist = document.getElementById('modal-artist');

function createTile(item, index){
  const el = document.createElement('button');
  el.className = 'tile';
  el.type = 'button';
  el.setAttribute('data-index', index);
  el.style.background = item.color || 'linear-gradient(135deg, rgba(255,190,210,0.98), rgba(255,230,240,0.98))';

  const img = document.createElement('img');
  img.src = item.cover;
  img.alt = item.name ? `${item.name} cover` : 'Album cover';
  el.appendChild(img);

  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = item.name;
  el.appendChild(label);

  el.addEventListener('click', () => openModal(item, index));
  return el;
}

function renderGrid(){
  grid.innerHTML = '';
  albumsData.forEach((item, idx) => {
    grid.appendChild(createTile(item, idx));
  });
}

function openModal(item, index){
  modalCover.src = item.cover;
  modalTitle.textContent = item.name;
  modalArtist.textContent = item.artist;
  modal.querySelector('.modal-content').style.borderTop = item.color ? `6px solid ${item.color}` : '6px solid transparent';
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

renderGrid();
console.log('Music Map loaded — replace albums/01.jpg etc. with your own album covers and update names/artists/colors as desired.');
