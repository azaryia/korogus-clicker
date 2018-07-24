
import uuid from 'uuid/v4';

const producers = [
  {
    id: uuid(),
    name: 'Zelda',
    price: 30,
    cookiesSeconds: 1,
    purchased: 0,
    images: '../assets/zelda.png'
  },
  {
    id: uuid(),
    name: 'Link',
    price: 100,
    cookiesSeconds: 5,
    purchased: 0,
    images: '../assets/link.png'
  }
];

export default producers;