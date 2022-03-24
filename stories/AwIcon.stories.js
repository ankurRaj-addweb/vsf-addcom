import { icons } from "./icons/icons";
import { sizesValues as sizes } from "./variables/sizes";
import { iconColorsValues as colors } from "./variables/colors.js";
//import AwIcon from "./AwIcon.vue";
//import { shallowMount } from "@vue/test-utils";
import AwIcon from "./AwIcon.vue";
//------specify.js----
// describe("AwIcon.vue", () => {
//     it("renders a component with defaults", () => {
//       const wrapper = shallowMount(SfIcon);
//       expect(wrapper.classes("aw-icon")).toBe(true);
//     });
//     it("renders path when passed", () => {
//       const path =
//         "M10 0C4.48561 0 0 4.48561 0 10C0 15.5144 4.48561 20 10 20C15.5144 20 20 15.5144 20 10C20 4.48561 15.5144 0 10 0ZM10 1.46341C14.7237 1.46341 18.5366 5.27634 18.5366 10C18.5366 14.7237 14.7237 18.5366 10 18.5366C5.27634 18.5366 1.46341 14.7237 1.46341 10C1.46341 5.27634 5.27634 1.46341 10 1.46341ZM10 2.68293C9.59605 2.68293 9.26829 3.01068 9.26829 3.41463V10C9.26829 10.2706 9.41597 10.5059 9.63415 10.6326L14.9161 13.6814C15.2658 13.8834 15.7126 13.7643 15.9146 13.4146C16.1166 13.065 15.9975 12.6181 15.6478 12.4161L10.7317 9.58078V3.41468C10.7317 3.01073 10.404 2.68298 10 2.68298V2.68293Z";
//       const wrapper = shallowMount(SfIcon, {
//         propsData: {
//           icon: path,
//         },
//       });
//       expect(wrapper.find("path").attributes("d")).toEqual(path);
//     });
//     it("renders aw-size when passed", () => {
//       const size = "sm";
//       const wrapper = shallowMount(SfIcon, {
//         propsData: {
//           size: size,
//         },
//       });
//       expect(wrapper.classes(`size-${size}`)).toBe(true);
//     });
//     it("renders aw-color when passed", () => {
//       const color = "green-primary";
//       const wrapper = shallowMount(SfIcon, {
//         propsData: {
//           color: color,
//         },
//       });
//       expect(wrapper.classes(`color-${color}`)).toBe(true);
//     });
//     it("fills path according to coverage", () => {
//       const icon = ["account"];
//       const wrapper = shallowMount(AwIcon, {
//         propsData: {
//           coverage: 0.5,
//         },
//       });
//       expect(wrapper.find("stop").attributes("offset")).toEqual("0.5");
//     });
//     it("renders viewBox default when not passed", () => {
//       const color = "green-primary";
//       const wrapper = shallowMount(SfIcon, {
//         propsData: {
//           color: color,
//         },
//       });
//       expect(wrapper.find("svg").attributes("viewBox")).toEqual("0 0 24 24");
//     });
//     it("renders viewBox when passed", () => {
//       const viewBox = "0 12 12 12";
//       const wrapper = shallowMount(AwIcon, {
//         propsData: {
//           viewBox: viewBox,
//         },
//       });
//       expect(wrapper.find("svg").attributes("viewBox")).toEqual(viewBox);
//     });
//     it("renders viewBox when passed as array", () => {
//       const icon = ["account"];
//       const wrapper = shallowMount(AwIcon, {
//         propsData: {
//           icon: icon,
//         },
//       });
//       expect(wrapper.classes("aw-icon")).toBe(true);
//     });
//     it("renders custom color when passed", () => {
//       const wrapper = shallowMount(AwIcon, {
//         propsData: {
//           color: "#ffffff",
//         },
//       });
//       expect(wrapper.classes("aw-icon")).toBe(true);
//     });
//   });
  
//------specify.js End----
const iconsNames = Object.keys(icons);

export default {
  title: "Example/Icon",
  component: [AwIcon,icons, sizes, colors],
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "icon-position": { value: "relative", control: "text" },
      "icon-width": { value: "var(--icon-size, 1.625rem)", control: "text" },
      "icon-height": { value: "var(--icon-size, 1.625rem)", control: "text" },
      "icon-color": { value: "var(--c-black)", control: "text" },
      "icon-badge-top": { value: "0", control: "text" },
      "icon-badge-right": { value: "0", control: "text" },
      "icon-size": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "The icon with color and size modifiers.",
      },
    },
  },
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      defaultValue: "",
      description:
        "Icon SVG path(s) It can be single SVG path(string) or array of SVG paths or icon name from our icons list(such as 'added_to_cart`)",
    },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
      defaultValue: "",
      description:
        "Custom size of the icon. It can be our standard sizes, or `12px` or `1.2rem` or nothing. Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.",
    },
    color: {
      control: {
        type: "select",
        options: colors,
      },
      defaultValue: "",
      description:
        "Custom color of the icon. It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`.",
    },
    viewBox: {
      control: "text",
      defaultValue: "0 0 24 24",
      description:
        "Custom viewBox size of the icon. It should be according to the standard `min-x min-y width height`. By default it will be `0 0 24 24`.If you use our icons, you don't need to pass this prop at all. Recommendations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component.",
    },
    coverage: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
      },
      table: {
        category: "Props",
        defaultValue: {
          summary: "1",
        },
      },
      defaultValue: 1,
      description:
        "The fraction in which the icon is partially collored with --icon-color value and the rest with --icon-color-negative. To be used in SfRating.",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace icon to custom element",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwIcon },
  props: Object.keys(argTypes),
  template: `
  <AwIcon
    :icon="icon"
    :size="size"
    :color="color"
    :view-box="viewBox"
    :coverage="coverage"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  icon: "home",
  size: "lg",
  color: "green-primary",
};

export const ListOfIcons = () => ({
  components: { AwIcon },
  data() {
    return {
      icons,
    };
  },
  template: `
  <div style="font-family: var(--font-family--primary);">
    <p style="font-size: var(--font-size--base);">There are {{Object.keys(icons).length}} pre-defined icons.</p>
    <ul style="display: flex; flex-wrap: wrap; list-style: none; padding-left: 0px;">
      <li v-for="(icon, name) in icons" :key="name" style="display: flex; align-items: center; padding: 0px 7.5px 20px; min-width: 120px;" >
        <AwIcon v-bind="icon" :icon="name" size="sm" />
        <span style="margin-left: 5px; font-size: 12px; color: var(--c-gray-darken)">{{name}}</span>
      </li>
    </ul>
  </div>
  `,
});
ListOfIcons.parameters = {
  controls: {
    disable: true,
  },
};

export const IconSizes = () => ({
  components: { AwIcon },
  props: ["icon", "viewBox", "color"],
  data() {
    return {
      sizes,
    };
  },
  template: `
  <div style="font-family: var(--font-family--primary);">
    <p style="font-size: 14px; font-weight: 300;">We provide the following standard sizes for customizing icon</p>
    <ul style="display: flex; flex-wrap: wrap; list-style: none; padding-left: 0px;">
      <li v-for="size in sizes" :key="size" style="margin: 0.5rem 1rem; align-self: flex-end; text-align: center;" >
        <AwIcon :icon="icon" :viewBox="viewBox" :color="color" :size="size" />
        <h5 style="margin: 1rem 0; font-size: 14px; color: var(--c-gray-darken); font-weight:400">{{size}}</h5>
      </li>
    </ul>
  </div>
  `,
});
IconSizes.args = {
  icon: "home",
  color: "green-primary",
};

IconSizes.parameters = {
  controls: {
    disable: true,
  },
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...Common.args,
  icon: "M21 8.25L13.5645 0.861954C12.4224 -0.287318 8.57214 -0.287318 7.42974 0.861954L0 8.25V10.843V19.9384C0 21.0762 0.916023 22 2.04678 22H6.5731C7.05737 22 7.45029 21.6042 7.45029 21.1165V14.6372C7.45029 14.1483 7.84321 13.7537 8.32748 13.7537H12.6667C13.1509 13.7537 13.5439 14.1483 13.5439 14.6372V21.1165C13.5439 21.6042 13.9368 22 14.4211 22H18.9532C20.084 22 21 21.0762 21 19.9384V10.8489V8.25ZM19.2455 19.9383C19.2455 20.0154 19.2147 20.0913 19.1599 20.1466C19.105 20.2018 19.0308 20.2328 18.9531 20.2328H15.2982V14.6371C15.2982 13.1726 14.1194 11.9865 12.6666 11.9865H8.3274C6.87454 11.9865 5.69582 13.1726 5.69582 14.6371V20.2328H2.04085C1.87981 20.2328 1.74846 20.1005 1.74846 19.9383V9.08177L8.67009 2.11127C9.13267 1.66491 11.8614 1.66491 12.324 2.11127L19.2456 9.08177L19.2455 19.9383Z",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { AwIcon },
  props: Object.keys(argTypes),
  template: `
  <AwIcon
    :icon="icon"
    :size="size"
    :color="color"
    :view-box="viewBox">
    <template #default="{viewBox, iconPaths, icon}">
      <img src="/assets/logo.svg" alt="Vue.js">
    </template>
  </AwIcon>`,
});
WithDefaultSlot.args = {
  ...Common.args,
};
