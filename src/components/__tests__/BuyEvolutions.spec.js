import Vuex from "vuex";
import BuyEvolutions from "@/components/BuyEvolutions.vue";
import Evolution from "@/components/Evolution";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("BuyEvolutions.vue", function() {
  const wrapper = shallowMount(BuyEvolutions, { store, localVue });
  it("div class=\"buyEvolutions\" exist", function() {
    expect(wrapper.find('.buy-evolutions').exists()).toBe(true);
  });

  it("Computed Evolutions store", function() {
    expect(store.state.evolutions.length).toEqual(10);
  });

  it("Component Children => Evolution exist", () => {
    const barArray = wrapper.findAll(Evolution);
    expect(barArray.isVueInstance()).toBe(true);
  });

  it("Computed korogusSeconds store", function() {
    const korogusSeconds = parseFloat(store.state.korogusSeconds);
    expect(parseFloat(store.state.korogusSeconds)).toBe(korogusSeconds);
  });
});