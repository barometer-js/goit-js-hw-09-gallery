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


const paletteContainer = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
const lightbox = document.querySelector('.js-lightbox')

const closeButton = document.querySelector('[data-action="close-lightbox"]');

const ligthboxImage = document.querySelector('.lightbox__image')

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

closeButton.addEventListener('click', onCloseModal);
//Создание и рендер разметки по массиву данных
// console.log(createGalleryCardsMarkup(galleryItems));

function createGalleryCardsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
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
    `;
  }).join('');
};


//Реализация делегирования на галерее `ul.js-gallery`
//Открытие модального окна по клику на элементе галереи
//Получение `url` большого изображения

paletteContainer.addEventListener('click', onCardClick);

function onCardClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  lightbox.classList.add('is-open');

  ligthImageAttributs(evt.target.dataset.source, evt.target.alt);
}
console.log(paletteContainer);

//Подмена значения атрибута `src` элемента `img.lightbox__image`
function ligthImageAttributs(src, alt) {
  ligthboxImage.setAttribute('src', src)
  ligthboxImage.setAttribute('alt', alt)
}



//Очистка значения атрибута `src` элемента `img.lightbox__image`
function onCloseModal() {
  lightbox.classList.remove('is-open');
  ligthImageAttributs('','')
}


//Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`
