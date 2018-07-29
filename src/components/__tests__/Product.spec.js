import Vue from "vue";
import Product from "@/components/Product";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "../src/store.js";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Product.vue", () => {
  it("should render correct contents", () => {
    const wrapper = shallowMount(Product, { store, localVue });
    expect(wrapper.contains("div")).toBe(true);
    expect(wrapper.contains(".buyButton")).toBe(true);
    expect(wrapper.contains(".description")).toBe(true);
  });
});
