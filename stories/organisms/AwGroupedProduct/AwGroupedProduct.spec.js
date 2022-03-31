import { shallowMount } from "@vue/test-utils";
import AwGroupedProduct from "./AwGroupedProduct.vue";
describe("AwGroupedProduct.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwGroupedProduct);
    expect(component.classes("aw-grouped-product")).toBe(true);
  });
});
