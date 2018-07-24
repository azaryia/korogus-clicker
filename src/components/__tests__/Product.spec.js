import { shallowMount } from "@vue/test-utils";
import Product from "@/components/Product.vue";

describe("Product.vue", () => {
  const wrapper = shallowMount(Product);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="product">0</span>');
  });

  it("button click should buy product", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
