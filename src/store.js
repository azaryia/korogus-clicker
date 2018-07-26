import Vue from "vue";
import Vuex from "vuex";

import products from "@/assets/js/products.js";
import evolutions from "@/assets/js/evolutions.js";

import _ from "lodash";

Vue.use(Vuex);

// Init Local storage or get Korogus
let korogusStorage =
  window.localStorage.getItem("korogus") ||
  window.localStorage.setItem("korogus", 0);

// Init Local storage or get Korogus
let korogusSecondsStorage =
  window.localStorage.getItem("korogusSeconds") ||
  window.localStorage.setItem("korogusSeconds", 0);

// Init Local storage or get product: purchassed and price
_.each(products, function(product) {
  product.purchased =
    window.localStorage.getItem("purchased_" + product.name) ||
    window.localStorage.setItem("purchased_" + product.name, product.purchased);
  product.price =
    window.localStorage.getItem("price" + product.name) ||
    window.localStorage.setItem("price" + product.name, product.price);
  product.evolutions =
    window.localStorage.getItem("evolutions_" + product.name) ||
    window.localStorage.setItem(
      "evolutions_" + product.name,
      product.evolutions
    );
});
// Init Local storage or get product: purchassed and price
_.each(evolutions, function(evolution) {
  evolution.purchased =
    window.localStorage.getItem("purchased_" + evolution.name) ||
    window.localStorage.setItem("purchased_" + evolution.name, evolution.purchased);
  evolution.price =
    window.localStorage.getItem("price" + evolution.name) ||
    window.localStorage.setItem("price" + evolution.name, evolution.price);
});

// Init Korogu click
let korogusClickStorage =
  window.localStorage.getItem("korogusClick") ||
  window.localStorage.setItem("korogusClick", 1);

export default new Vuex.Store({
  state: {
    korogus: korogusStorage,
    korogusSeconds: korogusSecondsStorage,
    korogusClick: korogusClickStorage,
    products: products,
    evolutions: evolutions
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
          product.purchased++;
          state.korogus -= parseFloat(product.price);
          product.price = 1.22 * parseFloat(product.price);
          state.korogusSeconds =
            parseFloat(state.korogusSeconds) +
            parseFloat(product.korogusSeconds);
          state.korogusClick =
            product.cookieClick + parseFloat(state.korogusClick);
          window.localStorage.setItem("korogus", state.korogus);
          window.localStorage.setItem("price" + product.name, product.price);
          window.localStorage.setItem(
            "purchased_" + product.name,
            product.purchased
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
    BuyEvolutions: function(state, { evolutionId }) {
      state.evolutions = state.evolutions.map(evolution => {
        if (evolution.id === evolutionId) {
          state.products = state.products.map(product => {
            if(evolution.product === product.name) {
              evolution.purchased++;
              evolution.price = 1.50 * parseFloat(evolution.price);
              window.localStorage.setItem(
                "purchased_" + evolution.name,
                evolution.purchased
              );
              window.localStorage.setItem("evolution" + evolution.name, evolution.price);
            }
            return product;
          });
        }

        return evolution;
      });
    }
  },
  actions: {}
});
