import { shallowMount } from "@vue/test-utils";
import BuyProducts from "@/components/BuyProducts.vue";

describe("BuyProducts.vue", () => {
  const wrapper = shallowMount(BuyProducts);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  it("button click should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
