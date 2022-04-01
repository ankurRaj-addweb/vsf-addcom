import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import AwFooter from "./AwFooter.vue";
describe("AwFooter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwFooter);
    expect(component.classes("aw-footer")).toBe(true);
  });
});
