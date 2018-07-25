import uuid from "uuid/v4";

const producers = [
  {
    id: uuid(),
    name: "Zelda",
    price: 30,
    korogusSeconds: 1,
    purchased: 0,
    image: require("@/assets/images/products/zelda.png")
  },
  {
    id: uuid(),
    name: "Link",
    price: 100,
    korogusSeconds: 5,
    purchased: 0,
    image: require("@/assets/images/products/link.png")
  },
  {
    id: uuid(),
    name: "ruto",
    price: 500,
    korogusSeconds: 20,
    purchased: 0,
    image: require("@/assets/images/products/ruto.png")
  },
  {
    id: uuid(),
    name: "Machaon",
    price: 1500,
    korogusSeconds: 100,
    purchased: 0,
    image: require("@/assets/images/products/machaon.png")
  },
  {
    id: uuid(),
    name: "Skull-Kid",
    price: 3000,
    korogusSeconds: 250,
    purchased: 0,
    image: require("@/assets/images/products/skull-kid.png")
  }
];

export default producers;
