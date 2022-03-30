<template>
  <div class="aw-skeleton" :class="classFromProps">
    <slot />
  </div>
</template>
<script>
export default {
  name: "AwSkeleton",
  props: {
    type: {
      type: String,
      default: "paragraph",
      validator: (value) => ["paragraph", "image", "button", "input", "avatar"],
    },
  },
  computed: {
    classFromProps() {
      return `aw-skeleton--${this.type}`;
    },
  },
};
</script>
