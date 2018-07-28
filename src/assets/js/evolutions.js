import uuid from "uuid/v4";

const evolutions = [
  {
    id: uuid(),
    name: "Pot",
    price: 1500,
    product: "Link",
    KorogusSecond: 1.3,
    disable: 10,
    description: "Evolution pour Link Korogus par second * 1.3",
    purchased: 0,
    image: require("@/assets/images/evolutions/pot.png")
  },
  {
    id: uuid(),
    name: "Ruby",
    price: 3000,
    product: "Ruto",
    KorogusSecond: 1.4,
    disable: 100,
    description: "Evolution pour Ruto Korogus par second * 1.4",
    purchased: 0,
    image: require("@/assets/images/evolutions/ruby.png")
  },
  {
    id: uuid(),
    name: "Fee",
    price: 6000,
    product: "Machaon",
    KorogusSecond: 1.5,
    disable: 600,
    description: "Evolution pour Machaon Korogus par second * 1.5",
    purchased: 0,
    image: require("@/assets/images/evolutions/fee.png")
  },
  {
    id: uuid(),
    name: "Arc",
    price: 10000,
    product: "Zelda",
    KorogusSecond: 1.5,
    disable: 1500,
    description: "Evolution pour Zelda Korogus par second * 1.5",
    purchased: 0,
    image: require("@/assets/images/evolutions/arc.png")
  },
  {
    id: uuid(),
    name: "Epée",
    price: 30000,
    product: "Link",
    KorogusSecond: 1.8,
    disable: 50,
    description: "Evolution pour Link Korogus par second * 1.8",
    purchased: 0,
    image: require("@/assets/images/evolutions/epee.png")
  },
  {
    id: uuid(),
    name: "Ocarina",
    price: 70000,
    product: "Ruto",
    KorogusSecond: 2,
    disable: 1500,
    description: "Evolution pour Ruto Korogus par second * 2",
    purchased: 0,
    image: require("@/assets/images/evolutions/ocarina.png")
  },
  {
    id: uuid(),
    name: "Korogu",
    price: 1500000,
    KorogusSecond: 2.1,
    disable: 3000,
    description: "Evolution pour Click Korogus par second * 2.1",
    purchased: 0,
    image: require("@/assets/images/evolutions/korogu.png")
  },
  {
    id: uuid(),
    name: "Mask Majora",
    price: 1500000,
    product: "Skull-Kid",
    KorogusSecond: 2.4,
    disable: 100,
    description: "Evolution pour Skull-kid Korogus par second * 2.4",
    purchased: 0,
    image: require("@/assets/images/evolutions/mask-majora.png")
  },
  {
    id: uuid(),
    name: "Potion",
    price: 100,
    KorogusClick: 20,
    disable: 0,
    description: "Evolution click + 20",
    purchased: 0,
    image: require("@/assets/images/evolutions/potion.png")
  },
  {
    id: uuid(),
    name: "Triforce",
    price: 3000000,
    product: "Zelda",
    KorogusSecond: 3,
    disable: 600,
    description: "Evolution pour Zelda Korogus par second * 2.5",
    purchased: 0,
    image: require("@/assets/images/evolutions/triforce.png")
  }
];

export default evolutions;
