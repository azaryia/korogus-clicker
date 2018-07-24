import Vue from "vue";
import Vuex from "vuex";

import products from '@/assets/js/products.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    korogus: 0,
    products: products
  },
  mutations: {
    'CickKorogu': function (state) {
      state.korogus++;
    },
    'BuyProduct': function (state, { productId }) {
      state.products = state.products.map(product => {
        if (product.id === productId) {
          product.purchased++;
          state.korogus -= product.price;
          product.price = 1.22 * product.price;
        }

        return product;
      })
    }
  },
  actions: {}
});
