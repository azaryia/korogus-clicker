import Vue from "vue";
import Vuex from "vuex";

import products from '@/assets/js/products.js';

import _ from "lodash";

Vue.use(Vuex);

// Init Local storage or get Korogus
let korogusStorage = window.localStorage.getItem('korogus') || window.localStorage.setItem('korogus', 0);

// Init Local storage or get product: purchassed and price
_.each(products, function (product) {
  product.purchased = window.localStorage.getItem('purchased_' + product.name) || window.localStorage.setItem('purchased_' + product.name, product.purchased);
  product.price = window.localStorage.getItem('price' + product.name) ||  window.localStorage.setItem('price' + product.name, product.price);

});

export default new Vuex.Store({
  state: {
    korogus: korogusStorage,
    products: products
  },
  mutations: {
    CickKorogu: function (state) {
      state.korogus++;

      window.localStorage.setItem('korogus', state.korogus);
    },
    BuyProduct: function (state, { productId }) {
      state.products = state.products.map(product => {
        if (product.id === productId) {
          product.purchased++;
          state.korogus -= product.price;
          product.price = 1.22 * product.price;

          window.localStorage.setItem('korogus', state.korogus);
          window.localStorage.setItem('price' + product.name, product.price);
          window.localStorage.setItem('purchased_' + product.name, product.purchased);
        }

        return product;
      })
    },
    PopKorogu: function (state, { cookies }) {
      state.cookies += cookies
    }
  },
  actions: {}
});
