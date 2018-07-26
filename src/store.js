import Vue from "vue";
import Vuex from "vuex";

import products from "@/assets/js/products.js";
import evolutions from "@/assets/js/evolutions.js";

Vue.use(Vuex);

let korogusStorage = window.localStorage.getItem("korogus");

let korogusSecondsStorage = window.localStorage.getItem("korogusSeconds");

let productsStorage = window.localStorage.getItem("products");

let evolutionsStorage = window.localStorage.getItem("evolutions");

let korogusClickStorage = window.localStorage.getItem("korogusClick");

if (!korogusStorage) {
  window.localStorage.setItem("korogus", 0);
  korogusStorage = window.localStorage.getItem("korogus");
}

if (!korogusSecondsStorage) {
  window.localStorage.setItem("korogusSeconds", 0);
  korogusSecondsStorage = window.localStorage.getItem("korogusSeconds");
}

if (!productsStorage) {
  window.localStorage.setItem("products", JSON.stringify(products));
  productsStorage = window.localStorage.getItem("products");
}

if (!evolutionsStorage) {
  window.localStorage.setItem("evolutions", JSON.stringify(evolutions));
  evolutionsStorage = window.localStorage.getItem("evolutions");
}

if (!korogusClickStorage) {
  window.localStorage.setItem("korogusClick", 1);
  korogusClickStorage = window.localStorage.getItem("korogusClick");
}

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

      window.localStorage.setItem("korogus", state.korogus);
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
          window.localStorage.setItem("korogus", state.korogus);
          window.localStorage.setItem(
            "products",
            JSON.stringify(state.products)
          );
          window.localStorage.setItem("korogusSeconds", state.korogusSeconds);
          window.localStorage.setItem("korogusClick", state.korogusClick);
        }

        return product;
      });
    },
    PopKorogu: function(state) {
      state.korogus =
        parseFloat(state.korogus) + parseFloat(state.korogusSeconds);
      window.localStorage.setItem("korogus", state.korogus);
    },
    BuyEvolution: function(state, { evolutionId }) {
      state.evolutions = state.evolutions.map(evolution => {
        if (evolution.id === evolutionId) {
          state.korogus -= parseFloat(evolution.price);
          evolution.price = 5 * parseFloat(evolution.price);
          evolution.disable = parseFloat(state.korogusClick) * 10;
          evolution.purchased++;
          window.localStorage.setItem(
            "evolutions",
            JSON.stringify(state.evolutions)
          );
          window.localStorage.setItem("korogus", state.korogus);
          if (evolution.product) {
            state.products = state.products.map(product => {
              if (evolution.product === product.name) {
                product.korogusSeconds = parseFloat(product.korogusSeconds) * 2;
                state.korogusSeconds =
                  parseFloat(product.purchased) * parseFloat(product.korogusSeconds) +
                  parseFloat(state.korogusSeconds);
                window.localStorage.setItem(
                  "products",
                  JSON.stringify(state.products)
                );
                window.localStorage.setItem(
                  "korogusSeconds",
                  state.korogusSeconds
                );
              }
              return product;
            });
          }
          if (evolution.korogusClick) {
            state.korogusClick = parseFloat(state.korogusClick) + parseFloat(evolution.korogusClick);
            window.localStorage.setItem("korogusClick", state.korogusClick);
          }
          if (evolution.korogusSeconds) {
            state.korogusSeconds =
              parseFloat(state.korogusSeconds) + parseFloat(evolution.korogusSeconds);
            window.localStorage.setItem("korogusSeconds", state.korogusSeconds);
          }
        }

        return evolution;
      });
    }
  },
  actions: {}
});
