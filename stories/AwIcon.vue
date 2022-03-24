<template>
  <span
    ref="icon"
    :class="['aw-icon', iconColorClass, iconSizeClass]"
    :style="iconCustomStyle"
    v-on="$listeners"
  >
    <slot v-bind="{ viewBox, iconPaths, icon }">
      <svg
        class="aw-icon-path"
        :viewBox="iconViewBox"
        preserveAspectRatio="none"
      >
        <defs :class="{ 'display-none': coverage > 1 }">
          <linearGradient
            :id="`linearGradient-${_uid}`"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop :offset="coverage" stop-color="var(--icon-color)" />
            <stop
              offset="0"
              stop-color="var(--icon-color-negative, var(--c-gray-variant))"
            />
          </linearGradient>
        </defs>
        <path
          v-for="(path, index) in iconPaths"
          :key="index"
          :d="path"
          :fill="fillPath"
          style="height: 100%"
        />
      </svg>
    </slot>
  </span>
</template>
<script>
import icons from "./icons/icons.js";
import { iconColorsValues as AW_COLORS } from "./variables/colors.js";
import { sizesValues as AW_SIZES } from "./variables/sizes.js";
const AW_ICONS = Object.keys(icons);
export default {
  name: "AwIcon",
  props: {
    icon: {
      type: [String, Array],
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    coverage: {
      type: [String, Number],
      default: 1,
    },
  },
  computed: {
    isAWColors() {
      return AW_COLORS.includes(this.color.trim());
    },
    isAWSizes() {
      const size = this.size.trim;
      return AW_SIZES.includes(size);
    },
    iconColorClass() {
      return this.isAWColors ? `color-${this.color.trim()}` : "";
    },
    iconSizeClass() {
      if (this.isAWSizes) {
        switch (this.size) {
          case "xxs":
            return "size-xxs";
          case "xs":
            return "size-xs";
          case "sm":
            return "size-sm";
          case "md":
            return "size-md";
          case "lg":
            return "size-lg";
          case "xl":
            return "size-xl";
          case "xxl":
            return "size-xxl";
          case "xl3":
            return "size-xl3";
          case "xl4":
            return "size-xl4";
          default:
            return "size-lg";
        }
      } else {
        return "";
      }
    },
    iconCustomStyle() {
      return {
        "--icon-color": !this.isAWColors ? this.color : "",
        "--icon-size": !this.isAWSizes ? this.size : "",
      };
    },
    isAWIcons() {
      if (typeof this.icon === "string") {
        return AW_ICONS.includes(this.icon.trim());
      } else return null;
    },
    iconViewBox() {
      return this.isAWIcons
        ? icons[this.icon].viewBox || this.viewBox
        : this.viewBox;
    },
    iconPaths() {
      if (this.isAWIcons) {
        return icons[this.icon].paths;
      } else {
        return Array.isArray(this.icon) ? this.icon : [this.icon];
      }
    },
    fillPath() {
      return this.coverage === 1
        ? "var(--icon-color)"
        : this.fillPathUrl(this._uid);
    },
  },
  methods: {
    fillPathUrl(uid) {
      return `url(#linearGradient-${uid})`;
    },
  },
};
</script>

