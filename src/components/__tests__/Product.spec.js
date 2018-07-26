import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Product from "@/components/Product.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Product.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      buyProduct: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Product, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(actions.buyProduct).toHaveBeenCalled();
  });
});
