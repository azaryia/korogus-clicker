import Vuex from "vuex";
import BoxProducts from "@/components/BoxProducts.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("BoxProducts.vue", function() {
  const wrapper = shallowMount(BoxProducts, { store, localVue });
  it("div class=\"box-products\" exist", function() {
    expect(wrapper.find('.box-products').exists()).toBe(true);
  });

  it("Computed Products store", function() {
    const productsArray = parseFloat(store.state.products.length);
    expect(parseFloat(store.state.products.length)).toEqual(productsArray);
  });
});