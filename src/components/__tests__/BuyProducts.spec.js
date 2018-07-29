import Vuex from "vuex";
import BuyProducts from "@/components/BuyProducts.vue";
import Product from "@/components/Product";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("BuyProducts.vue", function() {
  const wrapper = shallowMount(BuyProducts, { store, localVue });
  it("div class=\"buyProducts\" exist", function() {
    expect(wrapper.find('.buy-products').exists()).toBe(true);
  });

  it("Computed Products store", function() {
    const productsArray = parseFloat(store.state.products.length);
    expect(parseFloat(store.state.products.length)).toEqual(productsArray);
  });

  it("Component Children => Product exist", () => {
    const barArray = wrapper.findAll(Product);
    expect(barArray.isVueInstance()).toBe(true);
  });
});