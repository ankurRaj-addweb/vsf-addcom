import  AwBadge  from "./AwBadge.vue";
import  AwIcon  from "./AwBadge.vue";

export default {
  title: "Components/Atoms/Badge",
  component: AwBadge,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "badge-width": { value: "", control: "text" },
      "badge-min-width": { value: "", control: "text" },
      "badge-height": { value: "", control: "text" },
      "badge-min-height": { value: "", control: "text" },
      "badge-padding": { value: "", control: "text" },
      "badge-background": { value: "", control: "text" },
      "badge-border": { value: "", control: "text" },
      "badge-border-radius": { value: "", control: "text" },
      "badge-color": { value: "var(--c-white)", control: "text" },
      "badge-text-align": { value: "center", control: "text" },
      "badge-font": { value: "", control: "text" },
      "badge-font-weight": {
        value: "var(--font-weight--semibold)",
        control: "text",
      },
      "badge-font-size": { value: "var(--font-size--xs)", control: "text" },
      "badge-font-line-height": { value: "1.6", control: "text" },
      "badge-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "badge-line-height": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Badge component. Place desired content into its default slot. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "aw-badge--full-width",
          "aw-badge--number",
          "color-primary",
          "color-secondary",
          "color-warning",
          "color-danger",
          "color-info",
          "color-success",
        ],
      },
      table: {
        category: "CSS modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    label: {
      control: "text",
      description:
        "Type here to fill the badge (only for testing in Storybook). For development use default slot, described below, to change the content.",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content inside the badge",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwBadge },
  props: Object.keys(argTypes),
  template: `<AwBadge :class="classes">{{label}}</AwBadge>`,
});

export const Primary = Template.bind({});

Primary.args = { label: "Limited", classes: "color-primary" };

export const AsNumber = Template.bind({});

AsNumber.args = { label: "90", classes: "aw-badge--number" };

export const Secondary = Template.bind({});
Secondary.args = { label: "90", classes: "color-secondary" };

export const Warning = Template.bind({});
Warning.args = { label: "90", classes: "color-warning" };

export const Danger = Template.bind({});
Danger.args = { label: "90", classes: "color-danger" };

export const Info = Template.bind({});
Info.args = { label: "90", classes: "color-info" };

export const Success = Template.bind({});
Success.args = { label: "90", classes: "color-success" };

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { AwBadge, AwIcon },
  props: Object.keys(argTypes),
  template: `<AwBadge :class="classes" style="display: inline-flex; align-content: center;">
    <AwIcon icon="home" class="aw-arrow__icon" color="white" size="16px" view-box="0 0 24 12"/>
    <span>Hello</span>
  </AwBadge>`,
});
