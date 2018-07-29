import Vuex from "vuex";
import KoroguLucky from "@/components/KoroguLucky.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("KoroguLucky.vue", () => {
  const wrapper = shallowMount(KoroguLucky, {
    store,
    localVue,
    propsData: {
      interval: 0
    }
  });

  it("find ref KoroguLucky", () => {
    const fooRef = wrapper.find({ ref: "noixKorogu" });
    expect(fooRef.is(KoroguLucky)).toBe(true);
  });
});
