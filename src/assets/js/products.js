import uuid from "uuid/v4";

const producers = [
  {
    id: uuid(),
    name: "Zelda",
    price: 30,
    korogusSeconds: 1,
    cookieClick: 0.4,
    purchased: 0,
    bgColor: "ff9ee1",
    image: require("@/assets/images/products/zelda.png")
  },
  {
    id: uuid(),
    name: "Link",
    price: 100,
    korogusSeconds: 5,
    cookieClick: 2,
    purchased: 0,
    bgColor: "6eb776",
    image: require("@/assets/images/products/link.png")
  },
  {
    id: uuid(),
    name: "Ruto",
    price: 500,
    korogusSeconds: 20,
    cookieClick: 4,
    purchased: 0,
    bgColor: "33b2e0",
    image: require("@/assets/images/products/ruto.png")
  },
  {
    id: uuid(),
    name: "Machaon",
    price: 2000,
    korogusSeconds: 50,
    cookieClick: 7,
    purchased: 0,
    bgColor: "d6a4dd",
    image: require("@/assets/images/products/machaon.png")
  },
  {
    id: uuid(),
    name: "Skull-Kid",
    price: 5000,
    korogusSeconds: 70,
    evolutions: 0,
    cookieClick: 15,
    purchased: 0,
    bgColor: "ff7a3d",
    image: require("@/assets/images/products/skull-kid.png")
  },
  {
    id: uuid(),
    name: "Fay",
    price: 20000,
    korogusSeconds: 100,
    cookieClick: 20,
    purchased: 0,
    bgColor: "a93fc1",
    image: require("@/assets/images/products/fay.png")
  },
  {
    id: uuid(),
    name: "Ganondorf",
    price: 70000,
    korogusSeconds: 150,
    cookieClick: 30,
    purchased: 0,
    bgColor: "727172",
    image: require("@/assets/images/products/ganondorf.png")
  }
];

export default producers;
