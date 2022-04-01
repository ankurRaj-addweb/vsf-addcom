<template>
  <div class="aw-footer-column">
    <AwButton
      v-focus
      type="button"
      class="aw-button--pure aw-footer-column__title smartphone-only"
      @click="toggle(title)"
    >
      {{ title }}
      <span class="aw-footer-column__chevron">
        <AwChevron :class="{ 'aw-chevron--top': isColumnOpen }" />
      </span>
    </AwButton>
    <AwHeading
      class="aw-footer-column__title desktop-only"
      :title="title"
      :level="5"
    />
    <transition name="aw-fade">
      <div
        :class="{
          'aw-footer-column__content--hidden-on-mobile': !isColumnOpen,
        }"
        class="aw-footer-column__content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import AwChevron from "../../../atoms/AwChevron/AwChevron.vue";
import AwButton from "../../../atoms/AwButton/AwButton.vue";
import AwHeading from "../../../atoms/AwHeadings/AwHeading.vue";
import { focus } from "../../../utilities/directives";
export default {
  name: "AwFooterColumn",
  directives: { focus },
  components: {
    AwChevron,
    AwButton,
    AwHeading,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  inject: ["items"],
  data() {
    return {
      isColumnOpen: true,
    };
  },
  watch: {
    "$parent.isOpen": {
      handler(newVal) {
        this.isColumnOpen = newVal.includes(this.title);
      },
    },
  },
  created() {
    this.items.push(this.title);
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    },
  },
};
</script>
