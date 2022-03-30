import { shallowMount } from "@vue/test-utils";
import AwListItem from "./AwListItem.vue";
describe("AwListItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwListItem);
    expect(component.classes("aw-list__item")).toBe(true);
  });
});
