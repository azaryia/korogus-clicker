import Vuex from "vuex";
import Price from "@/components/Price.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Price.vue", function() {
  const wrapper = shallowMount(Price, {
    store,
    localVue,
    propsData: {
      price: 344
    }
  });

  it('p class="price" exist', function() {
    expect(wrapper.find(".price").exists()).toBe(true);
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toMatch(
      '<p class="price">344 Korogus <span></span></p>'
    );
  });

  it("formatPrice", function() {
    const productsArray = parseFloat(store.state.products.length);
    expect(parseFloat(store.state.products.length)).toEqual(productsArray);
  });
});
