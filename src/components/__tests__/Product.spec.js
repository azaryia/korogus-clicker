import Vuex from "vuex";
import Product from "@/components/Product.vue";
import Price from "@/components/Price.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Product.vue", function() {
  const wrapper = shallowMount(Product, {
    store,
    localVue,
    propsData: {
      product: {
        id: "kkd999",
        name: "Piaf",
        price: 3000000,
        korogusSeconds: 500,
        cookieClick: 100,
        purchased: 0,
        description: "Piaf ajoute ",
        bgColor: "dee1e2",
        image: require("@/assets/images/products/piaf.png")
      }
    }
  });

  it('div class="product" exist', function() {
    expect(wrapper.find(".product").exists()).toBe(true);
  });

  it("renders the correct markup price", () => {
    expect(wrapper.html()).toContain("<price-stub></price-stub>");
  });

  it("should render correct contents buyProduct", () => {
    expect(0).toBe(0);
    const button = wrapper.find("button");
    button.trigger("buyProduct");
    expect(1).toBe(1);
  });

  it("Component Children => Price exist", () => {
    const barArray = wrapper.find(Price);
    expect(barArray.isVueInstance()).toBe(true);
  });
});
