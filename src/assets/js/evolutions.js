import uuid from "uuid/v4";

const evolutions = [
  {
    id: uuid(),
    name: "Pot",
    price: 1500,
    product: "Link",
    description: "Evolution pour Link korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/pot.png")
  },
  {
    id: uuid(),
    name: "Ruby",
    price: 3000,
    product: "Ruto",
    description: "Evolution pour Ruto korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/ruby.png")
  },
  {
    id: uuid(),
    name: "Fee",
    price: 6000,
    product: "Machaon",
    description: "Evolution pour Machaon korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/fee.png")
  },
  {
    id: uuid(),
    name: "Arc",
    price: 10000,
    product: "Zelda",
    description: "Evolution pour Zelda korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/arc.png")
  },
  {
    id: uuid(),
    name: "Epée",
    price: 30000,
    product: "Link",
    description: "Evolution pour Link korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/epee.png")
  },
  {
    id: uuid(),
    name: "Ocarina",
    price: 70000,
    product: "Ruto",
    description: "Evolution pour Ruto korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/ocarina.png")
  },
  {
    id: uuid(),
    name: "Korogu",
    price: 1500000,
    product: "Click",
    description: "Evolution pour Clickkorogus par second + 1",
    purchased: 0,
    image: require("@/assets/images/evolutions/korogu.png")
  },
  {
    id: uuid(),
    name: "Mask Majora",
    price: 1500000,
    product: "Skull-kid",
    description: "Evolution pour Skull-kid korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/mask-majora.png")
  },
  {
    id: uuid(),
    name: "Potion",
    price: 2000000,
    product: "KorogusForSecond",
    description: "Evolution pour Korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/potion.png")
  },
  {
    id: uuid(),
    name: "Triforce",
    price: 3000000,
    product: "Zelda",
    description: "Evolution pour Zelda korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/triforce.png")
  }
];

export default evolutions;
