import { shallowMount } from "@vue/test-utils";
import BuyEvolutions from "@/components/BuyEvolutions.vue";

describe("BuyEvolutions.vue", () => {
  const wrapper = shallowMount(BuyEvolutions);

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
