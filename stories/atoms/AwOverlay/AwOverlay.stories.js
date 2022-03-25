import { AwOverlay } from './AwOverlay.vue';

export default {
  title: "Components/Atoms/Overlay", 
  component: AwOverlay,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "overlay-z-index": { value: "1", control: "text" },
      "overlay-background": {
        value: "rgba(var(--c-gray-base), 0.7)",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      inlineStories: false,
      iframeHeight: "300px",
      description: {
        component:
          "The fullscreen overlay, emitting click events. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    transition: { 
      control: {
        type: "select",
        options: [
          "aw-collapse-bottom",
          "aw-collapse-top",
          "aw-slide-left",
          "aw-slide-right",
          "aw-expand",
        ],
      },
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description:
        "Transition effect to apply when overlay visibility is changed. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Visibility state",
    },
    click: {
      action: "Overlay clicked",
      table: { category: "Events", type: { summary: null } },
      description: "Event emits when clicked on overlay.",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwOverlay },
  props: Object.keys(argTypes),
  template: `<AwOverlay :visible="visible" :transition="transition" @click="click"/>`,
});

export const Common = Template.bind({});
Common.args = {
  visible: true,
};

export const WithFadeTransition = Template.bind({});
WithFadeTransition.args = {
  ...Common.args,
  transition: "aw-fade",
};

export const Visible = Template.bind({});
Visible.args = {
  ...Common.args,
  visible: true,
};
