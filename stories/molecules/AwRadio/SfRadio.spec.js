// import { shallowMount } from "@vue/test-utils";
import AwRadio from "./AwRadio.vue";
describe("AwRadio.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwRadio);
    expect(component.classes("aw-radio")).toBe(true);
  });
});
