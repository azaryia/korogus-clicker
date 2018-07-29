import Vuex from "vuex";
import BoxProducts from "@/components/BoxProducts.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("BoxProducts.vue", function() {
  const wrapper = shallowMount(BoxProducts, { store, localVue });
  it("div exist", function() {
    expect(wrapper.contains("div")).toBe(true);
  });

  it("Computed Products store", function() {
    expect(store.state.products.length).toEqual(11);
  });
});