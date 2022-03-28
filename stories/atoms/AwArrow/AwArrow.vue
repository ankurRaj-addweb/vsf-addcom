<template functional>
  <component
    :is="injections.components.AwButton"
    :class="[data.class, data.staticClass, 'Aw-arrow']"
    :style="[data.style, data.staticStyle]"
    type="button"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot>
      <component
        :is="injections.components.AwIcon"
        size="1.5rem"
        icon="arrow_left"
        aria-hidden="true"
        v-bind="data.attrs"
        :class="[data.class, data.staticClass, 'aw-arrow__icon']"
      />
    </slot>
  </component>
</template>
<script>
import AwButton from "./AwButton.vue";
import AwIcon from "./AwIcon.vue";
export default {
  name: "AwArrow",
  inject: {
    components: {
      default: { AwButton, AwIcon },
    },
  },
};
</script>

