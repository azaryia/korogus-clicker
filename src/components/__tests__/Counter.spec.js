import Vuex from "vuex";
import Counter from "@/components/Counter.vue";
import Price from "@/components/Price.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Counter.vue", function() {
  const wrapper = shallowMount(Counter, { store, localVue });

  it("Component Children => Price exist", () => {
    const barArray = wrapper.findAll(Price);
    expect(barArray.isVueInstance()).toBe(true);
  });

  it('div class="stat" exist', () => {
    expect(wrapper.find(".stat").exists()).toBe(true);
    expect(wrapper.find(".stat").html()).toContain("<div class=\"stat\"><price-stub></price-stub> <price-stub class=\"font-small\">Korogus for second</price-stub></div>"
    );
  });

  it("renders the correct counter", () => {
    expect(wrapper.html()).toContain("<div class=\"counter\"><div class=\"stat\"><price-stub></price-stub> <price-stub class=\"font-small\">Korogus for second</price-stub></div> <img alt=\"tree-mojo\" src=\"@/assets/images/tree-mojo.png\" width=\"550\"></div>"
    );
  });

  it("should render correct contents", () => {
    console.log(wrapper.vm.count);
    expect(0).toBe(0);
    const button = wrapper.find("img");
    button.trigger("increment");
    expect(1).toBe(1);
  });
});
