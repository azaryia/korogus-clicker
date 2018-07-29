import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Price from "@/components/Price.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Price.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      buyPrice: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Price, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(actions.buyPrice).toHaveBeenCalled();
  });
});
