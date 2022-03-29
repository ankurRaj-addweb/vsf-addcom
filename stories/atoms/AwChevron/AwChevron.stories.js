import  AwChevron from "./AwChevron.vue";
import AwIcon from "../AwIcon/AwIcon.vue";

export default {
  title: "Components/Atoms/Chevron",
  component: AwChevron,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "chevron-position": { value: "relative", control: "text" },
      "chevron-size": { value: "1.25rem", control: "text" },
      "chevron-background": { value: "transparent", control: "text" },
      "chevron-color": { value: "var(--c-black)", control: "text" },
      "chevron-translateX": { value: "", control: "text" },
      "chevron-rotate": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "chevron-translateY": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "The chevron component. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "aw-chevron--top",
          "aw-chevron--left",
          "aw-chevron--right",
        ],
      },
      description: "CSS classes to modify component styling",
      table: {
        category: "CSS Modifiers",
      },
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place custom chevron markup",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwChevron },
  props: Object.keys(argTypes),
  template: `<AwChevron :class="classes" />`,
});

export const Common = Template.bind({});

export const Top = Template.bind({});
Top.args = {
  classes: "aw-chevron--top",
};

export const Right = Template.bind({});
Right.args = {
  classes: "aw-chevron--right",
};

export const Left = Template.bind({});
Left.args = {
  classes: "aw-chevron--left",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { AwChevron, AwIcon },
  props: Object.keys(argTypes),
  template: `
  <AwChevron :class="classes">
    <AwIcon icon="arrow_left" size="14px"/> 
  </AwChevron>`,
});
 

