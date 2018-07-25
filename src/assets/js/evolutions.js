import uuid from "uuid/v4";

const evolutions = [
  {
    id: uuid(),
    name: "Crotte Korogu",
    price: 30,
    cookiesSeconds: 1,
    purchased: 0,
    image: "../assets/images/products/zelda.png"
  },
  {
    id: uuid(),
    name: "Link",
    price: 100,
    cookiesSeconds: 5,
    purchased: 0,
    image: "../assets/images/products/link.png"
  },
  {
    id: uuid(),
    name: "ruto",
    price: 500,
    cookiesSeconds: 20,
    purchased: 0,
    image: "../assets/images/products/ruto.png"
  },
  {
    id: uuid(),
    name: "Machaon",
    price: 1500,
    cookiesSeconds: 100,
    purchased: 0,
    image: "../assets/images/products/machaon.png"
  },
  {
    id: uuid(),
    name: "Skull-Kid",
    price: 3000,
    cookiesSeconds: 250,
    purchased: 0,
    image: "../assets/images/products/skull-kid.png"
  }
];

export default evolutions;
