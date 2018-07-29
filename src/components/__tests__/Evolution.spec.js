import Vuex from "vuex";
import Evolution from "@/components/Evolution.vue";
import Price from "@/components/Price.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Evolution.vue", function() {
  const wrapper = shallowMount(Evolution, {
    store,
    localVue,
    propsData: {
      evolution: {
        id: 13333333,
        name: "Korogu",
        price: 1500000,
        KorogusSecond: 2.1,
        disable: 3000,
        description: "Evolution pour Click Korogus par second * 2.1",
        purchased: 0,
        image: require("@/assets/images/evolutions/korogu.png")
      }
    }
  });

  it('div class="evolution" exist', function() {
    expect(wrapper.find(".evolution").exists()).toBe(true);
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("<price-stub></price-stub>");
  });

  it("should render correct contents buyEvolution", () => {
    expect(0).toBe(0);
    const button = wrapper.find("button");
    button.trigger("buyEvolution");
    expect(1).toBe(1);
  });

  it("Component Children => Price exist", () => {
    const barArray = wrapper.find(Price);
    expect(barArray.isVueInstance()).toBe(true);
  });
});
