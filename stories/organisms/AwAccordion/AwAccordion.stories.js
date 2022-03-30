import AwAccordion from "./AwAccordion.vue";
import AwList from "../AwList/AwList.vue";
import  AwMenuItem from "../AwMegaMenu/AwMegaMenu.vue";
import  AwButton from "../../atoms/AwButton/AwButton.vue";

import AwAccordionItem from "./_internal/AwAccordionItem.vue";

const accordions = [
  {
    header: "Clothing",
    items: [
      { label: "All", count: "280" },
      { label: "Skirts", count: "11" },
      { label: "Dresses", count: "32" },
    ],
  },
  {
    header: "Accessories",
    items: [
      { label: "All", count: "80" },
      { label: "Belts", count: "101" },
      { label: "Bag", count: "2" },
    ],
  },
  {
    header: "Shoes",
    items: [
      { label: "All", count: "2" },
      { label: "Trainers", count: "22" },
      { label: "Sandals", count: "55" },
    ],
  },
];

export default {
  title: "Components/Organisms/Accordion",
  component: AwAccordionItem,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "accordion-item-header-justify": {
        value: "space-between",
        control: "text",
      },
      "accordion-item-header-padding": {
        value: "var(--spacer-sm)",
        control: "text",
      },
      "accordion-item-header-color": { value: "", control: "text" },
      "accordion-item-header-border": {
        value:
          "var(--accordion-item-header-border-style, solid) var(--accordion-item-header-border-color, var(--c-light))",
        control: "text",
      },
      "accordion-item-header-border-width": {
        value: "0 0 1px 0",
        control: "text",
      },
      "accordion-item-header-font": { value: "", control: "text" },
      "accordion-item-header-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "accordion-item-header-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "accordion-item-header-font-line-height": {
        value: "1.4",
        control: "text",
      },
      "accordion-item-header-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "accordion-item-content-padding": {
        value: "var(--spacer-base) var(--spacer-sm)",
        control: "text",
      },
      "accordion-item-content-color": {
        value: "var(--c-text)",
        control: "text",
      },
      "accordion-item-content-border": {
        value:
          "var(--accordion-item-content-border-style, solid) var(--accordion-item-content-border-color, var(--c-light))",
        control: "text",
      },
      "accordion-item-content-border-width": {
        value: "1px 0",
        control: "text",
      },
      "accordion-item-content-font": { value: "", control: "text" },
      "accordion-item-content-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "accordion-item-content-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "accordion-item-content-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "accordion-item-content-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "accordion-item-chevron-display": { value: "none", control: "text" },
      "chevron-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Accordion component. Can be set as one or multiple opened, with or without icon. Constructed from main component - AwAccordion and internal components - AwAccordionItem.",
      },
    },
  },
  argTypes: {
    open: {
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
      defaultValue: "",
      description:
        "Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Allows to open multiple accordion items if set to `true`",
    },
    transition: {
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
      defaultValue: "",
      description:
        "Overlay transition effect. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    showChevron: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: "Show chevron icon",
    },
    "click:open": {
      action: "open event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits open event with header name when header is opened.",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwAccordion` component. Use this slot to place `AwAccordionItem` elements",
    },
    "default ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwAccordionItem` component. Use this slot to place item's content",
    },
    header: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace accordion item header",
    },
    "additional-info": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot for additional information about this item",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwAccordion, AwList, AwMenuItem },
  props: Object.keys(argTypes),
  data() {
    return {
      accordions,
    };
  },
  template: `
  <AwAccordion 
    :open="open" 
    :multiple="multiple"
    :show-chevron="showChevron"
    :transition="transition"
    @click:open="this['click:open']"
  >
    <AwAccordionItem 
      v-for="accordion in accordions" 
      :key="accordion.header" 
      :header="accordion.header"      
    >
      <AwList>
        <AwListItem
          v-for="item in accordion.items"
          :key="item.label"
          >
          <AwMenuItem 
            :label="item.label" 
            :count="item.count"
          />
        </AwListItem>
      </AwList>
    </AwAccordionItem>
  </AwAccordion>`,
});

export const Common = Template.bind({});
Common.args = {};

export const OpenOne = Template.bind({});
OpenOne.args = {
  ...Common.args,
  open: "Accessories",
};

export const OpenMultiple = Template.bind({
  argTypes: {
    open: {
      control: "array",
    },
  },
});

OpenMultiple.args = {
  open: ["Clothing", "Shoes"],
};

export const AllOpen = Template.bind({});
AllOpen.args = {
  ...Common.args,
  open: "all",
};

export const HideChevron = Template.bind({});
HideChevron.args = {
  ...Common.args,
  showChevron: false,
};

export const controlWithButtons = (args, { argTypes }) => ({
  components: { AwAccordion, AwList, AwMenuItem, AwButton },
  props: Object.keys(argTypes),
  data() {
    return {
      accordions,
      activeHeader: "Shoes",
    };
  },
  methods: {
    buttonClick(headerName) {
      this.activeHeader = headerName;
    },
  },
  template: `
  <div>
    <AwButton style="display: inline; margin: var(--spacer-xs)" @click="buttonClick('Clothing')">open Clothing</AwButton>
    <AwButton style="display: inline; margin: var(--spacer-xs)" @click="buttonClick('Accessories')">open Accessories</AwButton>
    <AwButton style="display: inline; margin: var(--spacer-xs)" @click="buttonClick('Shoes')">open Shoes</AwButton>
    <AwAccordion 
      :open="activeHeader" 
      :multiple="multiple"
      :show-chevron="showChevron"
      :transition="transition"
      @click:open="this['click:open']"
    >
      <AwAccordionItem 
        v-for="accordion in accordions" 
        :key="accordion.header" 
        :header="accordion.header"        
      >
        <AwList>
          <AwListItem
            v-for="item in accordion.items"
            :key="item.label"
          >
            <AwMenuItem
              :label="item.label" 
              :count="item.count"
            />
          </AwListItem>
        </AwList>
      </AwAccordionItem>
    </AwAccordion>
  </div>`,
});

export const UseHeaderSlot = (args, { argTypes }) => ({
  components: { AwAccordion, AwList, AwMenuItem },
  props: Object.keys(argTypes),
  data() {
    return {
      accordions,
    };
  },
  template: `
  <AwAccordion 
    :open="open" 
    :multiple="multiple"
    :show-chevron="showChevron"
    :transition="transition"
    @click:open="this['click:open']"
  >
    <AwAccordionItem 
      v-for="accordion in accordions" 
      :key="accordion.header" 
      :header="accordion.header"
    >
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>
      <AwList>
        <AwListItem
          v-for="item in accordion.items"
          :key="item.label"
          >
          <AwMenuItem 
            :label="item.label" 
            :count="item.count"
          />
        </AwListItem>
      </AwList>
    </AwAccordionItem>
  </AwAccordion>`,
});
UseHeaderSlot.args = { ...Common.args };
UseHeaderSlot.parameters = {
  docs: {
    source: {
      code: `
<template>
  <AwAccordion 
    transition="sf-expand" 
    showChevron 
    @click:open="this['click:open']"
  >
    <AwAccordionItem  header="Clothing">
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>            
    </AwAccordionItem>
    <AwAccordionItem  header="Accessories">
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>            
    </AwAccordionItem>
    <AwAccordionItem  header="Shoes">
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>            
    </AwAccordionItem>
  </AwAccordion>
</template>`,
    },
  },
};
