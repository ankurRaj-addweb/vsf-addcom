<template functional>
  <component
    :is="props.link ? injections.components.AwLink : 'button'"
    :class="[
      data.class,
      data.staticClass,
      'aw-button',
      {
        'is-disabled--button': $options.buttonActive(
          props.link,
          props.disabled
        ),
        'is-disabled--link': $options.linkActive(props.link, props.disabled),
      },
    ]"
    :style="[data.style, data.staticStyle]"
    :aria-disabled="props.disabled"
    :link="props.link"
    :type="props.type"
    v-bind="data.attrs"
    v-on="!props.disabled ? listeners : {}"
  >
    <slot />
  </component>
</template>
<script>
// import { focus } from "../../../utilities/directives";
import AwButton from "./AwButton.css";
export default {
  name: "AwButton",
  inject: {
    components: {
      default: { AwButton },
    },
  },
  directives: {
    focus,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => ["button", "submit", "reset"].includes(value),
    },
    link: {
      type: [String, Object],
      default: null,
    },
  },
  linkActive(link, disabled) {
    return link && disabled;
  },
  buttonActive(link, disabled) {
    return !link && disabled;
  },
};
</script>

