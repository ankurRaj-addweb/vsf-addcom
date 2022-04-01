<template>
  <footer class="aw-footer">
    <div
      class="aw-footer__container"
      :style="{ 'grid-template-columns': ' 1fr'.repeat(column) }"
    >
      <slot />
    </div>
  </footer>
</template>
<script>
import Vue from "vue";
import AwFooterColumn from "./_internal/AwFooterColumn.vue";
Vue.component("AwFooterColumn", AwFooterColumn);
export default {
  name: "AwFooter",
  props: {
    column: {
      type: Number,
      default: 4,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    open: {
      type: [String, Array],
      default: () => [],
    },
  },
  provide() {
    return {
      items: this.items,
    };
  },
  data() {
    return {
      isOpen: [],
      items: [],
    };
  },
  methods: {
    toggle(payload) {
      if (!this.multiple) {
        this.isOpen = [payload];
      } else if (this.isOpen.includes(payload)) {
        this.isOpen = this.isOpen.filter((item) => item !== payload);
      } else {
        this.isOpen.push(payload);
      }
      this.$emit("change", this.isOpen);
    },
  },
};
</script>

