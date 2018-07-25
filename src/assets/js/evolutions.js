import uuid from "uuid/v4";

const evolutions = [
  {
    id: uuid(),
    name: "Arc",
    price: 30,
    korogusSeconds: 1,
    purchased: 0,
    image: require("@/assets/images/products/arc.png")
  },
  {
    id: uuid(),
    name: "Epée",
    price: 100,
    korogusSeconds: 5,
    purchased: 0,
    image: require("@/assets/images/products/epee.png")
  },
  {
    id: uuid(),
    name: "Ocarina",
    price: 500,
    korogusSeconds: 20,
    purchased: 0,
    image: require("@/assets/images/products/ocarina.png")
  },
  {
    id: uuid(),
    name: "Pot",
    price: 1500,
    korogusSeconds: 100,
    purchased: 0,
    image: require("@/assets/images/products/pot.png")
  },
  {
    id: uuid(),
    name: "Ruby",
    price: 3000,
    korogusSeconds: 250,
    purchased: 0,
    image: require("@/assets/images/evolutions/ruby.png")
  },
  {
    id: uuid(),
    name: "Mask Majora",
    price: 3000,
    korogusSeconds: 250,
    purchased: 0,
    image: require("@/assets/images/evolutions/mask-majora.png")
  }
];

export default evolutions;
