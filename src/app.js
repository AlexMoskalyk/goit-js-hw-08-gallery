const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


// - Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и
//   предоставленному шаблону.

const refs = {
  jsLightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  lightboxContent: document.querySelector('.lightbox__content'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxButton:document.querySelector('.lightbox__button'),
}

const gallery = document.querySelector('.js-gallery');

const createdLi = galleryItems.map(({preview,original,description}) => {
return  `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
    `

}).join('');

gallery.insertAdjacentHTML('afterbegin', createdLi);

// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//   изображения.

gallery.addEventListener('click', onMouseClick);



function onMouseClick(e) {
  e.preventDefault();
  
  if (!e.target.classList.contains('gallery__image')) {
    return
  }

// - Открытие модального окна по клику на элементе галереи.
  refs.jsLightbox.classList.add('is-open');

  refs.lightboxImage.src = e.target.dataset.source;
  // - Закрытие модального окна по нажатию клавиши `ESC`.
  window.addEventListener('keydown', onKeyBtnPress);
 // - Закрытие модального окна по клику на кнопку+на оверлей
  refs.jsLightbox.addEventListener('click', handelModalClick);
}


// - Закрытие модального окна по клику на кнопку

// refs.lightboxButton.addEventListener('click', onModalBtnClick);

// function onModalBtnClick(e) {
//    refs.jsLightbox.classList.remove('is-open');
// } 

function handelModalClick(e) {
  if (e.target.classList.contains('lightbox__button') || e.target.classList.contains('lightbox__overlay')) {
    closeModal();
  }
}


function closeModal() {
  refs.lightboxImage.src = '';
  refs.jsLightbox.classList.remove('is-open');
}

// - Закрытие модального окна по нажатию клавиши `ESC`.

function onKeyBtnPress(e) {
  if (e.code === 'Escape') {
   closeModal() 
  }
};

// function changeModalPictureOnRightPress() {
 

// };

// function changeModalPictureOnLeftPress() {
 

// };