import Vue from "vue";
import Vuex from "vuex";

import products from "@/assets/js/products.js";

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
    products: products
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
          state.korogusSeconds = parseFloat(
            state.korogusSeconds + product.korogusSeconds
          );
          state.korogusClick = 1.22 * parseFloat(state.korogusClick);
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
    }
  },
  actions: {}
});
