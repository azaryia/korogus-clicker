import Vue from "vue";
import Vuex from "vuex";

import products from "@/assets/js/products.js";
import evolutions from "@/assets/js/evolutions.js";

Vue.use(Vuex);

function getLocalStorage(value, key) {
  let object = localStorage.getItem(key);
  if (!object) {
    localStorage.setItem(key, value);
    object = localStorage.getItem(key);
  }
  return object;
}

let korogusStorage = getLocalStorage(0, "korogus");
let korogusSecondsStorage = getLocalStorage(0, "korogusSeconds");
let productsStorage = getLocalStorage(JSON.stringify(products), "products");
let evolutionsStorage = getLocalStorage(
  JSON.stringify(evolutions),
  "evolutions"
);
let korogusClickStorage = getLocalStorage(1, "korogusClick");

export default new Vuex.Store({
  state: {
    korogus: korogusStorage,
    korogusSeconds: korogusSecondsStorage,
    korogusClick: korogusClickStorage,
    products: JSON.parse(productsStorage),
    evolutions: JSON.parse(evolutionsStorage)
  },
  mutations: {
    CickKorogu: function(state) {
      state.korogus =
        parseFloat(state.korogus) + parseFloat(state.korogusClick);

      localStorage.setItem("korogus", state.korogus);
    },
    BuyProduct: function(state, { productId }) {
      state.products = state.products.map(product => {
        if (product.id === productId) {
          state.korogus -= parseFloat(product.price);
          product.price = 1.22 * parseFloat(product.price);
          state.korogusSeconds =
            parseFloat(state.korogusSeconds) +
            parseFloat(product.korogusSeconds);
          state.korogusClick =
            product.cookieClick + parseFloat(state.korogusClick);
          product.purchased++;
          localStorage.setItem("korogus", state.korogus);
          localStorage.setItem("products", JSON.stringify(state.products));
          localStorage.setItem("korogusSeconds", state.korogusSeconds);
          localStorage.setItem("korogusClick", state.korogusClick);
        }

        return product;
      });
    },
    PopKorogu: function(state) {
      state.korogus =
        parseFloat(state.korogus) + parseFloat(state.korogusSeconds);
      localStorage.setItem("korogus", state.korogus);
    },
    BuyEvolution: function(state, { evolutionId }) {
      state.evolutions = state.evolutions.map(evolution => {
        if (evolution.id === evolutionId) {
          state.korogus -= parseFloat(evolution.price);
          evolution.price = 5 * parseFloat(evolution.price);
          evolution.disable = parseFloat(state.korogusSeconds) * 6;
          evolution.purchased++;
          if (evolution.product) {
            state.products = state.products.map(product => {
              if (evolution.product === product.name) {
                product.korogusSeconds = parseFloat(product.korogusSeconds) * 2;
                state.korogusSeconds =
                  parseFloat(product.purchased) *
                    parseFloat(product.korogusSeconds) +
                  parseFloat(state.korogusSeconds);
                localStorage.setItem(
                  "products",
                  JSON.stringify(state.products)
                );
                localStorage.setItem("korogusSeconds", state.korogusSeconds);
              }
              return product;
            });
          }
          if (evolution.korogusClick) {
            state.korogusClick =
              parseFloat(state.korogusClick) +
              parseFloat(evolution.korogusClick);
            evolution.korogusClick = parseFloat(evolution.korogusClick) * 1.23;
            evolution.description =
              "Evolution click +" +
              Math.round(100 * evolution.korogusClick) / 100;
            localStorage.setItem("korogusClick", state.korogusClick);
          }
          if (evolution.korogusSeconds) {
            state.korogusSeconds =
              parseFloat(state.korogusSeconds) +
              parseFloat(evolution.korogusSeconds);
            evolution.korogusSeconds =
              parseFloat(evolution.korogusSeconds) * 1.33;
            evolution.description =
              "Evolution Korogu par seconde +" +
              Math.round(100 * evolution.korogusSeconds) / 100;
            localStorage.setItem("korogusSeconds", state.korogusSeconds);
          }
          localStorage.setItem("evolutions", JSON.stringify(state.evolutions));
          localStorage.setItem("korogus", state.korogus);
        }

        return evolution;
      });
    },
    ClickKoroguLucky: function(state) {
      let max = parseFloat(state.korogus) / 2;
      let min = parseFloat(state.korogus) / 4;
      state.korogus += Math.random() * max - min + min;
      localStorage.setItem("korogus", state.korogus);
    }
  },
  actions: {},
  getters: {
    products: state => state.products,
    evolutions: state => state.evolutions,
    korogus: state => state.korogus,
    korogusSeconds: state => state.korogusSeconds,
    korogusClick: state => state.korogusClick
  },
  strict: true
});
