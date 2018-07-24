
import uuid from 'uuid/v4';

const producers = [
  {
    id: uuid(),
    name: 'Zelda',
    price: 30,
    cookiesSeconds: 1,
    purchased: 0,
    image: '../assets/zelda.png'
  },
  {
    id: uuid(),
    name: 'Link',
    price: 100,
    cookiesSeconds: 5,
    purchased: 0,
    image: '../assets/link.png'
  }
];

export default producers;