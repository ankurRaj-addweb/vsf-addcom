import AwArrow from "../AwArrows/AwArrow.vue";
import AwIcon from "../AwIcon/AwIcon.vue"
export default {
  title: "Components/Atoms/Arrow",
  component: { AwArrow, AwIcon},
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "arrow-justify-content": { value: "", control: "text" },
      "arrow-icon-transform": { value: "", control: "text" },
      "button-width": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-height": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "0 0.625rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-background": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-transition": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "box-shadow-transition-opacity-duration": {
        value: "150ms",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow-opacity": {
        value: "0.25",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-border-radius": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: `Arrow component for sliders and navigation. It's Vue 2 functional component. To see css vars used in component please switch to canvas and CSS Custom Properties tab.`,
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      table: {
        category: "Attributes",
        type: {
          summary: "boolean",
        },
      },
      description:
        "Disable click event. It is passed like any other attribute in Vue functional component.",
    },
    ariaLabel: {
      control: "text",
      table: {
        category: "Attributes",
        type: {
          summary: "string",
        },
      },
      description:
        "Aria-label name. It is passed like any other attribute in Vue functional component.",
      defaultValue: "Arrow label",
    },
    click: {
      action: "Arrow clicked",
      table: {
        category: "Events",
      },
      description: "Click event. It is passed via v-on='listeners'",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace arrow icon",
    },
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "Aw-arrow--right",
          "Aw-arrow--long",
          "Aw-arrow--transparent",
          "Aw-arrow--rounded",
          "Aw-arrow--no-shadow",
          "Aw-arrow--top",
          "Aw-arrow--down",
        ],
      },
      table: {
        category: "CSS modifiers",
      },
      description: "CSS classes to modify component styling",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwArrow },
  props: Object.keys(argTypes),
  template: `<AwArrow :class="classes" :disabled="disabled" :aria-label="ariaLabel" @click="click" />`,
});

export const Common = Template.bind({});
// components: { AwArrow, AwIcon }
Common.args = { disabled: false };

export const Disabled = Template.bind({});
// components: { AwArrow, AwIcon }
Disabled.args = { disabled: true };

export const UseDefaultSlot = (args, { argTypes }) => ({
  components: { AwArrow, AwIcon },
  props: Object.keys(argTypes),
  template: `<AwArrow :class="classes" :disabled="disabled" aria-label="Arrow label">
  <AwIcon icon="arrow_right" class="aw-arrow__icon" size="14px" view-box="0 0 24 12"/>
</AwArrow>`,
});

UseDefaultSlot.args = { ...Common.args };
