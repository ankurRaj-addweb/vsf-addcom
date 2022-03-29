<template>
  <div class="aw-product-option">
    <slot name="color" v-bind="{ color }">
      <div
        :class="{ 'display-none': !color }"
        class="aw-product-option__color"
        :style="{ background: color }"
      ></div>
    </slot>
    <slot name="label" v-bind="{ label }">
      <div class="aw-product-option__label">{{ label }}</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "AwProductOption",
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

