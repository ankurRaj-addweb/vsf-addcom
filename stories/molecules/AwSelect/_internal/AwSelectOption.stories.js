import  shallowMount  from "../../../../node_modules/@vue/test-utils";
import AwSelectOption from "./AwSelectOption.vue";

describe("AwSelectOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSelectOption);
    expect(component.classes("aw-select__option")).toBe(true);
  });
});
