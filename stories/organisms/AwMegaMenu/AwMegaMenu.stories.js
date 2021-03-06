import AwMegaMenu from './AwMegaMenu.vue';
import AwList from '../AwList/AwList.vue'; 
import AwMenuItem from '../../molecules/AwMenuItem/AwMenuItem.vue'; 
import AwBanner from "../../molecules/AwBanner/AwBanner.vue";

const categories = [
  {
    title: "Clothing",
    subcategories: [
      { title: "Skirts" },
      { title: "Sweaters" },
      { title: "Dresses" },
      { title: "TShirts" },
      { title: "Pants" },
      { title: "Underwear" },
      { title: "Jackets" },
      { title: "Blouses" },
    ],
  },
  {
    title: "Accesories",
    subcategories: [
      { title: "Bags & Purses" },
      { title: "Belts" },
      { title: "Gloves" },
      { title: "Hats" },
    ],
  },
  {
    title: "Shoes",
    subcategories: [
      { title: "Boots" },
      { title: "Heels" },
      { title: "Flat shoes" },
      { title: "Loafers" },
      { title: "Sandals" },
      { title: "Slippers" },
      { title: "Trainers" },
    ],
    banners: [
      {
        title: "THE OFFICE LIFE",
        subtitle: "T-shirts",
        pictures: {
          mobile: "/assets/storybook/AwMegaMenu/bannerSandals.jpg",
          desktop: "/assets/storybook/AwMegaMenu/bannerSandals.jpg",
        },
      },
      {
        title: "ECO SANDALS",
        subtitle: "T-shirts",
        pictures: {
          mobile: "/assets/storybook/AwMegaMenu/bannerBeachBag.jpg",
          desktop: "/assets/storybook/AwMegaMenu/bannerBeachBag.jpg",
        },
      },
    ],
  },
];

export default {
  title: "Components/Organisms/MegaMenu",
  component: AwMegaMenu,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "mega-menu-column-header-display": { value: "", control: "text" },
      "mega-menu-column-header-padding": {
        value: "var(--spacer-sm)",
        control: "text",
      },
      "mega-menu-column-header-margin": { value: "0", control: "text" },
      "mega-menu-column-header-border": {
        value:
          "var(--mega-menu-column-header-border-style, solid) var(--mega-menu-column-header-border-color, var(--c-light))",
        control: "text",
      },
      "mega-menu-column-header-border-width": {
        value: "0 0 1px 0",
        control: "text",
      },
      "mega-menu-column-content-position": { value: "", control: "text" },
      "mega-menu-column-content-top": { value: "0", control: "text" },
      "mega-menu-column-content-display": { value: "", control: "text" },
      "mega-menu-column-content-transform": { value: "", control: "text" },
      "list-item-padding": {
        value:
          "var(--spacer-sm) var(--spacer-sm) var(--spacer-sm) var(--spacer-lg)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-border-width": {
        value: "0 0 1px 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-margin": {
        value: "var(--spacer-sm) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-text-transform": {
        value: "uppercase",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "mega-menu-height": {
        value: "auto",
        control: "text",
      },
      "mega-menu-content-transform": {
        value: "",
        control: "text",
      },
      "mega-menu-position": {
        value: "",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "MegaMenu component for page navigation. Built from main component - AwMegaMenu and internal component - AwMegaMenuColumn.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props for main component",
      },
      defaultValue: "",
      description: "Title of main category, displayed on mobile",
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: false,
      description: "Sets mega menu state to visible",
    },
    isAbsolute: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: false,
      description: "Sets css position to absolute.",
    },
    transitionName: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "aw-fade",
        },
      },
      defaultValue: "aw-fade",
      description:
        "Sets transition name. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    asideTitle: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "*Depraceted. Sets title for aside column.",
    },
    title: {
      control: "text",
      table: {
        category: "Props for AwMegaMenuColumn component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Title of the column.",
    },

    change: {
      action: "change event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits change event when active menu item is changed",
    },
    close: {
      action: "close event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits close event when back button is clicked",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwMegaMenu` component. Use this slot to pass menu columns",
    },
    aside: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwMegaMenu` component. Use this slot to place content in aside element",
    },
    "default ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwMegaMenuColumn` component. Use this slot to place column's content",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwMegaMenuColumn` component. Use this slot to replace column's title",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    AwMegaMenu,
    AwList,
    AwMenuItem,
    AwBanner,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      categories,
    };
  },
  template: `
  <AwMegaMenu 
  :visible="true" 
  title="Man"  
>
  <AwMegaMenuColumn 
    v-for="(category, key) in categories" 
    :key="key" 
    :title="category.title"
  >
    <AwList>
      <AwListItem v-for="(subcategory, key) in category.subcategories" :key="key">
        <AwMenuItem :label="subcategory.title"></AwMenuItem>
      </AwListItem>
    </AwList>
  </AwMegaMenuColumn>
  <AwMegaMenuColumn title="Featured" class="Aw-mega-menu-column--pined-content-on-mobile aw-mega-menu-column--hide-header-on-mobile" style="flex: 0 0 43.125rem;">
    <div class="smartphone-only" style="display: flex; flex-direction: column; padding: var(--spacer-base);">
      <template v-for="(category, key) in categories" >
        <AwBanner
          v-for="(banner, key) in category.banners"
          :key="key"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :image="banner.pictures"
          style="margin: 0 0 var(--spacer-sm) 0;"
        />
      </template>
    </div>
    <div class="desktop-only" style="display: flex; flex-direction: row; padding: 0;">
      <template v-for="(category, key) in categories" >
        <AwBanner
          v-for="(banner, key) in category.banners"
          :key="key"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :image="banner.pictures"
          style="margin: 0 var(--spacer-sm) 0 0;"
        />
      </template>
    </div>
  </AwMegaMenuColumn>
</AwMegaMenu>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Menu",
};

export const UseAsideSlot = (args, { argTypes }) => ({
  components: {
    AwMegaMenu,
    AwList,
    AwMenuItem,
    AwBanner,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      categories,
    };
  },
  template: `
  <AwMegaMenu 
    :visible="true" 
    :title="title"
    :isAbsolute="isAbsolute"
    :transitionName="transitionName"
    class="sb-mega-menu"
    @change="change"
    @close="close"
  >
    <AwMegaMenuColumn 
      v-for="(category, key) in categories" 
      :key="key" 
      :title="category.title"
    />
    <template #aside v-for="(category, key) in categories" >
      <div class="smartphone-only" style="display: flex; flex-direction: column; padding: var(--spacer-base);">
      <template v-for="(category, key) in categories" >
        <AwBanner
          v-for="(banner, key) in category.banners"
          :key="key"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :image="banner.pictures"
          style="margin: 0 0 var(--spacer-sm) 0;"
        />
      </template>
    </div>
    <div class="desktop-only" style="display: flex; flex-direction: row; padding: 0;">
      <template v-for="(category, key) in categories" >
        <AwBanner
          v-for="(banner, key) in category.banners"
          :key="key"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :image="banner.pictures"
          style="margin: 0 var(--spacer-sm) 0 0;"
        />
      </template>
    </div>
    </template>
  </AwMegaMenu>`,
});
UseAsideSlot.args = { ...Common.args };
