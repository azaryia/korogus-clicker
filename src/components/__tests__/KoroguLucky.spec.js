import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import KoroguLucky from "@/components/KoroguLucky.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("KoroguLucky.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      buyKoroguLucky: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(KoroguLucky, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(actions.buyKoroguLucky).toHaveBeenCalled();
  });
});
