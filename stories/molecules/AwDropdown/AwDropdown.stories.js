import AwDropdown from "./AwDropdown.vue";
import AwList from "../../organisms/AwList/AwList.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue"

export default {
  title: "Components/Molecules/Dropdown",
  component: AwDropdown,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "dropdown-position": { value: "fixed", control: "text" },
      "dropdown-top": { value: "", control: "text" },
      "dropdown-bottom": { value: "", control: "text" },
      "dropdown-transform": { value: "", control: "text" },
      "dropdown-container-position": { value: "", control: "text" },
      "dropdown-container-top": { value: "", control: "text" },
      "dropdown-container-bottom": { value: "", control: "text" },
      "dropdown-container-width": { value: "100%", control: "text" },
      "dropdown-background": { value: "var(--c-white)", control: "text" },
      "dropdown-box-shadow": { value: "", control: "text" },
      "dropdown-title-padding": {
        value: "var(--spacer-sm) var(--spacer-lg)",
        control: "text",
      },
      "dropdown-title-font": { value: "", control: "text" },
      "dropdown-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "dropdown-title-font-size": {
        value: "var(--font-size--sm)",
        control: "text",
      },
      "dropdown-title-font-line-height": { value: "1.2", control: "text" },
      "dropdown-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "dropdown-animation-enter": { value: "", control: "text" },
      "dropdown-animation-leave": { value: "", control: "text" },
      "button-background": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-display": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      inlineStories: false,
      iframeHeight: "25em",
      description: {
        component: "Dropdown component",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["aw-dropdown--up", ""],
      },
      table: {
        category: "CSS modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    title: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Title for dropdown content, visible on mobile.",
    },
    isOpen: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "If true dropdown is open.",
    },
    persistent: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "If true clicking outside will not dismiss the dropdown.",
    },
    actionList: {
      control: "array",
      defaultValue: [
        "Add to cart",
        "Add to compare",
        "Add to wishlist",
        "Share",
      ],
      description:
        "Actions values (for testing purposes). For development, you can use default slot to place custom action buttons.",
    },
    "click:close": {
      action: "click:close event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits click:close event when cancel button is clicked or when clicked outside component",
    },
    "click:open": {
      action: "click:open event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:open event when trigger button is clicked",
    },
    opener: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace button that opens dropdown",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content inside the dropdown",
    },
    cancel: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace cancel button",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace title",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwDropdown, AwList, AwButton },
  props: Object.keys(argTypes),
  data() {
    return {
      isDropdownOpen: this.isOpen,
    };
  },
  methods: {
    closeHandler() {
      this.isDropdownOpen = false;
      this["click:close"]();
    },
    openHandler() {
      this.isDropdownOpen = true;
      this["click:open"]();
    },
  },
  template: `
  <AwDropdown
    :class="classes" 
    :is-open="isDropdownOpen"  
    @click:open="openHandler"
    @click:close="closeHandler"
    :persistent="persistent" 
    :title="title"
  >
    <template>
      <AwList>
        <AwListItem v-for="(action, key) in actionList" :key="key">
          <AwButton class="aw-button--full-width aw-button--underlined color-primary" @click.stop="isDropdownOpen = false">{{ action }}</AwButton>
        </AwListItem>
      </AwList>
    </template> 
  </AwDropdown>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Choose size",
};

export const Persistent = Template.bind({});
Persistent.args = {
  ...Common.args,
  isOpen: true,
  persistent: true,
};

export const IsOpened = Template.bind({});
IsOpened.args = {
  ...Common.args,
  isOpen: true,
};

export const WithUpModifier = Template.bind({});
WithUpModifier.args = {
  ...Common.args,
  classes: "aw-dropdown--up",
};
