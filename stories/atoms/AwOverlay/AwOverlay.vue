<template functional>
  <transition :name="props.transition">
    <div
      v-if="props.visible"
      ref="overlay"
      :class="[data.class, data.staticClass, 'aw-overlay']"
      @click="listeners.click && listeners.click($event)"
    ></div>
  </transition>
</template>
<script>
export default {
  name: "AwOverlay",
  props: {
    transition: {
      type: String,
      default: "aw-fade",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<!-- <style lang="scss">

@import "~@storefront-ui/shared/styles/components/atoms/SfOverlay.scss";


</style> -->
